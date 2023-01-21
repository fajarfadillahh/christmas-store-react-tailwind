import React from "react";

// import components
import Button from "./Button";

// import image
import MessageImg from "../assets/images/message.png";

export default function Message() {
  return (
    <section className="message section">
      <div className="message__container container grid gap-12 rounded-3xl bg-red-600 py-16 px-8">
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
          className="message__img w-64 rotate-12"
        />
      </div>
    </section>
  );
}
