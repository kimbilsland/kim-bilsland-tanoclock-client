import { useEffect } from "react";
import './NotFound.scss'

function NotFound() {
  useEffect(() => {
    document.title = "Page not found";
  }, []);

  return (
    <div className="error-page">
      <h1 className="error-page__header">Page Not Found</h1>
      <p className="error-page__text">Sorry, there is nothing to see here.</p> 
    </div>
  );
}

export default NotFound;
