import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactMe() {
  const [status, setStatus] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e, "hi this is conole");
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_y6ivofq", "template_8i36z9l", form.current, {
        publicKey: "1kfudHHzKPJC0ovs_",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setStatus(true);
          setTimeout(() => {
            setStatus(false);
          }, 1000);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Send me your complete information in message and i'll contact you
          shortly.
        </p>
      </div>

      <form
        ref={form}
        className="contact--form--container"
        onSubmit={sendEmail}
      >
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Name</span>
            <input
              type="text"
              className="contact--input text-md"
              name="to_name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              name="from_name"
              id="email"
              required
            />
          </label>
        </div>

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            name="message"
            placeholder="Type your message..."
          />
        </label>

        <div>
          <button className="btn btn-primary contact--form--btn">
            {status ? "Sent Successfuly" : "Send"}
          </button>
        </div>
      </form>
    </section>
  );
}
