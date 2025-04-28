"use client";

import {
  LoginSchemaFormData,
  loginSchema,
} from "@/lib/validations/auth.schema";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "@/lib/firebase";
import { useBackdrop } from "@/context/backdrop_context";

export function useLogin() {
  const [typePassword, setTypePassword] = useState<boolean>(false);

  const {
    register,
    watch,
    setError,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchemaFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { showBackdrop, hideBackdrop } = useBackdrop();
  const onSubmit = async (request: LoginSchemaFormData) => {
    try {
      showBackdrop();
      await signInWithEmailAndPassword(auth, request.email, request.password);
      window.location.href = "/graph";
    } catch (err) {
      setError("email", {
        message: "Xin vui lòng kiểm tra lại email hoặc mật khẩu",
      });
    } finally {
      hideBackdrop();
    }
  };
  const valuePassword = watch("password");

  const handleToggleTypePassword = () => {
    setTypePassword((prev) => !prev);
  };

  return {
    register,
    errors,
    handleSubmit,
    onSubmit,
    valuePassword,
    typePassword,
    handleToggleTypePassword,
  };
}
