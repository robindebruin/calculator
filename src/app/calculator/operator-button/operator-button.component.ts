import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-operator-button',
  templateUrl: './operator-button.component.html',
  styleUrls: ['./operator-button.component.scss']
})
export class OperatorButtonComponent implements OnInit {

  @Input() operator: string;
  @Output() operatorSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  onSelectOperator(operator: string): void{
    this.operatorSelected.emit(operator);
  }

}
