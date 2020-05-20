import React, { useState } from "react";
import Layout from "./components/Layout";

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <Layout>
      <h1>{counter}</h1>{" "}
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -1
      </button>
    </Layout>
  );
}
