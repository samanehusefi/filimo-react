import type { MenuItem } from "@/interfaces/menu.interface";
import React from "react";

type Props = {
  item: MenuItem;
};

export const MobileMenuItem: React.FC<Props> = ({ item }) => {
  return (
    <li>
      {!item.children?.length ? (
        <a href={item.href ?? "#"}>{item.title}</a>
      ) : (
        <details>
          <summary className="active:bg-transparent active:text-inherit focus:bg-transparent focus:text-inherit">
            {item.title}
          </summary>

          <ul>
            {item.children
              .sort((a, b) => a.priority - b.priority)
              .map((child) => (
                <li key={child.id}>
                  <a
                    className="active:bg-transparent active:text-inherit focus:bg-transparent focus:text-inherit"
                    href={child.href}
                  >
                    {child.title}
                  </a>
                </li>
              ))}
          </ul>
        </details>
      )}
    </li>
  );
};
