import Pagination from "@/app/ui/invoices/pagination";
import Search from "@/app/ui/search";
import Table from "@/app/ui/customers/table";
import { lusitana } from "@/app/ui/fonts";
import { InvoicesTableSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";
import { Metadata } from "next";
import { fetchFilteredCustomers } from "@/app/lib/data";

export const metadata: Metadata = {
  title: "Customers",
};

export default async function Page() {
  //const query = searchParams?.query || "";
  //const currentPage = Number(searchParams?.page) || 1;
  //const totalPages = await fetchCustomersPages(query);
  const customers = await fetchFilteredCustomers("");

  return (
    <Suspense fallback={<InvoicesTableSkeleton />}>
      <Table customers={customers} />
    </Suspense>
  );
}
