import { BrowserRouter as Router, Routes, Route, Link, NavLink, useLocation } from 'react-router-dom';
import { ImHome3 } from "react-icons/im";
import { MdOutlineWeb } from "react-icons/md";
import { PiSquaresFourFill } from "react-icons/pi";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../components/ui/navigation-menu"
import { Button } from '../components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../components/ui/dropdown-menu'

export function Header() {
    const location = useLocation()

    return (
        <div className="pb-4 flex justify-center">
            <NavigationMenu className="w-full">
                <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} ${location.pathname === "/" ? "bg-accent" : ""}`}>
                                <NavLink to="/">About</NavLink>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} ${location.pathname === "/projects" ? "bg-accent" : ""}`}>
                            <NavLink to="/projects">Projects</NavLink>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Hobbies</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <div className="flex flex-col w-64 gap-2">
                                <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} ${location.pathname === "/cubing" ? "bg-accent" : ""}`}>
                                    <NavLink to="/cubing">Rubik's Cube</NavLink>
                                </NavigationMenuLink>
                                {/* <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} ${location.pathname === "/projects" ? "bg-accent" : ""}`}>
                                    <NavLink to="/projects">YouTube</NavLink>
                                </NavigationMenuLink> */}
                                <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} ${location.pathname === "/juggling" ? "bg-accent" : ""}`}>
                                    <NavLink to="/juggling">Juggling</NavLink>
                                </NavigationMenuLink>
                                {/* <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} ${location.pathname === "/projects" ? "bg-accent" : ""}`}>
                                    <NavLink to="/projects">Fitness</NavLink>
                                </NavigationMenuLink> */}
                            </div>
                        </NavigationMenuContent>

                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
