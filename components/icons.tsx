import Image from "next/image";

export function Invsjd({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/invsjd.svg"
      alt="Inversiones San Juan Diego"
      width={size}
      height={size}
    />
  );
}

export function MoxieHealthGroup({ size = 32 }: { size?: number }) {
  return (
    <svg
      aria-label="The Moxie Health Group"
      fill="none"
      height={size}
      role="img"
      viewBox="0 0 120 120"
      width={size}
    >
      <path
        d="M35.8 39.5c7.3 4.8 13.5 11.1 18.5 18.9-5.8 5.6-13 8.1-21.4 7.4-8.2-.7-17-5.3-26.3-13.7 4.9-7.6 10.9-13.4 17.9-17.3 4-2.2 7.8-.7 11.3 4.7Z"
        fill="currentColor"
      />
      <path
        d="M35.8 80.5c7.3-4.8 13.5-11.1 18.5-18.9-5.8-5.6-13-8.1-21.4-7.4-8.2.7-17 5.3-26.3 13.7 4.9 7.6 10.9 13.4 17.9 17.3 4 2.2 7.8.7 11.3-4.7Z"
        fill="currentColor"
      />
      <path
        d="M84.2 39.5c-7.3 4.8-13.5 11.1-18.5 18.9 5.8 5.6 13 8.1 21.4 7.4 8.2-.7 17-5.3 26.3-13.7-4.9-7.6-10.9-13.4-17.9-17.3-4-2.2-7.8-.7-11.3 4.7Z"
        fill="currentColor"
      />
      <path
        d="M84.2 80.5c-7.3-4.8-13.5-11.1-18.5-18.9 5.8-5.6 13-8.1 21.4-7.4 8.2.7 17 5.3 26.3 13.7-4.9 7.6-10.9 13.4-17.9 17.3-4 2.2-7.8.7-11.3-4.7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ArrowRight() {
  return (
    <svg
      data-testid="geist-icon"
      height="16"
      strokeLinejoin="round"
      style={{ color: "currentColor" }}
      viewBox="0 0 16 16"
      width="16"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.53033 2.21968L9 1.68935L7.93934 2.75001L8.46967 3.28034L12.4393 7.25001H1.75H1V8.75001H1.75H12.4393L8.46967 12.7197L7.93934 13.25L9 14.3107L9.53033 13.7803L14.6036 8.70711C14.9941 8.31659 14.9941 7.68342 14.6036 7.2929L9.53033 2.21968Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
