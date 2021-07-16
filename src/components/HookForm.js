import React from "react";
import { useForm } from "react-hook-form";

export default function HookForm() {
  const { register, handleSubmit, errors } = useForm();
  const submitt = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(submitt)}>
      <input {...register("email")} />
      <input type="submit"></input>
      {errors.email && <span>This field is required</span>}
    </form>
  );
}
