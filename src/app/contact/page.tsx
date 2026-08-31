import type { Metadata } from "next";

import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  shareTitle: "Contact PayAPI",
  description:
    "Submit a help request and we will get in touch shortly. Join the thousands of innovators already building with PayAPI.",
  path: "/contact",
});

export default function ContactPage() {
  return <h1>Contact</h1>;
}
