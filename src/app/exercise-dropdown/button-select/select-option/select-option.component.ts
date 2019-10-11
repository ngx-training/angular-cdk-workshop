import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';
import { Highlightable } from '@angular/cdk/a11y';
import { ButtonSelectComponent } from '../button-select.component';
import { DropdownService } from '../select-dropdown/dropdown.service';

@Component({
  selector: 'app-select-option',
  template: '<ng-content></ng-content>',
  styleUrls: ['./select-option.component.scss']
})
export class SelectOptionComponent implements Highlightable {

  @Input() value: string;

  @HostBinding('class.selectedObject')
  get selected(): boolean {
    return this.buttonSelect.selectedOption === this;
  }

  @HostBinding('class.active')
  active = false;

  private buttonSelect: ButtonSelectComponent;

  constructor(private dropDownService: DropdownService) {
    this.buttonSelect = this.dropDownService.getSelect();
  }

  @HostListener('click', ['$event'])
  onClick(event: UIEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.buttonSelect.selectOption(this);
  }

  getLabel(): string {
    return this.value;
  }

  setActiveStyles() {
    this.active = true;
  }

  setInactiveStyles() {
    this.active = false;
  }

}
