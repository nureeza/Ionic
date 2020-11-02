import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { from } from 'rxjs';

@Component({
  selector: 'app-contact-r',
  templateUrl: './contact-r.page.html',
  styleUrls: ['./contact-r.page.scss'],
})
export class ContactRPage implements OnInit {
  Name: String;
  Facebook: String;
  Line: String;

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {
    this.Name = this.route.snapshot.paramMap.get('Name');
    this.Facebook = this.route.snapshot.paramMap.get('Facebook');
    this.Line = this.route.snapshot.paramMap.get('Line');
  }

  ngOnInit() {
  }
  goHome() {
    this.navCtrl.navigateRoot('/home');
  }

}
