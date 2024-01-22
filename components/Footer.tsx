import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Link className="text-xs" href="/">{"> Go home"}</Link>
    </footer>
  )
}