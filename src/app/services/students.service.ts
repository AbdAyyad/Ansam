import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {StudentModel} from '../model/student.model';
import {AngularFireDatabase} from '@angular/fire/database';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private angularFireDatabase: AngularFireDatabase) {
  }

  getAll(house: number): Observable<StudentModel[]> {
    return this.angularFireDatabase.list<StudentModel>('/Member', ref => ref.orderByChild('hNum').equalTo(house)).valueChanges();
  }

  getKey(student: StudentModel): Observable<string[]> {
    return this.angularFireDatabase
      .list('Member', ref => ref.orderByChild('userid').equalTo(student.userid).limitToFirst(1))
      .snapshotChanges().pipe(
        map(
          items => items.map(a => a.payload.key)
        )
      );
  }

  updateStudent(key: string, student: StudentModel) {
    return this.angularFireDatabase.object<StudentModel>(`/Member/${key}`).update({
      status: !student.status,
      phone: student.phone,
      name: student.name,
      hNum: student.hNum,
      userid: student.userid
    });
  }
}
