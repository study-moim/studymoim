import { userInfo } from "../../../zustand/store";
import NavBarLogIn from "./NavBarLogIn";
import NavBarNotLogIn from "./NavBarNotLogIn";
import NavBarRouter from "./NavBarRouter";
import NavBarRouterMd from "./NavBarRouterMd";
import { useState } from "react";
import classNames from "classnames";

export default function Navbar() {
  const { ID, logIn } = userInfo();
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <NavBarRouter />
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {logIn ? <NavBarLogIn /> : <NavBarNotLogIn />}
          </div>
          {/* 햄버거 버튼 메뉴 */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setMenuToggle(!menuToggle)}>
              {menuToggle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={classNames("md:hidden", { hidden: !menuToggle })}>
        <NavBarRouterMd />
      </div>
    </>
  );
}
