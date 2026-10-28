export default function LogoName({ className = "" }: { className: string }) {


  return (
    <span 
        className={`font-serif font-semibold uppercase tracking-widest ${className}`}
    >
      LIBRAR<span className="text-accent">IUM</span>
    </span>
  );
}
