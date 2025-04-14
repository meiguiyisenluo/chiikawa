import { NextResponse, NextRequest } from "next/server";
import { get } from "@vercel/edge-config";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  return NextResponse.json(await get(slug));
}
