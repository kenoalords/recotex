import { Rocket } from "lucide-react";
import React from "react";

function VerifyAuthPage() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-slate-100">
      <div className="w-full max-w-xl space-y-6 rounded-lg bg-white p-6 md:p-12">
        <Rocket className="mx-auto animate-pulse text-green-400" size={48} />
        <p className="text-center">
          We have sent a verification link to your email address. Click on the
          link to access your account
        </p>
      </div>
    </div>
  );
}

export default VerifyAuthPage;
