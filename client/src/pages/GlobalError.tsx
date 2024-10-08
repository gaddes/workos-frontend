import { useRouteError } from "react-router-dom";

export const GlobalError = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {/* @ts-expect-error - `unknown` error type imported from react-router-dom */}
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};
