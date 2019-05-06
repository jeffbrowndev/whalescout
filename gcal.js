import request from "superagent";

const CALENDAR_ID = "gobcve01vft5be3eps7hh7bi08@group.calendar.google.com";
const API_KEY = "AIzaSyAsagykFrlWQnzwQbCcmNEjzmirNoDN8GA";
// const CALENDAR_ID = "orc3itos90abt7as69hucn71o4@group.calendar.google.com";
// const API_KEY = "AIzaSyDH_ebK6KXYNDG58lcuV9HWbiCGaIGErUc";
let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;

export function getEvents(callback) {
  request.get(url).end((err, resp) => {
    if (!err) {
      console.log(resp);
      const events = [];
      JSON.parse(resp.text).items.map(event => {
        events.push({
          start: event.start.date || event.start.dateTime,
          end: event.end.date || event.end.dateTime,
          title: event.summary,
          location: event.location,
          desc: event.description
        });
      });
      callback(events);
    }
  });
}
