import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { Heart } from '../shared/heart.model';

@Component({
  selector: 'app-lives',
  templateUrl: './lives.component.html',
  styleUrls: ['./lives.component.css']
})
export class LivesComponent implements OnInit, OnChanges {

  // public emptyHeart: string = "/assets/empty_heart.png";
  // public fullHeart: string = "/assets/full_heart.png";

  @Input() public lives: number

  public hearts: Heart[] = [
    new Heart(true),
    new Heart(true),
    new Heart(true),
  ]

  constructor() { 
  }

  ngOnChanges() {

    if(this.lives !== this.hearts.length){
      let index = this.hearts.length - this.lives -1;
      this.hearts[index].full = false;
    }
  }

  ngOnInit() {
  }

}
