import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { from } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  Name: string;
  Surname: string;

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {
    this.Name = this.route.snapshot.paramMap.get('Name');
    this.Surname = this.route.snapshot.paramMap.get('Surname');
  }

  ngOnInit() {
  }
  goHome() {
    this.navCtrl.navigateRoot('/home');
  }
}
