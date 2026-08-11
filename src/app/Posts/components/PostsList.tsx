"use client";

import CardPost from "./CardPost";
import { Post } from "../postTypes";

type PostsListProps = {
  posts: Post[];
  loading: boolean;
};

export default function PostsList({
  posts,
  loading,
}: PostsListProps) {

  if (loading) {
    return (
      <div className="rounded-2xl bg-[#432E1A] p-8 text-center text-[#EFE1D1]">
        جاري تحميل الرحلات...
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="rounded-2xl bg-[#432E1A] p-8 text-center text-[#EFE1D1]">
        لا توجد رحلات متوفرة حاليًا
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {posts.map((post) => (
        <CardPost
          key={post.phoneNumber}
          post={post}
        />
      ))}
    </div>
  );
}