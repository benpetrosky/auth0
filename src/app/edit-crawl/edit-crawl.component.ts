import { Component, Input, OnInit } from '@angular/core';
import { CrawlService } from '../crawl.service';

@Component({
  selector: 'app-edit-crawl',
  templateUrl: './edit-crawl.component.html',
  styleUrls: ['./edit-crawl.component.css'],
  providers: [CrawlService]
})
export class EditCrawlComponent implements OnInit {
  @Input() selectedCrawl;

  constructor(private crawlService: CrawlService) { }

  ngOnInit() {
  }

  beginUpdatingCrawl(crawlToUpdate){
    this.crawlService.updateCrawl(crawlToUpdate);
  }

  beginDeletingCrawl(crawlToDelete){
    if(confirm("Are you sure you want to delete this crawl? Everyone that signed up will be heartbroken by this decision... :(")){
      this.crawlService.deleteCrawl(crawlToDelete);
    }
  }

}
