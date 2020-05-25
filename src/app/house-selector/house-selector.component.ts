import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HousesService} from '../services/houses.service';

@Component({
  selector: 'app-house-selector',
  templateUrl: './house-selector.component.html',
  styleUrls: ['./house-selector.component.scss']
})
export class HouseSelectorComponent implements OnInit {

  @Output() currentHouse: EventEmitter<number>;
  houseNumbers: number[];

  constructor(private houseService: HousesService) {
    this.currentHouse = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.houseService.getAll().subscribe(result => this.houseNumbers = [...result]);
    this.currentHouse.emit(0);
  }

  changeHouse(value: string) {
    if (value === '---') {
      this.currentHouse.emit(0);
    } else {
      this.currentHouse.emit(+value);
    }
  }
}
