import Description from "./components/Description/Description"
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import { useState, useEffect } from "react";
import s from "./App.module.css";

const App = () => {



  const [values, setValues] = useState(() => {

    const savedValues = window.localStorage.getItem("saved-values");

    if (savedValues !== null) {
      return JSON.parse(savedValues);
    };

    return {
      good: 0,
      neutral: 0,
      bad: 0
    };


  });

  const updateFeedback = (feedbackType) => {

    setValues((prev) => ({

      ...prev,
      [feedbackType]: prev[feedbackType] + 1,

    }));

  };

  const handlReset = () => {

    setValues({

      good: 0,
      neutral: 0,
      bad: 0

    });
  }

  const totalFeedback = values.good + values.neutral + values.bad;
  const positive = Math.round((values.good / totalFeedback) * 100);

  useEffect(() => {
    window.localStorage.setItem("saved-values", JSON.stringify(values));
  }, [values]);



  return (
    <div className={s.wrapper}>

      <Description />
      <Options onFeedback={updateFeedback} onReset={handlReset} total={totalFeedback} />

      {totalFeedback > 0
        ? (<Feedback {...values} total={totalFeedback} positive={positive} />)
        : <Notification />
      }


    </div>
  );
};

export default App




/*  

const [values, setValues] = useState({

good: 0,
  neutral: 0,
    bad: 0
  }
  
);

*/