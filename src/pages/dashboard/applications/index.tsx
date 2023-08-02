import Dashboard from "@/components/layouts/Dashboard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, CheckCheck, CircleDot, Pen, Trash, X } from "lucide-react";
import React from "react";

function ApplicationIndexPage() {
  return (
    <Dashboard title="Applications" description="">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold md:text-2xl">Your applications</h1>
          <Button>Start new application</Button>
        </div>
        <div className="space-y-2">
          <Card className="mt-6 flex items-center justify-between p-4">
            <p className="flex items-center space-x-2 text-sm font-semibold">
              <Award size={16} /> <span>National Licence Renewal</span>
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2  text-green-800">
                <CheckCheck size={12} strokeWidth={4} /> <span>Approved</span>
              </div>
              <div className="flex items-center space-x-1">
                <Pen size={12} strokeWidth={4} /> <span>Edit</span>
              </div>
            </div>
          </Card>
          <Card className="mt-6 flex items-center justify-between p-4">
            <p className="flex items-center space-x-2 text-sm font-semibold">
              <Award size={16} /> <span>State Licence Renewal</span>
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2  text-red-500">
                <CircleDot
                  size={12}
                  strokeWidth={4}
                  className="animate-pulse"
                />{" "}
                <span>Pending</span>
              </div>
              <div className="flex items-center space-x-1">
                <Pen size={12} strokeWidth={4} /> <span>Edit</span>
              </div>
            </div>
          </Card>
          <Card className="mt-6 flex items-center justify-between p-4">
            <p className="flex items-center space-x-2 text-sm font-semibold">
              <Award size={16} /> <span>Intl Licence Renewal</span>
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2  text-red-800">
                <X size={12} strokeWidth={4} /> <span>Failed</span>
              </div>
              <div className="flex items-center space-x-1">
                <Trash size={12} strokeWidth={4} /> <span>Delete</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Dashboard>
  );
}

export default ApplicationIndexPage;
