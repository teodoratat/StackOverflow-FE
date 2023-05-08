import {Location} from "@angular/common";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";


import {
  HomeComponent
}
from "./home/home.component";
import {
  AboutComponent
} from "./about/about.component";
import {
  AppComponent
} from "./app.component";

describe('Router: App', ()=>{

  let location: Location;
  let router: Router;
  let fixture;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        AboutComponent,
        AppComponent
      ]
    });
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  xit('navigate to "" redirects you to /home', fakeAsync(() => {
    router.navigate([""]).then(() => {
      expect(location.path()).toBe("/home");
    });
  }));

  it('navigate to "about" takes you to /about', fakeAsync(() => {
    router.navigate(["/about"]).then(() => {
      expect(location.path()).toBe("/about");
    });
  }));

});
