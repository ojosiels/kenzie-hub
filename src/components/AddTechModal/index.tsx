import React, { useContext } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Container from "./style";
import Form from "../Form";
import { TechContext } from "../../contexts/TechContext";

interface iFormInputs {
  title: string;
  status: string;
}

const schema = yup.object({
  title: yup.string().required("Nome é obrigatório"),
  status: yup.string().required("Status é obrigatória"),
});

const AddTechModal = () => {
  const { addTech, setAddTechModal } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iFormInputs>({ resolver: yupResolver(schema) });

  return (
    <Container>
      <div className="overlay">
        <div className="content">
          <div>
            <h2>Register Technology</h2>
            <span
              onClick={() => {
                setAddTechModal(false);
              }}
            >
              X
            </span>
          </div>
          <Form onSubmit={handleSubmit(addTech)}>
            <label htmlFor="title">Name</label>
            <input
              id="title"
              type="text"
              placeholder="Type technology name"
              {...register("title")}
            />
            <p>{errors.title?.message}</p>

            <label htmlFor="status">Status</label>
            <select
              id="status"
              placeholder="Digite o status"
              {...register("status")}
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediary">Intermediary</option>
              <option value="Advanced">Advanced</option>
              <option value="Master">Master</option>
            </select>
            <p>{errors.status?.message}</p>

            <button>Register Technology</button>
          </Form>
        </div>
      </div>
    </Container>
  );
};

export default AddTechModal;
