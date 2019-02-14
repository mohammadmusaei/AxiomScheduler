# Axiom Scheduler


### Usage

Use `ax-scheduler` tag to user scheduler.

```html

<ax-scheduler [axEventTemplate]="eventTemplate" [axSchedulerView]="'week'"
      [axEventToolbar]="true" [axAnimation]="'default" [axTheme]="'light'" [axEvents]="events"
      [axDragStep]="5" [axShowLocale]="true">
</ax-scheduler>

```

### Custom event template

For customizing events to show you can use `[axEventTemplate]` parameter and design your events template.

```html

<ng-template #t let-item="item">
   <div class="event-template">
      {{ item.data.title }} at <b> {{ item.from | date:'HH:mm' }} {{ item.to | date:'HH:mm' }} </b>
   </div>
</ng-template>

<ax-scheduler [axEventTemplate]="t" [axSchedulerView]="'week'"
      [axEventToolbar]="true" [axAnimation]="'default" [axTheme]="'light'" [axEvents]="events"
      [axDragStep]="5" [axShowLocale]="true">
</ax-scheduler>

```

As shown above, `#t` template passed to `[axEventTemplate]`, `item` variable provide entire event to use in your template.

### Localization

For change scheduler locale just pass your locale to `[axLocale]`, Always you can check available locales in [Momentjs i18n document](https://momentjs.com/docs/#/i18n/). 

```html

<ax-scheduler [axLocale]="'bm'">
</ax-scheduler>

```

![Alt Text](http://app.musaei.me/angular/scheduler/locales.gif)

### Themes

For change scheduler theme just pass 'light' or 'dark' to `[axTheme]`. 

```html

<ax-scheduler [axTheme]="'dark'">
</ax-scheduler>

```

![Alt Text](http://app.musaei.me/angular/scheduler/themes.gif)

### Animations

For change scheduler theme just pass available animations shown in [Input params table](###@Input()-Params)  to `[axAnimation]`. 

```html

<ax-scheduler [axAnimation]="'animation4'">
</ax-scheduler>

```

![Alt Text](http://app.musaei.me/angular/scheduler/animations.gif)

### @Input() Params

| Name | Type | Default | Usage |
| ------ | ------ | ------ | ------ |
| axEvents | -- | AxiomSchedulerEvent [ ] | List of scheduler events |
| axStartDate | Date | Today | Current date of scheduler  |
| axEventTemplate | TempateRef | -- | Custom template for events  |
| axDragStep | Number | 5 | Events drag and resize step  |
| axLocale | String | 'en' | Set scheduler locale, for more information of available locales, check [Momentjs i18n document](https://momentjs.com/docs/#/i18n/)  |
| axEventToolbar | boolean | false | Show/Hide events toolbar  |
| axSchedulerView | AxiomSchedulerView | 'day' | Set default scheduler view, Available views : 'day', 'week', 'month', 'year'  |
| axViews | AxiomSchedulerView [ ] | All views | Set scheduler available views to show  |
| axTheme | AxiomSchedulerTheme | 'light' | Set default scheduler theme, Available themes : 'light', 'dark'  |
| axAnimation | AxiomSchedulerAnimation | 'default' | Set default scheduler animation effects, Available animations : 'animation1', 'animation2', 'animation3', 'animation4', 'default', 'none'  |
| axShowLocale | boolean | true | Show/Hide locale dropdown  |
| axShowLocale | boolean | true | Show/Hide locale dropdown  |

### @Output() Params

| Name | Event Paramaters | Description
| ------ | ------ | ------ |
| axEventChange | AxiomSchedulerEvent | Fire when an event changed by dragging, resizing, or ...  |
| axEventClick | AxiomSchedulerEvent | Fire when an event clicked  |
| axEventDeleteClick | AxiomSchedulerEvent | Fire when remove button clicked from event's toolbar  |
| axEventEditClick | AxiomSchedulerEvent | Fire when edit button clicked from event's toolbar  |
| axDateChange | Date | Fire when date of scheduler changed by navigator  |
| axViewChange | AxiomSchedulerView | Fire when view of scheduler changed  |


