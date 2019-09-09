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
      apiKey: "AIzaSyDHd2c8KXEE5Feoy4HYla_BUHvIradbNUg",
      authDomain: "book-library-project.firebaseapp.com",
      databaseURL: "https://book-library-project.firebaseio.com",
      projectId: "book-library-project",
      storageBucket: "",
      messagingSenderId: "778903111117",
      appId: "1:778903111117:web:33071594483a40cb697084"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
