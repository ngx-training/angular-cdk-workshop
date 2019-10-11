import { Component, OnInit, ViewChild } from '@angular/core';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';

@Component({
  selector: 'app-button-select',
  templateUrl: './button-select.component.html',
  styleUrls: ['./button-select.component.scss']
})
export class ButtonSelectComponent implements OnInit {

  @ViewChild(SelectDropdownComponent, { static: false }) selectDropdown: SelectDropdownComponent;


  constructor() { }

  ngOnInit() { }

  showDropdown() {
    this.selectDropdown.show();
  }

  hiderDropdown() {
    this.selectDropdown.hide();
  }

}
