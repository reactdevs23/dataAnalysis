import React, { useEffect, useState, useRef } from "react";
import styles from "./DataAnalysisB.module.css";

const DataAnalysisB = ({
  data,
  arrow,
  directionArrowColor,
  idBackground,
  idColor,
  steps,
  stepsContainerBorder,
  stepsColor,
}) => {
  const [boxWidth, setBoxWidth] = useState(null);
  const firstBoxRef = useRef(null);

  useEffect(() => {
    const firstBoxWidth = firstBoxRef.current.offsetWidth;
    setBoxWidth(firstBoxWidth);
  }, [data]);

  return (
    <div
      className={styles.mainWrapper}
      style={{
        "--idBackground": idBackground,
        "--idColor": idColor,
      }}
    >
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {data.map((el, i) => (
            <React.Fragment key={i}>
              <div
                className={styles.box}
                style={{
                  "--background": el.background,
                }}
                ref={i === 0 ? firstBoxRef : null}
              >
                <div className={styles.icon}>{el.icon}</div>
                <p className={styles.title} style={{ color: el.titleColor }}>
                  {el.title}
                </p>
              </div>
              {data.length !== i + 1 && (
                <div className={styles.idContainer}>
                  <p className={styles.id}>{i + 1}</p>
                  <div className={styles.arrow}>{arrow}</div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div
          style={{
            width: `calc(100% - ${boxWidth}px)`,
            "--directionArrowColor": directionArrowColor,
          }}
          className={[styles.directionArrow].join(" ")}
        >
          <div className={styles.angleUp}>
            <i className="fa-solid fa-angle-up"></i>
          </div>
          <p className={styles.id}>{data.length}</p>
        </div>

        <div
          className={styles.stepsContainer}
          style={{
            "--stepsColor": stepsColor,
            "--stepsContainerBorder": stepsContainerBorder,
          }}
        >
          {steps.map((step, i) => (
            <div className={styles.steps} key={i}>
              <p className={styles.id}>{i + 1}</p>
              <p className={styles.step}>{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataAnalysisB;
