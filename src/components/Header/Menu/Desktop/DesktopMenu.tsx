import { menuData } from "@/data/menu.data";
import MegaMenu from "@/components/Header/Menu/Desktop/MegaMenu";
import NormalMenu from "@/components/Header/Menu/Desktop/NormalMenu";
const DesktopMenu = () => {
  const sortedItems = [...menuData].sort((a, b) => a.priority - b.priority);

  return (
    <nav>
      <ul className="flex items-center gap-8">
        {sortedItems.map((item) => (
          <li key={item.id} className="group relative">
            <a
              href={item.href ?? "#"}
              className="flex items-center gap-1 text-sm font-medium text-gray-300 transition hover:text-white"
            >
              {item.title}
              {/* 
              {item.hasMegaMenu && (
                <IoChevronDown
                  size={14}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              )} */}
            </a>

            {item.hasMegaMenu && item.children && (
              <MegaMenu items={item.children} />
            )}

            {!item.hasMegaMenu && item.children && (
              <NormalMenu items={item.children} />
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopMenu;
