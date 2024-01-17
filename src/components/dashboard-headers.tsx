"use client";
import {cn} from "@/lib/utils";
import {ReactNode} from "react";
import {Button} from "./ui/button";

interface TitleProps {
  className?: string;
  title: string;
  description?: string;
  action?: () => void;
  buttonTitle?: string;
}

export const Header = ({
  className,
  title,
  description,
  buttonTitle,
  action,
}: TitleProps) => {
  return (
    <div className={cn(className)}>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-medium">{title}</h1>
        {buttonTitle && <Button onClick={action}>{buttonTitle}</Button>}
      </div>
      {description && <p className="text-zinc-500">{description}</p>}
    </div>
  );
};
