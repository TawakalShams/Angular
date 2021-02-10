import {Component} from '@angular/core';
import { AuthService } from '../../auth/authng.service';
import { navItems } from '../../_nav';
import { Router} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  submitted = false;

    constructor(
      private authService: AuthService,
      private router: Router,
      ){}
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  
}
