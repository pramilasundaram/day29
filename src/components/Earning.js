import { FaClipboardList } from "react-icons/fa";
import { IoIosPeople, IoIosPerson, IoIosSettings } from "react-icons/io";
import { useContext } from "react";
import Context from "../Context";
export default function Earning() {
  const context = useContext(Context);
  return (
    <div className="row">
      <div className="col-xl-3 col-md-6 mb-4" onClick>
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  mangage students
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {context.studentcount} students
                </div>
              </div>
              <div className="col-auto">
                <IoIosPeople />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Earnings (Monthly) Card Example --> */}
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                  Manage teachers
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {context.teachercount} teachers
                </div>
              </div>
              <div className="col-auto">
                <IoIosPerson />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Earnings (Monthly) Card Example --> */}
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-info shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                  Admission
                </div>
                <div className="row no-gutters align-items-center">
                  <div className="col-auto">
                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                      90%
                    </div>
                  </div>
                  <div className="col">
                    <div className="progress progress-sm mr-2">
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: 90 }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto">
                <FaClipboardList />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Pending Requests Card Example --> */}
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-danger text-uppercase mb-1">
                  manage employees
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  18 employees
                </div>
              </div>
              <div className="col-auto">
                <IoIosSettings />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
