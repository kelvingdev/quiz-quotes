import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public runningGame: boolean = true;
  public finishType: string;

  public finishGame(type: string): void {
    this.runningGame = false;
    this.finishType = type;
  }

  public restartGame(): void {
   this.runningGame = true;
   this.finishType = undefined;
  }
}
