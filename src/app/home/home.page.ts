import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {Flower} from '../model/Flower';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private router
  private flower: Flower

  constructor(router: Router) {
    this.router = router
      this.flower=new Flower(1,['Prime','Vert'])
  }

  details() {
    this.router.navigateByUrl('/details')
  }

}
