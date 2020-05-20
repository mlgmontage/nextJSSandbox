import React, { useState } from "react";
import Layout from "./components/Layout";

export default function Home() {
  const [counter, setCounter] = useState({ first: 0, second: 0 });

  return (
    <Layout>
      <h1>
        first: {counter.first}, second: {counter.second}
      </h1>{" "}
      <button
        className="btn btn-info"
        onClick={() => {
          setCounter({ ...counter, first: counter.first + 1 });
        }}
      >
        +1
      </button>
      <button
        className="btn btn-info"
        onClick={() => {
          setCounter({ ...counter, second: counter.second + 1 });
        }}
      >
        +1
      </button>
    </Layout>
  );
}
