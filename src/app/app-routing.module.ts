import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CdkPlatformComponent } from './cdk-platform/cdk-platform.component';
import { ExerciseDropdownComponent } from './exercise-dropdown/exercise-dropdown.component';


export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'welcome'
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'platform',
    component: CdkPlatformComponent
  },
  {
    path: 'exercise-dropdown',
    component: ExerciseDropdownComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
