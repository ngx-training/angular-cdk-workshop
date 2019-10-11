import { Component, OnInit, ViewChild } from '@angular/core';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownService } from './dropdown/dropdown.service';

@Component({
  selector: 'app-dropdown-solution',
  templateUrl: './dropdown-solution.component.html',
  styleUrls: ['./dropdown-solution.component.scss']
})
export class DropdownSolutionComponent implements OnInit {

  @ViewChild(DropdownComponent, { static: false }) dropdown: DropdownComponent;

  constructor(private dropdownService: DropdownService) {
    this.dropdownService.register(this);
  }

  ngOnInit() {
  }

  showDropdown() {
    this.dropdown.show();
  }

  hideDropdown() {
    this.dropdown.hide();
  }

}
