"use client";
import {Header} from "@/components/dashboard-headers";
import axiosBackend from "@/utils/axios";
import React from "react";
import {Transaction, columns} from "./columns";
import {useQuery} from "@tanstack/react-query";
import {DataTable} from "./data-table";

const Page = () => {
  const {isLoading, data, error} = useQuery<Transaction[]>({
    queryKey: ["subscriptions"],
    queryFn: async () => {
      const response = await axiosBackend.get<Transaction[]>("/", {
        responseType: "json",
      });

      return response.data;
    },
  });
  return (
    <div>
      <Header
        title="Your subscriptions"
        description="All your subscriptions and recurring payments."
      />

      <DataTable
        columns={columns}
        data={data ? data : []}
        isLoading={isLoading}
        className="bg-white"
        error={error}
      />
    </div>
  );
};

export default Page;
