import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goToContact() {
    this.navCtrl.navigateForward(['/register',

    ]);

  }

}
