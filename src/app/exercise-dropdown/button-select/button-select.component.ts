import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren, HostListener,
  OnInit,
  QueryList,
  ViewChild
} from '@angular/core';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';
import { SelectOptionComponent } from './select-option/select-option.component';
import { ActiveDescendantKeyManager } from '@angular/cdk/a11y';
import { DropdownService } from './select-dropdown/dropdown.service';
import { Subscription } from 'rxjs';
import * as Keycode from '@angular/cdk/keycodes';

@Component({
  selector: 'app-button-select',
  templateUrl: './button-select.component.html',
  styleUrls: ['./button-select.component.scss']
})
export class ButtonSelectComponent implements OnInit, AfterViewInit {

  @ViewChild(SelectDropdownComponent, { static: false }) selectDropdown: SelectDropdownComponent;

  @ContentChildren(SelectOptionComponent)
  options: QueryList<SelectOptionComponent>;

  selectedOption: SelectOptionComponent;
  selectedObject: any;

  displayText = '';

  private keyManager: ActiveDescendantKeyManager<SelectOptionComponent>;

  private _isInitialised = false;
  private _subscription: Subscription;

  @HostListener('keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (Keycode.SPACE === event.keyCode) {
      if (this.selectDropdown.hidden) {
        this.showDropdown();
        return;
      }

      if (!this.options.length) {
        event.preventDefault();
        return;
      }

      event.preventDefault();
      event.stopPropagation();
    }

    if (event.keyCode === Keycode.ENTER) {
      this.selectedOption = this.keyManager.activeItem;
      this.displayText = this.selectedOption ? this.selectedOption.value : '';
      this.hideDropdown();
    } else if (!this.selectDropdown.hidden && event.keyCode === Keycode.ESCAPE || event.keyCode === Keycode.ESCAPE) {
      this.hideDropdown();
    } else if (!this.selectDropdown.hidden && ((event.keyCode == Keycode.PAGE_DOWN) || (event.keyCode == Keycode.DOWN_ARROW) || (event.keyCode == Keycode.PAGE_UP) || (event.keyCode == Keycode.UP_ARROW))) {
      this.keyManager.onKeydown(event);
      event.preventDefault();
      event.stopPropagation();
    } else if (this.selectDropdown.hidden && ((event.keyCode == Keycode.PAGE_DOWN) || (event.keyCode == Keycode.DOWN_ARROW))) {
      event.preventDefault();
    } else if (this.selectDropdown.hidden && ((event.keyCode == Keycode.PAGE_UP) || (event.keyCode == Keycode.UP_ARROW))) {
      event.preventDefault();
    }
  }

  constructor(private dropDownService: DropdownService,
              private changeDetectorRef: ChangeDetectorRef) {
    this.dropDownService.register(this);
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this._subscription = this.options.changes.subscribe((newList: QueryList<any>) => {
      if (this._isInitialised) {
        this.updateWhenSelectionChanged();
      }
    });

    setTimeout(() => {
      this.updateWhenSelectionChanged();
      this._isInitialised = true;
    });

    this.keyManager = new ActiveDescendantKeyManager(this.options)
      .withHorizontalOrientation('ltr')
      .withVerticalOrientation()
      .withWrap();
  }

  showDropdown() {
    this.selectDropdown.show();

    if (!this.options.length) {
      return;
    }

    this.selectedObject ? this.keyManager.setActiveItem(this.selectedOption) : this.keyManager.setFirstItemActive();
  }

  hideDropdown() {
    this.selectDropdown.hide();
  }

  private updateWhenSelectionChanged() {
    this.selectedOption = this.options.toArray().find(option => option === this.selectedObject);
    this.displayText = this.selectedOption ? this.selectedOption.value : '';
    this.changeDetectorRef.markForCheck();
  }

  selectOption(option: SelectOptionComponent) {
    this.keyManager.setActiveItem(option);
    this.selectedObject = option;
    this.selectedOption = option;
    this.displayText = this.selectedOption ? this.selectedOption.value : '';
    this.hideDropdown();
    this.changeDetectorRef.markForCheck();
  }

}
