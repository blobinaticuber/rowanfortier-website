import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { ImHome3 } from "react-icons/im";
import { MdOutlineWeb } from "react-icons/md";
import { PiSquaresFourFill } from "react-icons/pi";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "../components/ui/navigation-menu"

export function Header() {
    return (
        <div className="pb-4 flex justify-center">
            <NavigationMenu className="w-full">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <a href="/">About</a>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild>
                            <a href="/projects">Projects</a>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
