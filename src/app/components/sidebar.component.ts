import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

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
    <app-rows title="Liked Videos" icon="thumb_up_alt_outlined"></app-rows>
    <app-rows title="Show More" icon="expand_more_outlined"></app-rows>
    <hr class="sidebar__hr" />
    <button class="logout" (click)="logOut()">Logout</button>
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
        width: 100%;
        border: 0;
        padding: 15px;
        color: #ffffff;
        font-size: 14px;
        transition: all 0.3 ease;
        cursor: pointer;
      }

      .logout:hover {
        background: rgba(255, 0, 0, 0.829);
      }
    `,
  ],
})
export class SidebarComponent {
  constructor(private auth: AngularFireAuth, private route: Router) {}

  public logOut(): void {
    this.auth
      .signOut()
      .then(() => this.route.navigate(['login']))
      .catch((error) => console.log(error.message))
  }
}
