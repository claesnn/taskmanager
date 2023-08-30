import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
      <h1>Error</h1>
      <pre>{error.statusText || error.message}</pre>
    </div>
  );
}
