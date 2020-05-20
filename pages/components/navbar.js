import Link from "next/link";
import React from "react";

export default () => {
  return (
    <div>
      <Link href="/">
        <a className="btn btn-warning">Home</a>
      </Link>
      <Link href="/About">
        <a className="btn btn-primary">About</a>
      </Link>
      <Link href="/Contact">
        <a className="btn btn-primary">Contact</a>
      </Link>
    </div>
  );
};
