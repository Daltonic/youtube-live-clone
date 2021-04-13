import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-related',
  templateUrl: './related.component.html',
  styleUrls: ['./related.component.css'],
})
export class RelatedComponent {
  @Input() image: string = ''
  @Input() title: string = ''
  @Input() channel: string = ''
  @Input() views: string = ''
  @Input() timestamp: string = ''
  @Input() live: boolean = false
}
