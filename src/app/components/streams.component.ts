import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streams',
  template: `
    <div class="streams">
      <h4>Hi I'm streaming</h4>
    </div>
  `,
  styles: [
    `
      .streams {
        flex: 0.8;
      }
    `,
  ],
})
export class StreamsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
