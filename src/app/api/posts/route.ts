// app/api/posts/route.ts

import { NextResponse } from "next/server";
import { redis } from "./../../auth/redis/redis";
import api from "./../../auth/axios";

export async function POST(req: Request) {
  const { page } = await req.json();

  const key = `post_${page}`;

  const cached = await redis.get(key);

  if (cached) {
    console.log("Redis working");
    return NextResponse.json(cached);
  }

  const result = await api.post("Post/GetAllPost", {
    pageNumber: page,
    pageSize: 5,
  });

  await redis.set(key, result.data, {
    ex: 3600,
  });

  return NextResponse.json(result.data);
}