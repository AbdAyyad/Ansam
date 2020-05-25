import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {StudentModel} from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private data = [
    {
      studentName: 'a',
      status: true,
      id: 1
    },
    {
      studentName: 'b',
      status: true,
      id: 2
    },
    {
      studentName: 'c',
      status: false,
      id: 3
    },
    {
      studentName: 'd',
      status: false,
      id: 4
    },
  ];

  constructor() {
  }

  getAll(house: number): Observable<StudentModel[]> {
    return of(this.data);
  }
}
