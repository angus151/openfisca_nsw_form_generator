import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { TextfieldComponent } from './components/controls/textfield/textfield.component';
import { BaseControlDirective } from './components/controls/base-control.directive';
import { DropdownComponent } from './components/controls/dropdown/dropdown.component';
import { BooleanComponent } from './components/controls/boolean/boolean.component';
import { StringComponent } from './components/controls/string/string.component';
import { FloatComponent } from './components/controls/float/float.component';
import { DateComponent } from './components/controls/date/date.component';
import { IntComponent } from './components/controls/int/int.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    TextfieldComponent,
    BaseControlDirective,
    DropdownComponent,
    BooleanComponent,
    StringComponent,
    FloatComponent,
    DateComponent,
    IntComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
