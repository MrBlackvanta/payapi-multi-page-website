import type { ContactField } from "./types";

export const contactFields: ContactField[] = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    autoComplete: "email",
  },
  {
    name: "company",
    label: "Company Name",
    type: "text",
    autoComplete: "organization",
  },
  {
    name: "title",
    label: "Title",
    type: "text",
    autoComplete: "organization-title",
  },
];
