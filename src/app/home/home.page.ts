import { Component } from '@angular/core';
import { FirebaseX } from "@ionic-native/firebase-x/ngx";
import { Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  token: string | null;
  simulateError: any;

  constructor(private firebase: FirebaseX, private googlePlus: GooglePlus) {
    this.token = '';
  }

  getToken(){
    this.firebase.getToken().then(token => {
      this.token = token;
    });
  }

  setPerformanceEnable(){
    this.firebase.setAnalyticsCollectionEnabled(true);
    this.firebase.setPerformanceCollectionEnabled(true);
  }

  setUserId(){
    this.firebase.setCrashlyticsUserId(String(this.token));
  }

  sendLogErrorToCrash(){
    this.firebase.logMessage("Crash test!");
  }

  crashApp(){
    this.firebase.sendCrash();
  }

  normalexception(success:any, error:any){
    //this.loginGoogleAndroid();
  }

  async loginGoogleAndroid() {
    /*onst res = await this.googlePlus.login({
      'webClientId': '523893424469-nmnerih50vb2u7a16pajmtuhn6h3crkg.apps.googleusercontent.com',
      'offline': true
    });*/

    this.firebase.authenticateUserWithGoogle('523893424469-nmnerih50vb2u7a16pajmtuhn6h3crkg.apps.googleusercontent.com')
    .then(res => {
      console.error('Response!', res)
    }).catch(error => {
      console.error('error', error)
    })
}
}
