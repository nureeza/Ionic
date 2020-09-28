import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-family',
  templateUrl: './family.page.html',
  styleUrls: ['./family.page.scss'],
})
export class FamilyPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goToContact() {
    this.navCtrl.navigateForward(['/contact-f',
      {
        Family: 'มีพี่น้อง 4 คน',
      }
    ]);
    // this.navCtrl.navigateForward(['/contact้้้้h',{
    // }]);
  }

  goBack() {
    this.navCtrl.navigateForward('/social');
  }
}
