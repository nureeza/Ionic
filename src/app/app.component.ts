import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Name',
      url: '/about',
      icon: 'person'
    },
    {
      title: 'Address',
       url: '/favorites',
       icon: 'heart'
     },
     {
       title: 'Family',
       url: '/family',
       icon: 'person'
     },
     {
       title: 'Social',
      url: '/social',
       icon: 'mail'
     },
     {
      title: 'Button',
       url: '/button',
       icon: 'warning'
     },
     {
      title: 'Course',
       url: '/course',
       icon: 'star'
     },
     {
      title: 'News',
       url: '/news',
       icon: 'book'
     },
     {
      title: 'Note',
       url: '/note',
       icon: 'key'
     },
     {
      title: 'Smarthome',
       url: '/smarthome',
       icon: 'pencil'
     },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
