import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
      Welcome {{ name }}
    </h2>
    <input [id]="myId" type="text" value="Eddy">
    <input bind-disabled="isDisabled" id="{{ myId }}" type="text" value="Eddy">

    <h2 class="text-success">Codevolution</h2>
    <h2 [class]="successClass">Codevolution</h2>
    
    <h2 class="text-special" [class]="successClass">Codevolution</h2>
    <h2 [class.text-danger]="hasError">Codevolution</h2>

    <h2 [ngClass]="messageClasses">Codevolution</h2>

  `,
  styles: [`
    .text-success {
      color: green;
    }
    .text-danger {
      color: red;
    }
    .text-special {
      font-style: italic;
    }
  `]
})
export class TestComponent implements OnInit {

  public name = "Eddy";
  public myId = "testId";
  public isDisabled = false;

  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
