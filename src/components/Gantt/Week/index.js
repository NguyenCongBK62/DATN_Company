import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { DayGantt } from "components/Gantt";
import StickyColumn from "components/Gantt/StickyColumn";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function WeekGantt({
  response,
  handleCellClick,
  handleBadgeClick,
  selectedBlock,
  wrapperCellRef,
  createNewReservation,
}) {
  const filteredResponses = response.filter(
    (item) => item.reservation.length > 0
  );
  const scrollContainer = useRef(null);

  useEffect(() => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft = scrollContainer.current.scrollWidth;
    }
  }, [scrollContainer, response]);

  return (
    <div className="week-gantt" ref={scrollContainer}>
      {filteredResponses.length ? (
        <StickyColumn response={response} forWeek />
      ) : null}
      {filteredResponses.map(({ day, reservation }, index) => {
        return (
          <DayGantt
            handleBadgeClick={handleBadgeClick}
            handleCellClick={handleCellClick}
            response={reservation}
            day={dayjs(day).tz("Asia/Tokyo").startOf("d")}
            startPoint={index === 0 ? 35 : 0}
            showColumnBreakpoint={index === 0}
            key={`week-${day}`}
            forWeek
            selectedBlock={selectedBlock}
            wrapperCellRef={wrapperCellRef}
            createNewReservation={createNewReservation}
          />
        );
      })}
    </div>
  );
}

WeekGantt.propTypes = {
  response: PropTypes.any,
  day: PropTypes.any,
  handleCellClick: PropTypes.func,
  handleBadgeClick: PropTypes.func,
  selectedBlock: PropTypes.any,
  wrapperCellRef: PropTypes.any,
  createNewReservation: PropTypes.any,
};
