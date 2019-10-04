import { Component , ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, MenuController, NavController,LoadingController,IonRouterOutlet,AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  @ViewChild(IonRouterOutlet) routerOutlet: IonRouterOutlet;

  public appPages = [    
    {
      title: 'List',
      url: '/litsbook',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private router: Router,
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public loadingController: LoadingController,
    private alertCtrl: AlertController,
    
  ) {
    this.initializeApp();

    this.platform.backButton.subscribe(() => {
      if (this.routerOutlet && this.routerOutlet.canGoBack()) {
        this.routerOutlet.pop();
      } else if (this.router.url === '/tabs/tab3') {
        navigator['app'].exitApp()
      } else {
        this.presentAlertConfirm()
      }
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Do you want to exit the app?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            navigator['app'].exitApp()
          }
        }
      ]
    });

    await alert.present();
  }

  Logout: any;
  UserData: any;

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async logout() {
    const loading = await this.loadingController.create({
      message: 'Loading...',
    });
    await loading.present();
    this.menuCtrl.close();
    this.storage.get('UserData').then((val) => {
      this.UserData = val;
      console.log(val);
      console.log('logout')
      // this.UserData.Remember = false;
      // this.storage.set('UserData', this.UserData);
      this.storage.remove("UserData");
      this.router.navigateByUrl("/login");
      loading.dismiss();
    });
  }

  

}
