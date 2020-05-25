import {Component, Input, OnInit} from '@angular/core';
import {StudentModel} from '../model/student.model';
import {StudentsService} from '../services/students.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'studentName', 'status'];
  @Input() houseNumber: number;
  data: StudentModel[];

  constructor(private studentsService: StudentsService) {
  }

  ngOnInit(): void {
    this.studentsService.getAll(this.houseNumber).subscribe(result => this.data = result);
  }

}
