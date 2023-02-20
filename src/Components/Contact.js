import { useState } from "react";

const Contact = () => {
  const [fName, setFirst] = useState("");
  const [lName, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const submitForm = () => {
    console.log("in submit func");
    const body = {
      firstName: fName,
      lastName: lName,
      email: email,
      message: msg,
    };
    const url = "http://localhost:8003/form";
    console.log(body);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        alert("Successfull");
        setFirst("");
        setLast("");
        setEmail("");
        setMsg("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center items-center">
      <h3 className="text-3xl py-10 mb-0 pb-0 text-gray-800 dark:text-white">
        Contact Me
      </h3>
      <h4 className="text-md py-10 mt-0 pt-2 text-gray-800 dark:text-white">
        Let's get cracking
      </h4>

      <div className="flex flex-col justify-center items-center  md:w-1/2">
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
          className="border-1 w-full border-gray-400 bg-gray-200 dark:bg-white px-4 py-3 rounded-lg placeholder:text-gray-500 mx-4 my-2"
        />
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          rows="5"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
          className="border-1 w-full border-gray-400 bg-gray-200 dark:bg-white px-4 py-3 rounded-lg placeholder:text-gray-500 mx-4 my-2"
        />

        <button
          className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md my-10 mx-0"
          onClick={() => submitForm()}
        >
          Submit
        </button>
      </div>
    </section>
  );
};

export default Contact;
