import React from "react";

// import components
import Button from "../../components/Button";

export default function ErrorMessage() {
  return (
    <div className="error flex h-screen w-full items-center justify-center dark:bg-gray-900">
      <div className="error__data text-center">
        <h1 className="error__title section-title xl:text-[42px]">
          404 Not Found
        </h1>
        <p className="error__text section-text section-bottom">
          The page you're looking for was not found.
        </p>
        <Button url="/" className="error__button xl:inline-flex">
          Back to home
        </Button>
      </div>
    </div>
  );
}
