import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { CometChat } from '@cometchat-pro/chat';
import { environment } from 'src/environments/environment'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loading: boolean = false;
  constructor(private auth: AngularFireAuth, private route: Router) {}

  public submit(form): void {
    this.loading = true
    const email = form.email;
    const password = form.password;

    this.auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => this.loginCometChat(res.user))
      .catch((error) => console.log(error))
  }

  private loginCometChat(user: any) {
    const apiKey = environment.APP_KEY

    CometChat.login(user.uid, apiKey)
      .then(() => {
        if (user.photoURL) {
          this.route.navigate([''])
        } else {
          this.route.navigate(['profile'])
        }
      })
      .catch((error) => console.log(error))
      .finally(() => this.loading = false);
  }
}
