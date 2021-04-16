import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
    <app-rows title="Home" icon="home"></app-rows>
    <app-rows title="Trending" icon="whatshot"></app-rows>
    <app-rows title="Subscription" icon="subscriptions"></app-rows>
    <hr class="sidebar__hr" />
    <app-rows title="Library" icon="video_library"></app-rows>
    <app-rows title="History" icon="history"></app-rows>
    <app-rows selected="true" svg="access_point" title="Live"></app-rows>
    <app-rows title="Your Videos" icon="tv"></app-rows>
    <app-rows title="Watch Later" icon="watch_ater"></app-rows>
    <app-rows title="Liked Vedios" icon="thumb_up_alt_outlined"></app-rows>
    <app-rows title="Show More" icon="expand_more_outlined"></app-rows>
    <hr class="sidebar__hr" />
    <button class="logout" [routerLink]="['/login']">Logout</button>
  `,
  styles: [
    `
      .sidebar__hr {
        height: 1px;
        border: 0;
        background-color: lightgray;
        margin-top: 10px;
        margin-bottom: 10px;
      }

      .logout {
        font-family: "Roboto", sans-serif;
        text-transform: uppercase;
        outline: 0;
        background: red;
        width: 20%;
        border: 0;
        padding: 15px;
        color: #ffffff;
        font-size: 14px;
        transition: all 0.3 ease;
        cursor: pointer;
        position: fixed;
        bottom: 0;
      }

      .logout:hover {
        background: rgba(255, 0, 0, 0.829);
      }
    `,
  ],
})
export class SidebarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
