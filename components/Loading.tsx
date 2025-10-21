"use client";

import { Spinner } from "@heroui/react";

import { cn } from "@/lib/utils";

const Loading = ({
  id,
  as: Tag = "section",
  className,
}: {
  id?: string;
  as?: React.ElementType;
  className?: string;
}) => {
  return (
    <Tag
      id={id}
      className={cn(
        "flex justify-center items-center min-h-screen p-20",
        className
      )}
    >
      <Spinner />
    </Tag>
  );
};

export default Loading;
