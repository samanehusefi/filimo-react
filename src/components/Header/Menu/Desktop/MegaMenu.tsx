import type { SubMenuItem } from "@/interfaces/menu.interface";

interface MegaMenuProps {
  items: SubMenuItem[];
}

const MegaMenu = ({ items }: MegaMenuProps) => {
  return (
    <div className="absolute right-0 top-full hidden w-[300px] rounded-xl border border-zinc-800 bg-[#1b1b1b] p-6 shadow-2xl group-hover:block">
      <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className="block rounded-md px-2 py-1 text-xs text-gray-300 transition hover:bg-zinc-800 hover:text-white"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MegaMenu;
