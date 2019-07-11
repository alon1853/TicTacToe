import { Component, OnInit } from '@angular/core';
import { PlayerEnum } from 'src/app/enums/player.enum';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  readonly PLAYER_ENUM = PlayerEnum;

  squares: Array<number>;
  currentPlayer: number;

  constructor() { }

  ngOnInit() {
    this.squares = new Array<number>(9).fill(-1);
    this.currentPlayer = this.getRandomStartPlayer();
  }

  squareClicked(index: number): void {
    if (this.isSqaureEmpty(index)) {
      this.squares[index] = this.currentPlayer;
      this.currentPlayer = this.getNextPlayer();
    }
  }

  private getRandomStartPlayer(): number {
    // Get random number from 0 to 1
    return Math.floor(Math.random() * 2);
  }

  private getNextPlayer(): PlayerEnum {
    return this.currentPlayer === PlayerEnum.O ? PlayerEnum.X : PlayerEnum.O;
  }

  private isSqaureEmpty(index: number): boolean {
    return this.squares[index] === -1;
  }

}
