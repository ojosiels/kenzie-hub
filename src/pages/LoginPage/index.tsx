import React, { useEffect, useContext } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Container } from "./style";
import { Link } from "react-router-dom";

import Form from "../../components/Form";
import { UserContext } from "../../contexts/UserContext";

const schema = yup.object({
  email: yup.string().required("Email é obrigatório"),
  password: yup.string().required("Senha é obrigatória"),
});

interface iFormInputs {
  email: string;
  password: string;
}

export default function LoginPage() {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormInputs>({ resolver: yupResolver(schema) });

  return (
    <Container className="headline">
      <h1 className="title1">Kenzie Hub</h1>
      <Form onSubmit={handleSubmit(userLogin)}>
        <h2 className="title2">Login</h2>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Type your email here"
          {...register("email")}
        />
        <p>{errors.email?.message}</p>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Type your password here"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>

        <button type="submit">Login</button>
        <p>Are you not registered yet?</p>
        <Link to="/register">Register</Link>
      </Form>
    </Container>
  );
}
