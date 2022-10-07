import React from 'react';

const Navbar = ({ dark, setDark, orderBy, setOrderBy }) => {
  return (
    <div
      className="navbar bg-base-100 px-5"
      data-theme={dark ? 'dark' : 'light'}
    >
      <div className="navbar-start">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          <img width="150px" src="../../images/logo.svg" alt="brand"/>
        </a>
      </div>

      <div className="navbar-end">
        <div className="flex justify-end flex-1 px-2">
          <div className="flex items-center">
            <a href="##" className="btn btn-sm btn-outline">
              Bridge <i className="fa-solid fa-arrow-right-arrow-left ml-1"></i>
            </a>
            <a href="##" className="btn btn-sm btn-outline mx-5">
              List <i className="fa-solid fa-clipboard-list ml-1"></i>
            </a>
            <a href="##" className="btn btn-sm btn-outline btn-success">
              Swap
            </a>
            <div className="dropdown dropdown-end w-60">
              <ul className="menu menu-horizontal p-0 mx-5 w-60">
                <li>
                  <a href="##">
                    {orderBy}
                    <svg
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                    </svg>
                  </a>
                  <ul className="p-2 bg-base-100 z-40">
                    <li onClick={() => setOrderBy('Order By Liquidity')}>
                      <a href="##">Order By Liquidity</a>
                    </li>
                    <li onClick={() => setOrderBy('Order By MarketCap')}>
                      <a href="##">Order By MarketCap</a>
                    </li>
                    <li onClick={() => setOrderBy('Order By Price')}>
                      <a href="##">Order By Price</a>
                    </li>
                    <li onClick={() => setOrderBy('Order By Supply')}>
                      <a href="##">Order By Supply</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <label className="swap swap-rotate">
          <input type="checkbox" onClick={() => setDark(!dark)} />
          <svg
            className="swap-off fill-current w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          <svg
            className="swap-on fill-current w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
