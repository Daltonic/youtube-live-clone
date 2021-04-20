import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { CometChat } from '@cometchat-pro/chat';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {
  messages: Array<any> = [];
  message: string = '';
  events: Array<any> = [];
  event: any = null;
  words: number = 0;
  user: any = null;
  id: string = '';

  constructor(
    private firestore: AngularFirestore,
    private auth: AngularFireAuth,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.auth.authState.subscribe((authState) => (this.user = authState));

    this.route.params.subscribe((param) => {
      this.id = param.id;
      this.getEvent(param.id);
      this.getMessages(param.id);
      this.listenForMessage(param.id);
      this.listRelatedEvents(param.id);
    });
  }

  ngOnInit(): void {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  ngOnDestroy(): void {
    CometChat.removeMessageListener(this.id)
  }

  public submit(form: NgForm): void {
    if (form.valid) {
      const data = { message: form.value.message, guid: this.id };
      this.sendMessage(data, form);
    }
  }

  private getMessages(guid: string) {
    const limit = 50;

    const messagesRequest = new CometChat.MessagesRequestBuilder()
      .setLimit(limit)
      .setGUID(guid)
      .build();

    messagesRequest
      .fetchPrevious()
      .then((messages: Array<any>) => {
        this.messages = messages.filter((m) => m.type == 'text');
      })
      .catch((error) =>
        console.log('Message fetching failed with error:', error)
      );
  }

  private listenForMessage(guid: string) {
    const listenerID = guid;

    CometChat.addMessageListener(
      listenerID,
      new CometChat.MessageListener({
        onTextMessageReceived: (message) => {
          this.messages.push(message);
          this.scrollToEnd();
        },
      })
    );
  }

  viewEvent(event: any) {
    this.joinGroup(event.key);
  }

  private joinGroup(guid: string) {
    const GUID = guid;
    const password = '';
    const groupType = CometChat.GROUP_TYPE.PUBLIC;

    CometChat.joinGroup(GUID, groupType, password)
      .then((group) => {
        console.log('Group joined successfully:', group);
        this.router.navigate(['events', guid]);
      })
      .catch((error) => {
        if (error.code != 'ERR_ALREADY_JOINED')
          console.log('Group joining failed with exception:', error);
        this.router.navigate(['events', guid]);
      });
  }

  private sendMessage(data: any, form: NgForm) {
    const receiverID = data.guid;
    const messageText = data.message;
    const receiverType = CometChat.RECEIVER_TYPE.GROUP;
    const textMessage = new CometChat.TextMessage(
      receiverID,
      messageText,
      receiverType
    );

    CometChat.sendMessage(textMessage)
      .then((message) => {
        this.messages.push(message);
        form.reset();
        this.scrollToEnd();
        this.wordCounter('');
      })
      .catch((error) =>
        console.log('Message sending failed with error:', error)
      );
  }

  onDelete() {
    if (confirm('Are you sure?')) this.remEvent();
  }

  private remEvent() {
    this.firestore
      .collection('events')
      .doc(this.event.key)
      .delete()
      .then(() => this.router.navigate(['']));
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
        this.events = [];
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

  wordCounter(words: string) {
    if(words == null) words = ''
    this.words = words.split('').length
  }
}
