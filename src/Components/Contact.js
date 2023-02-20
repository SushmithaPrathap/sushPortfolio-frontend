import { useState, useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [fName, setFirst] = useState("");
  const [lName, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");
  const form = useRef();

  // const submitForm = () => {
  //   console.log("in submit func");
  //   const body = {
  //     firstName: fName,
  //     lastName: lName,
  //     email: email,
  //     message: message,
  //   };
  //   const url = "http://localhost:8003/form";
  //   console.log(body);
  //   fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(body),
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log("Success:", result);
  //       alert("Successfull");
  //       setFirst("");
  //       setLast("");
  //       setEmail("");
  //       setmessage("");
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // };

  const sendEmail = (e) => {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it
    console.log("target", e.target);
    let body = {
      first_name: fName,
      last_name: lName,
      email: email,
      message: message,
    };
    emailjs
      .sendForm(
        "service_d2927dn",
        "template_n04ehzk",
        form.current,
        "ldovodHbj484q42Ae"
      )
      .then(
        (result) => {
          alert("Message Sent, I will get back to you shortly", result.text);
          console.log("success", result);
          setFirst("");
          setLast("");
          setEmail("");
          setmessage("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center"
    >
      <h3 className="text-3xl py-10 mb-0 pb-0 text-gray-800 dark:text-white">
        Contact Me
      </h3>
      <h4 className="text-md py-10 mt-0 pt-2 text-gray-800 dark:text-white">
        Let's get cracking
      </h4>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col justify-center items-center  md:w-1/2"
      >
        <div className="flex flex-row justify-center items-center w-full">
          <input
            name="fName"
            id="fName"
            placeholder="First Name"
            onChange={(e) => setFirst(e.target.value)}
            value={fName}
            className="border-1 w-full border-gray-400 bg-gray-200 dark:bg-white px-4 py-3 rounded-lg placeholder:text-gray-500 mr-2 my-2"
          />
          <input
            name="lName"
            id="lName"
            placeholder="Last Name"
            onChange={(e) => setLast(e.target.value)}
            value={lName}
            className="border-1 w-full border-gray-400 bg-gray-200 dark:bg-white px-4 py-3 rounded-lg placeholder:text-gray-500 ml-2 my-2"
          />
        </div>
        <input
          name="email"
          id="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="border-1 w-full border-gray-400 bg-gray-200 dark:bg-white px-4 py-3 rounded-lg placeholder:text-gray-500  my-2"
        />
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          rows="5"
          onChange={(e) => setmessage(e.target.value)}
          value={message}
          className="border-1 w-full border-gray-400 bg-gray-200 dark:bg-white px-4 py-3 rounded-lg placeholder:text-gray-500  my-2"
        />

        <input
          type="submit"
          value="Submit"
          className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md my-10 mx-0"
        />

        {/* <button
            className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md my-10 mx-0"
            onClick={(e) => sendEmail(e)}
          >
            Submit
          </button> */}
      </form>
    </section>
  );
};

export default Contact;
