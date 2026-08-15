"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

import { getProfile } from "../../auth/post/postApi";
import { GetProfileDto } from "../../auth/post/postDto";

import Loading from "./components/Loading";

import ProfileHeader from "./components/ProfileHeader";
import NoPost from "./components/NoPost";
import CarSection from "./components/CarSection";
import DescriptionSection from "./components/DescriptionSection";
import InformationSection from "./components/InformationSection";
import AreasSection from "./components/AreasSection";
import WhatAppSection from "./components/WhatAppSection";
import ArchivesStatus from "./components/ArchivesStatus";
          import { TriangleAlert } from "lucide-react";


export default function ProfilePage() {
  const params = useParams();
  const id = params.id as string;

  const [post, setPost] = useState<GetProfileDto | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isUserId, setIsUserId] = useState(false);


  useEffect(() => {
    const loadProfile = async () => {
      const userId = localStorage.getItem("userId")
      setIsUserId(id == userId) 
      try {
        setLoading(true);
        setError("");

        const data = await getProfile(id);

        setPost(data);
      } catch (error) {
        console.error("Get profile error:", error);
        setError("فشل في تحميل بيانات المستخدم");
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error || !post) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#EFE1D1] p-6">
        <div className="w-full max-w-md rounded-3xl bg-[#432E1A] p-8 text-center text-[#EFE1D1] shadow-xl">


<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#5B3F22]">
<TriangleAlert className="h-10 w-10 text-yellow-400" />
</div>

          <h2 className="mt-5 text-2xl font-bold">
            {error || "لم يتم العثور على البيانات"}
          </h2>

          <button
            onClick={() => window.location.reload()}
            className="mt-6 rounded-xl bg-[#EFE1D1] px-6 py-3 font-bold text-[#432E1A] transition hover:bg-white"
          >
            إعادة المحاولة
          </button>

        </div>
      </main>
    );
  }

 
  const hasPost =
    post.nameCar != null ||
    post.urlImagePost != null ||
    post.desciption != null ||
    post.university != null ||
    post.governorate != null;

  return (
    <main className="min-h-screen bg-[#EFE1D1] p-4 sm:p-8">

      <div className="mx-auto max-w-5xl">

        <ProfileHeader
          post={post}
          userId={id}
          isUser={isUserId}
        />
        {post.phoneNumber && !isUserId && post.role == 2&&(
         <WhatAppSection 
         phoneNumber={post.phoneNumber}
         />
        )}
        {isUserId &&post.role ==2&& hasPost&&(
         <ArchivesStatus 
         status={post.status}
         />
        )}


        {!hasPost && post.role==2 && (
          <NoPost userId={id}  />
        )}

        {hasPost && post.role==2 && (
          <div>

            <CarSection
              post={post}
              userId={id}
              isUser={isUserId}

            />

            <DescriptionSection
              post={post}
              userId={id}
              isUser={isUserId}

            />

            <InformationSection
              post={post}
              userId={id}
              isUser={isUserId}

            />

            <AreasSection
              post={post}
              userId={id}
              isUser={isUserId}

            />

          </div>
        )}

      </div>

    </main>
  );
}