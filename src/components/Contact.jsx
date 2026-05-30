import React from "react";

const Contact = () => {

  return (
    <div
      id="contact"
      className=" flex min-h-screen w-full flex-col items-center justify-center gap-16 p-8">
      <h2 className="text-center text-6xl font-monospace text-blue-600">
        Get in touch
      </h2>
      <form className="flex w-full max-w-md flex-col gap-8 rounded-lg p-6 md:max-w-lg">
        <input
          type="text"
          placeholder="your name"
          className="rounded-lg border-2 border-blue-400 px-4 py-3 text-lg outline-none transition-all duration-200 hovwe;bg-blue-500 focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="your email"
          className="rounded-lg border-2 border-blue-400 px-4 py-3 text-lg outline-none transition-all duration-200 hovwe;bg-blue-500 focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="your message"
          className="rounded-lg border-2 border-blue-400 px-4 py-3 text-lg outline-none transition-all duration-200 hovwe;bg-blue-500 focus:ring-2 focus:ring-blue-500 h-32 w-full resize-none "></textarea>
        <button className="rounded-lg border-none text-white px-4 py-3 text-lg outline-none transition-all duration-200 hovwe;bg-blue-500 focus:ring-2 bg-blue-500">
          Send
        </button>
      </form>
    </div>
  );
};
export default Contact;
