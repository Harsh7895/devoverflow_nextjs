import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex justify-center items-center h-[80vh] w-full flex-col">
      <Link href={"/sign-in"} className="text-blue-700 underline">
        Log In
      </Link>
      or
      <Link href={"/sign-up"} className="text-blue-700 underline">
        Sign Up
      </Link>
    </div>
  );
};

export default Page;
