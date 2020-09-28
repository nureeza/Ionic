import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { from } from 'rxjs';

@Component({
  selector: 'app-contact-s',
  templateUrl: './contact-s.page.html',
  styleUrls: ['./contact-s.page.scss'],
})
export class ContactSPage implements OnInit {
  Social: String;
  Facebook: String;
  Line: String;

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {
    this.Social = this.route.snapshot.paramMap.get('Social');
    this.Facebook = this.route.snapshot.paramMap.get('Facebook');
    this.Line = this.route.snapshot.paramMap.get('Line');
  }

  ngOnInit() {
  }
  goHome() {
    this.navCtrl.navigateRoot('/home');
  }
}
