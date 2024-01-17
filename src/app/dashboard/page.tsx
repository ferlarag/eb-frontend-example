"use client";

import {Header} from "@/components/dashboard-headers";
import axiosBackend from "@/utils/axios";
import {useQuery} from "@tanstack/react-query";
import {Loader2} from "lucide-react";
import React from "react";
import {Transaction, columns} from "./columns";
import {DataTable} from "./data-table";

const Page = () => {
  const {isLoading, data, error} = useQuery<Transaction[]>({
    queryKey: ["transactions"],
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
        title="Recent Transactions"
        buttonTitle="Add account"
        description="Your most recent transactions"
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
