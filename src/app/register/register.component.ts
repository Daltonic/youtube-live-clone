import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { CometChat } from '@cometchat-pro/chat';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  loading: boolean = false;
  constructor(private auth: AngularFireAuth, private route: Router) {}

  public submit(form: any): void {
    this.loading = true;
    const fullname = form.fullname;
    const email = form.email;
    const password = form.password;
    const avatar = this.generateImageFromIntial(fullname);

    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        res.user
          .updateProfile({
            displayName: fullname,
            photoURL: avatar,
          })
          .then(() => this.signUpWithCometChat({ ...res.user, avatar }));
      })
      .catch((error) => {
        console.log(error);
        this.loading = false;
      });
  }

  private signUpWithCometChat(data: any) {
    const apiKey = environment.APP_KEY;

    const user = new CometChat.User(data.uid);

    user.setName(data.displayName);
    user.setMetadata({avatar: data.avatar});

    CometChat.createUser(user, apiKey)
      .then(() => this.route.navigate(['login']))
      .catch((error) => {
        console.log(error);
        this.loading = false;
      });
  }

  private generateImageFromIntial(name: any) {
    let canvas: any = document.createElement('canvas');
    canvas.style.display = 'none';
    canvas.width = '32';
    canvas.height = '32';
    document.body.appendChild(canvas);

    let context = canvas.getContext('2d');
    context.fillStyle = '#999';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = '16px Arial';
    context.fillStyle = '#ccc';

    if (name && name != '') {
      let initials = name[0];
      context.fillText(initials.toUpperCase(), 10, 23);

      let data = canvas.toDataURL();
      document.body.removeChild(canvas);
      return data;
    } else {
      return false;
    }
  }
}
