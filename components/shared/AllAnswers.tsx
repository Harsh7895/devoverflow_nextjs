import { getAnswers } from "@/lib/actions/answer.action";
import React from "react";
import FilterComponent from "./FilterComponent";
import { AnswerFilters } from "@/contants/Filters";
import Link from "next/link";
import Image from "next/image";
import { getTimeStamp } from "@/lib/utils";
import ParsedHTML from "./ParsedHTML";
import Votes from "./Votes";

interface Props {
  questionId: string;
  userId: string;
  totalAnswers: number;
  page?: number;
  filter?: number;
}

async function AllAnswers({ questionId, userId, totalAnswers }: Props) {
  const answers = await getAnswers({ questionId });
  return (
    <div className="mt-11">
      <div className="flex items-center justify-between">
        <h3>{totalAnswers} Answers</h3>
        <FilterComponent filters={AnswerFilters} />
      </div>

      <div>
        {answers.map((answer) => (
          <article key={answer._id} className="light-border border-b py-10">
            <div className="flex items-center justify-between">
              <div className="mb-8 flex flex-row-reverse justify-between gap-5 sm:flex-row sm:items-center sm:gap-2">
                <Link
                  href={`/profile/${answer.author.clerkId}`}
                  className="flex flex-1 items-start gap-1 sm:items-center"
                >
                  <Image
                    src={answer.author.picture}
                    width={18}
                    height={18}
                    alt="profile"
                    className="rounded-full object-cover max-sm:mt-0.5"
                  />
                  <div className="flex flex-col sm:flex-row sm:items-center">
                    <p className="body-semibold text-dark400_light700">
                      {answer.author.name}
                    </p>

                    <p className="small-regular text-light400_light500 mt-0.5 line-clamp-1">
                      <span className="max-sm:hidden">
                        <span className="ml-2">
                          - answered {getTimeStamp(answer.createdAt)}{" "}
                        </span>
                      </span>
                    </p>
                  </div>
                </Link>

                <div className="flex justify-end">
                  <Votes
                    type="Answer"
                    itemId={JSON.stringify(answer._id)}
                    userId={JSON.stringify(userId)}
                    upvotes={answer.upvotes.length}
                    downvotes={answer.downvotes.length}
                    hasupVoted={answer.upvotes.includes(userId)}
                    hasdownVoted={answer.downvotes.includes(userId)}
                  />
                </div>
              </div>
            </div>
            <ParsedHTML data={answer.content} />
          </article>
        ))}
      </div>
    </div>
  );
}

export default AllAnswers;
