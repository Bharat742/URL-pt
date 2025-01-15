import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import Dashboard from "@/components/UserInteraction";
export const metadata: Metadata = {
  title: "Next.js Profile Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Profile page for NextAdmin Dashboard Kit",
};

const Properties = () => {
  return (
    <DefaultLayout>
        <div className="mx-auto w-full max-w-[970px]">
          <Breadcrumb pageName="Properties" />
              <Dashboard/>
          
        </div>
    </DefaultLayout>
  );
};

export default Properties;