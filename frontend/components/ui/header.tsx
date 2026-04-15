"use client";

import logo from "@/public/favicon.jpg";
import Image from "next/image";
import Link from "next/link";
import { ListIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "./button";
import { Sheet, SheetContent, SheetFooter, SheetTitle } from "./sheet";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./dialog";
import { Input } from "./input";
import { Label } from "./label";
import { Checkbox } from "./checkbox";
import { Spinner } from "./spinner";
import { LockKeyIcon, LockKeyOpenIcon } from "@phosphor-icons/react";
import { deriveKeypair } from "@/lib/deriveKeypair";

export function Header() {
  const [menuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [termsAccepted, setIsTermsAccepted] = useState<boolean>(false);
  const [Issubmiting, setIsSubmiting] = useState<boolean>(false);
  const [Togglepassword, setTogglePassword] = useState<boolean>(false);
  const [SignUpOpen, setIsSignUpOpen] = useState<boolean>(false);
  const [Email, setEmail] = useState<string>("");
  const [Username, setUsername] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [SignUpError, setSignUpError] = useState<string>("");

  async function CreateAccount() {}

  return (
    <div className="flex items-center justify-center mt-9">
      <header className="rounded-lg w-10/12 bg-[#f5f1ed] h-13 p-4 flex flex-row items-center border border-[#37322f]-90 shadow-xs fixed z-50 backdrop-blur-xl opacity-98">
        <nav className="flex flex-row  flex-wrap justify-between mx-auto container items-center">
          <div
            className="flex items-center flex-row space-x-3 cursor-pointer"
            onClick={() => (window.location.href = "/")}
          >
            <Image src={logo} className="h-8 w-8 rounded-lg" alt="logo" />
            <p className="font-semibold text-[#37322f]">Notedrop.</p>
          </div>
          <div className="items-center space-x-4 font-light text-[#37322f] text-sm ">
            <div className="hidden md:block space-x-4">
              {["Features", "Docs", "Privacy"].map((item) => (
                <Link
                  key={item}
                  href={
                    item.toLowerCase() === "privacy"
                      ? "/legal/privacy"
                      : `/${item.toLowerCase()}`
                  }
                  className="relative inline-block group"
                >
                  {item}
                  <span className="absolute bottom-[-2px] left-0 h-[1.5px] w-0 bg-[#37322f] transition-all duration-300 ease-in-out group-hover:w-full" />
                </Link>
              ))}
              <Button
                onClick={() => setIsSignUpOpen(true)}
                className="h-7 px-4 bg-[#37322f] hover:bg-[#37322f]/90 text-white rounded-full font-medium text-sm shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset]"
              >
                Sign Up
              </Button>
            </div>
            <div className="sm:block md:hidden">
              <Button
                variant={"ghost"}
                size={"icon"}
                className="transition-none"
                onClick={() => setIsMenuOpen(true)}
              >
                <ListIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </nav>
      </header>
      <Sheet open={menuOpen} onOpenChange={() => setIsMenuOpen(!menuOpen)}>
        <SheetContent className="flex p-4 bg-[#f5f1ed]">
          <SheetTitle className="flex-row flex items-center space-x-2">
            <Image src={logo} className="h-8 w-8 rounded-lg" alt="logo" />
            <p className="font-semibold text-[#37322f]">Notedrop.</p>
          </SheetTitle>
          <div className="flex flex-col p-2">
            <div className="flex flex-col space-y-2 mb-6">
              {["Features", "Docs", "Privacy"].map((item) => (
                <Link
                  key={item}
                  href={
                    item.toLowerCase() === "privacy"
                      ? "/legal/privacy"
                      : `/${item.toLowerCase()}`
                  }
                  className="relative inline-block group text-lg"
                >
                  {item}
                  <span className="absolute bottom-[-2px] left-0 h-[1.5px] w-0 bg-[#37322f] transition-all duration-300 ease-in-out group-hover:w-full" />
                </Link>
              ))}
            </div>
            <Button
              variant="outline"
              className="w-fit px-6"
              onClick={() => setIsSignUpOpen(true)}
            >
              Sign Up →
            </Button>
          </div>
          <SheetFooter className="text-[#49423D]/60 text-xs font-mono">
            No tracking. No telemetry. Your notes, your data.
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <Dialog open={SignUpOpen} onOpenChange={setIsSignUpOpen}>
        <DialogContent className="p-4 flex justify-center flex-col">
          <DialogTitle className="text-xl">Create Account</DialogTitle>
          <Label htmlFor="email-input">Email Address</Label>
          <Input
            placeholder="Email Address"
            type="email"
            className="h-10"
            id="email-input"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label htmlFor="username-input">Username</Label>
          <Input
            placeholder="Username"
            type="text"
            className="h-10"
            id="username-input"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Label htmlFor="password-input">Password</Label>
          <div className="flex items-center justfiy-center">
            <Input
              placeholder="Password"
              type={Togglepassword ? "text" : "password"}
              className="h-10"
              id="email-input"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              className="absolute right-5"
              variant={"ghost"}
              onClick={() => setTogglePassword(!Togglepassword)}
            >
              {Togglepassword ? <LockKeyOpenIcon /> : <LockKeyIcon />}
            </Button>
          </div>
          <p className="text-red-500">{SignUpError}</p>
          <div className="flex flex-row space-x-3 items-center">
            <Checkbox
              defaultChecked={false}
              onCheckedChange={() => [
                setIsTermsAccepted(!termsAccepted),
                console.log(termsAccepted),
              ]}
            />
            <p>
              I accept{" "}
              <a className="underline" href="legal/terms">
                Terms of Service
              </a>{" "}
              And{" "}
              <a className="underline" href="legal/privacy">
                Privacy Policy
              </a>
            </p>
          </div>
          <Button
            onClick={() => CreateAccount()}
            className="h-10 px-4 bg-[#37322f] hover:bg-[#37322f]/90 text-white rounded-full font-medium text-sm shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset]"
          >
            {Issubmiting ? (
              <>
                {" "}
                <Spinner /> Creating your Account
              </>
            ) : (
              "Create your Account"
            )}
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
