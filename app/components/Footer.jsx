'use client';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaPinterestP, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0B1B2A] text-white pt-12 px-6 md:px-16 mt-4">
      {/* Top: Newsletter */}
      <div className="flex flex-col md:flex-row md:justify-between items-start gap-8 border-b border-gray-700 pb-10">
        {/* Logo + Newsletter */}
        <div className="flex-1">
          <div className="text-2xl font-bold tracking-wider mb-3">
           <Image
           src="/logo.png"
           alt="logo"
           width={100}
           height={30}
           />
          </div>
         
        </div>

        {/* Email Input */}
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
          <input
            type="email"
            placeholder="Email Address"
            className="bg-[#152B40] text-sm px-4 py-3 w-full md:w-80 text-white outline-none rounded"
          />
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold px-6 py-3 rounded">
            SUBSCRIBE →
          </button>
        </div>
      </div>

      {/* Middle: Columns */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 py-10 border-b border-gray-700">
        {/* Support */}
        <div>
          <h4 className="text-sm font-bold mb-4 tracking-widest">SUPPORT</h4>
          <p className="text-sm text-gray-400 mb-2">1 800 234 4536</p>
          <p className="text-sm text-gray-400 mb-4">info@gearwear.com</p>
          <div className="flex gap-4">
            <IconCircle icon={<FaFacebookF />} />
            <IconCircle icon={<FaInstagram />} />
            <IconCircle icon={<FaPinterestP />} />
            <IconCircle icon={<FaYoutube />} />
          </div>
        </div>

        {/* Shop */}
        <FooterList title="SHOP" items={['Snow', 'Surf', 'Skate', 'Mens', 'Womens', 'Sale']} />

        {/* Brands 1 */}
        <FooterList title="BRANDS" items={['Billabong', 'Rip Curl', 'Quicksilver', 'Roxy', 'O’Neill', 'Volcom']} />

        {/* Brands 2 */}
        <FooterList title="BRANDS" items={['Billabong', 'Rip Curl', 'Quicksilver', 'Roxy', 'O’Neill', 'Volcom']} />

        {/* Company */}
        <FooterList title="COMPANY" items={['About', 'Track Your Order', 'FAQs', 'Shipping', 'Returns', 'Contact']} />
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 py-6">
        <p>
          Terms & Conditions <span className="mx-2">|</span> Privacy <span className="mx-2">|</span> Site Map
        </p>
        <p className="mt-2">© 2025 GearWear. All rights reserved.</p>
      </div>
    </footer>
  );
}

function FooterList({ title, items }) {
  return (
    <div>
      <h4 className="text-sm font-bold mb-4 tracking-widest">{title}</h4>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="text-sm text-gray-400 hover:text-white cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function IconCircle({ icon }) {
  return (
    <div className="w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full hover:bg-white hover:text-black transition">
      {icon}
    </div>
  );
}
