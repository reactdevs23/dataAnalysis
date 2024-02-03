import React, { useEffect, useState, useRef } from "react";
import styles from "./DataAnalysisA.module.css";

const DataAnalysisA = ({
  data,
  arrow,
  directionArrowColor,
  tagline,
  taglineColor,
}) => {
  const [maxInfoHeight, setMaxInfoHeight] = useState(0);
  const [boxWidth, setBoxWidth] = useState(null);
  const firstBoxRef = useRef(null);

  useEffect(() => {
    const infoContainerHeights = data.map((el, i) => {
      if (data.length !== i + 1) {
        const infoContainer = document.getElementById(`infoContainer_${i}`);
        return infoContainer.offsetHeight;
      }
      return 0;
    });

    const maxHeight = Math.max(...infoContainerHeights);
    setMaxInfoHeight(maxHeight);
    const firstBoxWidth = firstBoxRef.current.offsetWidth;
    setBoxWidth(firstBoxWidth);
  }, [data]);

  return (
    <div className={styles.mainWrapper}>
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
                <div
                  className={styles.infoContainer}
                  style={{ transform: `translateY(-${maxInfoHeight / 2}px)` }}
                >
                  <p
                    className={styles.info}
                    style={{
                      height: `${maxInfoHeight}px`,
                      color: el.infoColor,
                    }}
                    id={`infoContainer_${i}`}
                  >
                    {el.info}
                  </p>
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
          <p className={styles.tagline} style={{ color: taglineColor }}>
            {tagline}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataAnalysisA;
