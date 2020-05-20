import Link from "next/link";
import React from "react";

export default () => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/About">
        <a>About</a>
      </Link>
      <Link href="/Contact">
        <a>Contact</a>
      </Link>
    </div>
  );
};
