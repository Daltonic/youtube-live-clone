import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  about: boolean = false;
  events: Array<any> = [];

  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.listEvents();
  }

  public listEvents() {
    this.firestore
      .collection('events')
      .snapshotChanges()
      .subscribe((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const key: string = childSnapshot.payload.doc.id;
          const data: any = childSnapshot.payload.doc.data();
          this.events.push({ ...data, key });
        });
      });
  }

  public timeAgo(date: any) {
    const NOW: any = new Date();
    date = new Date(date);
    const times: any = [
      ['second', 1],
      ['minute', 60],
      ['hour', 3600],
      ['day', 86400],
      ['week', 604800],
      ['month', 2592000],
      ['year', 31536000],
    ];
    let diff: any = Math.round((NOW - date) / 1000);

    for (let t = 0; t < times.length; t++) {
      if (diff < times[t][1]) {
        if (t == 0) {
          return 'Just now';
        } else {
          diff = Math.round(diff / times[t - 1][1]);
          return diff + ' ' + times[t - 1][0] + (diff == 1 ? ' ago' : 's ago');
        }
      }
    }
  }
}
