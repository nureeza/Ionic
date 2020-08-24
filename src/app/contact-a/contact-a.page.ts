import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { from } from 'rxjs';
@Component({
  selector: 'app-contact-a',
  templateUrl: './contact-a.page.html',
  styleUrls: ['./contact-a.page.scss'],
})
export class ContactAPage implements OnInit {
  Address:String;

  constructor(private navCtrl:NavController,private route: ActivatedRoute) { 
    this.Address=this.route.snapshot.paramMap.get('Address');
  }

  ngOnInit() {
  }
  goHome(){
    this.navCtrl.navigateRoot('/home');
  }
}
