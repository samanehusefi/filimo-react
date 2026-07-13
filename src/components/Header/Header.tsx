import Logo from "./Logo/Logo";
import DesktopMenu from "./Menu/Desktop/DesktopMenu";
import MobileMenu from "./Menu/Mobile/MobileMenu";
import { useState } from "react";
import MenuSvg from "./Menu/Mobile/MenuSvg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed z-[999] h-14 w-full max-w-[1660px] bg-black/30">
      <div className="mx-auto flex h-full max-w-7xl flex-row-reverse items-center justify-between px-4 lg:flex-row lg:justify-start">
        {/* Logo */}
        <a href="/" className="shrink-0">
          <Logo />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex">
          <DesktopMenu />
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="btn btn-ghost btn-circle text-white lg:hidden"
          >
            <MenuSvg />
          </button>
          <MobileMenu
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
