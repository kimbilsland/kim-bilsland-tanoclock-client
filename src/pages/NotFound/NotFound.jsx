import { useEffect } from "react";
import { Navigate } from "react-router-dom";

function NotFound() {
  useEffect(() => {
    document.title = "Page not found";
  }, []);

  return (
    <div>
      <h2>Page Not Found</h2>
      <p>Sorry, there is nothing to see here.</p>
      <Navigate to="/" />
    </div>
  );
}

export default NotFound;
