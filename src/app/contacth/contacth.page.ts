import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { from } from 'rxjs';
@Component({
  selector: 'app-contacth',
  templateUrl: './contacth.page.html',
  styleUrls: ['./contacth.page.scss'],
})
export class ContacthPage implements OnInit {

  constructor(private navCtrl: NavController, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  goHome() {
    this.navCtrl.navigateRoot('/home');
  }
}
