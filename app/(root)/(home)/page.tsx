import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilteres from "@/components/home/HomeFilteres";
import FilterComponent from "@/components/shared/FilterComponent";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/contants/Filters";
import { getQuestions } from "@/lib/actions/question.action";
import { SearchParamsProps } from "@/types";
import Link from "next/link";

export default async function Home({ searchParams }: SearchParamsProps) {
  const result = await getQuestions({
    searchQuery: searchParams.q,
  });

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900 sm:text-2xl">
          Ask Questions
        </h1>
        <Link href={"/ask-question"} className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-4 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <FilterComponent
          filters={HomePageFilters}
          otherClasses="mih-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>
      <HomeFilteres />

      <div className="mt-10 flex w-full flex-col gap-6">
        {result.questions.length > 0 ? (
          result.questions.map((quesiton) => (
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
            title="There's no question to show"
            description="Be the first break the silence! 🚀 Ask a Question and kickstart the
        discussion. Our query could be the next big thing others learn from =.
        Get Involved! 💡"
            link="/"
            linkTitle=" Ask a Question"
          />
        )}
      </div>
    </>
  );
}
