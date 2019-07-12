import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-current-player',
  templateUrl: './current-player.component.html',
  styleUrls: ['./current-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentPlayerComponent implements OnInit {
  @Input() value: string;

  constructor() { }

  ngOnInit() {
  }

}
