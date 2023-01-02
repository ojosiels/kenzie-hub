import React, { useContext } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container } from "./style";
import { Link } from "react-router-dom";

import Form from "../../components/Form";
import { iRegisterUserData, UserContext } from "../../contexts/UserContext";

const schema = yup.object({
  name: yup.string().required("Name is necessary"),
  email: yup.string().required("Email is necessary"),
  password: yup.string().required("Password is necessary"),
  confirmPassword: yup
    .string()
    .required("Password confirmation is necessary")
    .oneOf(
      [yup.ref("password")],
      "Password confirmation must be equal to password"
    ),

  bio: yup.string().required("Bio is necessary"),
  contact: yup.string().required("Contact info is necessary"),
  course_module: yup.string().required("Module is necessary"),
});

interface iFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

export default function RegisterPage() {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterUserData>({ resolver: yupResolver(schema) });

  return (
    <Container className="headline">
      <header>
        <h1 className="title1">Kenzie Hub</h1>
        <Link to="/">Back</Link>
      </header>

      <Form onSubmit={handleSubmit(userRegister)}>
        <h2 className="title2">Register</h2>
        <p>Fast and Free, let's go</p>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Type your name"
          {...register("name")}
        />
        <p>{errors.name?.message}</p>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Type your email"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Type your password"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Type your password again"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>

        <label htmlFor="bio">Biography</label>
        <input
          type="text"
          id="bio"
          placeholder="Type your biography"
          {...register("bio")}
        />
        <p>{errors.bio?.message}</p>

        <label htmlFor="contact">Contato</label>
        <input
          type="text"
          id="contact"
          placeholder="Type your contact info"
          {...register("contact")}
        />
        <p>{errors.contact?.message}</p>

        <label htmlFor="course_module">Select your module</label>
        <select id="course_module" {...register("course_module")}>
          <option value="M1">First Module</option>
          <option value="M2">Second Module</option>
          <option value="M3">Third Module</option>
          <option value="M4">Fourth Module</option>
          <option value="M5">Fifth Module</option>
          <option value="M6">Sixth Module</option>
        </select>
        <p>{errors.course_module?.message}</p>

        <button type="submit">Register</button>
      </Form>
    </Container>
  );
}
