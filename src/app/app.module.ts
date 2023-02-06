import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TrainingComponent } from './training/training.component';
import { PreviousTrainingComponent } from './training/previous-training/previous-training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { MaterialModule } from './material.module';
import { RoutingModule } from './routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { TrainingService } from './training/training.service';
import { StopTrainingComponent } from './training/current-training/stop-training/stop-training.component';
import { UserService } from './auth/user.service';
import { ProfileComponent } from './auth/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    TrainingComponent,
    PreviousTrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    StopTrainingComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [TrainingService, UserService],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent, ProfileComponent] 
})
export class AppModule { }
