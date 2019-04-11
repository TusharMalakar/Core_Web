import { CollabModel } from './../../shared/models/collab.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collab-card',
  templateUrl: './collab-card.component.html',
  styleUrls: ['./collab-card.component.css']
})
export class CollabCardComponent implements OnInit {

  @Input() collabData: CollabModel;

  constructor() { }

  ngOnInit() {
  }

}
