import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private auth: AngularFireAuth, private route: Router) {}

  public submit(form: any): void {
    const fullname = form.fullname;
    const email = form.email;
    const password = form.password;

    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: fullname,
          })
          .then(() => {
            this.route.navigate(['login']);
          });
      })
      .catch((error) => console.log(error));
  }
}
