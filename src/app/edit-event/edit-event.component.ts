import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css'],
})
export class EditEventComponent {
  loading: boolean = false;
  authState: any = null;
  id: string = '';
  event: any = null;

  constructor(
    private firestore: AngularFirestore,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((param) => {
      this.getEvent(param.id);
      this.id = param.id;
    });
  }

  public submit(form: NgForm): void {
    if (form.valid) {
      this.loading = true;
      const data = form.value;

      this.firestore
        .collection('events')
        .doc(this.id)
        .update(data)
        .then(() => {
          this.loading = false;
          this.router.navigate(['events', this.id]);
        });
    }
  }

  getEvent(id: string) {
    this.firestore
      .collection('events')
      .doc(id)
      .ref.get()
      .then((doc: any) => {
        const key = doc.id;
        const data = doc.data();
        this.event = { ...data, key };
      });
  }
}
