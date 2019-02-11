import * as moment from 'moment';
import { AxiomSchedulerEvent } from './axiom-scheduler/axiom-scheduler.component';

var colors = ['#673AB7','#E91E63','#795548','#009688','#03A9F4','#FF9800','#004D40','#FF4081','#00B8D4','#795548','#00E676','#ff5252','#424242','#7E57C2','#FFC107','#8D6E63'];

export var SAMPLE_EVENTS = [
    {
      from: moment().add(8,'days').startOf('days').add(1,'hours'),
      to: moment().add(8,'days').startOf('days'),
      color : colors[0],
      data : {
        title : 'Call Mary Johnson'
      }
    },
    {
      from: moment().add(6,'days').startOf('days').add(1,'hours'),
      to: moment().add(6,'days').startOf('days'),
      color : colors[2],
      data : {
        title : 'StartUp Meeting'
      }
    },
    {
      from: moment().add(4,'days').startOf('days').add(1,'hours').add(5,'minutes'),
      to: moment().add(4,'days').startOf('days').add(5,'minutes'),
      color : colors[1],
      data : {
        title : 'Send email to production team'
      }
    },
    {
      from: moment().add(1,'days').startOf('days').add(1,'hours').add(20,'minutes'),
      to: moment().add(1,'days').startOf('days').add(20,'minutes'),
      color : colors[3],
      data : {
        title : 'Buy some stuff'
      }
    },
    {
      from: moment().add(2,'days').startOf('days').add(1,'hours').add(2,'minutes'),
      to: moment().add(2,'days').startOf('days').add(2,'hours').add(40,'minutes'),
      color : colors[4],
      data : {
        title : 'Drive to airport'
      }
    },
    {
      from: moment().add(2,'days').startOf('days').add(2,'hours').add(45,'minutes'),
      to: moment().add(2,'days').startOf('days').add(14,'hours').add(10,'minutes'),
      color : colors[5],
      data : {
        title : 'Meeting #5003'
      }
    },
    {
      from: moment().add(5,'days').startOf('days').add(4,'hours').add(50,'minutes'),
      to: moment().add(5,'days').startOf('days').add(4,'hours'),
      color : colors[6],
      data : {
        title : 'Flight reservation'
      }
    },
    {
      from: moment().add(-5,'days').startOf('days').add(14,'hours'),
      to: moment().add(-5,'days').startOf('days').add(22,'hours'),
      color : colors[7],
      data : {
        title : 'Financial team meeting'
      }
    },
    {
      from: moment().add(-5,'days').startOf('days').add(2,'hours'),
      to: moment().add(-5,'days').startOf('days').add(5,'hours'),
      color : colors[8],
      data : {
        title : 'Sale meeting'
      }
    },
    {
      from: moment().add(-5,'days').startOf('days').add(7,'hours'),
      to: moment().add(-5,'days').startOf('days').add(2,'hours'),
      color : colors[9],
      data : {
        title : 'Call Customer #005'
      }
    },
    {
      from: moment().add(-3,'days').startOf('days').add(4,'hours'),
      to: moment().add(-3,'days').startOf('days').add(2,'hours'),
      color : colors[10],
      data : {
        title : 'Meeting reminder'
      }
    },
    {
      from: moment().add(-2,'days').startOf('days').add(4,'hours'),
      to: moment().add(-2,'days').startOf('days').add(1,'hours'),
      color : colors[11],
      data : {
        title : 'Music class'
      }
    }
    ,
    {
      from: moment().startOf('days').add(14,'hours'),
      to: moment().startOf('days').add(18,'hours'),
      color : colors[12],
      data : {
        title : 'Software presentation'
      }
    }
    ,
    {
      from: moment().startOf('days').add(2,'hours'),
      to: moment().startOf('days').add(1,'hours'),
      color : colors[13],
      data : {
        title : 'Production team meeting'
      }
    }
    ,
    {
      from: moment().startOf('days').add(6,'hours'),
      to: moment().startOf('days').add(1,'hours'),
      color : colors[14],
      data : {
        title : 'Set an appointment with Mike'
      }
    } ,
    {
      from: moment().startOf('days').add(1,'hours'),
      to: moment().startOf('days').add(1,'minutes'),
      color : colors[15],
      data : {
        title : 'Software demo reminder'
      }
    }
  ].map(i=>new AxiomSchedulerEvent(i.from && i.from.toDate(),i.to && i.to.toDate(),i.data,i.color));