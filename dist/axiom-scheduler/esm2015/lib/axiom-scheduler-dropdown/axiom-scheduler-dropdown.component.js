import { Component, ViewEncapsulation, forwardRef, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { ReplaySubject, fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function AxiomSchedulerDropdownComponent__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelementStart(1, "g", 4);
    i0.ɵɵelement(2, "polyline", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function AxiomSchedulerDropdownComponent__svg_svg_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelementStart(1, "g", 6);
    i0.ɵɵelement(2, "polyline", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function AxiomSchedulerDropdownComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵlistener("click", function AxiomSchedulerDropdownComponent_div_4_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r6); const item_r4 = ctx.$implicit; const ctx_r5 = i0.ɵɵnextContext(2); return ctx_r5.select(item_r4); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", item_r4[ctx_r3.dataTitle], " ");
} }
function AxiomSchedulerDropdownComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, AxiomSchedulerDropdownComponent_div_4_div_1_Template, 2, 1, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("@dropdownAnimation", undefined);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r2.items);
} }
export class AxiomSchedulerDropdownComponent {
    constructor(_element) {
        this._element = _element;
        this.items = [];
        this.ngModelChange = new EventEmitter();
        this.destroyed = new ReplaySubject(1);
        this.propagateChange = (_) => { };
        this.onTouched = () => { };
    }
    set ngModel(ngModel) {
        this._ngModel = ngModel;
    }
    get ngModel() {
        return this._ngModel;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.destroyEventObserver();
    }
    onChange() {
        this.propagateChange(this.ngModel);
    }
    writeValue(obj) {
        this.ngModel = obj;
    }
    registerOnChange(fn) {
        this.propagateChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    toggle(toggle = !this.open) {
        this.open = toggle;
        if (this.open) {
            this.setEventObserver();
        }
        else {
            this.destroyEventObserver();
        }
    }
    inputFormatter() {
        if (this.ngModel) {
            var index = this.items.findIndex(i => i[this.dataId] === this.ngModel);
            if (index > -1) {
                return this.items[index][this.dataTitle];
            }
        }
        else {
            return '';
        }
    }
    select(item) {
        this.ngModel = this.modelFormatter ? this.modelFormatter(item) : item;
        this.propagateChange(this.ngModel);
        this.toggle(false);
    }
    closeOnGlobalClick(targetElement) {
        if (targetElement) {
            const arrow = targetElement.id === 'ax-dropdown-arr';
            const clickedInside = this._element.nativeElement.contains(targetElement);
            if (!clickedInside && !arrow) {
                this.toggle(false);
            }
        }
    }
    closeOnGlobalKeydown(event) {
        if (event.keyCode === 27) {
            this.toggle(false);
        }
    }
    setEventObserver() {
        this.destroyed = new ReplaySubject(1);
        fromEvent(document, 'click').pipe(takeUntil(this.destroyed)).subscribe((event) => this.closeOnGlobalClick(event.target));
        fromEvent(document, 'keydown').pipe(takeUntil(this.destroyed)).subscribe((event) => this.closeOnGlobalKeydown(event));
    }
    destroyEventObserver() {
        if (this.destroyed) {
            this.destroyed.next(true);
            this.destroyed.complete();
        }
    }
}
AxiomSchedulerDropdownComponent.ɵfac = function AxiomSchedulerDropdownComponent_Factory(t) { return new (t || AxiomSchedulerDropdownComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
AxiomSchedulerDropdownComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AxiomSchedulerDropdownComponent, selectors: [["ax-scheduler-dropdown"]], hostAttrs: [1, "ax-scheduler-dropdown"], hostVars: 2, hostBindings: function AxiomSchedulerDropdownComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("open", ctx.open);
    } }, inputs: { dataTitle: "dataTitle", dataId: "dataId", items: "items", modelFormatter: "modelFormatter", ngModel: "ngModel" }, outputs: { ngModelChange: "ngModelChange" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => AxiomSchedulerDropdownComponent),
                multi: true
            }
        ])], decls: 5, vars: 4, consts: [[1, "ax-scheduler-dropdown__model", 3, "click"], ["id", "ax-dropdown-arr", "height", "24px", "version", "1.1", "viewBox", "0 0 24 24", "width", "24px", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 4, "ngIf"], ["class", "ax-scheduler-dropdown__list", 4, "ngIf"], ["id", "ax-dropdown-arr", "height", "24px", "version", "1.1", "viewBox", "0 0 24 24", "width", "24px", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["id", "ax-dropdown-arr", "fill", "none", "fill-rule", "evenodd", "id", "icon/chevron-bottom", "stroke", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1"], ["id", "ax-dropdown-arr", "id", "lineart", "points", "20.5 7.5 11.5 16.5 2.5 7.5", "stroke", "#000000"], ["id", "ax-dropdown-arr", "fill", "none", "fill-rule", "evenodd", "id", "icon/chevron-top", "stroke", "none", "stroke-linecap", "round", "stroke-linejoin", "round", "stroke-width", "1"], ["id", "ax-dropdown-arr", "id", "lineart", "points", "20.5 15.5 11.5 6.5 2.5 15.5", "stroke", "#000000"], [1, "ax-scheduler-dropdown__list"], [3, "click", 4, "ngFor", "ngForOf"], [3, "click"]], template: function AxiomSchedulerDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("click", function AxiomSchedulerDropdownComponent_Template_div_click_0_listener() { return ctx.toggle(); });
        i0.ɵɵtext(1);
        i0.ɵɵtemplate(2, AxiomSchedulerDropdownComponent__svg_svg_2_Template, 3, 0, "svg", 1);
        i0.ɵɵtemplate(3, AxiomSchedulerDropdownComponent__svg_svg_3_Template, 3, 0, "svg", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, AxiomSchedulerDropdownComponent_div_4_Template, 2, 2, "div", 2);
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx.inputFormatter(), " ");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.open);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.open);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.open);
    } }, directives: [i1.NgIf, i1.NgForOf], styles: [".ax-scheduler-dropdown{display:inline-block;margin:0;padding:0;position:relative;width:auto}.ax-scheduler-dropdown.open .ax-scheduler-dropdown__model{border-bottom:none;border-radius:5px 5px 0 0}.ax-scheduler-dropdown .ax-scheduler-dropdown__model{border:1px solid #ddd;border-radius:5px;display:block;margin:0;min-width:100px;padding:5px 13px 5px 8px;width:100%}.ax-scheduler-dropdown .ax-scheduler-dropdown__model svg{float:right;height:16px;position:relative;right:-7px;top:2px;width:16px}.ax-scheduler-dropdown .ax-scheduler-dropdown__list{background-color:#fff;border:1px solid #ddd;border-radius:0 0 5px 5px;border-top:none;box-shadow:0 8px 16px 0 rgba(0,0,0,.2);display:flex;flex-direction:column;margin:0;max-height:300px;overflow:auto;padding:0;position:relative;z-index:100}.ax-scheduler-dropdown .ax-scheduler-dropdown__list div{cursor:pointer;flex:1;font-size:13px;padding:5px 8px;text-align:left}.ax-scheduler-dropdown .ax-scheduler-dropdown__list div:hover{background-color:#eee}.ax-scheduler-dropdown .ax-scheduler-dropdown__list div:last-child{border-radius:0 0 5px 5px}"], encapsulation: 2, data: { animation: [
            trigger('dropdownAnimation', [
                transition(':leave', [
                    animate(`${80}ms ease-in-out`, style({ transform: 'scale(0)' }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AxiomSchedulerDropdownComponent, [{
        type: Component,
        args: [{
                selector: 'ax-scheduler-dropdown',
                templateUrl: './axiom-scheduler-dropdown.component.html',
                styleUrls: ['./axiom-scheduler-dropdown.component.scss'],
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => AxiomSchedulerDropdownComponent),
                        multi: true
                    }
                ],
                host: {
                    'class': 'ax-scheduler-dropdown',
                    '[class.open]': 'open'
                },
                animations: [
                    trigger('dropdownAnimation', [
                        transition(':leave', [
                            animate(`${80}ms ease-in-out`, style({ transform: 'scale(0)' }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { dataTitle: [{
            type: Input
        }], dataId: [{
            type: Input
        }], items: [{
            type: Input
        }], modelFormatter: [{
            type: Input
        }], ngModel: [{
            type: Input
        }], ngModelChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb20tc2NoZWR1bGVyLWRyb3Bkb3duLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2F4aW9tLXNjaGVkdWxlci9zcmMvbGliL2F4aW9tLXNjaGVkdWxlci1kcm9wZG93bi9heGlvbS1zY2hlZHVsZXItZHJvcGRvd24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvYXhpb20tc2NoZWR1bGVyL3NyYy9saWIvYXhpb20tc2NoZWR1bGVyLWRyb3Bkb3duL2F4aW9tLXNjaGVkdWxlci1kcm9wZG93bi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBeUIsTUFBTSxlQUFlLENBQUM7QUFDckksT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7SUNEekMsbUJBRUU7SUFGRiw4QkFFRTtJQUFBLDRCQUVFO0lBQUEsOEJBQ0Y7SUFBQSxpQkFBSTtJQUNOLGlCQUFNOzs7SUFFTixtQkFFRTtJQUZGLDhCQUVFO0lBQUEsNEJBRUU7SUFBQSw4QkFDRjtJQUFBLGlCQUFJO0lBQ04saUJBQU07Ozs7SUFJTiwrQkFDRTtJQUQ4Qix5T0FBc0I7SUFDcEQsWUFDRjtJQUFBLGlCQUFNOzs7O0lBREosZUFDRjtJQURFLDBEQUNGOzs7SUFIRiw4QkFDRTtJQUFBLHNGQUNFO0lBRUosaUJBQU07OztJQUpnRCw4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QUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDTyxPQUFPO2tCQUFuQixLQUFLO1lBT0ksYUFBYTtrQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgZm9yd2FyZFJlZiwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SLCBDb250cm9sVmFsdWVBY2Nlc3NvciB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IHRyaWdnZXIsIHRyYW5zaXRpb24sIHN0eWxlLCBhbmltYXRlIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBSZXBsYXlTdWJqZWN0LCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXgtc2NoZWR1bGVyLWRyb3Bkb3duJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2F4aW9tLXNjaGVkdWxlci1kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2F4aW9tLXNjaGVkdWxlci1kcm9wZG93bi5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEF4aW9tU2NoZWR1bGVyRHJvcGRvd25Db21wb25lbnQpLFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF0sXG4gIGhvc3Q6IHtcbiAgICAnY2xhc3MnOiAnYXgtc2NoZWR1bGVyLWRyb3Bkb3duJyxcbiAgICAnW2NsYXNzLm9wZW5dJzogJ29wZW4nXG4gIH0sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdkcm9wZG93bkFuaW1hdGlvbicsIFtcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICAgICAgYW5pbWF0ZShgJHs4MH1tcyBlYXNlLWluLW91dGAsIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknIH0pKVxuICAgICAgXSlcbiAgICBdKVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIEF4aW9tU2NoZWR1bGVyRHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkRlc3Ryb3kge1xuXG4gIEBJbnB1dCgpIGRhdGFUaXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBkYXRhSWQ6IHN0cmluZztcbiAgQElucHV0KCkgaXRlbXM6IGFueVtdID0gW107XG4gIEBJbnB1dCgpIG1vZGVsRm9ybWF0dGVyOiAodmFsOiBhbnkpID0+IGFueTtcbiAgQElucHV0KCkgc2V0IG5nTW9kZWwobmdNb2RlbDogYW55KSB7XG4gICAgdGhpcy5fbmdNb2RlbCA9IG5nTW9kZWw7XG4gIH1cbiAgZ2V0IG5nTW9kZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25nTW9kZWw7XG4gIH1cblxuICBAT3V0cHV0KCkgbmdNb2RlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHB1YmxpYyBvcGVuOiBib29sZWFuO1xuXG4gIHByb3RlY3RlZCBkZXN0cm95ZWQ6IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgUmVwbGF5U3ViamVjdDxib29sZWFuPigxKTtcblxuICBwcml2YXRlIF9uZ01vZGVsOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZikgeyB9XG5cbiAgcHVibGljIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveUV2ZW50T2JzZXJ2ZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNoYW5nZSgpIHtcbiAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh0aGlzLm5nTW9kZWwpO1xuICB9XG5cbiAgcHVibGljIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm5nTW9kZWwgPSBvYmo7XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IGFueSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMucHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cblxuICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgcHVibGljIHByb3BhZ2F0ZUNoYW5nZSA9IChfOiBhbnkpID0+IHsgfVxuXG4gIHB1YmxpYyBvblRvdWNoZWQgPSAoKSA9PiB7IH07XG5cbiAgcHVibGljIHRvZ2dsZSh0b2dnbGUgPSAhdGhpcy5vcGVuKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuID0gdG9nZ2xlO1xuICAgIGlmICh0aGlzLm9wZW4pIHtcbiAgICAgIHRoaXMuc2V0RXZlbnRPYnNlcnZlcigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuZGVzdHJveUV2ZW50T2JzZXJ2ZXIoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgaW5wdXRGb3JtYXR0ZXIoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5uZ01vZGVsKSB7XG4gICAgICB2YXIgaW5kZXggPSB0aGlzLml0ZW1zLmZpbmRJbmRleChpID0+IGlbdGhpcy5kYXRhSWRdID09PSB0aGlzLm5nTW9kZWwpO1xuICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNbaW5kZXhdW3RoaXMuZGF0YVRpdGxlXTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNlbGVjdChpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm5nTW9kZWwgPSB0aGlzLm1vZGVsRm9ybWF0dGVyID8gdGhpcy5tb2RlbEZvcm1hdHRlcihpdGVtKSA6IGl0ZW07XG4gICAgdGhpcy5wcm9wYWdhdGVDaGFuZ2UodGhpcy5uZ01vZGVsKTtcbiAgICB0aGlzLnRvZ2dsZShmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIGNsb3NlT25HbG9iYWxDbGljayh0YXJnZXRFbGVtZW50OiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGFyZ2V0RWxlbWVudCkge1xuICAgICAgY29uc3QgYXJyb3cgPSB0YXJnZXRFbGVtZW50LmlkID09PSAnYXgtZHJvcGRvd24tYXJyJztcbiAgICAgIGNvbnN0IGNsaWNrZWRJbnNpZGUgPSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnModGFyZ2V0RWxlbWVudCk7XG4gICAgICBpZiAoIWNsaWNrZWRJbnNpZGUgJiYgIWFycm93KSB7XG4gICAgICAgIHRoaXMudG9nZ2xlKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsb3NlT25HbG9iYWxLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3KSB7XG4gICAgICB0aGlzLnRvZ2dsZShmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRFdmVudE9ic2VydmVyKCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveWVkID0gbmV3IFJlcGxheVN1YmplY3Q8Ym9vbGVhbj4oMSk7XG4gICAgZnJvbUV2ZW50KGRvY3VtZW50LCAnY2xpY2snKS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpLnN1YnNjcmliZSgoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHRoaXMuY2xvc2VPbkdsb2JhbENsaWNrKGV2ZW50LnRhcmdldCkpO1xuICAgIGZyb21FdmVudChkb2N1bWVudCwgJ2tleWRvd24nKS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3llZCkpLnN1YnNjcmliZSgoZXZlbnQ6IEtleWJvYXJkRXZlbnQpID0+IHRoaXMuY2xvc2VPbkdsb2JhbEtleWRvd24oZXZlbnQpKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVzdHJveUV2ZW50T2JzZXJ2ZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICB0aGlzLmRlc3Ryb3llZC5uZXh0KHRydWUpO1xuICAgICAgdGhpcy5kZXN0cm95ZWQuY29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuXG59XG4iLCI8ZGl2IGNsYXNzPVwiYXgtc2NoZWR1bGVyLWRyb3Bkb3duX19tb2RlbFwiIChjbGljayk9XCJ0b2dnbGUoKVwiPlxuICB7eyBpbnB1dEZvcm1hdHRlcigpIH19XG5cbiAgPHN2ZyBpZD1cImF4LWRyb3Bkb3duLWFyclwiICpuZ0lmPVwiIW9wZW5cIiBoZWlnaHQ9XCIyNHB4XCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0cHhcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICA8ZyBpZD1cImF4LWRyb3Bkb3duLWFyclwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGlkPVwiaWNvbi9jaGV2cm9uLWJvdHRvbVwiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMVwiPlxuICAgICAgPHBvbHlsaW5lIGlkPVwiYXgtZHJvcGRvd24tYXJyXCIgaWQ9XCJsaW5lYXJ0XCIgcG9pbnRzPVwiMjAuNSA3LjUgMTEuNSAxNi41IDIuNSA3LjVcIiBzdHJva2U9XCIjMDAwMDAwXCIgLz5cbiAgICA8L2c+XG4gIDwvc3ZnPlxuXG4gIDxzdmcgaWQ9XCJheC1kcm9wZG93bi1hcnJcIiAqbmdJZj1cIm9wZW5cIiBoZWlnaHQ9XCIyNHB4XCIgdmVyc2lvbj1cIjEuMVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiB3aWR0aD1cIjI0cHhcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIj5cbiAgICA8ZyBpZD1cImF4LWRyb3Bkb3duLWFyclwiIGZpbGw9XCJub25lXCIgZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGlkPVwiaWNvbi9jaGV2cm9uLXRvcFwiIHN0cm9rZT1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlLXdpZHRoPVwiMVwiPlxuICAgICAgPHBvbHlsaW5lIGlkPVwiYXgtZHJvcGRvd24tYXJyXCIgaWQ9XCJsaW5lYXJ0XCIgcG9pbnRzPVwiMjAuNSAxNS41IDExLjUgNi41IDIuNSAxNS41XCIgc3Ryb2tlPVwiIzAwMDAwMFwiIC8+XG4gICAgPC9nPlxuICA8L3N2Zz5cblxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiYXgtc2NoZWR1bGVyLWRyb3Bkb3duX19saXN0XCIgKm5nSWY9XCJvcGVuXCIgW0Bkcm9wZG93bkFuaW1hdGlvbl0+XG4gIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXNcIiAoY2xpY2spPVwic2VsZWN0KGl0ZW0pXCI+XG4gICAge3sgaXRlbVtkYXRhVGl0bGVdIH19XG4gIDwvZGl2PlxuPC9kaXY+Il19