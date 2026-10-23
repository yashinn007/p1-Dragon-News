"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginFunc = (data) => {
    //console.log(data);
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-10 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          Login your account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input
              type="email"
              className="input"
              placeholder="Type your email"
              {...register("email", { required: "Email is required" })}
            />
            {/* errors will return when field validation fails  */}
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input"
              {...register("password", { required: "Password is required" })}
              placeholder="Type your password"
            />
            {/* errors will return when field validation fails  */}
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </fieldset>

          <button className="btn w-full bg-slate-800 text-white">Login</button>
        </form>

        <p className="mt-4 text-center">
          Dont’t Have An Account ?{" "}
          <Link href={"/register"} className="text-red-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
