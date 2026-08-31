import type { Metadata } from "next";

import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "About",
  shareTitle: "About PayAPI",
  description:
    "We empower innovators by delivering access to the financial system. Meet the team building the infrastructure behind modern payments.",
  path: "/about",
});

export default function AboutPage() {
  return <h1>About</h1>;
}
