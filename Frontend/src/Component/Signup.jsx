import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Login from '../Component/Login';
import { useForm } from "react-hook-form";

const Signup = () => {
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:4001/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: data.name,
          email: data.email,
          password: data.password,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        alert("Signup successful!");
        navigate("/"); // redirect to homepage or dashboard
      } else {
        setServerError(result.message || "Signup failed");
      }
    } catch (err) {
      console.error("Signup Error:", err);
      setServerError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      <div id="my_modal_3" className="w-md">
        <div className="model-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <div className="relative">
              <Link to="/" className="z-50 text-black btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            </div>

            <div className="hero bg-base-200 w-full">
              <div className="hero-content flex-col w-full lg:flex-row-reverse">
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                  <div className="card-body">
                    <h3 className='font-bold text-lg'>Signup</h3>

                    <fieldset className="fieldset">
                      <label className="fieldset-label font-bold">Name</label>
                      <input
                        type="text"
                        className="input"
                        placeholder="Enter Your fullname"
                        {...register("name", { required: true })}
                      />
                      {errors.name && <span className='text-pink-500'>This field is required</span>}

                      <label className="fieldset-label font-bold">Email</label>
                      <input
                        type="email"
                        className="input"
                        placeholder="Email"
                        {...register("email", { required: true })}
                      />
                      {errors.email && <span className='text-pink-500'>This field is required</span>}

                      <label className="fieldset-label font-bold">Password</label>
                      <input
                        type="password"
                        className="input"
                        placeholder="Password"
                        {...register("password", { required: true })}
                      />
                      {errors.password && <span className='text-pink-500'>This field is required</span>}

                      {serverError && <p className="text-red-500 mt-2">{serverError}</p>}

                      <div className="flex justify-between mt-4">
                        <button
                          type="submit"
                          className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700"
                        >
                          Signup
                        </button>

                        <p className='text-xl'>
                          Have an account?{" "}
                          <button
                            type="button"
                            className="underline text-blue-500"
                            onClick={() => document.getElementById("my_modal_3")?.showModal()}
                          >
                            Login
                          </button>
                          <Login />
                        </p>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
