"use client";

import axiosBackend from "@/utils/axios";
import {useQuery} from "@tanstack/react-query";
import {Loader2} from "lucide-react";
import React from "react";

type Response = {
  message: string;
};

const Page = () => {
  const {isLoading, data, error} = useQuery<Response>({
    queryKey: ["getHello"],
    queryFn: async () => {
      const response = await axiosBackend.get<Response>("/", {
        responseType: "json",
      });

      return response.data;
    },
  });

  if (error) return <div>An error ocurred</div>;

  if (isLoading)
    return (
      <div className="flex gap-2">
        <p>Loading</p>
        <Loader2 className="animate-spin" />
      </div>
    );

  return <div>{JSON.stringify(data)}</div>;
};

export default Page;
