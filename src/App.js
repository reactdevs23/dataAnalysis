import { useState } from "react";
import Arrow from "./images/Arrow";
import EntryIcon from "./images/EntryIcon";
import ProcessingIcon from "./images/ProcessingIcon";
import TransformationIcon from "./images/TransformationIcon";
import InteractionIcon from "./images/InteractionIcon";
import OutcomeIcon from "./images/OutcomeIcon";
import MainComponent from "./components/MainComponent/MainComponent";

function App() {
  const [allData, setAllData] = useState({
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
    showLoopBack: false,
  });
  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,
          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
