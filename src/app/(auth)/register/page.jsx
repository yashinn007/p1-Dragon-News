"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegisterFunc = async (data) => {
    // console.log(data);
    const { email, name, photo, password } = data;

    // there is 2 variable same name (data), so i have change this data name into res
    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/",
    });
    console.log("res:", res, error);

    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("Signup Successfull");
    }
  };

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-10 rounded-xl bg-white">
        <h2 className="font-bold text-3xl text-center mb-6">
          Register your account
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input"
              placeholder="Type your name"
              {...register("name", { required: "Name is required" })}
            />
            {/* errors will return when field validation fails  */}
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input
              type="text"
              className="input"
              placeholder="Enter your Photo URL"
              {...register("photo", { required: "Photo URL is required" })}
            />
            {/* errors will return when field validation fails  */}
            {errors.photo && (
              <span className="text-red-500">{errors.photo.message}</span>
            )}
          </fieldset>
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

          <button className="btn w-full bg-slate-800 text-white">
            Register
          </button>
        </form>

        <p className="mt-4 text-center">
          Already Have An Account ?{" "}
          <Link href={"/login"} className="text-red-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
