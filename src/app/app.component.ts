import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AxiomSchedulerEvent } from './axiom-scheduler/axiom-scheduler.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  events : AxiomSchedulerEvent[];
  events2 : AxiomSchedulerEvent[];
  colors = ["#673AB7",'#E91E63','#795548','#009688','#03A9F4','#FF9800','#004D40'];

  ngOnInit(): void {
    this.events = [
      {
        from: moment(Date.now()).add(8,'days').add(-1,'hours'),
        to: moment(Date.now()).add(8,'days'),
        data : {
          title : "Meeting #55564"
        }
      },
      {
        from: moment(Date.now()).add(6,'days').add(-1,'hours'),
        to: moment(Date.now()).add(6,'days'),
        data : {
          title : "Meeting #54677"
        }
      },
      {
        from: moment(Date.now()).add(4,'days').add(-1,'hours').add(5,'minutes'),
        to: moment(Date.now()).add(4,'days').add(5,'minutes'),
        data : {
          title : "Meeting #54HYYT7"
        }
      },
      {
        from: moment(Date.now()).add(1,'days').add(-1,'hours').add(20,'minutes'),
        to: moment(Date.now()).add(1,'days').add(20,'minutes'),
        data : {
          title : "Meeting #5RE77"
        }
      },
      {
        from: moment(Date.now()).add(2,'days').add(-1,'hours').add(40,'minutes'),
        to: moment(Date.now()).add(2,'days').add(40,'minutes'),
        data : {
          title : "Meeting #F457"
        }
      },
      {
        from: moment(Date.now()).add(5,'days').add(-2,'hours'),
        to: moment(Date.now()).add(5,'days'),
        data : {
          title : "Meeting #1334"
        }
      },
      {
        from: moment(Date.now()).add(-5,'days').add(-4,'hours'),
        to: moment(Date.now()).add(-5,'days').add(-2,'hours'),
        data : {
          title : "Meeting #097"
        }
      },
      {
        from: moment(Date.now()).add(-5,'days').add(-2,'hours'),
        to: moment(Date.now()).add(-5,'days').add(-2,'hours'),
        data : {
          title : "Meeting #3323"
        }
      },
      {
        from: moment(Date.now()).add(-5,'days').add(-7,'hours'),
        to: moment(Date.now()).add(-5,'days').add(-2,'hours'),
        data : {
          title : "Meeting #43-065"
        }
      },
      {
        from: moment(Date.now()).add(-3,'days').add(-4,'hours'),
        to: moment(Date.now()).add(-3,'days').add(-2,'hours'),
        data : {
          title : "Meeting #T453"
        }
      },
      {
        from: moment(Date.now()).add(-2,'days').add(-4,'hours'),
        to: moment(Date.now()).add(-2,'days').add(-1,'hours'),
        data : {
          title : "Meeting #H7886"
        }
      }
      ,
      {
        from: moment(Date.now()).add(-12,'hours'),
        to: moment(Date.now()).add(-11,'hours'),
        data : {
          title : "Meeting #545"
        }
      }
      ,
      {
        from: moment(Date.now()).add(-2,'hours'),
        to: moment(Date.now()).add(-1,'hours'),
        data : {
          title : "Meeting #784"
        }
      }
      ,
      {
        from: moment(Date.now()).add(-6,'hours'),
        to: moment(Date.now()).add(-1,'hours'),
        data : {
          title : "Meeting #5455"
        }
      } ,
      {
        from: moment(Date.now()).add(-1,'hours'),
        to: moment(Date.now()).add(-1,'minutes'),
        data : {
          title : "Meeting #09888"
        }
      }
    ].map(i=>new AxiomSchedulerEvent(i.from.toDate(),i.to.toDate(),i.data,this.colors[Math.floor(Math.random() * this.colors.length)]));
    this.events2 = [...this.events];
  }


}
