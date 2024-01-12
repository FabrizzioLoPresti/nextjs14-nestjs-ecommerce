'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Navbar as NavbarNextUI,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react';

type Props = {};

const Navbar = (props: Props) => {
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 640) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= window.innerHeight / 1.4) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  const menuItems = [
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ];

  return (
    <>
      <AnimatePresence>
        {isMobile ? (
          <NavbarFixed
            {...{ isMenuOpen, setIsMenuOpen, isMobile, menuItems }}
          />
        ) : isScrolling ? (
          <NavbarScroll {...{ isScrolling, menuItems }} />
        ) : (
          <NavbarFixed {...{ isMenuOpen, setIsMenuOpen, menuItems }} />
        )}
      </AnimatePresence>
    </>
  );
};

function NavbarFixed({
  isMenuOpen,
  setIsMenuOpen,
  isMobile,
  menuItems,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  isMobile?: boolean;
  menuItems: string[];
}) {
  return (
    <NavbarNextUI
      isBlurred={isMobile ? true : false}
      onMenuOpenChange={setIsMenuOpen}
      className={`fixed top-0 z-50 !screens [&>header]:!px-0 ${
        isMobile
          ? 'rounded-full px-4 top-5 backdrop-blur-md bg-zinc-700/60'
          : 'bg-transparent backdrop-blur-none'
      }`}
      maxWidth="full"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href={'/'} className="font-bold text-inherit">
            Smart House
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            href="#"
            className="text-sm hover:text-gray-700 transition-colors ease-in-out"
          >
            Products
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className="text-sm hover:text-gray-700 transition-colors ease-in-out"
          >
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className="text-sm hover:text-gray-700 transition-colors ease-in-out"
          >
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link href="#" className="button">
            Login
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="overflow-y-hidden inset-0 navbar-height z-[100]">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden h-auto self-end py-6"
        />
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              className="w-full"
              href="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NavbarNextUI>
  );
}

function NavbarScroll({
  isScrolling,
  menuItems,
}: {
  isScrolling: boolean;
  menuItems: string[];
}) {
  return (
    <motion.header
      key={1}
      initial="initial"
      animate={isScrolling ? 'animate' : 'initial'}
      exit="exit"
      variants={NavAnimations}
      className="fixed z-50 left-1/2 top-10 backdrop-blur-md bg-zinc-700/60 rounded-full px-3 py-2"
    >
      <nav className="flex items-center">
        <Link
          href={'/'}
          className="px-2 text-white text-sm hover:text-gray-700 transition-colors ease-in-out"
        >
          Products
        </Link>
        <Link
          href={'/'}
          className="px-2 text-white text-sm hover:text-gray-700 transition-colors ease-in-out"
        >
          Customers
        </Link>
        <Link
          href={'/'}
          className="px-2 text-white text-sm hover:text-gray-700 transition-colors ease-in-out"
        >
          Integrations
        </Link>
        <Link
          href={'/'}
          className="px-4 py-2 ml-2 text-white bg-zinc-800 rounded-full text-sm border border-zinc-700 hover:bg-zinc-600 hover:border-zinc-500 transition-all ease-in-out"
        >
          Login
        </Link>
      </nav>
    </motion.header>
  );
}

const NavAnimations = {
  initial: {
    y: -50,
    x: '-50%',
    opacity: 0,
  },
  animate: {
    y: 0,
    x: '-50%',
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 10,
      stiffness: 100,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
  },
};

export default Navbar;
