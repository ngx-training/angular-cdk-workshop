import { Injectable } from '@angular/core';
import { ButtonSelectComponent } from '../button-select.component';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  private select: ButtonSelectComponent;

  register(select: ButtonSelectComponent) {
    this.select = select;
  }

  getSelect(): ButtonSelectComponent {
    return this.select;
  }

}
