"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const FormSchema = z.object({
    fullName: z.string().min(5, {
    message: "Name must be least 2 characters long.",
  }),
  email: z.string()
    .min(5, {message: "Email must be at least 5 characters long.",})
    .includes("@", {message: "Enter a valid email address.",
  }),
  countryCode: z.string()
    .min(1, { message: "Country code is required." })
    .regex(/^\+\d{1,4}$/, { message: "Invalid country code format (e.g., +1, +44)." }),

number: z.string()
    .length(10, { message: "Phone number must be exactly 10 digits." })
    .regex(/^\d{10}$/, { message: "Phone number must contain only digits." }), 
})

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      countryCode: "+27",
      number: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const fullPhoneNumber = `${data.countryCode}${data.number}`;
    toast("You submitted the following values", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-neutral-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your full name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john.doe@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Combined Phone Number Input Group */}
        <FormItem>
          <FormLabel>Phone Number</FormLabel>
          <div className="flex space-x-2"> {/* Use flexbox to align inputs */}
            <FormField
              control={form.control}
              name="countryCode"
              render={({ field }) => (
                <FormItem className="w-1/4"> {/* Adjust width as needed */}
                  <FormControl>
                    <Input placeholder="+1" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="number"
              render={({ field }) => (
                <FormItem className="flex-1"> {/* Takes remaining width */}
                  <FormControl>
                    <Input placeholder="e.g., 1234567890" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            </div>
            <FormDescription>
            Please enter your country code and 10-digit phone number.
          </FormDescription>
        </FormItem>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
