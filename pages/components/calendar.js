import BigCalendar from "react-big-calendar";
import moment from "moment";
import styles from "../scss/app.scss";

const localizer = BigCalendar.momentLocalizer(moment);

const Calendar = props => (
  <div>
    <BigCalendar localizer={localizer} events={[]} views={["month"]} />
  </div>
);

export default Calendar;
