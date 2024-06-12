import { CustomersEntity } from "./customer-entity";

export enum TransactionType {
    DEPOSIT = "DEPOSIT",
    WITHDRAW = "WITHDRAW",
    TRANSFER = "TRANSFER",
  }
  export type TransactionsEntity = {
    id: number;
    amount: number;
    description: string;
    type: TransactionType;
    customer: CustomersEntity;
    created_at: Date;
  };