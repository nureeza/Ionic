import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-smarthome',
  templateUrl: './smarthome.page.html',
  styleUrls: ['./smarthome.page.scss'],
})
export class SmarthomePage implements OnInit {
  itemRef: AngularFireList<any>;
  items: Observable<any[]>;
  key: string;
  key1: string;
  topic: string;
  dueDate: string;
  isToogle: boolean;
  isAdd: boolean;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.isToogle = false;
    this.isAdd = true;
    this.led1 = 0;
    //this.dueDate = new Date().toString(); this.showData();
  }
  showData() {
    this.itemRef = this.db.list('/');
    this.items = this.itemRef.snapshotChanges().pipe(map(changes =>
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    );
  }
  save(Smarthome: any) {

    if (this.isAdd === true) {
      this.itemRef.set({ Smarthome});
      this.isToogle = false;

    } else {
      if (this.key) {
        this.itemRef.update(this.key, { Smarthome });
      }
      this.isAdd = false;
      this.isToogle = false;
    }
  }
  openForm() {
    this.isToogle = !this.isToogle;
    this.isAdd = true;
  }
}
