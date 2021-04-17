import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(private auth: AngularFireAuth, private route: Router) {}

  public submit(form): void {
    const email = form.email;
    const password = form.password;

    this.auth
      .signInWithEmailAndPassword(email, password)
      .then(() => this.route.navigate(['']))
      .catch((error) => console.log(error));
  }
}
