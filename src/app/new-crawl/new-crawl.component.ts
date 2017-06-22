import { Component, OnInit } from '@angular/core';
import { Crawl } from '../crawl.model';
import { CrawlService} from '../crawl.service';
import { AuthService } from '../auth.service';
import { FoursquareService } from '../foursquare.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-new-crawl',
  templateUrl: './new-crawl.component.html',
  styleUrls: ['./new-crawl.component.css'],
  providers: [CrawlService, AuthService]
})
export class NewCrawlComponent implements OnInit {
  locations: FirebaseListObservable<any[]>;
  profile: any;
  addressStringOne: string;
  addressStringTwo: string;
  addressStringMid: string;

  constructor(private crawlService: CrawlService, private auth: AuthService, private foursquareService: FoursquareService) { }

  ngOnInit() {
    this.locations = this.foursquareService.getLocations();
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;

      });
    }
  }

  onChangeAddressOne(addressOption) {
    this.addressStringOne = addressOption;
  }

  onChangeAddressTwo(addressOption) {
    this.addressStringTwo = addressOption;
  }

  onChangeAddressMid(addressOption) {
    this.addressStringMid = addressOption;
  }

  submitForm(title: string, startingTime: string){
    var newCrawl: Crawl = new Crawl(this.profile.name, this.profile.sub, title, this.addressStringOne, this.addressStringMid, this.addressStringTwo, startingTime);
    this.crawlService.addCrawl(newCrawl);

  }

}
