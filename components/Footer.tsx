import StyledLink from "./StyledLink";

export default function Footer() {
  return (
    <footer>
      <StyledLink className="text-xs" href="/">{"> Go home"}</StyledLink>
    </footer>
  )
}