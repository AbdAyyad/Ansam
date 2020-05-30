import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {AngularFireDatabase} from '@angular/fire/database';
import {StudentModel} from '../model/student.model';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor(private angularFireDatabase: AngularFireDatabase) {
  }

  getAll(): Observable<any> {
    return this.angularFireDatabase.list<StudentModel>('Member')
      .valueChanges()
      .pipe(
        map(
          arr => arr
            .map(entry => entry.hNum)
        )
      );
  }
}
