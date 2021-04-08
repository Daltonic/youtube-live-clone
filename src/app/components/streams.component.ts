import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styles: [
    `
      .streams__title {
        margin-left: 5px;
        margin-bottom: 20px;
      }

      .streams__videos {
        display: flex;
        flex-wrap: wrap;
      }
    `,
  ],
})
export class StreamsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
