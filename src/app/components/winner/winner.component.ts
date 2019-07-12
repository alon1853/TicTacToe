import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-winner',
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WinnerComponent {
  @Input() isTie: boolean;
  @Input() lastPlayerName: string;

  @Output() restartGame: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  restartClicked(): void {
    this.restartGame.emit();
  }
}
