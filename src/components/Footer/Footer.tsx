import type React from "react";
import { footerMenuLinks } from "@/data/footer.data";

const Footer: React.FC = () => {
  const rightLinks = footerMenuLinks.filter(
    (link) => link.position === "right",
  );

  const leftLinks = footerMenuLinks.filter((link) => link.position === "left");

  const renderLink = (link: (typeof footerMenuLinks)[number]) => (
    <li key={link.id} className="relative group">
      {link.type === "dropdown" ? (
        <>
          <span
            className={`cursor-pointer text-gray-300 transition hover:text-white ${
              link.position === "left" ? "text-xs" : "text-sm"
            }`}
          >
            {link.title}
          </span>

          {link.children && (
            <ul className="absolute bottom-full right-0 mb-2 hidden min-w-48 rounded-lg bg-[#333] p-2 shadow-lg group-hover:block">
              {link.children.map((child, index) => (
                <li key={index}>
                  <a
                    href={child.href}
                    target={child.type === "external" ? "_blank" : undefined}
                    rel={
                      child.type === "external"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    {child.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <a
          href={link.href}
          target={link.type === "external" ? "_blank" : undefined}
          rel={link.type === "external" ? "noopener noreferrer" : undefined}
          className={`text-gray-300 transition hover:text-white ${
            link.position === "left" ? "text-xs" : "text-sm"
          }`}
        >
          {link.title}
        </a>
      )}
    </li>
  );

  return (
    <footer className="fixed bottom-0 left-0 z-50 w-full bg-[#2b2b2b]">
      <div className="mx-auto max-w-7xl px-4 py-2">
        <div className="flex items-center justify-between">
          {/* سمت راست */}
          <ul className="flex items-center gap-8">
            {rightLinks.map(renderLink)}
          </ul>

          {/* سمت چپ */}
          <ul className="flex items-center gap-5">
            {leftLinks.map(renderLink)}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
