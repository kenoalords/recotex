import Dashboard from "@/components/layouts/Dashboard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Award,
  Bike,
  Bus,
  Car,
  CheckCheck,
  CircleDot,
  Pen,
  PlaneTakeoff,
  Trash,
  X,
} from "lucide-react";
import React from "react";

function ApplicationIndexPage() {
  return (
    <Dashboard title="Applications" description="">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold md:text-2xl">Your assets</h1>
          <Button>Add Asset</Button>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <Card className=" flex items-center justify-between p-4">
            <Bike size={32} strokeWidth={2} />
            <div className="text-right">
              <h4 className="text-2xl font-bold">4</h4>
              <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                Bikes
              </span>
            </div>
          </Card>
          <Card className=" flex items-center justify-between p-4">
            <Car size={32} strokeWidth={2} />
            <div className="text-right">
              <h4 className="text-2xl font-bold">2</h4>
              <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                Cars
              </span>
            </div>
          </Card>
          <Card className=" flex items-center justify-between p-4">
            <Bus size={32} strokeWidth={2} />
            <div className="text-right">
              <h4 className="text-2xl font-bold">13</h4>
              <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                Buses
              </span>
            </div>
          </Card>
          <Card className=" flex items-center justify-between p-4">
            <PlaneTakeoff size={32} strokeWidth={2} />
            <div className="text-right">
              <h4 className="text-2xl font-bold">1</h4>
              <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                Airplanes
              </span>
            </div>
          </Card>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tighter">
            Recent Assets
          </h3>
          <Card className="mt-6 flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <Bike size={28} />
              <div className="leading-tight">
                <p className="text-sm font-semibold">
                  <span>Usman Danladi</span>
                </p>
                <span className="text-sm text-muted-foreground">
                  Ikeja, Lagos
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Pen size={12} strokeWidth={4} /> <span>Edit</span>
              </div>
            </div>
          </Card>
          <Card className="mt-6 flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <Bus size={28} />
              <div className="leading-tight">
                <p className="text-sm font-semibold">
                  <span>Adebayo Pele</span>
                </p>
                <span className="text-sm text-muted-foreground">Ore, Ondo</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Pen size={12} strokeWidth={4} /> <span>Edit</span>
              </div>
            </div>
          </Card>
          <Card className="mt-6 flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <Bike size={28} />
              <div className="leading-tight">
                <p className="text-sm font-semibold">
                  <span>Udeme Okon</span>
                </p>
                <span className="text-sm text-muted-foreground">
                  Calabar, Cross River
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Pen size={12} strokeWidth={4} /> <span>Edit</span>
              </div>
            </div>
          </Card>
          <Card className="mt-6 flex items-center justify-between p-4">
            <div className="flex items-center space-x-3">
              <PlaneTakeoff size={28} />
              <div className="leading-tight">
                <p className="text-sm font-semibold">
                  <span>Cpt. Philips Okon</span>
                </p>
                <span className="text-sm text-muted-foreground">
                  Calabar, Cross River
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Pen size={12} strokeWidth={4} /> <span>Edit</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Dashboard>
  );
}

export default ApplicationIndexPage;
