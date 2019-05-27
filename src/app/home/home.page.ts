import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private router

  constructor(router: Router) {
    this.router = router
  }

  details() {
    this.router.navigateByUrl('/details')
  }

}
