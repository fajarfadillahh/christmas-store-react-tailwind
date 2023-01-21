import React from "react";

// import components
import Button from "./Button";

// import image
import MessageImg from "../assets/images/message.png";

export default function Message() {
  return (
    <section className="message section transition-all duration-400 dark:bg-gray-900">
      <div className="message__container container rounded-3xl bg-red-600 py-16 px-8 transition-all duration-400 dark:bg-gray-800 lg:py-28 xl:max-w-5xl xl:py-32">
        <div className="message__wrapper grid gap-12 xs:mx-auto xs:max-w-sm lg:max-w-3xl lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="message__title section-title text-center text-white">
              Send the best <br />
              your wishes!
            </h1>
            <form action="" className="message__form grid gap-4">
              <input
                type="email"
                placeholder="Write your message"
                className="message__input h-14 w-full rounded-full bg-white px-6 text-[15px] font-semibold text-gray-900 outline-none placeholder:font-medium placeholder:text-gray-400"
              />
              <Button url="/" className="message__button bg-gray-900">
                Send message
              </Button>
            </form>
          </div>

          <img
            src={MessageImg}
            alt="message img"
            className="message__img w-64 rotate-12 justify-self-center"
          />
        </div>
      </div>
    </section>
  );
}
