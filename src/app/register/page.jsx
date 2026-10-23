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
