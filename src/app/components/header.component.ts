import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div class="header">
      <div class="header__left">
        <mat-icon class="header__icon">menu</mat-icon>
        <img class="header__logo" src="/assets/logo.svg" alt="youtube logo" />
      </div>

      <div class="header__middle">
        <input class="header__search" type="text" placeholder="Search" />
        <mat-icon class="header__icon header__searchBtn">search</mat-icon>
      </div>

      <div class="header__right">
        <mat-icon class="header__icon">video_call</mat-icon>
        <mat-icon class="header__icon">apps</mat-icon>
        <mat-icon class="header__icon">notifications</mat-icon>
        <img src="/assets/avatar.jpg" class="mat-card-avatar" />
      </div>
    </div>
  `,
  styles: [
    `
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        position: sticky;
        top: 0;
        background-color: white;
        z-index: 100;
      }

      .header__icon {
        line-height: unset;
      }

      .header__logo {
        height: 75px;
        margin-left: 20px;
      }

      .header__left,
      .header__middle,
      .header__right {
        display: flex;
        align-items: center;
      }

      .header__middle {
        width: 40%;
        border: 1px solid black;
      }

      .header__middle > input {
        flex: 1;
        border: none;
      }

      .header__searchBtn {
        width: 50px !important;
        background-color: #fafafa;
        border-left: 1px solid lightgray;
        color: gray;
        text-align: center;
      }

      .header__right > .header__icon {
        margin-right: 10px;
      }

      .mat-card-avatar {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        flex-shrink: 0;
        object-fit: cover;
      }
    `,
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
