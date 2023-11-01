import {Component, ElementRef, TemplateRef, ViewContainerRef} from '@angular/core';
import {Overlay, OverlayRef} from "@angular/cdk/overlay";
import {TemplatePortal} from "@angular/cdk/portal";
import {take} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isOpen: boolean = false;
  overlayRef: OverlayRef = this.overlay.create({
    positionStrategy: this.overlay.position()
      .global()
      .centerVertically()
      .centerHorizontally(),
    hasBackdrop: true,

  });


  constructor(private overlay: Overlay, private elementRef: ElementRef, private viewContainerRef: ViewContainerRef) {
  }

  showOverlay(template: TemplateRef<any>) {
    if (this.overlayRef && this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }

    // this.overlayRef.attach(new ComponentPortal(OverlayComponent));
    this.overlayRef.backdropClick().pipe(take(1)).subscribe(() => {
      this.overlayRef.detachBackdrop();
      this.isOpen = false;
    });
    this.overlayRef?.attach(new TemplatePortal(template, this.viewContainerRef));
    this.isOpen = true;
  }

  hideOverlay() {
    this.overlayRef.detach();
    this.isOpen = false;
  }

  toggleOverlay(template: TemplateRef<any>) {
    if (this.isOpen) {
      this.hideOverlay();
    } else {
      this.showOverlay(template);
    }
  }
}
