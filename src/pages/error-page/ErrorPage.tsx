import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error: any = useRouteError();
  console.error(error);
  return (
    <div className="grid place-items-center h-screen">
      <div>
        <h1 className="font-black">Oops!</h1>
        <p>Sorry, an unexpected error occurred.</p>
        <p className="italic">
          <i> {error.statusText | error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
