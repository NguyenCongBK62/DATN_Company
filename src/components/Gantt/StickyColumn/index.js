import React from "react";
import PropTypes from "prop-types";
import smokeIcon from "assets/smoke.svg";
import smokingHeated from "assets/smoking-heated.svg";
import nonSmokeIcon from "assets/non-smoke.svg";
import { getDayOfWeek } from "utils/common";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

function StickyColumn({
  response,
  day = dayjs().tz("Asia/Tokyo"),
  forWeek = 0,
}) {
  if (forWeek) {
    return (
      <div
        className="gantt-chart-static-columns"
        style={{ flexDirection: "column" }}
      >
        <div className="gantt-fixed-table-content empty-content-week"></div>

        {response.map(({ day, reservation }, i) => {
          if (reservation.length) {
            return (
              <div className="gantt-chart-static-week" key={`week-${i}`}>
                <div className="gantt-chart-static-day">
                  {dayjs(day).tz("Asia/Tokyo").format("D")} ({" "}
                  {getDayOfWeek(dayjs(day).tz("Asia/Tokyo").day())} )
                </div>
                <div className="gantt-chart-static-week-table">
                  {reservation.map((x, j) => (
                    <div
                      className="gantt-fixed-table-content"
                      key={`table-${j}`}
                      style={{
                        borderBottom:
                          j + 1 === reservation.length
                            ? "1px solid #121958"
                            : "",
                      }}
                    >
                      <span className={"table-name"}>{x.table.name}</span>
                      <span className={"people-count"}>
                        {x.table.numberOfSeats > -1 ? (
                          x.table.smokeStatus === 2 ? (
                            <img src={smokingHeated} style={{ width: 17 }} />
                          ) : x.table.smokeStatus === 1 ? (
                            <img src={nonSmokeIcon} />
                          ) : x.table.smokeStatus === 0 ? (
                            <img src={smokeIcon} />
                          ) : null
                        ) : null}

                        {x.table.numberOfSeats > -1
                          ? x.table.numberOfSeats + " 名席"
                          : ""}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  } else {
    return (
      <div className="gantt-chart-static-columns">
        <div className="gantt-table-static-tables">
          {forWeek < 2 ? (
            <div className="gantt-fixed-table-content empty-content"></div>
          ) : (
            ""
          )}
          {response.map((x, j) => {
            return (
              <div className="gantt-fixed-table-content" key={`table-${j}`}>
                <span className={"table-name"}>{x.table.name}</span>
                <span className={"people-count"}>
                  {x.table.numberOfSeats > -1 ? (
                    x.table.smokeStatus === 2 ? (
                      <img src={smokingHeated} style={{ width: 17 }} />
                    ) : x.table.smokeStatus === 1 ? (
                      <img src={nonSmokeIcon} />
                    ) : x.table.smokeStatus === 0 ? (
                      <img src={smokeIcon} />
                    ) : null
                  ) : null}

                  {x.table.numberOfSeats > -1
                    ? x.table.numberOfSeats + " 名席"
                    : ""}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

StickyColumn.propTypes = {
  response: PropTypes.any.isRequired,
  day: PropTypes.any,
  forWeek: PropTypes.any,
};

export default StickyColumn;
