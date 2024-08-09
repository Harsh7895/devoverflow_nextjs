import QuestionCard from "@/components/cards/QuestionCard";
import FilterComponent from "@/components/shared/FilterComponent";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { QuestionFilters } from "@/contants/Filters";
import { getSavedQuestions } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";
import { auth } from "@clerk/nextjs/server";

export default async function Page({ searchParams }: SearchParamsProps) {
  const { userId } = auth();
  if (!userId) return null;
  const result = await getSavedQuestions({
    clerkId: userId,
    searchQuery: searchParams.q,
  });

  return (
    <>
      <h1 className="h1-bold text-dark100_light900 sm:text-2xl">
        Saved Questions
      </h1>

      <div className="mt-11 flex justify-between gap-4 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <FilterComponent
          filters={QuestionFilters}
          otherClasses="mih-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
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
            title="There's no saved question to show"
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
}
