import { useRouteError } from "react-router-dom";
import { isRouteErrorResponse } from "react-router-dom";
import NavBar from "../components/NavBar";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className="ms-3">
        <h1>Oops!!.. Sorry</h1>
        <p>
          {isRouteErrorResponse(error)
            ? "This Page is Invalid"
            : "You Have Runned Into an Error!!"}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
