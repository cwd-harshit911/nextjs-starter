import Link from "next/link";
import PreHeader from "./PreHeader";

const Header = () => {
  return (
    <div>
      <PreHeader />
      <div className="header">
        <h1>Header</h1>
      </div>
    </div>
  );
};

export default Header;
