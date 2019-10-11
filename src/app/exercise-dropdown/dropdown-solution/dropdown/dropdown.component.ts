import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { CdkPortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-dropdown',
  template: `
      <ng-template cdkPortal>
          <ng-content></ng-content>
      </ng-template>
  `,
  styles: []
})
export class DropdownComponent {

  @Input() reference: HTMLElement;

  @ViewChild(CdkPortal, { static: true }) contentTemplate: CdkPortal;

  protected overlayRef: OverlayRef;

  hidden = false;

  constructor(private overlay: Overlay) { }

  @HostListener('window:resize')
  onWindowResize() {
    this.syncWidth();
  }

  show() {
    this.overlayRef = this.overlay.create(this.getOverlayConfig());
    this.overlayRef.attach(this.contentTemplate);
    this.syncWidth();
    this.overlayRef.backdropClick().subscribe(() => this.hide());
    this.hidden = false;
  }

  hide() {
    this.overlayRef.detach();
    this.hidden = true;
  }

  private syncWidth() {
    if (!this.overlayRef) {
      return;
    }

    const referenceRect = this.reference.getBoundingClientRect();
    this.overlayRef.updateSize({width: referenceRect.width});
  }

  protected getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay.position()
      .flexibleConnectedTo(this.reference)
      .withPush(false)
      .withPositions([{
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      }, {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
      }]);

    return new OverlayConfig({
      positionStrategy: positionStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop'
    });
  }

}
