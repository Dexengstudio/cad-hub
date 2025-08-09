export default function SectionLine() {
  return (
    <div className="absolute left-0 top-0 -z-1 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-[--border] dark:border-[--dark-border]">
      {/* Decorations */}
      <div className="flex items-center justify-center h-full col-span-1" />
      <div className="col-span-1 flex h-full items-center justify-center border-x border-[--border] dark:border-[--dark-border]" />
      <div className="flex items-center justify-center h-full col-span-1" />
    </div>
  );
}
