import { useState } from "react";
import Arrow from "./images/Arrow";
import EntryIcon from "./images/EntryIcon";
import ProcessingIcon from "./images/ProcessingIcon";
import TransformationIcon from "./images/TransformationIcon";
import InteractionIcon from "./images/InteractionIcon";
import OutcomeIcon from "./images/OutcomeIcon";
import DataAnalysisB from "./components/DataAnalysisB/DataAnalysisB";
import DataAnalysisA from "./components/DataAnalysisA/DataAnalysisA";

function App() {
  const [dataAnalysisA, seDataAnalysisA] = useState({
    fontFamily: "'Inter', sans-serif",
    mainBg: "#fff",
    secondaryColor: "#000",
    arrow: <Arrow color="#000" />,
    directionArrowColor: "#000",
    tagline: "Informed Desicison-Making",
    taglineColor: "#000",
    data: [
      {
        icon: <EntryIcon color="#008AA6" />,
        title: "Data Entry Point",
        titleColor: "#000",
        background: "rgb(0, 138, 166, 0.2)",
        info: "Raw data",
        infoColor: "#000",
      },
      {
        icon: <ProcessingIcon color="#DF644A" />,
        title: "AI Processing",
        titleColor: "#000",
        background: "#F2F4F7",
        info: "Interpretation & Categorization   ",
        infoColor: "#000",
      },
      {
        icon: <TransformationIcon color="#DF644A" />,
        title: "Data Transformation",
        titleColor: "#000",
        background: "#F2F4F7",
        info: "Data Optimization",
        infoColor: "#000",
      },
      {
        icon: <InteractionIcon color="#DF644A" />,
        title: "User Interaction ",
        titleColor: "#000",
        background: "#F2F4F7",
        info: "Queries & Insights",
        infoColor: "#000",
      },
      {
        icon: <OutcomeIcon color="#008AA6" />,
        title: "Outcome ",
        titleColor: "#000",
        background: "rgb(0, 138, 166, 0.2)",
        infoColor: "#000",
      },
    ],
  });
  const [dataAnalysisB, seDataAnalysisB] = useState({
    fontFamily: "'Inter', sans-serif",
    mainBg: "#fff",
    secondaryColor: "#fff",
    arrow: <Arrow color="#008AA6" />,
    directionArrowColor: "#008AA6",
    idBackground: "#008AA6",
    idColor: "#fff",
    stepsContainerBorder: "1px solid  #EAECF0",
    stepsColor: "#000",

    data: [
      {
        icon: <EntryIcon color="#98A2B3" />,
        title: "Data Entry Point",
        titleColor: "#000",
        background: "rgb(0, 138, 166, 0.2)",
      },
      {
        icon: <ProcessingIcon color="#98A2B3" />,
        title: "AI Processing",
        titleColor: "#000",
        background: "#F2F4F7",
      },
      {
        icon: <TransformationIcon color="#98A2B3" />,
        title: "Data Transformation",
        titleColor: "#000",
        background: "#F2F4F7",
      },
      {
        icon: <InteractionIcon color="#98A2B3" />,
        title: "User Interaction ",
        titleColor: "#000",
        background: "#F2F4F7",
      },
      {
        icon: <OutcomeIcon color="#98A2B3" />,
        title: "Outcome ",
        titleColor: "#000",
        background: "rgb(0, 138, 166, 0.2)",
      },
    ],
    steps: [
      "Raw data",
      "Interpretation & Categorization",
      "Data Optimization",
      "Informed Desicison-Making",
      "Queries & Insights",
    ],
  });
  return (
    <>
      <div
        style={{
          "--mainBg": dataAnalysisA.mainBg,

          fontFamily: dataAnalysisA.fontFamily,
        }}
      >
        <DataAnalysisA {...dataAnalysisA} />
      </div>
      <div
        style={{
          "--mainBg": dataAnalysisB.mainBg,
          fontFamily: dataAnalysisA.fontFamily,
        }}
      >
        <DataAnalysisB {...dataAnalysisB} />
      </div>
    </>
  );
}

export default App;
