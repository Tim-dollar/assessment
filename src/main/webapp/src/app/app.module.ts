import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule ,  ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { VendingService} from './service/vending.service';
import { LoaderService } from './loader/loader.service';
import { LoaderComponent } from './loader/loader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatProgressBarModule , MatProgressBar , MatProgressSpinner } from '@angular/material';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent, 
   LoaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    Angular2FontawesomeModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
    
  ],
  providers: 
  [ VendingService, LoaderService , {
    provide : LOCALE_ID ,
    useValue : 'en-ZA'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
