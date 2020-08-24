import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { from } from 'rxjs';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToContact(){
    //this.navCtrl.navigateForward('/contact');
    this.navCtrl.navigateForward(['/contact',{
      Name:'Nureeza',
      Surname:'Senbat'
    }]);
  }

  goBack(){
    this.navCtrl.navigateForward('/favorites');
  }
}
