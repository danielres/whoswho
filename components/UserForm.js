import React from "react";
import { useForm } from "react-hook-form";
import { User } from "../src/ui/queries";
import { Button } from "./ui/Button";
import { Input } from "./ui/forms/Input";
import { patterns } from "./ui/forms/patterns";
import { Stack } from "./ui/Stack";

export const UserForm = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => {
    console.log({ values });
    User.create(values).then((user) => console.log(user));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Input
          label="Email"
          name="email"
          errors={errors}
          register={register}
          pattern={patterns.email}
          required={true}
        />

        <Input
          label="Username"
          name="name"
          errors={errors}
          register={register}
          validate={(value) => value !== "admin" || "Nice try!"}
        />

        <div>
          <Button type="submit">Submit</Button>
        </div>
      </Stack>
    </form>
  );
};
