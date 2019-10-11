import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CdkPlatformComponent } from './cdk-platform/cdk-platform.component';
import { ExerciseDropdownComponent } from './exercise-dropdown/exercise-dropdown.component';
import { ExerciseDragDropComponent } from './exercise-drag-drop/exercise-drag-drop.component';
import { DragDropSolutionComponent } from './exercise-drag-drop/drag-drop-solution/drag-drop-solution.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DropdownSolutionComponent } from './exercise-dropdown/dropdown-solution/dropdown-solution.component';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { DropdownComponent } from './exercise-dropdown/dropdown-solution/dropdown/dropdown.component';
import { ButtonSelectComponent } from './exercise-dropdown/button-select/button-select.component';
import { SelectDropdownComponent } from './exercise-dropdown/button-select/select-dropdown/select-dropdown.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavigationComponent,
    CdkPlatformComponent,
    ExerciseDropdownComponent,
    ExerciseDragDropComponent,
    DragDropSolutionComponent,
    DropdownSolutionComponent,
    DropdownComponent,
    ButtonSelectComponent,
    SelectDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DragDropModule,
    PortalModule,
    OverlayModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
