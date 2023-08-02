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

function OnboardingPage() {
  return (
    <Dashboard title="Onboarding" description="Welcome to our onboarding page">
      <div className="mx-auto max-w-4xl space-y-4">
        <h2 className="font-bold md:text-2xl">Complete your profile</h2>
        <Card className="pt-6">
          <CardContent>
            <ProfileForm />
          </CardContent>
        </Card>

        <Card className="pt-6">
          <CardContent>
            <CompanyForm />
          </CardContent>
        </Card>
      </div>
    </Dashboard>
  );
}

export default OnboardingPage;
