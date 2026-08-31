import type { SVGProps } from "react";

export default function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 22 23"
      width="22"
      height="23"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.839.54L21.96 2.66 13.12 11.5l8.84 8.839-2.121 2.121-8.84-8.84-8.838 8.84L.04 20.34l8.838-8.84L.04 2.662 2.16.54 11 9.378 19.839.54z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}
