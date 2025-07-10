import { NavLink } from "react-router-dom";

import {
  NavigationMenu,
  // NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

const navLinks: { label: string, path: string }[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Projects",
    path: "/projects",
  },
  {
    label: "Bugs",
    path: "/bugs",
  }
];

function Navbar() {
  return (
    <nav className="w-full h-[70px] border-b border-[var(--border)]">
      <div className="p-4 max-w-screen-xl mx-auto">
        <NavigationMenu>
          <NavigationMenuList>
            {navLinks.map((navLink: { label: string, path: string }, index: number) => {
              return (
                <NavigationMenuItem>
                  <NavLink
                    key={index}
                    to={navLink.path}
                  >
                    <NavigationMenuLink>{navLink.label}</NavigationMenuLink>
                  </NavLink>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}

export default Navbar;