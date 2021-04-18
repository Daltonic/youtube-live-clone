import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  message: string = '';
  event: any = null;
  events: Array<any> = [];

  constructor(
    private firestore: AngularFirestore,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((param) => {
      this.getEvent(param.id);
      this.listRelatedEvents(param.id);
    });
  }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  getEvent(id: string) {
    this.firestore
      .collection('events')
      .doc(id)
      .ref.get()
      .then((doc: any) => {
        const key = doc.id;
        const data = doc.data();
        data.videoId = this.toVideoId(data.videoId);
        this.event = { ...data, key };
      });
  }

  public listRelatedEvents(id: string) {
    this.firestore
      .collection('events', (ref) => ref.orderBy('timestamp', 'desc').limit(5))
      .snapshotChanges()
      .subscribe((snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const key: string = childSnapshot.payload.doc.id;
          const data: any = childSnapshot.payload.doc.data();
          if (key != id) this.events.push({ ...data, key });
        });
      });
  }

  ngAfterViewChecked(): void {
    this.scrollToEnd();
  }

  public toVideoId(url: string) {
    const regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    return url.match(regExp)[1];
  }

  scrollToEnd(): void {
    const elmnt = document.getElementById('messages-container');
    elmnt.scrollTop = elmnt.scrollHeight;
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

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  isMaxed(): Boolean {
    return this.message.split(' ').length >= 200;
  }

  loggy(): void {
    console.log(this.message);
  }
}
