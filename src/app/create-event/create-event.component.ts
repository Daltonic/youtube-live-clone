import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent {
  loading: boolean = false;
  authState: any = null;

  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth
  ) {
    this.auth.authState.subscribe((authState) => (this.authState = authState));
  }

  public submit(form: NgForm): void {
    if (form.valid) {
      this.loading = true;
      const data = form.value;
      data.timestamp = new Date().toJSON();
      data.views = this.randomNumber(100, 300);
      data.uid = this.authState.uid;

      this.firestore
        .collection('events')
        .add(data)
        .then(() => {
          form.reset();
          this.loading = false;
        });
    }
  }

  private randomNumber(min, max): Number {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
  }
}
