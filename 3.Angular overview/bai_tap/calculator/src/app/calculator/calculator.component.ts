import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1:number;
  num2:number;
  result:number;
  constructor() { }

  ngOnInit(): void {
  }

  sum():void{
      this.result=Number(this.num1)+Number(this.num2);
  }
  sub():void{
    this.result = Number(this.num1)-Number(this.num2);
  }
  mul():void{
    this.result = Number(this.num1) * Number(this.num2);
  }
  div():void{
    this.result = Number(this.num1)/Number(this.num2);
  }
}
