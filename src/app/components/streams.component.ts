import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streams',
  template: `
    <h2 class="streams__title">Videos</h2>
    <div class="streams__videos">
      <app-video
        title="Become a web developer in 10 minutes | 2019/2020"
        timestamp="3 days ago"
        channel="VueJs Ninja"
        views="2.3M views"
        image="https://i.ytimg.com/vi/dfB0qmJo1eM/hqdefault_live.jpg"
      ></app-video>

      <app-video
        title="Singapor Premier League"
        timestamp="1 days ago"
        channel="1 Play Sport" 
        views="100k views"
        image="https://i.ytimg.com/vi/BaoYEHeLqmU/hqdefault_live.jpg"
      ></app-video>

      <app-video
        title="Best Easter Worship Song 2020"
        timestamp="Streamed 1 day ago"
        channel="Best Worship Song"
        views="293k views"
        image="https://i.ytimg.com/vi/lKNqt-mF5MM/hqdefault.jpg"
      ></app-video>

      <app-video
        title="Become a web developer in 10 minutes | 2019/2020"
        timestamp="3 days ago"
        channel="VueJs Ninja"
        views="2.3M views"
        image="https://i.ytimg.com/vi/dfB0qmJo1eM/hqdefault_live.jpg"
      ></app-video>

      <app-video
        title="Singapor Premier League"
        timestamp="1 days ago"
        channel="1 Play Sport" 
        views="100k views"
        image="https://i.ytimg.com/vi/BaoYEHeLqmU/hqdefault_live.jpg"
      ></app-video>

      <app-video
        title="Best Easter Worship Song 2020"
        timestamp="Streamed 1 day ago"
        channel="Best Worship Song"
        views="293k views"
        image="https://i.ytimg.com/vi/lKNqt-mF5MM/hqdefault.jpg"
      ></app-video>
    </div>
  `,
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
