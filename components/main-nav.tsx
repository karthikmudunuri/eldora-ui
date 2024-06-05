"use client";

import { Icons } from "@/components/icons";
import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "./ui/badge";
import SparklesText from "./sparkles-text";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
      <div className="logo-container">
    <img src="/m.png" alt="Logo" height={1000} width={5000} className="logo-image" />
    <style jsx>{`
      .logo-container {
        display: inline-block;
        height: 90px;
      }
      .logo-image {
        height: 100%;
        width: 200%;
        mask-image: linear-gradient(
          60deg,
          black 25%,
          rgba(0, 0, 0, 0.2) 50%,
          black 75%
        );
        mask-size: 400%;
        mask-position: 0%;
        transition: mask-position 1s ease;
      }
      .logo-container:hover .logo-image {
        mask-position: 100%;
      }
    `}</style>
  </div>
        {/* <Icons.logo className="mr-2 h-4 w-4" /> */}
        {/* <SparklesText text={siteConfig.name} /> */}
         
        {/* <Badge variant="secondary">Beta</Badge> */}
      </Link>
      <nav className="hidden items-center space-x-6 text-sm font-medium xl:flex">
        {docsConfig.mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href!}
            target={item.external ? "_blank" : undefined}
            className={cn(
              "flex items-center justify-center transition-colors hover:text-foreground/80",
              pathname?.startsWith(item.href!)
                ? "text-foreground"
                : "text-foreground/60",
            )}
          >
            {item.title}
            {item.external && <ExternalLinkIcon className="ml-2 size-4" />}
          </Link>
        ))}
      </nav>
    </div>
  );
}
