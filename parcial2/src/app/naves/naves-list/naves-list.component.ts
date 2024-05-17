import { Component, OnInit } from '@angular/core';
import { NavesService } from '../Naves.service';
import { Naves } from '../naves';

@Component({
  selector: 'app-naves-list',
  templateUrl: './naves-list.component.html',
  styleUrls: ['./naves-list.component.css']
})
export class NavesListComponent implements OnInit {
  naves: Array<Naves> = [];

  constructor(private navesService: NavesService) { }

  getNaves(): void {
    this.navesService.getNaves().subscribe((naves) => {
      this.naves = naves;
    });
  }

  ngOnInit() {
    this.getNaves
  }

}
