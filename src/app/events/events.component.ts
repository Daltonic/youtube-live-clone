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
    return this.firestore
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

  public getVideoId(url: string) {
    const regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    return url.match(regExp)[1];
  }
}
