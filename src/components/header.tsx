import React from "react";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="container sticky top-0 z-50 mx-auto flex min-h-14 items-center justify-between bg-background/50 px-4 py-4 backdrop-blur-md sm:px-2">
      <Link href="/">
        <h1 className="flex items-center gap-2 font-geist-mono text-xl font-bold">
          <Image src={Logo} alt="logo" width={32} height={32} />
          Feed Craft
        </h1>
      </Link>
      <div className="flex gap-4">
        <SignedOut>
          <SignInButton>
            <Button>Sign In</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
