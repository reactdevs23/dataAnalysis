import React, { useEffect, useState, useRef } from "react";

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
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ "--taglineColor": taglineColor }}
    >
      <div className="flex flex-col gap-[10px] max-w-[95%] mx-[auto] my-[0]">
        <div className="flex justify-center w-full gap-[20px]">
          {data.map((el, i) => (
            <React.Fragment key={i}>
              <div
                className="flex items-center flex-col gap-[15px] bg-[var(--background)] rounded-[10px] p-[12px] w-full h-auto px-[24px] py-[30px] min-h-full flex-[1]"
                style={{
                  "--background": el.background,
                }}
                ref={i === 0 ? firstBoxRef : null}
              >
                <div className="max-w-[55px]">{el.icon}</div>
                <p
                  className="text-center text-[18px] not-italic font-medium leading-[133.333%] mt-auto"
                  style={{ color: el.titleColor }}
                >
                  {el.title}
                </p>
              </div>
              {data.length !== i + 1 && (
                <div
                  className="max-w-[152px] w-full flex flex-col justify-center items-center gap-[5px] flex-[1] mx-[0] my-[auto]"
                  style={{ transform: `translateY(-${maxInfoHeight / 2}px)` }}
                >
                  <p
                    className="text-center text-[16px] not-italic font-normal leading-[22px] min-h-[36px] flex items-end"
                    style={{
                      height: `${maxInfoHeight}px`,
                      color: el.infoColor,
                    }}
                    id={`infoContainer_${i}`}
                  >
                    {el.info}
                  </p>
                  <div className="max-w-[130px] min-w-[90px]">{arrow}</div>
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
          className="w-[calc(100% - var(--maxWidth))] mx-[auto] my-[0] rounded-[30px] rounded-tl-none rounded-tr-none border-[2px]  border-[var(--directionArrowColor)] border-t-0 h-[100px] flex flex-col justify-end relative mt-[20px] pb-2"
        >
          <div className="absolute left-[0]  translate-x-[calc(-50%-1.5px)] translate-y-[_calc(-50%+2px)] top-[0] text-[20px]">
            <i className="fa-solid fa-angle-up text-[var(--directionArrowColor)]"></i>
          </div>
          <p className="text-center text-[var(--taglineColor)] text-[16px] not-italic font-normal leading-[125%] p-[10px]">
            {tagline}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DataAnalysisA;
