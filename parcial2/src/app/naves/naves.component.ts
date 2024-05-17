import { Component, OnInit } from '@angular/core';
import { Naves } from './naves';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.css']
})
export class NavesComponent implements OnInit {

  naves: Array<Naves> = []
  constructor() { }

  ngOnInit() {
  }

}
