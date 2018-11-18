import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-digit-button',
  templateUrl: './digit-button.component.html',
  styleUrls: ['./digit-button.component.scss']
})
export class DigitButtonComponent implements OnInit {

  @Input() digit: string;
  @Output() digitSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSelectDigit(digit: string): void{
    this.digitSelected.emit(digit);
  }

}
