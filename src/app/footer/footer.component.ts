import {Component, Input, OnInit} from '@angular/core';
import {AttendanceService} from '../services/attendance.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  attendees: number;
  absence: number;
  @Input() house: number;

  constructor(private attendanceService: AttendanceService) {
  }

  ngOnInit(): void {
    this.attendanceService.getAbsence(this.house).subscribe(res => this.absence = res);
    this.attendanceService.getAttendance(this.house).subscribe(res => this.attendees = res);
  }

}
