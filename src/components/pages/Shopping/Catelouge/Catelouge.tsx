import { Slider } from "@mui/material";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { motion, useScroll } from "framer-motion";
function CatalougePage() {
  const [sort, setSort] = useState<boolean>(true);
  const [Subcat, setSubcat] = useState<boolean>(true);
  const [value, setValue] = React.useState<number[]>([20, 37]);
  const [products, setProducts] = useState<object[]>([]);
  const { scrollYProgress } = useScroll();
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  function valuetext(value: number) {
    return `${value}°C`;
  }

  const dummyProducts = [
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      realprice: "2000",
      sellingPrice: "999",
      brand: "Dummy",
    },
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      realprice: "2000",
      sellingPrice: "999",
      brand: "Dummy",
    },
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      realprice: "2000",
      sellingPrice: "999",
      brand: "Dummy",
    },
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      realprice: "2000",
      sellingPrice: "999",
      brand: "Dummy",
    },
    {
      id: "1",
      img: "https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      realprice: "2000",
      sellingPrice: "999",
      brand: "Dummy",
    },
  ];
  // setProducts
  // ()
  return (
    <div>
      <div className="bg-white">
        <div>
          <div
            className="relative z-40 lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 hidden"></div>

            <div className="fixed inset-0 z-40 flex hidden">
              <div className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* <!-- Filters --> */}
                <form className="mt-4 border-t border-gray-200">
                  <h3 className="sr-only">Categories</h3>
                  <ul
                    role="list"
                    className="px-2 py-3 font-medium text-gray-900"
                  >
                    <li>
                      <a href="#" className="block px-2 py-3">
                        Mens
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-2 py-3">
                        Kids
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-2 py-3">
                        Womens
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-2 py-3">
                        all
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-2 py-3">
                        Sleevles
                      </a>
                    </li>
                  </ul>
                </form>
              </div>
            </div>
          </div>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 text-center">
                Heading
              </h1>

              <div
                className="flex items-center"
                id="accordion-collapse"
                data-accordion="collapse"
              >
                <div className="relative inline-block text-left">
                  <div>
                    <button
                      type="button"
                      className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      data-accordion-target="#accordion-collapse-body-1"
                      aria-controls="accordion-collapse-body-1"
                      onClick={() => {
                        setSort(!sort);
                      }}
                    >
                      Sort
                      <svg
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  <div
                    className={`absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none ${
                      sort ? "hidden" : ""
                    }`}
                    role="menu"
                  >
                    <div className="py-1">
                      <a
                        href="#"
                        className="font-medium text-gray-900 block px-4 py-2 text-sm"
                        role="menuitem"
                        id="menu-item-0"
                      >
                        Most Popular
                      </a>
                      <a
                        href="#"
                        className="text-gray-500 block px-4 py-2 text-sm"
                        role="menuitem"
                        id="menu-item-1"
                      >
                        Best Rating
                      </a>
                      <a
                        href="#"
                        className="text-gray-500 block px-4 py-2 text-sm"
                        role="menuitem"
                        id="menu-item-2"
                      >
                        Newest
                      </a>
                      <a
                        href="#"
                        className="text-gray-500 block px-4 py-2 text-sm"
                        role="menuitem"
                        id="menu-item-3"
                      >
                        Price: Low to High
                      </a>
                      <a
                        href="#"
                        className="text-gray-500 block px-4 py-2 text-sm"
                        role="menuitem"
                        id="menu-item-4"
                      >
                        Price: High to Low
                      </a>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                >
                  <span className="sr-only">View grid</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                >
                  <span className="sr-only">Filters</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* <!-- Filters --> */}
                <form className="hidden lg:block">
                  <h3 className="sr-only">Categories</h3>
                  <ul
                    role="list"
                    className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                  >
                    <li className="hover:text-red-600 hover:font-extrabold">
                      <a href="#">MEN</a>
                    </li>
                    <li className="hover:text-red-600 hover:font-extrabold">
                      <a href="#">WOMEN</a>
                    </li>
                    <li className="hover:text-red-600 hover:font-extrabold">
                      <a href="#">KIDS</a>
                    </li>
                    <li className="hover:text-red-600 hover:font-extrabold">
                      <a href="#">ALL</a>
                    </li>
                    <li className="hover:text-red-600 hover:font-extrabold">
                      <a href="#"></a>
                    </li>
                  </ul>

                  <div className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      {/* <!-- Expand/collapse section button --> */}
                      <button
                        type="button"
                        className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-1"
                        aria-expanded="false"
                        onClick={() => {
                          setSubcat(!Subcat);
                        }}
                      >
                        <span className="font-medium text-gray-900">
                          Sub Category
                        </span>
                        <span className="ml-6 flex items-center">
                          <svg
                            className={`h-5 w-5 ${Subcat ? "hidden" : ""}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                          <svg
                            className={`h-5 w-5 ${!Subcat ? "hidden" : ""}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    {/* //////////////////Price///////////// */}
                    <div className="pt-6" id="filter-section-1">
                      <div className={`space-y-4 ${!Subcat ? "hidden" : ""}`}>
                        <div className="flex items-center">
                          <input
                            id="filter-category-0"
                            name="category[]"
                            value="new-arrivals"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-category-0"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Mens shirt
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-category-1"
                            name="category[]"
                            value="sale"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-category-1"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Men pants
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-category-2"
                            name="category[]"
                            value="travel"
                            type="checkbox"
                            checked
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-category-2"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Mens tshirt
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-category-3"
                            name="category[]"
                            value="organization"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-category-3"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Mens baniyans
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="filter-category-4"
                            name="category[]"
                            value="accessories"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            htmlFor="filter-category-4"
                            className="ml-3 text-sm text-gray-600"
                          >
                            Full sleeve shirts
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      {/* <!-- Expand/collapse section button --> */}
                      <button
                        type="button"
                        className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-1"
                        aria-expanded="false"
                        onClick={() => {
                          setSubcat(!Subcat);
                        }}
                      >
                        <span className="font-medium text-gray-900">
                          Price filter
                        </span>
                        <span className="ml-6 flex items-center">
                          <svg
                            className={`h-5 w-5 ${Subcat ? "hidden" : ""}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                          </svg>
                          {/* <!-- Collapse icon, show/hide based on section open state. --> */}
                          <svg
                            className={`h-5 w-5 ${!Subcat ? "hidden" : ""}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                    </h3>
                    {/* //////////////////price///////////// */}
                    <Slider
                      getAriaLabel={() => "Temperature range"}
                      value={value}
                      onChange={handleChange}
                      valueLabelDisplay="auto"
                      getAriaValueText={valuetext}
                      className="mt-5"
                    />
                    <h3>
                      Selected range {value.toString().split(",")[0]}-
                      {value.toString().split(",")[1]}
                    </h3>
                  </div>
                </form>
                {/* <!-- Product grid --> */}
                <div className="flex m-2 p-5 gap-7 w-[360%] flex-wrap sm:grid grid-cols-2 md:grid grid-cols-3 ">
                  {dummyProducts.map((it, index) => (
                    <div className="" key={index}>
                      <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <a href="#">
                          <img
                            src={it.img}
                            alt="Product"
                            className="h-50 w-60 object-cover rounded-t-xl"
                          />
                          <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">
                              {it.brand}
                            </span>
                            <p className="text-lg font-bold text-black truncate block capitalize">
                              Product Name
                            </p>
                            <div className="flex items-center">
                              <p className="text-lg font-semibold text-black cursor-auto my-3">
                                &#8377; {it.sellingPrice}
                              </p>
                              <del>
                                <p className="text-sm text-gray-600 cursor-auto ml-2">
                                  &#8377;{it.realprice}
                                </p>
                              </del>
                              <div className="ml-auto">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  className="bi bi-bag-plus"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                                  />
                                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default CatalougePage;
