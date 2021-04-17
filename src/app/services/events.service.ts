import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private firestore: AngularFirestore) { }

  createEvent(data: any) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("events")
            .add(data)
            .then(res => {}, err => reject(err));
    });
}
}
