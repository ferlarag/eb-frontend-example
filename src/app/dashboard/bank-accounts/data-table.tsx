"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {cn} from "@/lib/utils";
import {Button} from "@/components/ui/button";
import {Loader2, ServerCrash} from "lucide-react";
import {useState} from "react";

interface DataTableProps<TData, TValue> {
  className?: string;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  isLoading: boolean;
  error: Error | null;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  className,
  isLoading,
  error,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <div className={cn("rounded-md border", className)}>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {error ? (
            <TableRow>
              <TableCell colSpan={columns.length}>
                <div className="flex h-[100px] gap-4 items-center justify-center">
                  <ServerCrash
                    strokeWidth={1.5}
                    className="h-8 w-8 text-primary"
                  />
                  <div>
                    <h2 className="text-zinc-500 font-semibold">
                      Something went wrong
                    </h2>
                    <p className="text-zinc-500">Please try again later</p>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          ) : isLoading ? (
            <TableRow>
              <TableCell colSpan={columns.length}>
                <div className="flex h-[100px] flex-col items-center justify-center gap-2">
                  <Loader2 className="text-indigo-500 animate-spin h-8 w-8" />
                </div>
              </TableCell>
            </TableRow>
          ) : table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length}>
                <div className="flex h-[100px] flex-col items-center justify-center gap-2">
                  <p className="text-zinc-500">No bank accounts found.</p>
                  <div className="flex gap-2">
                    <Button size={"sm"}>Add account</Button>
                    <Button size={"sm"} variant={"outline"}>
                      Learn more
                    </Button>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
