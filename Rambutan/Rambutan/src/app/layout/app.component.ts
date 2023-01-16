import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component } from '@angular/core';
import { Subscription } from 'rxjs';
//import { Helpers } from '../helpers/helpers';
import { startWith, delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //public subscription: Subscription = new Subscription;
  //public authentication: boolean = false;
  constructor() {
  }

  title = 'Angular 5 Seed';
  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }
}
