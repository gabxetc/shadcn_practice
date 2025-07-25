"use client"

import * as React from "react"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function NavBar() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          {/* Use NavigationMenuLink with navigationMenuTriggerStyle and asChild */}
          <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
            Dashboard
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <ListItem href="/navPages/about-me/programming-page" title="Programming">
              </ListItem>
              <ListItem href="/navPages/about-me/photography-page" title="Photography">
              </ListItem>
              <ListItem href="/navPages/about-me/poetry-page" title="Poetry">
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Upcoming Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[300px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/navPages/upcoming-projects/buddy">
                    <div className="font-medium">Buddy</div>
                    <div className="text-muted-foreground">
                      You're go-to app for kid friendly internet surfing
                    </div>
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/navPages/upcoming-projects/thePalette">
                    <div className="font-medium">The Palette</div>
                    <div className="text-muted-foreground">
                      Meet like minded individuals who want to get creative like you
                    </div>
                  </Link>
                </NavigationMenuLink>

                <NavigationMenuLink asChild>
                  <Link href="/navPages/upcoming-projects/otherResources">
                    <div className="font-medium">Other Resources</div>
                    <div className="text-muted-foreground">
                      Other things I am doing that you might be interested in
                    </div>
                  </Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Let's Connect!</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="/navPages/contact-page/contact-me">Contact Me</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/navPages/contact-page/notes-page">Leave Me A Notes</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/navPages/contact-page/coffee-page">Buy Me A Coffee</Link>
                </NavigationMenuLink>
              </li>
            </ul>
            </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
