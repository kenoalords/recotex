import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import states from "../../../nigeria-states.json";
import { Button } from "../ui/button";

const formSchema = z.object({
  name: z.string().max(48, "Maximum of 48 Characters"),
  address: z.string().max(265, "Maximum of 256 Characters"),
  state: z.string().max(48, "Maximum of 48 Characters"),
  phoneNumber: z.string().max(20, "Maximum of 20 characters"),
  isRegistered: z.boolean().default(false),
});

type FormType = z.infer<typeof formSchema>;

function CompanyForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      address: "",
      state: "",
      phoneNumber: "",
      isRegistered: false,
    },
  });

  const handleFormSubmit = (values: FormType) => {
    console.log(values);
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmit)}
          className="space-y-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company name</FormLabel>
                <FormControl>
                  <Input
                    autoCapitalize="none"
                    autoComplete="name"
                    autoCorrect="off"
                    placeholder="XYZ Company"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company address</FormLabel>
                <FormControl>
                  <Textarea
                    autoCapitalize="none"
                    autoComplete="address"
                    autoCorrect="off"
                    placeholder="15 Admiralty Way, Lekki Phase 1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {states &&
                      states.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Save Details</Button>
        </form>
      </Form>
    </div>
  );
}

export default CompanyForm;
