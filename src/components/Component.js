import Sidebar from "./Sidebar";
import Contentwrapper from "./Contentwrapper";

// import { GoRocket } from "react-icons/go";

export default function Component() {
  return (
    <>
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <Sidebar />
        <Contentwrapper />
      </div>
    </>
  );
}
