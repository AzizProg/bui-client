"use client";

import * as React from "react";

import DataTable from "@/components/data-table";
import { transactionsTableColumns } from "./transactions-table-columns";
import { fetchTransactions } from "@/lib/fetchData";
import { TransactionsEntity } from "@/lib/transaction-entity";

export default function DataTableDemo() {
  //transactions useStates
  const [transactions, setTransactions] = React.useState<
    TransactionsEntity[] | null
  >(null);

  const [error, setError] = React.useState<string | null>(null);
  React.useEffect(() => {
    async function getTransactions() {
      try {
        let data = await fetchTransactions();
        if (data) {
          data = data.map((e) => ({
            ...e,
            created_at: new Date(e.created_at),
          }));
        }
        setTransactions(data);
      } catch (err) {
        setError("Failed to load transactions");
      }
    }
    getTransactions();
  }, []);
  return (
    <div className="w-full">
      <DataTable
        columns={transactionsTableColumns}
        data={transactions ? transactions : []}
        inputPlaceholder={"Deposit, Transfer or Withdraw"}
        searchKey={"type"}

      />
    </div>
  );
}
