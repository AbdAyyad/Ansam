import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  constructor() {
  }

  getAttendance(house: number): Observable<number> {
    return of(2);
  }

  getAbsence(house: number) {
    return of(2);
  }
}
