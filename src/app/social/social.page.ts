import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage implements OnInit {
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goToContact(){
    this.navCtrl.navigateForward(['/contact-s',
    {
      Social:'Nureeza Senbat',
      Facebook:'Nureeza Senbat',
      Line:'Nureeza',
    }
    ]);
    // this.navCtrl.navigateForward(['/contact้้้้h',{
    // }]);
  }

  goBack(){
    this.navCtrl.navigateForward('/home');
  }
}
