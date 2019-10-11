import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop-solution',
  templateUrl: './drag-drop-solution.component.html',
  styleUrls: ['./drag-drop-solution.component.scss']
})
export class DragDropSolutionComponent {

  todos: string[] = [
    'Milch kaufen',
    'Salat',
    'Buch abgebenn',
    'Reifenn wechseln',
    'Steuererklärung abgeben'
  ];

  done: string[] = [
    'E-Mail schreiben',
    'Arzttermin',
    'Skype-Call'
  ];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  constructor() { }

}
