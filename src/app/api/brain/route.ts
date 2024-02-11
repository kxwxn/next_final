import { NextResponse, type NextRequest } from "next/server";
import { connectDB } from "@/db/connectDB";

export async function GET(request: NextRequest) {
  //   const searchParams = request.nextUrl.searchParams;
  //   const query = searchParams.get("query");
  //   // query is "hello" for /api/search?query=hello
  try {
    await connectDB;
    return NextResponse.json({ message: "connected!" });
  } catch (err) {
    return NextResponse.json(err, { status: 500 });
  }
}
