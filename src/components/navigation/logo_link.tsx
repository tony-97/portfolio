import Link from "next/link";

export default function LogoLink() {
  return (
    <Link
      href="/"
      className="text-sm font-semibold tracking-tight text-foreground hover:opacity-70"
    >
      tony &#123; &#125;
    </Link>
  );
}
