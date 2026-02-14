"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import YearText from "@/components/year-text";

const navItems = [
  { href: "/", label: "หน้าแรก" },
  { href: "/services", label: "บริการ" },
  { href: "/products", label: "ผลิตภัณฑ์" },
  { href: "/what-we-do", label: "เราทำอะไร" },
  { href: "/how-we-work", label: "ขั้นตอนทำงาน" },
  { href: "/contact", label: "ติดต่อ" },
];

type SiteChromeProps = {
  children: React.ReactNode;
};

export default function SiteChrome({ children }: SiteChromeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-row">
          <Link className="brand" href="/" aria-label="กลับหน้าหลัก">
            <span className="brand-dot" aria-hidden="true" />
            <span>datacooking.net</span>
          </Link>

          <button
            className="mobile-toggle"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>

          <nav className="top-nav" aria-label="เมนูหลัก" data-open={isOpen}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={pathname === item.href ? "active" : ""}
              >
                {item.label}
              </Link>
            ))}
            {/* Mobile-only CTA in menu */}
            <Link className="btn btn-ghost mobile-only-btn" href="/contact" style={{ marginTop: '1rem', display: 'flex' }}>
              ขอใบเสนอราคา
            </Link>
          </nav>

          {/* Desktop CTA */}
          <Link className="btn btn-ghost desktop-only-btn" href="/contact">
            ขอใบเสนอราคา
          </Link>
        </div>
      </header>

      <main className="page-main">{children}</main>

      <footer className="site-footer">
        <div className="container footer-row">
          <p>
            © <YearText /> datacooking.net | Practical Software Partner
          </p>
        </div>
      </footer>
    </div>
  );
}
