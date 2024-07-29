import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilteres from "@/components/home/HomeFilteres";
import FilterComponent from "@/components/shared/FilterComponent";
import NoResult from "@/components/shared/NoResult";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/contants/Filters";
import Link from "next/link";

const questions = [
  {
    _id: "1",
    title: "Cascading Deletes in SQLAlchemy?",
    tags: [
      { _id: "1", name: "python" },
      { _id: "2", name: "sql" },
    ],
    author: {
      _id: "1",
      name: "john Doe",
      picture: "https://example.com/johndoe.jpg",
    },
    upvotes: 10,
    views: 10000,
    answers: [{ answerId: "a1", content: "You can use the `cascade` option." }],
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to center a div",
    tags: [
      { _id: "3", name: "css" },
      { _id: "4", name: "html" },
    ],
    author: {
      _id: "2",
      name: "jane Smith",
      picture: "https://example.com/janesmith.jpg",
    },
    upvotes: 25,
    views: 200,
    answers: [
      { answerId: "b1", content: "Use `margin: auto` with a defined width." },
    ],
    createdAt: new Date("2022-01-15T08:30:00.000Z"),
  },
  {
    _id: "3",
    title: "What is TypeScript?",
    tags: [
      { _id: "5", name: "typescript" },
      { _id: "6", name: "javascript" },
    ],
    author: {
      _id: "3",
      name: "alice Johnson",
      picture: "https://example.com/alicejohnson.jpg",
    },
    upvotes: 35,
    views: 300,
    answers: [
      {
        answerId: "c1",
        content: "TypeScript is a superset of JavaScript with static typing.",
      },
    ],
    createdAt: new Date("2023-03-12T14:45:00.000Z"),
  },
];

export default function Home() {
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
        {questions.length > 0 ? (
          questions.map((quesiton) => (
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
