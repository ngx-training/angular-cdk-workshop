import { Component, OnInit } from '@angular/core';
import {
  getSupportedInputTypes,
  Platform,
  supportsPassiveEventListeners,
  supportsScrollBehavior
} from '@angular/cdk/platform';

@Component({
  selector: 'app-cdk-platform',
  templateUrl: './cdk-platform.component.html',
  styleUrls: ['./cdk-platform.component.scss']
})
export class CdkPlatformComponent {

  supportedInputTypes = getSupportedInputTypes();
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  supportsScrollBehavior = supportsScrollBehavior();

  constructor(public platform: Platform) { }

}
