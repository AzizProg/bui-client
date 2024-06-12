/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useRouter } from "next/navigation";
import CustomerDetails from "./[id]/page";
import { CustomersEntity } from "@/lib/customer-entity";

export const customersTableColumns: ColumnDef<CustomersEntity>[] = [
  {
    accessorKey: "id",
    header: "N°",
  },

  {
    accessorKey: "username",
    header: "Username",
  },

  {
    accessorKey: "create_at",
    header: "Created At",
    cell: ({ row }) => {
      const date = new Date(row.getValue("create_at"));
      return date.toLocaleDateString();
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
        const route= useRouter();
      const customer = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-50" align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(customer.id.toString())
              }
            >
              Copy customer ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={()=>route.push(`/dashboard/customers/${customer.id}`)}>View customer details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
