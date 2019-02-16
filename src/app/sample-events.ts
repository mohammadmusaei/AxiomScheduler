import * as moment from 'moment';
import { AxiomSchedulerEvent } from 'axiom-scheduler';

var colors = ['#673AB7','#E91E63','#795548','#009688','#03A9F4','#FF9800','#004D40','#FF4081','#00B8D4','#795548','#00E676','#ff5252','#424242','#7E57C2','#FFC107','#8D6E63'];

export var SAMPLE_EVENTS = [
  {
    "data": {
      "title": "Call Mary Johnson"
    },
    "from": "2019-02-19T21:30:00.000Z",
    "to": "2019-02-20T01:05:00.000Z",
    "color": "#673AB7"
  },
  {
    "data": {
      "title": "StartUp Meeting"
    },
    "from": "2019-02-17T21:30:00.000Z",
    "to": "2019-02-17T23:30:00.000Z",
    "color": "#795548"
  },
  {
    "data": {
      "title": "Send email to production team"
    },
    "from": "2019-02-15T21:35:00.000Z",
    "to": "2019-02-16T01:00:00.000Z",
    "color": "#E91E63"
  },
  {
    "data": {
      "title": "Buy some stuff"
    },
    "from": "2019-02-12T22:10:00.000Z",
    "to": "2019-02-12T23:55:00.000Z",
    "color": "#009688",
    "locked" : true
  },
  {
    "data": {
      "title": "Drive to airport"
    },
    "from": "2019-02-13T20:32:00.000Z",
    "to": "2019-02-13T22:10:00.000Z",
    "color": "#03A9F4"
  },
  {
    "data": {
      "title": "Meeting #5003"
    },
    "from": "2019-02-14T00:55:00.000Z",
    "to": "2019-02-14T05:20:00.000Z",
    "color": "#FF9800"
  },
  {
    "data": {
      "title": "Flight reservation"
    },
    "from": "2019-02-17T01:30:00.000Z",
    "to": "2019-02-17T06:40:00.000Z",
    "color": "#004D40"
  },
  {
    "data": {
      "title": "Financial team meeting"
    },
    "from": "2019-02-07T07:00:00.000Z",
    "to": "2019-02-07T11:20:00.000Z",
    "color": "#FF4081"
  },
  {
    "data": {
      "title": "Sale meeting"
    },
    "from": "2019-02-06T22:30:00.000Z",
    "to": "2019-02-07T01:30:00.000Z",
    "color": "#00B8D4"
  },
  {
    "data": {
      "title": "Call Customer #005"
    },
    "from": "2019-02-07T03:30:00.000Z",
    "to": "2019-02-07T06:40:00.000Z",
    "color": "#795548"
  },
  {
    "data": {
      "title": "Meeting reminder"
    },
    "from": "2019-02-08T23:40:00.000Z",
    "to": "2019-02-09T05:50:00.000Z",
    "color": "#00E676"
  },
  {
    "data": {
      "title": "Music class"
    },
    "from": "2019-02-09T20:50:00.000Z",
    "to": "2019-02-10T02:25:00.000Z",
    "color": "#ff5252"
  },
  {
    "data": {
      "title": "Software presentation"
    },
    "from": "2019-02-12T08:10:00.000Z",
    "to": "2019-02-12T11:35:00.000Z",
    "color": "#424242"
  },
  {
    "data": {
      "title": "Production team meeting"
    },
    "from": "2019-02-11T23:35:00.000Z",
    "to": "2019-02-12T01:50:00.000Z",
    "color": "#7E57C2"
  },
  {
    "data": {
      "title": "Set an appointment with Mike"
    },
    "from": "2019-02-12T02:30:00.000Z",
    "to": "2019-02-11T21:30:00.000Z",
    "color": "#FFC107"
  },
  {
    "data": {
      "title": "Software demo reminder"
    },
    "from": "2019-02-11T20:45:00.000Z",
    "to": "2019-02-11T22:34:00.000Z",
    "color": "#8D6E63"
  }
].map(i=>new AxiomSchedulerEvent(i.data.title,i.from && new Date(i.from),i.to && new Date(i.to),i.data,i.color,i.locked));