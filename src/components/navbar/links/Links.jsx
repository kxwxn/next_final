"use client";
import React from "react";
import Link from "next/link";

const Links = () => {
  const links = [
    { title: "face", path: "/" },
    { title: "body", path: "/body" },
    { title: "brain", path: "/brain" },
    { title: "ear", path: "/ear" },
    { title: "eye", path: "/eye" },
    { title: "soul", path: "/soul" },
  ];

  return (
    <div className="container">
      {links.map((link, index) => {
        return (
          <Link href={link.path} key={index} legacyBehavior>
            <a>{link.title}</a>
          </Link>
        );
      })}
      <style jsx>
        {`
          a {
            margin: 15px;
          }
          .container{
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </div>
  );
};

export default Links;
