export default function Badge({ children }: React.PropsWithChildren) {
  return (
    <span className={`h-6 inline-flex items-center rounded bg-green-100 px-2 py-0 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20`}>
      {children}
    </span>
  )
}
