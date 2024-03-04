import { useStore } from "@nanostores/react"; 
import { isMenuOpen } from "../stores/store";

import { DesktopMenu } from "./DesktopMenu"
import { MobileBurger } from "./MobileBurger"
import { MobileMenu } from "./MobileMenu"

export const Navigation = () => {
  const $isMenuOpen = useStore(isMenuOpen);

  const navItems = [
    {name: "About", to: "#about"},
    {name: "Why Us", to: "#why-us"},
    {name: "Contact", to: "#contact"},
    {name: "Data Centres", to: "#"},

  ];

  const handleMenuClick = () => {
    isMenuOpen.set(!$isMenuOpen);
  }

  const mobileItemClasses = "cursor-pointer";
  const desktopItemClasses = "cursor-pointer";

  return <>
    <MobileBurger onClick={handleMenuClick} />
    {$isMenuOpen && <MobileMenu items={navItems} itemClassName={mobileItemClasses} />}
    <DesktopMenu items={navItems} itemClassName={desktopItemClasses} />
  </>
}