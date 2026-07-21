import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import { ImHome3 } from "react-icons/im";
import { MdOutlineWeb } from "react-icons/md";
import { PiSquaresFourFill } from "react-icons/pi";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "../components/ui/navigation-menu"
import { Button } from '../components/ui/button'

export function Header() {
    const location = useLocation()

    return (
        <div className="pb-4 flex justify-center">
            <NavigationMenu className="w-full">
                <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                <NavLink to="/">About</NavLink>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                            <NavLink to="/projects">Projects</NavLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
