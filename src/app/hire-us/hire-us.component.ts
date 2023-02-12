import { Component, OnInit } from '@angular/core';
declare const myFun2: any;
@Component({
  selector: 'app-hire-us',
  templateUrl: './hire-us.component.html',
  styleUrls: ['./hire-us.component.css']
})
export class HireUsComponent implements OnInit {
  callfun2(){
    myFun2();
  }
  constructor() { }

  ngOnInit(): void {}}
