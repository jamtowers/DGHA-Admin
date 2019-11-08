import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of, EMPTY, throwError } from 'rxjs';
import { take, mergeMap, catchError, tap, map, timeout } from 'rxjs/operators';

import { ComplaintsService } from './complaints.service';
import { Complaint } from '../models/compaint';

@Injectable({
  providedIn: 'root'
})
export class ComplaintsResolverService implements Resolve<Complaint[]> {

  constructor(private complaintsService: ComplaintsService, private router: Router) { } 
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Complaint[]> | Observable<never> {
    return this.complaintsService.GetComplaints().pipe(
      map(complaints => {
        return complaints;
      }),
      catchError(error => {
        return EMPTY;
      })
    );
  }
}
