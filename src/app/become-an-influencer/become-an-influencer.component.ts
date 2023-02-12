import { Component, OnInit } from '@angular/core';
declare const myFun1: any;
@Component({
  selector: 'app-become-an-influencer',
  templateUrl: './become-an-influencer.component.html',
  styleUrls: ['./become-an-influencer.component.css']
})
export class BecomeAnInfluencerComponent implements OnInit {
  callfun1(){
    myFun1();
  }
  constructor() { }

  ngOnInit(): void {
  }
}