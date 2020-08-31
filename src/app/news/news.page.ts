import { News } from './../models/news';
import { NewsService } from './../news.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Subscription} from 'rxjs';
import { from } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit,OnDestroy {
  newses: News[];
  sub: Subscription;

  constructor(private NewsService: NewsService) { }

  ngOnInit() {
    this.sub = this.NewsService.getNews().subscribe(
      (newses) =>{

        this.newses = newses;
      }
    );
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
