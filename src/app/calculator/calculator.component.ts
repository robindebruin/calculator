import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  displayValue: string;
  memory: string;
  overwriteValue: boolean;
  savedOperator: string;

  constructor() {}

  ngOnInit() {
    this.clearDisplayValue();
    this.clearMemory();
    this.overwriteValue = false;
    this.savedOperator = null;
  }

  digitSelected(digit: string): void {
    this.updateCalculation(digit);
  }

  updateCalculation(digit: string) {
    if (this.overwriteValue) {
      this.memory = this.displayValue || this.memory;
      this.displayValue = digit;
      this.overwriteValue = false;
    } else {
      this.displayValue += digit;
    }
  }

  operatorSelected(operator: string) {
    if (this.memory) {
      const calculated = this.savedOperator ? this.calculate(this.savedOperator) : this.calculate(operator);
      this.displayValue = calculated.toString();
      this.overwriteValue = true;
      this.clearMemory();
    } else {
      this.memory = this.displayValue;
      this.clearDisplayValue();
    }
    this.savedOperator = operator;
  }

  calculate(operator: string): number {
    const memoryNr = Number.parseInt(this.memory);
    const displayValueNr = Number.parseInt(this.displayValue);

    if (displayValueNr) {
      switch (operator) {
        case '+':
          return memoryNr + displayValueNr;
        case '-':
          return memoryNr - displayValueNr;
        case '/':
          return memoryNr / displayValueNr;
        case '*':
          return memoryNr * displayValueNr;
        case '√':
      }
    }
    if (operator === '√') {
      return Math.sqrt(memoryNr);
    }
  }

  total() {
    const newDisplayValue = this.calculate(this.savedOperator);
    this.displayValue = newDisplayValue.toString();
    this.clearMemory();
    this.overwriteValue = true;
  }

  clear() {
    this.clearMemory();
    this.clearDisplayValue();
    this.savedOperator = null;
  }

  clearMemory() {
    this.memory = '';
  }

  clearDisplayValue() {
    this.displayValue = ''
  }



}
