import Maincontent from "./Maincontent";

export default function Content_wrapper() {
  return (
    <>
      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">
        <Maincontent />

        {/* <!-- Footer --> */}

        {/* <!-- End of Footer --> */}
      </div>
      {/* <!-- End of Content Wrapper --> */}
    </>
  );
}
