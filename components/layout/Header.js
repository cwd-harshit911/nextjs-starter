import Link from "next/link";
import PreHeader from "./PreHeader";
import { BiSearch } from "react-icons/bi";
import { BsHandbag, BsFillHeartFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <div>
      <PreHeader />
      <div className="header">
        <div className="header__logo">
          <Link href="/">
            <p>BIZMERCE</p>
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__">
            <Link href="/">
              <p>Shop All</p>
            </Link>
            <Link href="/">
              <p>Gift Guide</p>
            </Link>
            <Link href="/">
              <p>Paper Planers</p>
            </Link>
            <Link href="/">
              <p>Desk Supplies</p>
            </Link>
            <Link href="/">
              <p>Home Decor</p>
            </Link>
            <Link href="/">
              <p>Apparel & Accessories</p>
            </Link>
            <Link href="/">
              <p>Wholesale</p>
            </Link>
            <Link href="/">
              <p>Login</p>
            </Link>
          </div>
          <div className="header__menu__icons">
            <Link href="/">
              <BiSearch className="header__icon" />
            </Link>
            <Link href="/">
              <BsHandbag className="header__icon" />
            </Link>
            <Link href="/">
              <BsFillHeartFill className="header__icon" />
            </Link>
            <Link href="/">
              <AiOutlineMenu className="header__icon icon_display_none" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
