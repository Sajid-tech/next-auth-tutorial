import React from "react";
import SigninButton from "./SigninButton";

const Navbar = () => {
  return (
    <header className=" text-center mt-4 text-5xl bg-gradient-to-b from-white to-gray-200 shadow">
      <SigninButton />
    </header>
  );
};

export default Navbar;
