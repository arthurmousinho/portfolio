'use client'

import { SectionWrapper } from "@/components/section-wrapper";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

const formSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, { message: "Name is required" })
        .max(50, { message: "Name must be less than 50 characters" })
        .regex(/^[a-zA-Z\s]*$/, { message: "Name must be letters only" }),
    email: z
        .string()
        .trim()
        .min(1, { message: "Email is required" })
        .email({ message: "Invalid email address" })
        .max(50, { message: "Email must be less than 50 characters" }),
    message: z
        .string()
        .trim()
        .min(1, { message: "Message is required" })
        .max(100, { message: "Message must be less than 100 characters" })
        .regex(/^[a-zA-Z0-9\s]*$/, { message: "Message must be letters and numbers only" }),
})

type ContactFormData = z.infer<typeof formSchema>

export function Contact() {

    const form = useForm<ContactFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    function onSubmit(values: ContactFormData) {
        console.log(values)
    }

    return (
        <SectionWrapper title="Contact" id="contact-section">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="sr-only">Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="sr-only">Email</FormLabel>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Enter your e-mail"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="sr-only">Message</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Enter your message"
                                        {...field}
                                        className="h-[100px]"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <footer className="flex items-center justify-end">
                        <AnimatedSubscribeButton type="submit">
                            <span className="group inline-flex items-center">
                                Send Message
                                <ChevronRightIcon className="ml-2 size-4 transition-transform duration-300 group-hover:translate-x-1" />
                            </span>
                            <span className="group inline-flex items-center">
                                <CheckIcon className="mr-2 size-4" />
                                Sent!
                            </span>
                        </AnimatedSubscribeButton>
                    </footer>
                </form>
            </Form>
        </SectionWrapper>
    )
}