import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border border-blue-500 w-full h-[480px] mt-96">
      <div>
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Vision */}
          <div className=" pl-8 mr-10w-[280px] h-[230px] ml-16 mt-20">
            <h1 className="text-2xl font-bold text-blue-500">MORENT</h1>
            <p className="text-sm text-gray-600 mt-2 w-[280px]">
              Our vision is to provide convenience and help increase your sales business.
            </p>
          </div>

          {/* About Section */}
          <div className="ml-56 mt-11">
            <h2 className="text-lg font-semibold text-gray-800 mb-8">About</h2>
            <ul className="mt-2  space-y-4">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500 top-32">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Featured
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Partnership
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Business Relation
                </a>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="ml-14 mt-11">
            <h2 className="text-lg font-semibold text-gray-800 mb-8">Community</h2>
            <ul className="mt-2 space-y-4">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Podcast
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Invite a friend
                </a>
              </li>
            </ul>
          </div>

          {/* Socials Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mt-11 mb-8">Socials</h2>
            <ul className="mt-2 space-y-4">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col sm:flex-row justify-around items-center border-t left-[1380px] border-gray-200 pt-7 w-[1320px]"
        >
          <p className=" flex items-center justify-around text-sm text-gray-600 w-[292px] h-6 border">
            © 2022 MORENT. All rights reserved
          </p >
          <div className="flex space-x-3 mt-4 gap-56 sm:mt-0">
            <a href="#" className="text-sm text-gray-600 hover:text-blue-500 ">
              Privacy & Policy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-blue-500 ml-4">
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
