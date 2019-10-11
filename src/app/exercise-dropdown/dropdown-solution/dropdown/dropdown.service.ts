import { Injectable } from '@angular/core';
import { DropdownSolutionComponent } from '../dropdown-solution.component';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  private select: DropdownSolutionComponent;

  register(select: DropdownSolutionComponent) {
    this.select = select;
  }

  getSelect(): DropdownSolutionComponent {
    return this.select;
  }

}
