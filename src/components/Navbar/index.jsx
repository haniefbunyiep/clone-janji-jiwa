import { RiArrowDropDownLine } from "react-icons/ri";

export default function Navbar() {
  return (
    <div className="relative flex h-[80px] w-full items-center justify-between bg-white bg-opacity-[50%] px-[200px] py-[20px] font-bold">
      <div className="flex h-[40px] items-center justify-center gap-10">
        {/* Brand */}
        <div className="dropdown dropdown-hover bg-opacity-0">
          <div tabIndex={0} role="button" className="flex items-center">
            BRAND <RiArrowDropDownLine size={30} />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] w-52 rounded-none bg-base-100 p-2 shadow"
          >
            <li className="font-light">
              <a>Jiwa Group</a>
            </li>
          </ul>
        </div>
        {/* Partnership */}
        <div className="dropdown dropdown-hover bg-opacity-0">
          <div tabIndex={0} role="button" className="flex items-center">
            PARTNERSHIP <RiArrowDropDownLine size={30} />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] w-52 rounded-none bg-base-100 p-2 shadow"
          >
            <li className="font-light">
              <a>Brand Licensing</a>
              <a>Location Partnership</a>
            </li>
          </ul>
        </div>
      </div>
      <img
        className="absolute left-[50%] h-[40px] translate-x-[-50%]"
        src="https://jiwagroup.com/assets/img/jiwa-logo.png"
        alt=""
      />
      <div className="flex h-[40px] items-center justify-center gap-10">
        <p>JIWA+</p>
        {/* Corporate */}
        <div className="dropdown dropdown-hover bg-opacity-0">
          <div tabIndex={0} role="button" className="flex items-center">
            CORPORATE <RiArrowDropDownLine size={30} />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] w-52 rounded-none bg-base-100 p-2 shadow"
          >
            <li className="font-light">
              <a>About Us</a>
              <a>Career</a>
              <a>Career</a>
              <a>Contact</a>
              <a>ESG</a>
            </li>
          </ul>
        </div>
        {/* Account */}
        <div className="dropdown dropdown-hover bg-opacity-0">
          <div tabIndex={0} role="button" className="flex items-center">
            ACCOUNT <RiArrowDropDownLine size={30} />
          </div>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] w-52 rounded-none bg-base-100 p-2 shadow"
          >
            <li className="font-light">
              <a>Log In</a>
              <a>sign Up</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-3">
          <img
            className="h-[25px]"
            src="https://jiwagroup.com/assets/img/lang-id.png"
            alt=""
          />
          {" | "}
          <img
            className="h-[25px]"
            src="https://jiwagroup.com/assets/img/lang-en.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
