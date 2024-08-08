import QuestionCard from "@/components/cards/QuestionCard";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { IQuestion } from "@/database/question.mode";
import { getQuestionByTagId } from "@/lib/actions/tag.action";
import { URLProps } from "@/types";
import React from "react";

const Page = async ({ params, searchParams }: URLProps) => {
  const result = await getQuestionByTagId({
    tagId: params.id,
    page: 1,
    searchQuery: searchParams.q,
  });
  return (
    <>
      <h1 className="h1-bold text-dark100_light900 sm:text-2xl">
        {result.tagTitle.toUpperCase()}
      </h1>

      <div className="mt-11 w-full">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search tag questions"
          otherClasses="flex-1"
        />
      </div>

      <div className="mt-10 flex w-full flex-col gap-6">
        {result?.questions.length > 0 ? (
          result?.questions.map((quesiton: any) => (
            <QuestionCard
              key={quesiton._id}
              _id={quesiton._id}
              title={quesiton.title}
              tags={quesiton.tags}
              author={quesiton.author}
              upvotes={quesiton.upvotes}
              views={quesiton.views}
              answers={quesiton.answers}
              createdAt={quesiton.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no tag question to show"
            description="Be the first break the silence! 🚀 Ask a Question and kickstart the
            discussion. Our query could be the next big thing others learn from =.
            Get Involved! 💡"
            link="/"
            linkTitle=" Save a Question"
          />
        )}
      </div>
    </>
  );
};

export default Page;
