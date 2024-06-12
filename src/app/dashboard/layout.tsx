import { Suspense } from "react";
import Header from "./components/header";

import Loading from "./loading";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <Suspense fallback={<Loading/>}>
      <main className="container">{children}</main>
    
      </Suspense>
    </div>
  );
};

export default DashboardLayout;
