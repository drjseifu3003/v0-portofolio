import { NextResponse } from "next/server"
import { getSubstackPosts } from "@/lib/substack"

export const revalidate = 3600 // 1 hour cache

export async function GET() {
  try {
    const posts = await getSubstackPosts()
    return NextResponse.json({ success: true, posts })
  } catch {
    return NextResponse.json({ success: false, posts: [] }, { status: 500 })
  }
}
