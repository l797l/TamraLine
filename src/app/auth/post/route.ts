import { NextRequest, NextResponse } from "next/server";
import { redis } from "./../redis/redis";
import api from "./../axios";

export async function GET(req: NextRequest) {
  const page = Number(req.nextUrl.searchParams.get("page")) || 1;

  const cached = await redis.get(`post_${page}`);
  if (cached) {
    console.log("redis working");
    return NextResponse.json(cached);
  }

  const result = await api.post("Post/GetAllPost", {
    pageNumber: page,
    pageSize: 5,
  });

  await redis.set(`post_${page}`, result.data, { ex: 86400 });

  return NextResponse.json(result.data);
}