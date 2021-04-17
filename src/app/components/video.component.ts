import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent {

  @Input() image: string = ''
  @Input() title: string = ''
  @Input() channel: string = ''
  @Input() views: string = ''
  @Input() timestamp: string = ''
  @Input() live: string = 'false'

  ngOnInit(): void {}
}
