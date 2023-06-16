import { FaDownload } from "react-icons/fa";
export default function Pageheading() {
  return (
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 className="h3 mb-0 text-gray-800">Admin Dashboard</h1>
      <a
        href="/"
        className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
      >
        <FaDownload />
        Generate Report
      </a>
    </div>
  );
}
