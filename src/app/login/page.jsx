"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

const loginSchema = yup.object().shape({
  username: yup.string().required("სახელი სავალდებულოა"),
  password: yup
    .string()
    .required("პაროლი სავალდებულოა")
    .min(4, "მინიმუმ 4 სიმბოლო"),
});

export default function loginSchemaPage() {
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(loginSchema) });

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

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h2> login </h2>
        {errorMsg && <p className={styles.serverError}>{errorMsg}</p>}

        <div className={styles.inputGroup}>
          <label>მომხმარებლისსახელი:</label>
          <input
            type="text"
            placeholder="მაგ: johnd"
            {...register("username")}
          />
          {errors.username && (
            <p className={styles.error}>{errors.username.message}</p>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label>პაროლი (Password):</label>
          <input
            type="password"
            placeholder="მაგ: m38rmF$"
            {...register("password")}
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
        </div>

        <div className={styles.checkboxGroup}>
          <input type="checkbox" id="rememberMe" {...register("rememberMe")} />
          <label htmlFor="rememberMe">Remember me</label>
        </div>

        <button type="submit" disabled={isSubmitting} className={styles.btn}>
          {isSubmitting ? "იტვირთება..." : "შესვლა"}
        </button>
      </form>
    </div>
  );
}
