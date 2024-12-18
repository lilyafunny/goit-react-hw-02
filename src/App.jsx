import Description from "./components/Description/Description"
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import { useState } from "react"

const App = () => {

  const [values, setValues] = useState({

    good: 0,
    neutral: 0,
    bad: 0

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



  return (
    <>

      <Description />
      <Options onFeedback={updateFeedback} onReset={handlReset} total={totalFeedback} />

      {totalFeedback > 0
        ? (<Feedback {...values} total={totalFeedback} positive={positive} />)
        : <Notification />
      }


    </>
  );
};

export default App
