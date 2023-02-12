import { Component } from '@angular/core';
import * as $ from 'jquery';
declare const myFun3: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mma';
  callfun3() {
    myFun3();
  }
}
