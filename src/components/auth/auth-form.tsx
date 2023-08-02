"use client";
import React, { useState } from "react";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const formSchema = z.object({
  email: z.string().email("Enter a valid email address").max(128),
});

function AuthForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    // signIn("email", { email: values.email, callbackUrl: "/dashboard" })
    //   .then(() => console.log("Done!"))
    //   .catch((error) => {
    //     console.log(error);
    //     setLoading(false);
    //   });
    router.push("/dashboard");
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email address</FormLabel>
                <FormControl>
                  <Input
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    placeholder="eg. keno@email.com"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Sign in or login with your email address
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
              </>
            ) : (
              "Continue"
            )}
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <Button variant="outline" className="w-full space-x-2" type="button">
            <Image
              src="/icons/google.png"
              width={20}
              height={20}
              alt="Sign in with Google"
            />{" "}
            <span>Google</span>
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default AuthForm;
