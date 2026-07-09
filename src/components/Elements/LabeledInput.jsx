import React from "react";
import Input from "./Input";

function LabeledInput(props) {
  const { label, id, error, ...rest } = props;

  return (
    <>
      <label htmlFor={id} className="block text-sm mb-2 dark:text-gray-300">
        {label}
      </label>
      <Input id={id} {...rest} />

      {error && (
        <span className="text-red-500 dark:text-red-400 text-xs mt-1 block">
          {error}
        </span>
      )}
    </>
  );
}

export default LabeledInput;