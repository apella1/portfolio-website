import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);
  return (
    <div className="flex flex-col p-4 bg-gray-50">
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <p>{error.statusText}</p>
        <h1 className="text-6xl font-bold">Page not found</h1>
        <p>Sorry, an unexpected error occurred.</p>
        <p className="italic">
          <i>{error.message}</i>
        </p>
        <Link to="/" className="px-4 py-2 text-white bg-green-600 rounded-md">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
