import { Component, OnInit, PipeTransform } from '@angular/core';
import { trips } from '../data/trips';
import { CommonModule } from '@angular/common';
import { TripCardComponent } from '../trip-card/trip-card.component';
import { TripDataService } from '../services/trip-data.service'; 
import { Trip } from '../models/trip';


@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-listing.component.html',
  providers: [TripDataService]
})

export class TripListingComponent implements OnInit {
  //trips: Array<any> = trips;
  trips: Trip[] = [];
  message: string | undefined;

  constructor(private tripDataService: TripDataService) {}

  private getTrips(): void {
    console.log('Inside TripListingComponent#getTrips');
    this.message = 'Searching for trips';
    this.tripDataService
    .getTrips()
    .then(foundTrips => {
      this.message = foundTrips.length > 0 ? '' : 'No trips found';
      this.trips = foundTrips;
    });
  }
  ngOnInit(): void {
    this.getTrips();
  }
  }

