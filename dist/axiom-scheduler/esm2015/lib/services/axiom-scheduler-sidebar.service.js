import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class AxiomSchedulerSidebarService {
    constructor() {
        this.data = new Subject();
        this.toggle = new Subject();
    }
    open(data) {
        this.toggle.next(true);
        setTimeout(() => {
            this.data.next(data);
        }, 200);
    }
    close() {
        this.toggle.next(false);
    }
}
AxiomSchedulerSidebarService.ɵfac = function AxiomSchedulerSidebarService_Factory(t) { return new (t || AxiomSchedulerSidebarService)(); };
AxiomSchedulerSidebarService.ɵprov = i0.ɵɵdefineInjectable({ token: AxiomSchedulerSidebarService, factory: AxiomSchedulerSidebarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(AxiomSchedulerSidebarService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpb20tc2NoZWR1bGVyLXNpZGViYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2F4aW9tLXNjaGVkdWxlci9zcmMvbGliL3NlcnZpY2VzL2F4aW9tLXNjaGVkdWxlci1zaWRlYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUUvQixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVUzQyxNQUFNLE9BQU8sNEJBQTRCO0lBS3ZDO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBNkIsQ0FBQztRQUNyRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7SUFDdkMsQ0FBQztJQUVNLElBQUksQ0FBQyxJQUErQjtRQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QixVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVNLEtBQUs7UUFDVixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzt3R0FuQlUsNEJBQTRCO29FQUE1Qiw0QkFBNEIsV0FBNUIsNEJBQTRCLG1CQUYzQixNQUFNO2tEQUVQLDRCQUE0QjtjQUh4QyxVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBeGlvbVNjaGVkdWxlckV2ZW50IH0gZnJvbSAnLi8uLi9heGlvbS1zY2hlZHVsZXIvYXhpb20tc2NoZWR1bGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXhpb21TY2hlZHVsZXJTaWRlYmFyRGF0YSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGV2ZW50czogQXhpb21TY2hlZHVsZXJFdmVudFtdO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBBeGlvbVNjaGVkdWxlclNpZGViYXJTZXJ2aWNlIHtcblxuICBwdWJsaWMgdG9nZ2xlOiBTdWJqZWN0PGJvb2xlYW4+O1xuICBwdWJsaWMgZGF0YTogU3ViamVjdDxBeGlvbVNjaGVkdWxlclNpZGViYXJEYXRhPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmRhdGEgPSBuZXcgU3ViamVjdDxBeGlvbVNjaGVkdWxlclNpZGViYXJEYXRhPigpO1xuICAgIHRoaXMudG9nZ2xlID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgfVxuXG4gIHB1YmxpYyBvcGVuKGRhdGE6IEF4aW9tU2NoZWR1bGVyU2lkZWJhckRhdGEpOiB2b2lkIHtcbiAgICB0aGlzLnRvZ2dsZS5uZXh0KHRydWUpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5kYXRhLm5leHQoZGF0YSk7XG4gICAgfSwgMjAwKTtcbiAgfVxuXG4gIHB1YmxpYyBjbG9zZSgpIDogdm9pZHtcbiAgICB0aGlzLnRvZ2dsZS5uZXh0KGZhbHNlKTtcbiAgfVxuXG59XG4iXX0=