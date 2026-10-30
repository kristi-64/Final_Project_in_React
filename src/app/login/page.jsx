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

  const onSubmit = async (data) => {
    try {
      setErrorMsg("");
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
      });

      if (!response.ok) {
        throw new Error("არასწორი მომხმარებლის სახელი ან პაროლი!");
      }
      const result = await response.json();

      if (result.token) {
        localStorage.setItem("authToken", result.token);

        alert("თქვენ წარმატებით გაიარეთ ავტორიზაცია!");
        router.push("/profile");
      }
    } catch (err) {
      setErrorMsg(
        err.message || "ავტორიზაცია ვერ განხორციელდა. გთხოვთ სცადოთ თავიდან.",
      );
    }
  };
}
