import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { PlusOutlined } from "@ant-design/icons";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import Badge from "components/Badge";
import StickyColumn from "components/Gantt/StickyColumn";

import { getStatusTypeFromReservation } from "utils/common";
import { flatten } from "utils";
import { useSelector } from "react-redux";
dayjs.extend(utc);
dayjs.extend(timezone);

export default function DayGantt({
  response,
  day,
  handleBadgeClick,
  handleCellClick,
  showColumnBreakpoint,
  startPoint,
  forWeek,
  selectedBlock,
  wrapperCellRef,
  createNewReservation,
}) {
  const dateStart = dayjs(day).tz("Asia/Tokyo").startOf("d");
  const dateEnd = dayjs(day).tz("Asia/Tokyo").endOf("d");
  const columnBreakpoint = [];
  const scrollContainer = useRef(null);
  const isIphone = useSelector((state) => state.layoutReducer.isIphone);

  for (let i = 0; i < 24; i++) {
    columnBreakpoint.push(i);
    columnBreakpoint.push(i + 0.5);
  }
  let currentTimePassed = (dayjs().tz("Asia/Tokyo") - dateStart) / 1000 / 60;
  if (currentTimePassed > 1440) {
    currentTimePassed = 1440;
  } else if (currentTimePassed <= 0) {
    currentTimePassed = 0;
  }

  let tableReservation = response.map((table, i) => {
    return table?.reservation?.map(({ customer, reservation }, j) => {
      let offset, width;
      if (reservation.isLineReservation && !reservation.isConfirmed) {
        return null;
      }
      if (
        dayjs(reservation.endTime).tz("Asia/Tokyo") > dateEnd &&
        dayjs(reservation.startTime).tz("Asia/Tokyo") < dateEnd
      ) {
        offset =
          (dayjs(reservation.startTime).tz("Asia/Tokyo") - dateStart) /
          1000 /
          60;
        width = 1440 - offset;
      } else if (
        dateStart < dayjs(reservation.startTime).tz("Asia/Tokyo") &&
        dayjs(reservation.endTime).tz("Asia/Tokyo") < dateEnd
      ) {
        offset =
          (dayjs(reservation.startTime).tz("Asia/Tokyo") - dateStart) /
          1000 /
          60;
        width =
          (dayjs(reservation.endTime) - dayjs(reservation.startTime)) /
          1000 /
          60;
      } else if (
        dayjs(reservation.endTime).tz("Asia/Tokyo") > dateStart &&
        dayjs(reservation.startTime).tz("Asia/Tokyo") < dateEnd
      ) {
        width =
          (dayjs(reservation.endTime).tz("Asia/Tokyo") - dateStart) / 1000 / 60;
        offset = 0;
      } else if (dayjs(reservation.endTime).tz("Asia/Tokyo") >= dateStart) {
        offset =
          (dayjs(reservation.endTime).tz("Asia/Tokyo") - dateStart) / 1000 / 60;
        width = 10;
      } else {
        return null;
      }

      let calculatedWidth = (100 / 60) * width;
      if (calculatedWidth < 0) {
        calculatedWidth = 2400 - (100 / 60) * offset;
      }
      return (
        <Badge
          key={`table-${i}-${j}`}
          top={i * 60}
          width={calculatedWidth}
          offset={(100 / 60) * offset}
          title={customer?.spelling}
          cutTag={(100 / 60) * offset + calculatedWidth >= 2400}
          sTitle={`${reservation?.numberOfCustomers}名`}
          type={getStatusTypeFromReservation(reservation)}
          handleBadgeClick={() => handleBadgeClick(reservation)}
          data={{
            table,
            reservation,
          }}
          hasOpenIcon
        />
      );
    });
  });

  tableReservation = flatten(tableReservation);

  useEffect(() => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollLeft = currentTimePassed + 100;
    }
  }, []);

  const optionLeftOffset = selectedBlock.x ? selectedBlock.x : 0;
  const TopOffset = selectedBlock.y ? selectedBlock.y : 0;
  const optionTopOffset = startPoint ? TopOffset + startPoint : TopOffset;
  return (
    <>
      {!forWeek ? (
        <StickyColumn response={response} forWeek={forWeek} day={day} />
      ) : null}

      <div className="gantt-table-container" ref={scrollContainer}>
        <div
          className="current-time-passed-container"
          style={{
            width: (100 / 60) * currentTimePassed,
            height: response.length * 60,
            top: startPoint,
            left:
              forWeek && !isIphone
                ? 255
                : forWeek && isIphone
                ? 190
                : isIphone
                ? 110
                : 175,
          }}
        />
        <div
          className="gantt-click-options"
          style={{
            display:
              selectedBlock.table &&
              dayjs(selectedBlock.start)
                .tz("Asia/Tokyo")
                .startOf("d")
                .isSame(dayjs(day).tz("Asia/Tokyo").startOf("d"))
                ? "block"
                : "none",
            top: optionTopOffset,
            left: forWeek ? 265 + optionLeftOffset : 185 + optionLeftOffset,
          }}
          ref={wrapperCellRef}
        >
          <div
            className="gantt-click-options-container"
            onClick={createNewReservation}
          >
            <span className="gantt-click-options-icon">
              <PlusOutlined />
            </span>
            <span className="gantt-click-options-text">
              この日時で予約を追加
            </span>
          </div>
        </div>
        <div
          className={"gantt-overlay-container"}
          style={{
            height: response.length * 60,
            top: startPoint,
            left:
              forWeek && !isIphone
                ? 255
                : forWeek && isIphone
                ? 190
                : isIphone
                ? 110
                : 175,
          }}
        >
          {tableReservation}
        </div>
        <div className="gantt-table">
          {showColumnBreakpoint ? (
            <div className="gantt-row gantt-heading-row">
              {columnBreakpoint.map((c, i) => {
                return (
                  <div
                    className={`gantt-cell gantt-heading ${
                      i === 0 ? "first-heading" : ""
                    } ${i % 2 === 0 ? "even-heading" : "odd-heading"}
                    `}
                    key={c}
                  >
                    {c % 1 === 0
                      ? `${c.toString().length === 1 ? "0" + c : c}:00`
                      : ""}
                  </div>
                );
              })}
            </div>
          ) : null}

          {response.map((x, j) => (
            <div className="gantt-row" key={`th-${x.table.id}`}>
              {columnBreakpoint.map((c, i) => {
                return (
                  <div
                    className={`gantt-cell ${i === 0 ? "first-cell" : ""} ${
                      i % 2 === 0 ? "even-cell" : "odd-cell"
                    } ${
                      i * 50 < (100 / 60) * currentTimePassed ? "disabled" : ""
                    }`}
                    key={c}
                    onClick={() => {
                      // const selectedDate = dayjs(day)
                      //   .tz("Asia/Tokyo")
                      //   .startOf("d")
                      //   .add(c, "h");
                      // const seletedTime = formatTime(selectedDate);
                      // const startTime = formatTime(
                      //   x?.reservation[0].reservation?.startTime
                      // );
                      // const endTime = formatTime(
                      //   x?.reservation[0].reservation?.endTime
                      // );
                      if (i * 50 > (100 / 60) * currentTimePassed) {
                        // if (seletedTime < startTime || seletedTime >= endTime) {
                        handleCellClick(
                          dayjs(day).tz("Asia/Tokyo").startOf("d").add(c, "h"),
                          x.table,
                          j
                        );
                        // }
                      }
                    }}
                  ></div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

DayGantt.propTypes = {
  response: PropTypes.any,
  day: PropTypes.any,
  handleCellClick: PropTypes.func,
  handleBadgeClick: PropTypes.func,
  showColumnBreakpoint: PropTypes.bool,
  startPoint: PropTypes.number,
  forWeek: PropTypes.bool,
  selectedBlock: PropTypes.any,
  wrapperCellRef: PropTypes.any,
  createNewReservation: PropTypes.any,
};
