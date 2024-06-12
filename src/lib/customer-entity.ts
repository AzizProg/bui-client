import { TransactionsEntity } from "./transaction-entity";


export interface CustomersEntity {
    id: number;
    username: string;
    password: string;
    
    create_at: Date;
    transactions:TransactionsEntity[] ,
  }