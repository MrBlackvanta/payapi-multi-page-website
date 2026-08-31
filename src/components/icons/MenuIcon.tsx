import type { SVGProps } from "react";

export default function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 28 17"
      width="28"
      height="17"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="currentColor" fillRule="evenodd">
        <path d="M0 0h28v3H0zM0 7h28v3H0zM0 14h28v3H0z" />
      </g>
    </svg>
  );
}
