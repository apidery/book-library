import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAPIhUyvw8xl6OTcIiJXFa1iBo8tbTpaLQ",
      authDomain: "project-book-library.firebaseapp.com",
      databaseURL: "https://project-book-library.firebaseio.com",
      projectId: "project-book-library",
      storageBucket: "project-book-library.appspot.com",
      messagingSenderId: "414142576744",
      appId: "1:414142576744:web:457c2df14ae4cc357b23dd"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
