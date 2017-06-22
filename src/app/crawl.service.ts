import { Injectable } from '@angular/core';
import { Crawl } from './crawl.model';
import { MyCrawl } from './my-crawl.model';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CrawlService {
  crawls: FirebaseListObservable<any[]>;
  myCrawls: FirebaseListObservable<any[]>;
  myCrawlsObjs;

  constructor(private database: AngularFireDatabase) {
  this.crawls = database.list('crawls');
  this.myCrawls = database.list('myCrawls');
 }

 getCrawls(){
   return this.crawls;
 }
 getMyCrawls(){
   return this.myCrawls
 }

 addCrawl(newCrawl: Crawl){
   this.crawls.push(newCrawl);
 }

 getCrawlById(crawlId: string){
   return this.database.object('crawls/' + crawlId)
 }
 getMyCrawlById(myCrawlId: string){
   return this.database.object(myCrawlId)
 }

 addMyCrawl(newMyCrawl: MyCrawl){
   this.myCrawls.push(newMyCrawl);
 }

 updateCrawl(localUpdatedCrawl){

   var crawlEntryInFirebase = this.getCrawlById(localUpdatedCrawl.$key);

   crawlEntryInFirebase.update({title: localUpdatedCrawl.title,
                                startingTime: localUpdatedCrawl.startingTime,
                                crawlDate: localUpdatedCrawl.crawlDate
                              });
 }

  deleteCrawl(localCrawlToDelete){
    var crawlEntryInFirebase = this.getCrawlById(localCrawlToDelete.$key);


  crawlEntryInFirebase.remove();

 }

}
