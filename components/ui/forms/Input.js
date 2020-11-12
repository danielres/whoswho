import React from "react";
import classnames from "classnames";

export const Input = ({
  errors,
  label,
  name,
  pattern,
  register,
  required,
  type = "text",
  validate,
}) => {
  const id = `${name}-${Math.random()}`;

  return (
    <div>
      <div
        className={classnames(
          "relative border rounded shadow appearance-none label-floating",
          { "border-red-500": errors[name] }
        )}
      >
        <input
          className="w-full py-2 px-3 text-gray-700 leading-normal rounded"
          id={id}
          placeholder={label}
          ref={register({
            required: required ? "Required" : null,
            pattern,
            validate,
          })}
          name={name}
          type={type}
        />

        {label && (
          <label
            className="absolute block text-gray-500 top-0 left-0 w-full px-3 py-2 leading-normal"
            for={id}
          >
            {label}
          </label>
        )}
      </div>

      <div className="text-red-500 text-sm">
        {errors[name] && errors[name].message}
      </div>
    </div>
  );
};
