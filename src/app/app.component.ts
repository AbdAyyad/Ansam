import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'grad-project';

  currentHouse = 0;
  editMode = false;

  houseChangeHandler(newHouse: number) {
    this.currentHouse = newHouse;
  }

  editModeHandler(mode: boolean): void {
    this.editMode = mode;
  }
}
