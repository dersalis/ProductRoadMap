import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task-box',
  templateUrl: './task-box.component.html',
  styleUrls: ['./task-box.component.scss']
})
export class TaskBoxComponent implements OnInit {

  @Input() public id: number;
  @Input() public title: string;
  @Input() public description: string;
  @Input() public createDate: Date;
  @Input() public stars: number;

  constructor() { }

  ngOnInit() {
  }

}
