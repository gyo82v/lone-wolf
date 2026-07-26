type Props = {
  className?: string
}

export function SmallDivider({ className= "" }:Props) {
  return (
    <div className={`my-4 px-4 ${className}`}>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-stone-500 to-transparent opacity-80" />
    </div>
  );
}