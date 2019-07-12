import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
  gameOver: boolean;

  private readonly NUMBER_OF_SQUARES = 9;
  private movesCounter: number;

  constructor() { }

  ngOnInit() {
    this.squares = new Array<number>(this.NUMBER_OF_SQUARES).fill(PlayerEnum.EMPTY);
    this.currentPlayer = this.getRandomStartPlayer();
    this.movesCounter = 0;
    this.gameOver = false;
  }

  squareClicked(index: number): void {
    if (!this.gameOver && this.isSqaureEmpty(index)) {
      this.squares[index] = this.currentPlayer;
      this.movesCounter++;

      if (!this.checkIfWinner() && !this.isTie()) {
        this.currentPlayer = this.getNextPlayer();
      } else {
        this.movesCounter = 0;
        this.endGame();
      }
    }
  }

  restart(): void {
    this.ngOnInit();
  }

  isTie(): boolean {
    return this.movesCounter === this.NUMBER_OF_SQUARES;
  }

  checkIfWinner(): boolean {
    // Check the rows
    for (let i = 0; i <= 6; i += 3) {
      if (this.squares[i] !== PlayerEnum.EMPTY &&
        this.squares[i] === this.squares[i + 1] &&
        this.squares[i] === this.squares[i + 2]) {
        return true;
      }
    }

    // Check the columns
    for (let i = 0; i <= 2; i++) {
      if (this.squares[i] !== PlayerEnum.EMPTY &&
        this.squares[i] === this.squares[i + 3] &&
        this.squares[i] === this.squares[i + 6]) {
        return true;
      }
    }

    // Check the diagonals
    if (this.squares[0] !== PlayerEnum.EMPTY &&
      this.squares[0] === this.squares[4] &&
      this.squares[0] === this.squares[8]) {
      return true;
    }

    if (this.squares[2] !== PlayerEnum.EMPTY &&
      this.squares[2] === this.squares[4] &&
      this.squares[2] === this.squares[6]) {
      return true;
    }

    return false;
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

  private endGame(): void {
    this.gameOver = true;
  }

}
