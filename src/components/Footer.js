import { FaAngleUp } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="sticky-footer bg-white">
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
          <span>Copyright &copy; Your Website 2021</span>

          <a href="/" className="pageup">
            <FaAngleUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
