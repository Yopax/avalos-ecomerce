'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white text-black pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-black text-sm">
              We are a leading provider of high-quality products, committed to customer satisfaction and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-black hover:text-white text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black hover:text-white text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-black hover:text-white text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-black hover:text-white text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sneakers" className="text-black hover:text-white text-sm">
                  Sneakers
                </Link>
              </li>
              <li>
                <Link href="/clothing" className="text-black hover:text-white text-sm">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/accessories" className="text-black hover:text-white text-sm">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-black text-sm">123 Main Street, Anytown USA</p>
            <p className="text-black text-sm">info@example.com</p>
            <p className="text-black text-sm">+51 934 567 900</p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-black text-sm">
          &copy; {new Date().getFullYear()} Avalos Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
