import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise-dropdown',
  templateUrl: './exercise-dropdown.component.html',
  styleUrls: ['./exercise-dropdown.component.scss']
})
export class ExerciseDropdownComponent implements OnInit {

  testOptions: string[] = [
    'Test 1',
    'Test 2',
    'Test 3',
    'Test 4'
  ];

  constructor() { }

  ngOnInit() {
  }

}
