import Link from "next/link";

type Props = {
  label: string;
  href: string;
};

export default function HoverLink({ label, href }: Props) {
  return (
    <Link href={href}>
      {/* link container */}
      <div className="group h-[40px] p-2 overflow-hidden">
        {/* labels container */}
        <div className="flex flex-col items-center justify-center group-hover:-translate-y-10 transition duration-700 text-xl">
          <span>{label}</span>
          <span>{label}</span>
        </div>
      </div>
    </Link>
  );
}
