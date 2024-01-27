import Link from "next/link";

export default function StyledLink({ children, className, ...rest }: React.ComponentProps<typeof Link>) {
  return <Link className={`text-blue-600 visited:text-blue-800 hover:underline ${className}`} {...rest}>{children}</Link>
}
