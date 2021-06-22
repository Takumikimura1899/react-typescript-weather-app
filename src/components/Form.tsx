import React, { useState } from "react";

type FormPropsType = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
  //   React.FormEvent<HTMLFormElement>はReactが定義している型
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
};

const Form = (props: FormPropsType) => {
  return (
    <form onSubmit={props.getWeather}>
      <input
        type="text"
        name="city"
        placeholder="都市名"
        onChange={(e) => props.setCity(e.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};
export default Form;
