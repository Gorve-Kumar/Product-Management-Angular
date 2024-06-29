import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


// ANGULAR EXECUTION START HERE.

// AppComponent IS THE ROOT COMPONENT
bootstrapApplication(AppComponent, appConfig) // Starting the App
  .catch((err) => console.error(err));
