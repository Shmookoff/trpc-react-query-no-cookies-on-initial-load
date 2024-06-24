import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

const middleware = (request: NextRequest) => {
  if (request.nextUrl.pathname.startsWith("/api/trpc/post.getLatest")) {
    console.log({ testCookie: cookies().get("test") });
  }
  const response = NextResponse.next();
  response.cookies.set("test", "test");
  return response;
};

export default middleware;
