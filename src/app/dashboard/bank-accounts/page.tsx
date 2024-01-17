"use client";

import {Header} from "@/components/dashboard-headers";
import {DataTable} from "./data-table";
import React from "react";
import {Transaction, columns, sample_data} from "./columns";
import {useQuery} from "@tanstack/react-query";
import axiosBackend from "@/utils/axios";

const Page = () => {
  const {isLoading, data, error} = useQuery<Transaction[]>({
    queryKey: ["accounts"],
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
        title="Bank Accounts"
        buttonTitle="Add account"
        description="Your bank accounts"
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
