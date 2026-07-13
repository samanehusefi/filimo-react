import Logo from "../../Logo/Logo";
import { menuData } from "@/data/menu.data";
import { MobileMenuItem } from "./MobileMenuItem";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-70 bg-[#342b2b] transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <Logo />

          <button onClick={onClose} className="text-2xl text-white">
            ✕
          </button>
        </div>

        <ul className="menu p-3 text-gray-300">
          {menuData.map((item) => (
            <MobileMenuItem key={item.id} item={item} />
          ))}
        </ul>
      </aside>
    </>
  );
};

export default MobileMenu;
