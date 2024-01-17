"use client";
import {Header} from "@/components/dashboard-headers";
import {useQuery} from "@tanstack/react-query";
import React from "react";
import {Transaction, columns} from "./columns";
import axiosBackend from "@/utils/axios";
import {DataTable} from "./data-table";

const Page = () => {
  const {isLoading, data, error} = useQuery<Transaction[]>({
    queryKey: ["members"],
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
        title="Members"
        buttonTitle="Add member"
        description="Let other people see the transactions and balance in your bank accounts"
        action={() => {
          console.log("Hey");
        }}
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
