import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#d2691e] text-white p-10 md:p-8 sm:p-6">
      <h2 className="text-xl font-bold mb-6">Information</h2>
      <div className="space-y-4">
        <p>
          <strong>Address:</strong> Near Bushra Parlour, Taha & Humayun, First Floor Shahrah-e-Quaideen, P.E.C.H.S Block 2, Karachi, Karachi City, Sindh
        </p>
        <p>
          <strong>Phone:</strong> +92 1234566
        </p>
        <p>
          <strong>Email:</strong> info@xxxyyzz.com
        </p>
        <ul className="flex space-x-4 mt-4">
          <li>
            <FaFacebook className="text-black text-2xl" />
          </li>
          <li>
            <AiFillTwitterCircle className="text-black text-3xl" />
          </li>
        </ul>
      </div>
      <div className="my-8">
        <hr className="border-t border-gray-300" />
        <ul className="flex flex-wrap justify-between mt-4 font-bold text-lg sm:flex-col sm:items-center">
          <li className="hover:text-gray-300 cursor-pointer mb-2 sm:mb-0">Home</li>
          <li className="hover:text-gray-300 cursor-pointer mb-2 sm:mb-0">Online Store</li>
          <li className="hover:text-gray-300 cursor-pointer mb-2 sm:mb-0">Promotion</li>
          <li className="hover:text-gray-300 cursor-pointer mb-2 sm:mb-0">Privacy Policy</li>
          <li className="hover:text-gray-300 cursor-pointer mb-2 sm:mb-0">Terms Of Use</li>
          <li className="hover:text-gray-300 cursor-pointer mb-2 sm:mb-0">Sitemap</li>
          <li className="hover:text-gray-300 cursor-pointer">Support</li>
        </ul>
        <hr className="border-t border-gray-300 mt-4" />
      </div>
    </div>
  );
};

export default Footer;
