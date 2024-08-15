"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();
  console.log(pathName); // Remove this in production

  return (
    <Link
      href={link.url}
      className={`rounded p-1 text-sm ${
        pathName === link.url
          ? "bg-blue-900 text-white"
          : "bg-transparent text-blue-900"
      }`}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
