import { auth } from "@/auth";
import JobForm from "@/components/JobForm";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await auth();
  if (!session) redirect("/");
  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Post a Job Opportunity </h1>
      </section>

      <JobForm />
    </>
  );
};

export default page;
