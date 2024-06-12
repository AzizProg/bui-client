"use client"

import DataTable from "@/components/data-table";
import { customersTableColumns } from "./customers-table-coluns";
import React from "react";
import { useRouter } from "next/router";
import { CustomersEntity } from "@/lib/customer-entity";
import { fetchCustomers } from "@/lib/fetchData";

const CustomersPage = () => {

  
  //customers useStates
  const [customers, setCustomers] = React.useState<CustomersEntity[] | null>(
    null
  );

  const [error, setError] = React.useState<string | null>(null);
  React.useEffect(() => {
    async function getCustomers() {
      try {
        let data = await fetchCustomers();
        if (data) {
          data = data.map((e) => ({
            ...e,
            created_at: new Date(e.create_at),
          }));
        }
        setCustomers(data);
      } catch (err) {
        setError("Failed to load customers");
      }
    }
    getCustomers();
  }, []);
  return (
    <DataTable
      columns={customersTableColumns}
      data={customers ? customers : []}
      inputPlaceholder={"username"}
      searchKey={"username"}
    />
  );
};

export default CustomersPage;
