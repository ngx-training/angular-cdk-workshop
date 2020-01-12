import { Component, OnInit, Input, ViewChild, HostListener } from '@angular/core';
import { CdkPortal } from '@angular/cdk/portal';
import { OverlayRef, Overlay, OverlayConfig } from '@angular/cdk/overlay';

@Component({
  selector: 'app-select-dropdown',
  template: `
    <ng-template cdkPortal>
      <ng-content></ng-content>
    </ng-template>
  `,
  styleUrls: ['./select-dropdown.component.scss']
})
export class SelectDropdownComponent {

  @Input() reference: HTMLElement;

  @ViewChild(CdkPortal, { static: false }) portalTemplate: CdkPortal;

  protected overlayRef: OverlayRef;

  hidden = true;

  constructor(private overlay: Overlay) { }

  @HostListener('window:resize')
  onWindowResize() {
    this.syncWidth();
  }

  show() {
    this.overlayRef = this.overlay.create(this.getOverlayConfig());
    this.overlayRef.attach(this.portalTemplate);
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

    const referenceRectangle = this.reference.getBoundingClientRect();

    this.overlayRef.updateSize({ width: referenceRectangle.width });
  }

  protected getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay.position().global().centerHorizontally().centerVertically();


    return new OverlayConfig({
      positionStrategy: positionStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop'
    });
  }



}
