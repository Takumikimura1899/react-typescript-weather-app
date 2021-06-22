import React, { useState } from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import Loading from "./components/Loading";
import "./App.css";

type ResultsStateType = {
  country: string;
  cityName: string;
  temperature: string;
  conditionText: string;
  icon: string;
};

function App() {
  const [loading, setLoading] = useState<boolean>(false);
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
    setLoading(true);
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
        setCity("");
        setLoading(false);
      })
      .catch((err) =>
        alert(
          "エラーが発生しました。ページをリロードしてもう一度トライしてください。"
        )
      );
  };
  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form city={city} setCity={setCity} getWeather={getWeather} />
        {loading ? <Loading /> : <Results results={results} />}
      </div>
    </div>
  );
}

export default App;
