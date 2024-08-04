import { authMiddleware } from "@clerk/nextjs/server";
// import { NextResponse } from "next/server";

export default authMiddleware({
  publicRoutes: ["/", "/api/webhook"],
  ignoredRoutes: ["/api/webhook", "/api/chatgpt"],
});

export const config = {
  matcher: [
    // Match all routes except for Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
