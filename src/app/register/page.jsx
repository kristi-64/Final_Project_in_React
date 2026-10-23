"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./register.module.css";

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("სახელის ველი სავალდებულოა")
    .min(2, "სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს")
    .max(50, "სახელი უნდა შეიცავდეს მაქსიმუმ 50 სიმბოლოს"),
  lastName: yup
    .string()
    .required("გვარის ველი სავალდებულოა")
    .min(2, "გვარი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს")
    .max(50, "გვარი უნდა შეიცავდეს მაქსიმუმ 50 სიმბოლოს"),
  age: yup
    .number()
    .required("ასაკის ველი სავალდებულოა")
    .min(18, "თქვენ უნდა იყოთ მინიმუმ 18 წლის")
    .max(100, "ასაკი უნდა იყოს მაქსიმუმ 100"),
  mail: yup
    .string()
    .required("ელფოსტის ველი სავალდებულოა")
    .email("გამოყენეთ ვალიდური ელფოსტის მისამართი"),
  password: yup
    .string()
    .required("პაროლის ველი სავალდებულოა")
    .min(6, "პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს")
    .max(20, "პაროლი უნდა შეიცავდეს მაქსიმუმ 20 სიმბოლოს"),
  phone: yup
    .string()
    .required("ტელეფონის ველი სავალდებულოა")
    .matches(
      /^\+995\d{9}$/,
      "გამოყენეთ ვალიდური ქართული ტელეფონის ნომერი (+995XXXXXXXXX)",
    ),
});

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = theFetchCall(data);
      const responseObj = await response;
      if (responseObj.ok) {
        alert("მომხმარებელი წარმატებით დარეგისტრირდა!");
        reset();
      }
    } catch (error) {
      console.error("შეცდომა:", error);
    }
  };

  const theFetchCall = async (data) => {
    return await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };
  return (
    <div className={styles.formContainer}>
      <h2>რეგისტრაცია</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div>
          <label>სახელი:</label>
          <input type="text" {...register("firstName")} />
          {errors.firstName && (
            <p className={styles.error}>{errors.firstName.message}</p>
          )}
        </div>

        <div>
          <label>გვარი:</label>
          <input type="text" {...register("lastName")} />
          {errors.lastName && (
            <p className={styles.error}>{errors.lastName.message}</p>
          )}
        </div>

        <div>
          <label>ასაკი:</label>
          <input type="number" {...register("age")} />
          {errors.age && <p className={styles.error}>{errors.age.message}</p>}
        </div>

        <div>
          <label>იმეილი:</label>
          <input type="email" {...register("email")} />
          {errors.email && (
            <p className={styles.error}>{errors.email.message}</p>
          )}
        </div>

        <div>
          <label>პაროლი:</label>
          <input type="password" {...register("password")} />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
        </div>

        <div>
          <label>ტელეფონი:</label>
          <input type="text" {...register("phone")} />
          {errors.phone && (
            <p className={styles.error}>{errors.phone.message}</p>
          )}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "იგზავნება..." : "რეგისტრაცია"}
        </button>
      </form>
    </div>
  );
}
