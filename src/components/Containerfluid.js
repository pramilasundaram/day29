import Earning from "./Earning";
import { FaCircle, FaEllipsisV } from "react-icons/fa";
import Graph from "./Graph";
import Donut from "./Donut";
import Pageheading from "./Pageheading";

import Navbar from "../Navbar";
export default function Containerfluid() {
  return (
    <div className="container-fluid">
      <Pageheading />
      <Earning />
      <div className="row">
        {/* <!-- Area Chart --> */}
        <div className="col-xl-8 col-lg-7">
          <div className="card shadow mb-4">
            {/* <!-- Card Header - Dropdown --> */}
            <div className="card-header py-3 d-flex flex-row ">
              <h6 className="m-0 font-weight-bold text-primary">
                Placement (Year wise)
              </h6>
              <div className="dropdown no-arrow">
                <a
                  className="dropdown-toggle"
                  href="/"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FaEllipsisV />
                  {/* <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i> */}
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="dropdown-header">Dropdown Header:</div>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Card Body --> */}
            <div className="card-body">
              <Graph />
            </div>
          </div>
        </div>

        {/* <!-- Pie Chart --> */}
        <div className="col-xl-4 col-lg-5">
          <div className="card shadow mb-4">
            {/* <!-- Card Header - Dropdown --> */}
            <div className="card-header py-3 d-flex flex-row ">
              <h6 className="m-0 font-weight-bold text-primary">
                Total students
              </h6>
              <div className="dropdown no-arrow">
                <a
                  className="dropdown-toggle"
                  href="/"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <FaEllipsisV />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                  aria-labelledby="dropdownMenuLink"
                >
                  <div className="dropdown-header">Dropdown Header:</div>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Card Body --> */}
            <div className="card-body">
              <Donut />
            </div>
            <div class="mt-4 text-center small">
              <span id="a">
                <FaCircle />{" "}
              </span>
              <span className="mr-2">
                tamilNadu
                {/* <i class="fas fa-circle text-primary"></i> Direct */}
              </span>
              <span id="b">
                <FaCircle />{" "}
              </span>
              <span className="mr-2">
                Other states
                {/* <i class="fas fa-circle text-success"></i> Social */}
              </span>
              <span id="c">
                <FaCircle />{" "}
              </span>
              <span className="mr-2">
                Other countries
                {/* <i class="fas fa-circle text-info"></i> Referral */}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Content Row --> */}
      <div className="row">
        {/* <!-- Content Column --> */}
        <div className="col-lg-6 mb-4">
          {/* <!-- Project Card Example --> */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                Teaching Staffs
              </h6>
            </div>
            <div className="card-body">
              <h4 className="small font-weight-bold">
                Lecturers
                <span className="float-right">10%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-danger"
                  role="progressbar"
                  style={{ width: "10%" }}
                  aria-valuenow={10}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <h4 className="small font-weight-bold">
                Assistant professors <span className="float-right">50%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-warning"
                  role="progressbar"
                  style={{ width: "40%" }}
                  aria-valuenow={40}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <h4 className="small font-weight-bold">
                Associate professors <span className="float-right">30%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "30%" }}
                  aria-valuenow={30}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <h4 className="small font-weight-bold">
                professors <span className="float-right">18%</span>
              </h4>
              <div className="progress mb-4">
                <div
                  className="progress-bar bg-info"
                  role="progressbar"
                  style={{ width: "18%" }}
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
              <h4 className="small font-weight-bold">
                Guest lecturers <span className="float-right">2%</span>
              </h4>
              <div className="progress">
                <div
                  className="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: "2%" }}
                  aria-valuenow={2}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          {/* <!-- Illustrations --> */}
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">
                students and teachers
              </h6>
            </div>
            <div className="card-body">
              <p>
                <Navbar />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
