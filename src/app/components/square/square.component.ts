import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SquareComponent implements OnInit {
  @Input() value: number;

  constructor() { }

  ngOnInit() {
  }

}
