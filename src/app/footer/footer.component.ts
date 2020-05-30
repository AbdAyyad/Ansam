import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StudentsService} from '../services/students.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnChanges {
  attendees: number;
  absence: number;
  @Input() house: number;

  constructor(private studentService: StudentsService) {
  }

  ngOnInit(): void {
    this.updateUI();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateUI();
  }

  updateUI(): void {
    this.studentService.getAll(this.house).subscribe(res => this.absence = res.filter(entry => !entry.status).length);
    this.studentService.getAll(this.house).subscribe(res => this.attendees = res.filter(entry => entry.status).length);
  }

}
