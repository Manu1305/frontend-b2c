import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <footer className="bg-white dark:bg-gradient-to-r from-gray-500 to-gray-900 ">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link to="/" className="flex items-center">
                {/* <img
                  src="data:image/jpeg;base64,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"
                  className="h-8 me-3"
                  alt="FlowBite Logo"
                /> */}
                <span className="self-center text-2xl font-semibold font-semibold whitespace-nowrap dark:text-white">
                  HITEC~MART
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                 Pages
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link
                      to="https://flowbite.com/"
                      className="hover:underline"
                    >
                      about
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://tailwindcss.com/"
                      className="hover:underline"
                    >
                      stores
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link
                      to=""
                      className="hover:underline "
                    >
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://discord.gg/4eeurUVvTy"
                      className="hover:underline"
                    >
                      Instagram
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <Link to="#" className="hover:underline">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="hover:underline">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <Link to="" className="hover:underline">
                Hitecmart™
              </Link>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <Link
                to="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 8 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </Link>
              <Link
                to="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 16"
                >
                  <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                </svg>
                <span className="sr-only">Discord community</span>
              </Link>
              <Link
                to="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 17"
                >
                  <path
                    fill-rule="evenodd"
                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Twitter page</span>
              </Link>
              <Link
                to="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">GitHub account</span>
              </Link>
              <Link
                to="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="sr-only">Dribbble account</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer
