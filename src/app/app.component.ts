import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { skip, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'DGHA-Admin';
  loading = false;

  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe((event: Event) => {
      switch (event.constructor) {
        case NavigationStart: {
          this.loading = true;
          break;
        }

        case NavigationEnd:
        case NavigationCancel:
        case NavigationError: {
          this.loading = false;

          //focus on designated focus element (usally page header)
          const focusElement = document.getElementById('#focusElement') as HTMLElement
          if (focusElement) {
            focusElement.tabIndex = -1;
            focusElement.focus();
          }
          break;
        }
        default: {
          break;
        }
      }
    });
  }

  ngOnInit() {
    //If logging out show loading spinner
    this.authService.loggingOut$.subscribe(loggingOut => {
      if(loggingOut) {
        this.loading = true;
      }
    });
  }
}
