import Image from "next/image";
import React from "react";
import { Input } from "../../ui/input";

interface Props {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses: string;
}

export default function LocalSearchBar({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses,
}: Props) {
  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      {iconPosition === "left" && (
        <Image
          src={imgSrc}
          alt="search icons"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}

      <Input
        type="text"
        placeholder={placeholder}
        className="paragraph-regular no-foucs placeholder background-light800_darkgradient border-none shadow-none outline-none"
      />

      {iconPosition === "right" && (
        <Image
          src={imgSrc}
          alt="search icons"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
}
