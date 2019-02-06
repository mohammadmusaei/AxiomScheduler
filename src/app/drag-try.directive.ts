import { Directive, Renderer2, ElementRef, OnInit, ViewContainerRef } from '@angular/core';
import * as interact from 'interactjs';

@Directive({
  selector: '[appDragTry]'
})
export class DragTryDirective implements OnInit {


  constructor(private _renderer: Renderer2, private _element: ElementRef,private _containerRef : ViewContainerRef) {

  }

  ngOnInit(): void {
    // const element = this._element.nativeElement;
    // console.log(this._containerRef.element.nativeElement);
    // var x = 0, y = 0;
    // var self = this;
    // interact(element).draggable({
    //   snap: {
    //     targets: [
    //       (<any>(interact)).createSnapGrid({ x: 15, y: 15 })
    //     ],
    //     range: Infinity,
    //     relativePoints: [{ x: 0, y: 0 }]
    //   },
    //   inertia: true,
    //   restrict: {
    //     restriction: 'parent',
    //     elementRect: { top: 0, left: 0, bottom: 0, right: 2 }
    //   },
    //   autoScroll: {
    //     container: this._containerRef.element.nativeElement.parentElement
    //   }
    // })
    //   .on('dragmove', function (event) {
    //     x += event.dx;
    //     y += event.dy;
    //     event.target.style.webkitTransform =
    //       event.target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    //   });
  }

}
