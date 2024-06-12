"use server";

import { CustomersEntity } from "./customer-entity";
import { getSession } from "./session";
import { TransactionsEntity } from "./transaction-entity";


//fetch wallet transactions
export async function fetchTransactions(): Promise<
  TransactionsEntity[] | null
> {
  try {
    const token = await getSession();
    const response = await fetch(
      `${process.env.API_BASE_URL}/collaborators/transactions`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch transactions");
    }
    const transactions: TransactionsEntity[] = await response.json();
    console.log(transactions.forEach((e)=> e.amount))
    return transactions;
  } catch (error) {
    console.error(error);
    return null;
  }
}


export async function fetchTransactionById(transaction_id:string): Promise<	
  TransactionsEntity | null	
> {	
  try {	
    const token = await getSession();	
    const response = await fetch(	
      `${process.env.API_BASE_URL}/collaborators/transactions/${transaction_id}`,	
      {	
        method: "GET",	
        headers: {	
          Authorization: `Bearer ${token}`,	
        },	
      }	
    );	

    if (!response.ok) {	
      throw new Error("Failed to fetch transactions");	
    }	
    const transaction: TransactionsEntity = await response.json();	
    console.log(transaction);	
    return transaction;	
  } catch (error) {	
    console.error(error);	
    return null;	
  }	
}


//customers data
export async function fetchCustomers(): Promise<
  CustomersEntity[] | null
> {
  try {
    const token = await getSession();
    const response = await fetch(
      `${process.env.API_BASE_URL}/collaborators/customers`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch transactions");
    }
    const customers: CustomersEntity[] = await response.json();
    console.log(customers);
    return customers;
  } catch (error) {
    console.error(error);
    return null;
  }
}
//fetchCustomerById
export async function fetchCustomerById(customer_id:string): Promise<
  CustomersEntity  | null
> {
  try {
    const token = await getSession();
    const response = await fetch(
      `${process.env.API_BASE_URL}/collaborators/customers/${customer_id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch transactions");
    }
    const customer: CustomersEntity = await response.json();
    console.log(customer);
    return customer;
  } catch (error) {
    console.error(error);
    return null;
  }
}





