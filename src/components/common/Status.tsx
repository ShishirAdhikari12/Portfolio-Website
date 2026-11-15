interface StatusProps {
  status: "Completed" | "In Progress" | "Live";
}

const statusStyles = {
  Completed:
    "border border-emerald-500/20 bg-emerald-500/10 text-emerald-400",

  "In Progress":
    "border border-amber-500/20 bg-amber-500/10 text-amber-400",

  Live:
    "border border-sky-500/20 bg-sky-500/10 text-sky-400",

} as const;

export default function Status({ status }: StatusProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${statusStyles[status]}`}
    >
      {status === "Live" && (
        <span className="size-2 rounded-full bg-green-400 mr-2" />
      )}
      {status}
    </span>
  );
}