import { Link } from "react-router-dom";

export const NotFoundMessage = () => {
  return (
    <div className="m-auto h-screen flex-center">
      <div className="w-3xl">
        <h2 className="title-h3">Sorry we can't find that page...</h2>
        {/* <div className="bg-image-notfound mb-10" /> */}
        <Link to="/" className="btn-primary block m-auto max-w-50">
          Return to main page.
        </Link>
      </div>
    </div>
  );
};
