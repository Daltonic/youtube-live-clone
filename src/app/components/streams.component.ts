import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streams',
  template: `
    <h2 class="streams__title">Videos</h2>
    <div class="streams__videos"></div>
  `,
  styles: [
    `
      .streams__title {
        margin-left: 5px;
        margin-bottom: 20px;
      }
    `,
  ],
})
export class StreamsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
