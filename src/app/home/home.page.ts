import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { from } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private navCtrl: NavController) { }
  openSignup() {
    this.navCtrl.navigateForward('/signup');
    }

  ngOnInit() {
  }
  goToContact(){
    this.navCtrl.navigateForward('/contacth');
    // this.navCtrl.navigateForward(['/contact้้้้h',{
    // }]);
  }

  goBack(){
    this.navCtrl.navigateForward('/about');
  }
}
