import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { CometChat } from '@cometchat-pro/chat';
import { environment } from 'src/environments/environment';

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
        .then((d) => {
          form.reset();
          const groupName = this.toVideoId(data.videoId);
          const guid = d.id;
          this.cometChatCreateGroup({ groupName, guid });
        });
    }
  }

  private cometChatCreateGroup(data: any) {
    const GUID = data.guid;
    const groupName = data.groupName;
    const groupType = CometChat.GROUP_TYPE.PUBLIC;
    const password = '';

    const group = new CometChat.Group(GUID, groupName, groupType, password);

    CometChat.createGroup(group)
      .then((group) => console.log('Group created successfully:', group))
      .catch((error) =>
        console.log('Group creation failed with exception:', error)
      )
      .finally(() => (this.loading = false));
  }

  private toVideoId(url: string) {
    const regExp = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/;
    return url.match(regExp)[1];
  }

  private randomNumber(min, max): Number {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
  }
}
