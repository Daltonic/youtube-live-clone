import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  message: string = "";

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  ngAfterViewInit(): void {
    this.scrollToEnd()
  }

  scrollToEnd(): void {
    const elmnt = document.getElementById('messages-container');
    elmnt.scrollTop = elmnt.scrollHeight;
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  isMaxed(): Boolean {
    return this.message.split(" ").length >= 200;
  }

  loggy(): void {
    console.log(this.message);
    
  }

}
