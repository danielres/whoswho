import React from "react";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import { User } from "../src/ui/queries";
import { Button } from "./ui/Button";
import { Input } from "./ui/forms/Input";
import { patterns } from "./ui/forms/patterns";
import { Stack } from "./ui/Stack";

export const UserForm = () => {
  const { handleSubmit, register, errors, reset } = useForm();
  const { addToast } = useToasts();

  const onSuccess = (user) => {
    addToast(`New member added: ${user.name}`, {
      appearance: "success",
      autoDismiss: true,
    });
    reset();
  };

  const onError = (error) => {
    addToast(error.message, {
      appearance: "warning",
      autoDismiss: true,
    });
  };

  const onSubmit = (values) => {
    User.create(values).then(onSuccess).catch(onError);
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

        <div className="flex justify-between">
          <Button type="submit">Submit</Button>
          <Button onClick={() => reset()} type="button">
            Reset
          </Button>
        </div>
      </Stack>
    </form>
  );
};
