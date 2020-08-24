import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  constructor(private navCtrl: NavController) { }


  ngOnInit() {
  }
  goToContact(){
    this.navCtrl.navigateForward(['/contact-a',
  {
    Address:'148/1 ม3 ต.เขาพระ อ.รัตภูมิ จ.สงขลา 90180',
  }
  ]);
    // this.navCtrl.navigateForward(['/contact้้้้h',{
    // }]);
  }

  goBack(){
    this.navCtrl.navigateForward('/family');
  }
}
