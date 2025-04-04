import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data ) => {
    console.log(data);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h3 className="font-bold text-lg ">Contact Us</h3><br/>
        <form onSubmit={handleSubmit(onSubmit)}>
    
          <div className="mb-4">
            <label className="block font-bold">Name</label>
            <input
              type="text"
              className="w-full border p-2 rounded"
              placeholder="Enter Your Full Name"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="mb-4">
            <label className="block font-bold">Email</label>
            <input
              type="email"
              className="w-full border p-2 rounded"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="text-red-500">This field is required</span>}
          </div>

          <div className="mb-4">
            <label className="block font-bold">Massage</label>
            <input
              type="type"
              className="w-full  border p-7 rounded"
              placeholder="type your massage"
              {...register("massage", { required: true })}
            />
            {errors.massage && <span className="text-red-500">This field is required</span>}
          </div>

          <button type="submit" className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
