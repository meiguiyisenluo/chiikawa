import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

// Initialize Redis
const redis = Redis.fromEnv();

export const GET = async () => {
  // Fetch data from Redis
  const result = await redis.get("stars");

  // Return the result in the response
  return new NextResponse(JSON.stringify({ result }), { status: 200 });
};

export const POST = async () => {
  try {
    // 获取当前的点赞数
    const currentLikes: number = (await redis.get("stars")) || 0;
    console.log("Updated likes:", currentLikes);

    // 增加点赞数
    const updatedLikes = currentLikes + 1;
    await redis.set("stars", updatedLikes);

    return new NextResponse(`Likes updated to ${updatedLikes}`, {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating likes:", error);
    return new NextResponse("Failed to update likes", { status: 500 });
  }
};
