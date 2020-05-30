import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {StudentModel} from '../model/student.model';
import {StudentsService} from '../services/students.service';
import {QueryDocumentSnapshot} from '@angular/fire/firestore/interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {
  displayedColumns: string[] = ['position', 'studentName', 'status'];
  @Input() houseNumber: number;
  @Input() editMode: boolean;
  data: StudentModel[];

  constructor(private studentsService: StudentsService) {
  }

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    this.updateUI();
  }

  ngOnInit(): void {
    this.updateUI();
  }

  updateUI(): void {
    this.studentsService
      .getAll(this.houseNumber)
      .subscribe(result =>
        this.data = result
      );
  }

  changeStudentStatus(student: StudentModel) {
    const subscription = this.studentsService.getKey(student).subscribe(key => {
      this.studentsService.updateStudent(key[0], student).then(res => console.log(res));
      this.updateUI();
      subscription.unsubscribe();
    });
  }

}
