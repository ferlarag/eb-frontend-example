"use client";

import {Button} from "@/components/ui/button";
import {ColumnDef} from "@tanstack/react-table";
import {ArrowUpDown, MoreHorizontal} from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Transaction = {
  id: string;
  name: string;
  amount: number;
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: ({column}) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "amount",
    header: ({column}) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
];

export const sample_data: Transaction[] = [
  {
    id: "1",
    name: "American Airlines",
    amount: 23,
  },
  {
    id: "2",
    name: "ANDADS",
    amount: 300,
  },
  {
    id: "3",
    name: "Creessk",
    amount: 102,
  },
  {
    id: "4",
    name: "Zara",
    amount: 3,
  },
];
