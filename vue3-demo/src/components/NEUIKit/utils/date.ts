import { t } from "./i18n";
import dayjs from "dayjs";

export const formatDateRange = (type: string | number) => {
  const date = new Date();
  let year = date.getFullYear();
  let month: string | number = date.getMonth() + 1;
  let day: string | number = date.getDate();

  if (type === "start") {
    year = year - 100;
  } else if (type === "end") {
    year = year;
  }
  month = month > 9 ? month : "0" + month;
  day = day > 9 ? day : "0" + day;
  return `${year}-${month}-${day}`;
};

export const formatDate = (time) => {
  if (!time) {
    return "";
  }
  const _d = dayjs(time);
  const isCurrentDay = _d.isSame(dayjs(), "day");
  const isCurrentYear = _d.isSame(dayjs(), "year");
  return _d.format(
    isCurrentDay ? "HH:mm" : isCurrentYear ? "MM-DD" : "YYYY-MM"
  );
};
