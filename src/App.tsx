import React, { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import "./App.css";

type ResultsStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
};

function App() {
  const [city, setCity] = useState<string>("");
  const [results, setResults] = useState<ResultsStateType>({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: "",
  });
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //   fetchはAPIコールと呼ばれる
    // .thenでAPIにデータを送った後の処理 resはresponseの略でAPIから送り返された気象データが入っている
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=3995ce571ca747d8a7e195724212106&q=${city}&aqi=no`
    )
      // resをjson形式に変換
      .then((res) => res.json())
      //   dataにJSON形式のデータが入ってる
      .then((data) => {
        setResults({
          country: data.location.country,
          cityName: data.location.name,
          temperature: data.current.temp_c,
          conditionText: data.current.condition.text,
          icon: data.current.condition.icon,
        });
      });
  };
  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWeather={getWeather} />
        <Results results={results} />
      </div>
    </div>
  );
}

export default App;
