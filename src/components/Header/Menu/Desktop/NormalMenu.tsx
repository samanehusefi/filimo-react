import type { SubMenuItem } from "@/interfaces/menu.interface";

interface NormalMenuProps {
  items: SubMenuItem[];
}

const NormalMenu = ({ items }: NormalMenuProps) => {
  return (
    <div className="absolute right-0 top-full hidden w-52 rounded-xl border border-zinc-800 bg-[#1b1b1b] p-2 shadow-2xl group-hover:block">
      <ul className="flex flex-col gap-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className="block rounded-md px-3 py-2 text-sm text-gray-300 transition hover:bg-zinc-800 hover:text-white"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NormalMenu;
