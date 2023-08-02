import { useSession } from "next-auth/react";
import Head from "next/head";
import React from "react";
import AppNavbar from "../parts/app/app-navbar";

function Dashboard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: JSX.Element;
}) {
  // const { data: user } = useSession({ required: true });
  return (
    <div className="min-h-screen bg-green-50">
      <Head>
        <title>{title || "Nipost App"}</title>
        <meta content={description || ""} name="description" />
      </Head>

      <AppNavbar />
      <div className="px-4 py-16">{children}</div>
    </div>
  );
}

export default Dashboard;
