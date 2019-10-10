import { Component } from '@angular/core';

interface NavRoute {
  name: string;
  path: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  routes: NavRoute[] = [
    {
      name: 'Welcome',
      path: 'welcome'
    },
    {
      name: 'Test',
      path: 'test'
    }
  ];

  constructor() { }

}
