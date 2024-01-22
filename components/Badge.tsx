export default function Badge({ children }: React.PropsWithChildren) {
  return (
    <span className={`inline-flex items-center rounded bg-green-100 px-2 py-0 text-xs my-1 font-medium text-green-700 ring-1 ring-inset ring-green-600/20`}>
      {children}
    </span>
  )
}
