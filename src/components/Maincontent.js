import Topbar from "./Topbar";
import Containerfluid from "./Containerfluid";
export default function Maincontent() {
  return (
    <>
      {/* <!-- Main Content --> */}
      <div id="content">
        {/* <!-- Topbar --> */}
        <Topbar />
        {/* <!-- End of Topbar --> */}

        {/* <!-- Begin Page Content --> */}
        <Containerfluid />
        {/* <!-- /.container-fluid --> */}
      </div>
      {/* <!-- End of Main Content --> */}
    </>
  );
}
