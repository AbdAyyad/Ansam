import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HousesService} from '../services/houses.service';

@Component({
  selector: 'app-house-selector',
  templateUrl: './house-selector.component.html',
  styleUrls: ['./house-selector.component.scss']
})
export class HouseSelectorComponent implements OnInit {

  @Output() currentHouse: EventEmitter<number>;
  @Output() editMode: EventEmitter<boolean>;
  showAccessButton: boolean;
  houseNumbers: number[];

  constructor(private houseService: HousesService) {
    this.currentHouse = new EventEmitter<number>();
    this.editMode = new EventEmitter<boolean>();
    this.showAccessButton = true;
  }

  ngOnInit(): void {
    // @ts-ignore
    this.houseService.getAll().subscribe(result => this.houseNumbers = [...new Set(result)].sort((a, b) => a - b));
    this.currentHouse.emit(0);
    this.editMode.emit(false);
  }

  changeHouse(value: string) {
    if (value === '---') {
      this.currentHouse.emit(0);
    } else {
      this.currentHouse.emit(+value);
    }
  }

  setEditMode(): void {
    this.editMode.emit(true);
    this.showAccessButton = false;
  }
}
