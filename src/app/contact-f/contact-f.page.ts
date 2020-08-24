import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { from } from 'rxjs';

@Component({
  selector: 'app-contact-f',
  templateUrl: './contact-f.page.html',
  styleUrls: ['./contact-f.page.scss'],
})
export class ContactFPage implements OnInit {
  Family:String;

  constructor(private navCtrl:NavController,private route: ActivatedRoute) { 
    this.Family=this.route.snapshot.paramMap.get('Family');
  }

  ngOnInit() {
  }
  goHome(){
    this.navCtrl.navigateRoot('/home');
  }
}
