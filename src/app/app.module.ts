import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DigitButtonComponent } from './calculator/digit-button/digit-button.component';
import { OperatorButtonComponent } from './calculator/operator-button/operator-button.component';
import { DisplayComponent } from './calculator/display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DigitButtonComponent,
    OperatorButtonComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
