import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate =useNavigate()
const [Profile, setProfile]=useState<boolean>(false)
  function logout(){
    localStorage.clear();
    navigate('/login')
  }
  return (
    <div>
      <header className="shadow-lg py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px]">
        <div className="flex flex-wrap items-center lg:gap-y-4 gap-y-6 gap-x-4">
          <Link to="" style={{ width: "100px" }}>
            <img
              src="data:image/jpeg;base64,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"
              alt="logo"
              className="w-36"
            />
          </Link>
          <div className="flex items-center ml-auto lg:order-1">
            <ul className="flex space-x-4">
              <li className="relative px-1 after:absolute after:bg-pink-500 after:w-full after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300">
                <div
                  className="flex flex-col justify-center items-center cursor-pointer"
                  onMouseEnter={() => {
                    setProfile(true);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M337.711 241.3a16 16 0 0 0-11.461 3.988c-18.739 16.561-43.688 25.682-70.25 25.682s-51.511-9.121-70.25-25.683a16.007 16.007 0 0 0-11.461-3.988c-78.926 4.274-140.752 63.672-140.752 135.224v107.152C33.537 499.293 46.9 512 63.332 512h385.336c16.429 0 29.8-12.707 29.8-28.325V376.523c-.005-71.552-61.831-130.95-140.757-135.223zM446.463 480H65.537V376.523c0-52.739 45.359-96.888 104.351-102.8C193.75 292.63 224.055 302.97 256 302.97s62.25-10.34 86.112-29.245c58.992 5.91 104.351 50.059 104.351 102.8zM256 234.375a117.188 117.188 0 1 0-117.188-117.187A117.32 117.32 0 0 0 256 234.375zM256 32a85.188 85.188 0 1 1-85.188 85.188A85.284 85.284 0 0 1 256 32z"
                      data-original="#000000"
                    />
                  </svg>
                  <span className="text-xs font-semibold mt-1 ">Profile</span>
                </div>
                {Profile ? (
                  <div
                    onMouseLeave={() => {
                      setProfile(false);
                    }}
                    className="bg-white z-50 shadow-lg py-6 px-6 sm:min-w-[320px] max-sm:min-w-[250px] max-sm:-right-32 absolute right-0 top-14"
                  >
                    <h6 className="font-semibold text-sm">Welcome</h6>
                    <p className="text-sm text-gray-500 mt-1">
                      To access account and manage orders
                    </p>
                    <button
                      type="button"
                      className="bg-transparent border border-gray-300 hover:border-pink-500 px-4 py-2 mt-4 text-sm text-pink-500 font-semibold"
                    >
                      LOGIN / SIGNUP
                    </button>
                    <hr className="border-b-0 my-4" />
                    <ul className="space-y-1.5">
                      <li>
                        <Link
                          to=""
                          className="text-sm text-gray-500 hover:text-pink-500"
                        >
                          Order
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=" "
                          className="text-sm text-gray-500 hover:text-pink-500"
                        >
                          Wishlist
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=""
                          className="text-sm text-gray-500 hover:text-pink-500"
                        >
                          Gift Cards
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=" "
                          className="text-sm text-gray-500 hover:text-pink-500"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                    <hr className="border-b-0 my-4" />
                    <ul className="space-y-1.5">
                      <li>
                        <Link
                          to=" "
                          className="text-sm text-gray-500 hover:text-pink-500"
                        >
                          Coupons
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=" "
                          className="text-sm text-gray-500 hover:text-pink-500"
                        >
                          Saved Credits
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=" "
                          className="text-sm text-gray-500 hover:text-pink-500"
                        >
                          Contact Us
                        </Link>
                      </li>
                      <li>
                        <Link
                          to=" "
                          className="text-sm text-gray-500 hover:text-pink-500"
                        >
                          Saved Addresses
                        </Link>
                      </li>
                    </ul>
                  </div>
                ) : null}
              </li>
              <li className="relative px-1 after:absolute after:bg-pink-500 after:w-0 hover:after:w-full hover:after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300">
                <div className="flex flex-col justify-center items-center cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 64 64"
                  >
                    <path
                      d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                      data-original="#000000"
                    ></path>
                  </svg>
                  <span className="text-xs font-semibold mt-1">Wishlist</span>
                </div>
              </li>
              <li className="relative px-1 after:absolute after:bg-pink-500 after:w-0 hover:after:w-full hover:after:h-[3px] after:block after:-bottom-2 after:left-0 after:transition-all after:duration-300">
                <div
                  className="flex flex-col justify-center items-center cursor-pointer"
                  onClick={() => {
                    logout();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    viewBox="0 0 489 489"
                  >
                    <path
                      d="m440.1 422.7-28-315.3c-.6-7-6.5-12.3-13.4-12.3h-57.6C340.3 42.5 297.3 0 244.5 0s-95.8 42.5-96.6 95.1H90.3c-7 0-12.8 5.3-13.4 12.3l-28 315.3c0 .4-.1.8-.1 1.2 0 35.9 32.9 65.1 73.4 65.1h244.6c40.5 0 73.4-29.2 73.4-65.1 0-.4 0-.8-.1-1.2zM244.5 27c37.9 0 68.8 30.4 69.6 68.1H174.9c.8-37.7 31.7-68.1 69.6-68.1zm122.3 435H122.2c-25.4 0-46-16.8-46.4-37.5l26.8-302.3h45.2v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h139.3v41c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-41h45.2l26.9 302.3c-.4 20.7-21.1 37.5-46.4 37.5z"
                      data-original="#000000"
                    />
                  </svg>

                  <span className="text-xs font-semibold mt-1"> Logout</span>
                </div>
              </li>
            </ul>
            <button className="lg:hidden ml-7">
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <ul className="flex lg:ml-14 lg:space-x-8 max-lg:space-y-2 max-lg:block max-lg:w-full">
            <li className="max-lg:border-b max-lg:py-2 relative lg:hover:after:absolute lg:after:bg-pink-500 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300">
              <Link to="" className="text-[#333] block text-sm font-semibold">
                Men
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2 relative lg:hover:after:absolute lg:after:bg-green-500 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300">
              <Link to=" " className="text-[#333] block text-sm font-semibold">
                Women
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2 relative lg:hover:after:absolute lg:after:bg-blue-500 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300">
              <Link to=" " className="text-[#333] block text-sm font-semibold">
                Kids
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2 relative lg:hover:after:absolute lg:after:bg-blue-500 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300">
              <Link to=" " className="text-[#333] block text-sm font-semibold">
                Home & Living
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2 relative lg:hover:after:absolute lg:after:bg-yellow-500 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300">
              <Link to=" " className="text-[#333] block text-sm font-semibold">
                Beauty
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:py-2 relative lg:hover:after:absolute lg:after:bg-red-500 lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[3px] lg:after:block lg:after:-bottom-2 lg:after:transition-all lg:after:duration-300">
              <Link to=" " className="text-[#333] block text-sm font-semibold">
                Studio
              </Link>
            </li>
          </ul>
          <div className="lg:mx-8 max-xl:hidden max-lg:!flex flex items-center bg-gray-100 px-4 h-10 rounded flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.904 192.904"
              width="18px"
              className="cursor-pointer fill-gray-500 mr-4 rotate-90 inline-block"
            >
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
            <input
              type="text"
              placeholder="Search something..."
              className="w-full outline-none text-sm bg-transparent"
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar
