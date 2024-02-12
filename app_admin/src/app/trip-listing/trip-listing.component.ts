import { Component, OnInit, PipeTransform } from '@angular/core';
import { trips } from '../data/trips';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-listing.component.html'
})

export class TripListingComponent implements OnInit {
  trips: Array<any> = trips;
  constructor() {}
  ngOnInit(): void {

  }
  }

