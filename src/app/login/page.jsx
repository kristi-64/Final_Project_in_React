"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import styles from "login.module.css";

const loginSchema = yup.object().shape({
  ussername: yup.string().required("სახელი სავალდებულოა"),
  password: yup
    .string()
    .required("პაროლი სავალდებულოა")
    .min(4, "მინიმუმ 4 სიმბოლო"),
});

export default function loginSchema() {
  const router = useRouter();
  const [errorMsg, useErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useform({ resolver: yupResolver(loginSchema) });
}
