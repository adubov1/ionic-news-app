import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  data: any;
  page = 0;
  maximumPages = 3;
  constructor(private newsService: NewsService, private theInAppBrowser: InAppBrowser) {  }
  public openWithInAppBrowser(url: string) {
    this.theInAppBrowser.create(url, `_self`, `_blank`);
  }
  ngOnInit() {

    this.newsService
    .getData('top-headlines?country=us')
    .subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
  loadArticles(infiniteScroll) {
    this.newsService
    .getData('top-headlines?country=us')
    .subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
  loadMore(infiniteScroll) {
      this.page++;
      this.loadArticles(infiniteScroll);

      if (this.page === this.maximumPages) {

      }
  }

}
