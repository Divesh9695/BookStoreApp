import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://localhost:4001/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        // You can store the token if needed
        // localStorage.setItem("token", result.token);
        alert("Login successful!");
        document.getElementById("my_modal_3")?.close();
        navigate("/"); // Or redirect to dashboard
      } else {
        setServerError(result.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login Error:", error);
      setServerError("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Close button */}
            <button
              type="button"
              onClick={() => document.getElementById("my_modal_3")?.close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>

            <div className="hero bg-base-200 w-full">
              <div className="hero-content flex-col w-full lg:flex-row-reverse">
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                  <div className="card-body">
                    <fieldset className="fieldset">
                      <label className="fieldset-label">Email</label>
                      <input
                        type="email"
                        className="input"
                        placeholder="Enter your email"
                        {...register("email", { required: true })}
                      />
                      {errors.email && (
                        <span className="text-pink-500">This field is required</span>
                      )}

                      <label className="fieldset-label">Password</label>
                      <input
                        type="password"
                        className="input"
                        placeholder="Password"
                        {...register("password", { required: true })}
                      />
                      {errors.password && (
                        <span className="text-pink-500">This field is required</span>
                      )}

                      {serverError && (
                        <p className="text-red-500 text-sm mt-2">{serverError}</p>
                      )}

                      <div className="flex justify-around mt-4">
                        <button
                          type="submit"
                          className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
                        >
                          Login
                        </button>
                        <p>
                          Not registered?{" "}
                          <Link
                            to="/signup"
                            className="underline text-blue-500 cursor-pointer"
                          >
                            Signup
                          </Link>
                        </p>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
