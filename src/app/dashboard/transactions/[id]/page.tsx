'use client';

import DataTable from '@/components/data-table';
import { fetchTransactionById } from '@/lib/fetchData';
import { TransactionsEntity } from '@/lib/transaction-entity';

import Link from 'next/link';
import React from 'react';

export default function Page({ params }: { params: { id: string } }) {
  const [transaction, setTransaction] =
    React.useState<TransactionsEntity | null>(null);

  const [error, setError] = React.useState<string | null>(null);
  React.useEffect(() => {
    async function getTransactionById() {
      try {
        let data = await fetchTransactionById(params.id);
        if (data) {
          data.created_at = new Date(data.created_at);
          data.customer.create_at = new Date(data.customer.create_at);
        }
        console.log(data);
        setTransaction(data);
      } catch (err) {
        setError('Failed to load transactions');
      }
    }
    getTransactionById();
  }, []);

  if (!transaction) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        Transaction not found
      </div>
    );
  }
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 mt-4">
        <h1 className="text-2xl font-bold mb-4">Transaction Details</h1>
        <div className="mb-4">
          <strong>ID:</strong> {transaction.id}
        </div>
        <div className="mb-4">
          <strong>Amount:</strong> {transaction.amount} FCFA
        </div>
        <div className="mb-4">
          <strong>Description:</strong> {transaction.description}
        </div>
        <div className="mb-4">
          <strong>Type:</strong> {transaction.type}
        </div>
        <div className="mb-4">
          <strong>Transaction Created At:</strong>{' '}
          {transaction.created_at.getDate()}/{transaction.created_at.getMonth()}
          /{transaction.created_at.getFullYear()}
        </div>

        <h2 className="text-xl font-bold mb-4">Customer Details</h2>
        <div className="mb-4">
          <strong>ID:</strong> {transaction.customer.id}
        </div>
        <div className="mb-4">
          <strong>Username:</strong> {transaction.customer.username}
        </div>
        <div className="mb-4">
          <strong>Customer Created At:</strong>{' '}
          {transaction.customer.create_at.getDate()}/
          {transaction.customer.create_at.getMonth()}/
          {transaction.customer.create_at.getFullYear()}
        </div>
      </div>
    </div>
  );
}
