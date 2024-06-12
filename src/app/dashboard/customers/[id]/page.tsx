/* eslint-disable react/no-unescaped-entities */
"use client";

import DataTable from "@/components/data-table";
import { fetchCustomerById, fetchTransactionById } from "@/lib/fetchData";
import Link from "next/link";
import React, { useEffect } from "react";
import { transactionsTableColumns } from "../../transactions/transactions-table-columns";
import { TransactionsEntity } from "@/lib/transaction-entity";
import { CustomersEntity } from "@/lib/customer-entity";

export default function Page({ params }: { params: { id: string } }) {
  const [customer, setCustomer] = React.useState<CustomersEntity | null>(null);
  const [transactions, setTransactions] = React.useState<
    TransactionsEntity[] | null
  >(null);

  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    async function getCustomerData() {
      try {
        let data = await fetchCustomerById(params.id);

        if (data) {
          // format customer date
          data.create_at = new Date(data.create_at);
          // format transactions date
          data.transactions = data.transactions.map((e) => ({
            ...e,
            created_at: new Date(e.created_at),
          }));
          //take customer
          setCustomer(data);

          // Define total transactions
          setTransactions(data.transactions);
          console.log("customer:" + data);
          console.log("transactions:" + data.transactions);
        }
      } catch (err) {
        setError("Failed to load transactions");
      }
    }

    getCustomerData();
  }, []);

  if (!customer) {
    return (
      <div className="w-full h-full flex justify-center items-center">
       Customer not found
      </div>
    );
  }
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6 mt-4">
          <h1 className="text-xl font-bold mb-4">Customer Details</h1>
          <div className="mb-4">
            <strong>ID:</strong> {customer.id}
          </div>
          <div className="mb-4">
            <strong>Username:</strong> {customer.username}
          </div>
          <div className="mb-4">
            <strong>Customer Created At:</strong> {customer.create_at.getDate()}
            /{customer.create_at.getMonth()}/{customer.create_at.getFullYear()}
          </div>
        </div>
      </div>
      <div className="px-4">
        <h1 className="text-xl font-bold mb-4">Customer's transactions</h1>
        {transactions ? (
          <DataTable
            columns={transactionsTableColumns}
            data={transactions}
            inputPlaceholder={"Deposit, Transfer or Withdraw"}
            searchKey={"type"}
          />
        ) : (
          <div className="w-full flex justify-center">
            Customers transactions not found
          </div>
        )}
      </div>
    </>
  );
}
