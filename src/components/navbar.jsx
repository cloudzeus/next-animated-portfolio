"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/portfolio", title: "Portfolio" },
  { url: "/contact", title: "Contact" },
];
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255",
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opend: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center  pt-2 justify-between px-4 sm:px-8 md:px-12 lg:px-16 xl:px-48 ">
      {/* LINKS REGULAR MENU NO HUMBURGER */}
      <div className="hidden md:visible md:flex md:gap-4 md:items-center w-1/3">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex w-1/3 justify-center">
        <Link
          href="/"
          className="text-sm rounded-md font-semibold flex items-center md:justify-center p-2"
        >
          <Image src="/megaParkingLogo.svg" alt="logo" width={70} height={70} />
        </Link>
      </div>
      {/* SOCIAL MEDIA ICONS */}
      <div className="hidden md:flex md:items-center md:justify-end md:gap-2 w-1/3">
        <Link
          href="https://www.facebook.com/profile.php?id=100089004700650"
          target="_blank"
        >
          <Image src="/facebook.png" alt="facebook" width={20} height={20} />
        </Link>
        <Link
          href="https://www.google.com/search?sa=X&sca_esv=edde3339ea425524&sca_upv=1&rlz=1C5CHFA_enGR1108GR1108&biw=1735&bih=1654&tbm=lcl&sxsrf=ADLYWILFjVBD6NEpHxZpJTcjhajKl_7-Iw:1723690308271&q=Parking%20%CE%9B%CE%B9%CE%BC%CE%AC%CE%BD%CE%B9%20%CE%A0%CE%B5%CE%B9%CF%81%CE%B1%CE%B9%CE%AC%20-%20Mega%20Parking%20%7C%20%CE%9C%CE%AD%CE%BB%CE%BF%CF%82%20%CE%B4%CE%B9%CE%BA%CF%84%CF%8D%CE%BF%CF%85%20ParkAround%20%CE%91%CE%BE%CE%B9%CE%BF%CE%BB%CE%BF%CE%B3%CE%AE%CF%83%CE%B5%CE%B9%CF%82&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2MTCxMDewNDc0NDEysjAxMzIy28DI-IqxKCCxKDszL13h3OxzO8_tObfm3N5zOxXOLTi39dzO843nNgIF1yjoKvimpicqwJTWKJybc27tud3n9p9vUji3Bahk1_mW871AbitYjWNRfmleisK5ief2AeX2gxSe23xu3flmsKFNi1gHwFIAlhn2uAQBAAA&rldimm=4048709711422846226&hl=el-GR&ved=0CAYQ5foLahcKEwiImPTk_vWHAxUAAAAAHQAAAAAQBQ#lkt=LocalPoiReviews&arid=ChdDSUhNMG9nS0VJQ0FnSURqMFBDNnJnRRAB"
          target="_blank"
        >
          <Image
            src="/logo-google (1).svg"
            alt="facebook"
            width={20}
            height={20}
          />
        </Link>
        <Link href="tel:+302104134508" target="_blank">
          <Image src="/whatsapp.png" alt="facebook" width={20} height={20} />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden justify-center place-items-center z-50">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative "
          onClick={() => setOpen(!open)}
        >
          <motion.div
            className="w-10 h-1 bg-blue-900 rounded origin-left"
            variants={topVariants}
            animate={open ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            className="w-10 h-1 bg-blue-900 rounded"
            variants={centerVariants}
            animate={open ? "opened" : "closed"}
          ></motion.div>
          <motion.div
            className="w-10 h-1 bg-blue-900 rounded origin-left"
            variants={bottomVariants}
            animate={open ? "opened" : "closed"}
          ></motion.div>
        </button>
        {/* MENU ITEMS LIST  */}
        {open && (
          <motion.div
            className="
                absolute
                flex
                flex-col
                justify-center
                items-center
                text-5xl
                font-light
                gap-8
                top-0
                right-0
                bg-blue-900
                text-white
                w-screen
                h-screen"
            variants={listVariants}
            initial="closed"
            animate={open ? "opened" : "closed"}
          >
            {links.map((link) => (
              <motion.div key={link.title} variants={listItemVariants}>
                <Link
                  href={link.url}
                  className="rounded-md flex items-center justify-center"
                  onClick={() => setOpen(!open)}
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
