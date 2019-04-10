import * as moment from 'moment';
import { AxiomSchedulerEvent } from 'axiom-scheduler';

var colors = ['#673AB7', '#E91E63', '#795548', '#009688', '#03A9F4', '#FF9800', '#004D40', '#FF4081', '#00B8D4', '#795548', '#00E676', '#ff5252', '#424242', '#7E57C2', '#FFC107', '#8D6E63'];

export var SAMPLE_EVENTS = [
  {
    "data": {
      "id": "32f1822f-e404-4812-9cbd-9a61280adfb3",
      "title": "Call Mary Johnson"
    },
    "from": "2019-02-19T21:30:00.000Z",
    "to": "2019-02-20T01:05:00.000Z",
    "color": "#673AB7"
  },
  {
    "data": {
      "title": "StartUp Meeting",
      "id": "32f1822f-e404-4812-9cbd-9a612802dfb3"
    },
    "from": "2019-02-17T21:30:00.000Z",
    "to": "2019-02-17T23:30:00.000Z",
    "color": "#795548"
  },
  {
    "data": {
      "title": "Send email to production team",
      "id": "32f1822f-e404-4812-9cbd-9a62280adfb3"
    },
    "from": "2019-02-15T21:35:00.000Z",
    "to": "2019-02-16T01:00:00.000Z",
    "color": "#E91E63"
  },
  {
    "data": {
      "title": "Buy some stuff",
      "id": "32f1822f-e404-1812-9cbd-9a61280adfb3"
    },
    "from": "2019-02-12T22:10:00.000Z",
    "to": "2019-02-12T23:55:00.000Z",
    "color": "#009688",
    "locked": true
  },
  {
    "data": {
      "title": "Drive to airport",
      "id": "3ef1822f-e404-4812-9cbd-9a61280adfb3"
    },
    "from": "2019-02-13T20:32:00.000Z",
    "to": "2019-02-13T22:10:00.000Z",
    "color": "#03A9F4"
  },
  {
    "data": {
      "title": "Meeting #5003",
      "id": "a2f1822f-e404-4812-9cbd-9a61280adfb3"
    },
    "from": "2019-02-14T00:55:00.000Z",
    "to": "2019-02-14T05:20:00.000Z",
    "color": "#FF9800"
  },
  {
    "data": {
      "title": "Flight reservation",
      "id": "32f1822f-e404-4811-9cbd-9a61280adfb3"
    },
    "from": "2019-02-17T01:30:00.000Z",
    "to": "2019-02-17T06:40:00.000Z",
    "color": "#004D40"
  },
  {
    "data": {
      "title": "Financial team meeting",
      "id": "32f1822f-e404-4812-9cbd-9a61280ayfb3"
    },
    "from": "2019-02-07T07:00:00.000Z",
    "to": "2019-02-07T11:20:00.000Z",
    "color": "#FF4081"
  },
  {
    "data": {
      "title": "Sale meeting",
      "id": "32f1822f-e404-4812-9cbd-9z61280adfb3"
    },
    "from": "2019-02-06T22:30:00.000Z",
    "to": "2019-02-07T01:30:00.000Z",
    "color": "#00B8D4"
  },
  {
    "data": {
      "title": "Call Customer #005",
      "id": "32f1822f-e404-4812-90bd-9a61280adfb3"
    },
    "from": "2019-02-07T03:30:00.000Z",
    "to": "2019-02-07T06:40:00.000Z",
    "color": "#795548"
  },
  {
    "data": {
      "title": "Meeting reminder",
      "id": "32f1822f-e904-4812-9cbd-9a61280adfb3"
    },
    "from": "2019-02-08T23:40:00.000Z",
    "to": "2019-02-09T05:50:00.000Z",
    "color": "#00E676"
  },
  {
    "data": {
      "title": "Music class",
      "id": "32f1822f-e404-4812-9cbd-9a6p280adfb3"
    },
    "from": "2019-02-09T20:50:00.000Z",
    "to": "2019-02-10T02:25:00.000Z",
    "color": "#ff5252"
  },
  {
    "data": {
      "title": "Software presentation",
      "id": "32f1822f-e404-4812-9cbd-9a61281adfb3"
    },
    "from": "2019-02-12T08:10:00.000Z",
    "to": "2019-02-12T11:35:00.000Z",
    "color": "#424242"
  },
  {
    "data": {
      "title": "Production team meeting",
      "id": "32f1822f-e404-4882-9cbd-9a61280adfb3"
    },
    "from": "2019-02-11T23:35:00.000Z",
    "to": "2019-02-12T01:50:00.000Z",
    "color": "#7E57C2"
  },
  {
    "data": {
      "title": "Set an appointment with Mike",
      "id": "32f1822f-e404-4812-9cbd-9a61280wdfb3"
    },
    "from": "2019-02-12T02:30:00.000Z",
    "to": "2019-02-11T21:30:00.000Z",
    "color": "#FFC107"
  },
  {
    "data": {
      "title": "Software demo reminder",
      "id": "32f1822f-e404-4812-9cbd-9a61286adfb3"
    },
    "from": "2019-02-11T20:45:00.000Z",
    "to": "2019-02-11T22:34:00.000Z",
    "color": "#8D6E63"
  },
  {
    "data": {
      "title": "Software demo reminder #98",
      "id": "31f1822f-e404-4812-9cq2-9a61206adfb3"
    },
    "from": moment(Date.now()).startOf('weeks').add('days', -5).add('hours', 0).toISOString(),
    "to": moment(Date.now()).startOf('weeks').add('days', -5).add('hours', 5).toISOString(),
    "color": "#8D6003"
  },
  {
    "data": {
      "title": "Software demo reminder #98",
      "id": "31f1822f-e404-4812-9cq2-9a61206adfb3"
    },
    "from": moment(Date.now()).startOf('weeks').add('days', -3).add('hours', 3).toISOString(),
    "to": moment(Date.now()).startOf('weeks').add('days', -3).add('hours', 6).toISOString(),
    "color": "#006863"
  },
  {
    "data": {
      "title": "Production team meeting #45",
      "id": "31f1822f-e404-4812-9cqd-9a61286adfb3"
    },
    "from": moment(Date.now()).startOf('weeks').add('days', -2).add('hours', 5).toISOString(),
    "to": moment(Date.now()).startOf('weeks').add('days', -2).add('hours', 9).toISOString(),
    "color": "#8D6863"
  },
  {
    "data": {
      "title": "Production team meeting #45",
      "id": "31f1822f-e404-4812-9cqd-9a61286adfb3"
    },
    "from": moment(Date.now()).startOf('weeks').add('days', -1).add('hours', 2).toISOString(),
    "to": moment(Date.now()).startOf('weeks').add('days', -1).add('hours', 8).toISOString(),
    "color": "#8D6E63"
  },
  {
    "data": {
      "title": "Software demo reminder",
      "id": "31f1822f-e404-4812-9cbd-9a61286adfb3"
    },
    "from": moment(Date.now()).startOf('weeks').add('days', 1).add('hours', 2).toISOString(),
    "to": moment(Date.now()).startOf('weeks').add('days', 1).add('hours', 8).toISOString(),
    "color": "#8D6E63"
  },
  {
    "data": {
      "id": "32f1822f-e404-4212-9cbd-9a61280adfb3",
      "title": "Call Mary Johnson"
    },
    "from": moment(Date.now()).startOf('weeks').add('days', 2).add('hours', 3).toISOString(),
    "to": moment(Date.now()).startOf('weeks').add('days', 2).add('hours', 6).toISOString(),
    "color": "#673AB7"
  },
  {
    "data": {
      "title": "StartUp Meeting",
      "id": "32f1822a-e404-4812-9cbd-9a612802dfb3"
    },
    "from": moment(Date.now()).startOf('weeks').add('days', 3).add('hours', 6).toISOString(),
    "to": moment(Date.now()).startOf('weeks').add('days', 3).add('hours', 12).toISOString(),
    "color": "#792048"
  },
  {
    "data": {
      "title": "Send email to production team",
      "id": "32f1822f-e404-4812-9cbd-1a62280adfb3"
    },
    "from": moment(Date.now()).startOf('weeks').add('days', 3).add('hours', 0).toISOString(),
    "to": moment(Date.now()).startOf('weeks').add('days', 3).add('hours', 4).toISOString(),
    "color": "#E91E63"
  },
  {
    "data": {
      "title": "Buy some stuff",
      "id": "32f1822f-e404-1812-9cbd-9a61290adfb2"
    },
    "from": moment(Date.now()).startOf('weeks').add('days', 4).add('hours', 8).toISOString(),
    "to": moment(Date.now()).startOf('weeks').add('days', 4).add('hours', 10).toISOString(),
    "color": "#009688",
    "locked": true
  },
  {
    "data": {
      "title": "Music class",
      "id": "32f1822f-e404-4812-9cbd-9a63280adfb3"
    },
    "from": moment(Date.now()).startOf('weeks').add('days', 5).add('hours', 3).toISOString(),
    "to": moment(Date.now()).startOf('weeks').add('days', 5).add('hours', 5).toISOString(),
    "color": "#ff5252"
  },
  {
    "data": {
      "title": "Set an appointment with Mike",
      "id": "32f1822f-e404-4812-9c3d-9a61280wdfb3"
    },
    "from": moment(Date.now()).startOf('day').add('hours', 1).toISOString(),
    "to": moment(Date.now()).startOf('day').add('hours', 4).toISOString(),
    "color": "#FFC107"
  }
].map(i => new AxiomSchedulerEvent(i.data.title, i.from && new Date(i.from), i.to && new Date(i.to), i.data, i.color, i.locked));