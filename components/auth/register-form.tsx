"use client";

import { register } from "@/actions/register";
import signUpSchema, { SignUpFormData } from "@/core/schemas/sign-up";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoadingButton } from "@mui/lab";
import { Avatar, Divider, TextField, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Controller, useForm } from "react-hook-form";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiLock } from "react-icons/fi";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";

export const RegisterForm = () => {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({ resolver: zodResolver(signUpSchema) });
  const onSubmit = async (data: SignUpFormData) => {
    const { email, password, name } = data;
    startTransition(async () => {
      const res = await register({
        email,
        password,
        name,
      });
      reset();
      if (res?.error) {
        setError(res?.error);
      } else {
        setSuccess("User successfully created!");
      }
    });
  };
  return (
    <div className="w-96 flex flex-col items-center">
      <div className="gap-y-3 flex items-center flex-col mb-5">
        <Avatar sx={{ bgcolor: blue[500] }}>
          <FiLock />
        </Avatar>
        <Typography variant="h5">Sign Up</Typography>
      </div>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-y-5">
          <Controller
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Name"
                placeholder="John Doe"
                helperText={errors.name?.message}
                error={!!errors.name}
                fullWidth
              />
            )}
            name="name"
          />
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
          <FormError message={error} />
          <FormSuccess message={success} />
          <LoadingButton
            loading={isPending}
            type="submit"
            variant="contained"
            fullWidth
          >
            Register
          </LoadingButton>
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
