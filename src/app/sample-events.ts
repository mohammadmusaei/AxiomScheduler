import * as moment from 'moment';
import { AxiomSchedulerEvent } from './axiom-scheduler/axiom-scheduler.component';

var colors = ["#673AB7",'#E91E63','#795548','#009688','#03A9F4','#FF9800','#004D40'];

export var SAMPLE_EVENTS = [
    {
      from: moment(Date.now()).add(8,'days').add(-1,'hours'),
      to: moment(Date.now()).add(8,'days'),
      data : {
        title : "Call Mary Johnson"
      }
    },
    {
      from: moment(Date.now()).add(6,'days').add(-1,'hours'),
      to: moment(Date.now()).add(6,'days'),
      data : {
        title : "StartUp Meeting"
      }
    },
    {
      from: moment(Date.now()).add(4,'days').add(-1,'hours').add(5,'minutes'),
      to: moment(Date.now()).add(4,'days').add(5,'minutes'),
      data : {
        title : "Send email to production team"
      }
    },
    {
      from: moment(Date.now()).add(1,'days').add(-1,'hours').add(20,'minutes'),
      to: moment(Date.now()).add(1,'days').add(20,'minutes'),
      data : {
        title : "Buy some stuff"
      }
    },
    {
      from: moment(Date.now()).add(2,'days').add(-1,'hours').add(40,'minutes'),
      to: moment(Date.now()).add(2,'days').add(40,'minutes'),
      data : {
        title : "Drive to airport"
      }
    },
    {
      from: moment(Date.now()).add(5,'days').add(-2,'hours'),
      to: moment(Date.now()).add(5,'days'),
      data : {
        title : "Flight reservation"
      }
    },
    {
      from: moment(Date.now()).add(-5,'days').add(-4,'hours'),
      to: moment(Date.now()).add(-5,'days').add(-2,'hours'),
      data : {
        title : "Financial team meeting"
      }
    },
    {
      from: moment(Date.now()).add(-5,'days').add(-2,'hours'),
      to: moment(Date.now()).add(-5,'days').add(-2,'hours'),
      data : {
        title : "Sale meeting"
      }
    },
    {
      from: moment(Date.now()).add(-5,'days').add(-7,'hours'),
      to: moment(Date.now()).add(-5,'days').add(-2,'hours'),
      data : {
        title : "Call Customer #005"
      }
    },
    {
      from: moment(Date.now()).add(-3,'days').add(-4,'hours'),
      to: moment(Date.now()).add(-3,'days').add(-2,'hours'),
      data : {
        title : "Meeting reminder"
      }
    },
    {
      from: moment(Date.now()).add(-2,'days').add(-4,'hours'),
      to: moment(Date.now()).add(-2,'days').add(-1,'hours'),
      data : {
        title : "Music class"
      }
    }
    ,
    {
      from: moment(Date.now()).add(-12,'hours'),
      to: moment(Date.now()).add(-11,'hours'),
      data : {
        title : "Software presentation"
      }
    }
    ,
    {
      from: moment(Date.now()).add(-2,'hours'),
      to: moment(Date.now()).add(-1,'hours'),
      data : {
        title : "Production team meeting"
      }
    }
    ,
    {
      from: moment(Date.now()).add(-6,'hours'),
      to: moment(Date.now()).add(-1,'hours'),
      data : {
        title : "Set an appointment with Mike"
      }
    } ,
    {
      from: moment(Date.now()).add(-1,'hours'),
      to: moment(Date.now()).add(-1,'minutes'),
      data : {
        title : "Software demo reminder"
      }
    }
  ].map(i=>new AxiomSchedulerEvent(i.from.toDate(),i.to.toDate(),i.data,colors[Math.floor(Math.random() * colors.length)]));