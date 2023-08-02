import ProfileForm from "@/components/forms/onboarding/profile";
import Dashboard from "@/components/layouts/Dashboard";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CompanyForm from "@/components/forms/company";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, Bike, Briefcase, Headphones } from "lucide-react";

function DashboardIndexPage() {
  return (
    <Dashboard title="Onboarding" description="Welcome to our onboarding page">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="">
            <span className="text-muted-foreground">Good morning,</span>
            <h2 className="font-bold md:text-2xl">Kunle Abbas</h2>
          </div>
          <div>
            <Button>
              <Link href={"/dashboard/onboarding"}>Edit Profile</Link>
            </Button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-4">
          <Card className="space-y-3 p-6 pb-10 text-center">
            <Award size={48} strokeWidth={1} className="mx-auto" />
            <h4 className="font-bold">Licences</h4>
            <Button>Manage</Button>
          </Card>
          <Card className="space-y-3 p-6 pb-10 text-center">
            <Bike size={48} strokeWidth={1} className="mx-auto" />
            <h4 className="font-bold">Assets</h4>
            <Button>Manage</Button>
          </Card>
          <Card className="space-y-3 p-6 pb-10 text-center">
            <Briefcase size={48} strokeWidth={1} className="mx-auto" />
            <h4 className="font-bold">Resources</h4>
            <Button>Manage</Button>
          </Card>
          <Card className="space-y-3 p-6 pb-10 text-center">
            <Headphones size={48} strokeWidth={1} className="mx-auto" />
            <h4 className="font-bold">Customer Support</h4>
            <Button>Manage</Button>
          </Card>
        </div>
      </div>
    </Dashboard>
  );
}

export default DashboardIndexPage;
