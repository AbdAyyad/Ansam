import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor() {
  }

  getAll(): Observable<number[]> {
    // TODO: change after meeting
    return of([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ]);
  }
}
