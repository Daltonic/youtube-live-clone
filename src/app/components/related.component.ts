import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-related',
  template: `
    <div class="videoCard">
      <img class="videoCard__thumbnail" [src]="image" [alt]="channel" />
      <div class="video__text">
        <h4>{{ title }}</h4>
        <p>{{ channel }}</p>
        <p>{{ views }} . {{ timestamp }}</p>
        <p *ngIf="live"><span class="videoCard__indicator">LIVE NOW</span></p>
      </div>
    </div>
  `,
  styles: [
    `
      .mat-card-avatar {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        flex-shrink: 0;
        object-fit: cover;
      }

      .videoCard {
        cursor: pointer;
        display: flex;
        margin-top: 10px;
      }

      .videoCard__thumbnail {
        height: 100px;
        width: 150px;
      }

      .video__text {
        margin-left: 7px;
      }

      .video__text > h4 {
        font-size: 14px;
        margin-bottom: 5px;
      }

      .video__text > p {
        font-size: 14px;
        color: gray;
        margin: 0;
      }

      .video__text > p:last-child {
        margin-top: 8px;
      }

      .videoCard__indicator {
        padding: 2px;
        border-radius: 4px;
        border: 1px solid red;
        color: red;
      }

      .videoCard__indicator > img {
        width: 40px;
      }

      .videoCard__indicator > p {
        font-weight: 500;
      }
    `,
  ],
})
export class RelatedComponent {
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() channel: string = '';
  @Input() views: string = '';
  @Input() timestamp: string = '';
  @Input() live: string = 'false';
}
