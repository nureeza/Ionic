import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {
  itemRef: AngularFireList<any>;
  items: Observable<any[]>;
  key: string;
  topic: string;
  dueDate: string;
  isToogle: boolean;
  isAdd: boolean;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.isToogle = false;
    this.isAdd = true;
    this.topic = '';
    this.dueDate = new Date().toString(); this.showData();
  }
  showData() {
    this.itemRef = this.db.list('/');
    this.items = this.itemRef.snapshotChanges().pipe(map(changes =>
      changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    );
  }

  select(item: any) {

    this.topic = item.note.topic;
    this.dueDate = item.note.dueDate;
    this.key = item.key;
    this.isToogle = !this.isToogle;
    this.isAdd = false;
  }

  save(note: any) {

    if (this.isAdd === true) {
      this.itemRef.push({ note });
      this.isToogle = false;

    } else {
      if (this.key) {
        this.itemRef.update(this.key, { note });
      }
      this.isAdd = false;
      this.isToogle = false;
    }
  }

  delete(item: any) {
    this.itemRef.remove(item.key);
    this.isToogle = false;
  }

  openForm() {
    this.isToogle = !this.isToogle;
    this.isAdd = true;
  }
}
