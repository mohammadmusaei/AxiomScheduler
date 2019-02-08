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

  ngOnInit(): void {
    this.events = [
      // {
      //   from: moment(Date.now()).add(-1,'hours'),
      //   to: moment(Date.now()),
      //   data : {
      //     title : "Meeting #55564"
      //   }
      // },
      // {
      //   from: moment(Date.now()).add(-1,'hours'),
      //   to: moment(Date.now()),
      //   data : {
      //     title : "Meeting #54677"
      //   }
      // },
      // {
      //   from: moment(Date.now()).add(-1,'hours').add(5,'minutes'),
      //   to: moment(Date.now()).add(5,'minutes'),
      //   data : {
      //     title : "Meeting #54HYYT7"
      //   }
      // },
      // {
      //   from: moment(Date.now()).add(-1,'hours').add(20,'minutes'),
      //   to: moment(Date.now()).add(20,'minutes'),
      //   data : {
      //     title : "Meeting #5RE77"
      //   }
      // },
      // {
      //   from: moment(Date.now()).add(-1,'hours').add(40,'minutes'),
      //   to: moment(Date.now()).add(40,'minutes'),
      //   data : {
      //     title : "Meeting #F457"
      //   }
      // },
      // {
      //   from: moment(Date.now()).add(-2,'hours'),
      //   to: moment(Date.now()),
      //   data : {
      //     title : "Meeting #1334"
      //   }
      // },
      // {
      //   from: moment(Date.now()).add(-4,'hours'),
      //   to: moment(Date.now()).add(-2,'hours'),
      //   data : {
      //     title : "Meeting #097"
      //   }
      // },
      // {
      //   from: moment(Date.now()).add(-4,'hours'),
      //   to: moment(Date.now()).add(-2,'hours'),
      //   data : {
      //     title : "Meeting #T453"
      //   }
      // },
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
    ].map(i=>new AxiomSchedulerEvent(i.from.toDate(),i.to.toDate(),i.data));
  }


}
