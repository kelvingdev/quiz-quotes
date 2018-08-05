import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Quote } from '../shared/quote.model';
import { QUOTES } from './quotes-mock';
import { htmlAstToRender3Ast } from '@angular/compiler/src/render3/r3_template_transform';
import { iif } from 'rxjs';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, OnDestroy {

  public question: string = 'Where is this Quote from?';
  public quotes: Quote[] = QUOTES;
  public answer: string = '';

  public round: number = 0;
  public quoteRound: Quote;

  public progress: number = 0;

  public lives: number = 3;

  @Output() public finishGame: EventEmitter<string> = new EventEmitter();

  constructor() { 
    this.updateRound();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  public getAnswer(answer: Event): void {
    this.answer = (<HTMLInputElement>answer.target).value;
    //console.log(this.answer);
  }

  public checkAnswer(): void { 
     if(this.quoteRound.answer == this.answer){ 
       //change the question of the round
       this.round++;
       this.updateRound();

       //Incress the progress bar
       this.progress = this.progress + (100 / this.quotes.length);

       //
       if(this.round  == this.quotes.length) {
          this.finishGame.emit("victory");
       }

      }else{
      //decress one live
      this.lives--;

      if(this.lives === -1){
        this.finishGame.emit("defeated");
      }
    }
  }

  public updateRound(): void{
      //get the quote of the round
      this.quoteRound = this.quotes[this.round];

      //clear the textfield
      this.answer = '';
  }
}
