import Head from "./Head";
import Navbar from "./navbar";

export default (props) => {
  return (
    <>
      <Head />
      <Navbar />
      {props.children}
    </>
  );
};
