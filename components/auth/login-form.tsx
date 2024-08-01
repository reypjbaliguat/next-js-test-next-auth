"use client";

import signInSchema, { SignInFormData } from "@/core/schemas/sign-in";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Avatar, Divider, TextField, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiLock } from "react-icons/fi";

export const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({ resolver: zodResolver(signInSchema) });
  const onSubmit = async (data: SignInFormData) => {};
  return (
    <div className="w-96 flex flex-col items-center">
      <div className="gap-y-3 flex items-center flex-col mb-5">
        <Avatar sx={{ bgcolor: blue[500] }}>
          <FiLock />
        </Avatar>
        <Typography variant="h5">Sign in</Typography>
      </div>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-5">
          <Controller
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Email address"
                placeholder="email@gmail.com"
                helperText={errors.email?.message}
                error={!!errors.email}
                fullWidth
              />
            )}
            name="email"
          />
          <Controller
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Password"
                type="password"
                placeholder="******"
                helperText={errors.email?.message}
                error={!!errors.email}
                fullWidth
              />
            )}
            name="password"
          />
          <LoadingButton
            loading={isSubmitting}
            type="submit"
            variant="contained"
            fullWidth
          >
            Login
          </LoadingButton>
          <div className="flex w-full justify-between text-sm text-blue-500 underline">
            <Link href="/"> Forgot password?</Link>
            <Link href="/sign-up"> Don&apos;t have an account? Sign Up </Link>
          </div>
        </div>
      </form>
      <Divider className="w-full text-gray-600 py-7">OR</Divider>
      <div className="flex gap-x-5">
        <FcGoogle className="w-7 h-7 cursor-pointer" />
        <FaGithub className="w-7 h-7 cursor-pointer" />
      </div>
    </div>
  );
};
