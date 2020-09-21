import { News } from './../models/news';
import { NewsService } from './../news.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Subscription} from 'rxjs';
import { from } from 'rxjs';
import { Article } from '../models/news';

@Component({
  selector: 'app-course',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit, OnDestroy {
  newses: News[];
  sub: Subscription;
  articles: Article[];
  totalResults: number;
  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.sub = this.newsService.getNews().subscribe(
      (newses) =>{

        this.newses = newses;
      }
    );
  } 
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
