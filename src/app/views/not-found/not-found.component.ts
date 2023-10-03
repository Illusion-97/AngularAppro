import {Component} from '@angular/core';
import {Location} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {

  constructor(private router: Router, private location: Location) {
  }

  move(home?: boolean) {
    if (home) this.router.navigate(["/"]).catch(() => this.router.navigateByUrl("/"))
    else this.location.back();
  }
}
