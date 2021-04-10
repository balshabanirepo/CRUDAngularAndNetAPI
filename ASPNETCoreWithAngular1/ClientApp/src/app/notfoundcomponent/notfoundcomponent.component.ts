import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfoundcomponent',
  templateUrl: './notfoundcomponent.component.html',
  styleUrls: ['./notfoundcomponent.component.css']
})
export class NOTFOUNDComponentComponent implements OnInit {
  text:string
  constructor() { }

  ngOnInit() {
    this.text="not found"
  }

}
