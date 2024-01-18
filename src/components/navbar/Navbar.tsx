"use client";
import Links from "./links/Links";

const NavBar = () => {
  return (
    <div>
      <Links />
      <style jsx>
        {`
          div {
            position: sticky;
          }
        `}
      </style>
    </div>
  );
};

export default NavBar;
