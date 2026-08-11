"use client";

import { useEffect, useState } from "react";

import { postApi, PostFilter } from "./../auth/post/postApi";

import PostFilters from "./components/PostFilters";
import PostsList from "./components/PostsList";
import Pagination from "./components/Pagination";

import { Post } from "./postTypes";

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 5;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [filters, setFilters] = useState({
    area: 0,
    universityId: 0,
    governorateId: 0,
    shift: 0,
  });

  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        setError("");

        let response: Post[];

        if (isFiltered) {
          response = await PostFilter(
            currentPage,
            pageSize,
            filters.area,
            filters.universityId,
            filters.governorateId,
            filters.shift
          );
        }

        else {
          response = await postApi(currentPage);
        }

        setPosts(response ?? []);
      } catch (error) {
        console.error("Error fetching posts:", error);

        setError("حدث خطأ أثناء تحميل الرحلات");
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, [currentPage, filters, isFiltered]);

 

  const handleSearch = (
    area: number,
    universityId: number,
    governorateId: number,
    shift: number
  ) => {
    setFilters({
      area,
      universityId,
      governorateId,
      shift,
    });

    setIsFiltered(true);

    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };



  const handleRetry = () => {
    setError("");

    setCurrentPage((page) => page);
  };



  return (
    <div className="mx-auto max-w-6xl my-10 px-2">

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-[#432E1A]">
          الرحلات المتوفرة
        </h1>

        <p className="mt-2 text-[#432E1A]/70">
          ابحث عن الرحلة المناسبة لك
        </p>
      </div>


      <PostFilters
        onSearch={handleSearch}
      />


      {error ? (
        <div className="rounded-2xl bg-[#432E1A] p-8 text-center text-[#EFE1D1]">

          <p>{error}</p>

          <button
            type="button"
            onClick={handleRetry}
            className="mx-auto mt-4 block rounded-xl bg-[#EFE1D1] px-5 py-2 font-bold text-[#432E1A]"
          >
            إعادة المحاولة
          </button>

        </div>
      ) : (
        <>
          <PostsList
            posts={posts}
            loading={loading}
          />

          {!loading && posts.length > 0 && (
            <Pagination
              currentPage={currentPage}
              hasNextPage={posts.length === pageSize}
              onPageChange={handlePageChange}
            />
          )}
        </>
      )}

    </div>
  );
}
