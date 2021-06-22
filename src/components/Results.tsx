type ResultsPropsType = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  };
};

const Results = (props: ResultsPropsType) => {
  return (
    <div>
      {props.results.cityName && (
        <div className="results-city">
          <span>都市名:</span>
          {props.results.cityName}
        </div>
      )}

      {props.results.country && (
        <div className="results-country">
          <span>国名:</span>
          {props.results.country}
        </div>
      )}

      {props.results.temperature && (
        <div className="results-temp">
          <span>気温:</span>
          {props.results.temperature}
          <span>℃</span>
        </div>
      )}

      {props.results.conditionText && (
        <div className="results-condition">
          <span>天気:</span>
          <div>
            <img src={props.results.icon} alt="icon" />
            <span>{props.results.conditionText}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;
