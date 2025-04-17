import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://localhost:4001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: data.email, // where you want the message to go
          subject: `Contact form submission from ${data.name}`,
          text: `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`,
        }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h3 className="font-bold text-lg">Contact Us</h3>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block font-bold">Name</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              placeholder="Enter Your Full Name"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block font-bold">Email</label>
            <input
              type="email"
              className="w-full border p-2 rounded"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block font-bold">Message</label>
            <textarea
              className="w-full border p-2 rounded"
              placeholder="Type your message"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          <button
            type="submit"
            className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
