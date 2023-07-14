import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'; 
import { FormComponent } from './components/form/form.component';

//PrimeNG
import { PanelModule } from 'primeng/panel';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { ChipsModule } from 'primeng/chips';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,

    //PrimeNG
    PanelModule,
    InputTextModule,
    InputTextareaModule,
    ChipsModule,
    CalendarModule,
    ButtonModule,
    DropdownModule

  ],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, FormComponent]
})
export class AppModule { }
