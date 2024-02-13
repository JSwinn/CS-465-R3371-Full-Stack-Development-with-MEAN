import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { TripDataService } from '../../app/services/trip-data.service';
import { Trip } from '../../app/models/trip';

@Component({
selector: 'app-trip-listing',
templateUrl: './trip-listing.component.html',
styleUrls: ['./trip-listing.component.css'],
providers: [TripDataService]
})
export class TripListingComponent implements OnInit {

 trips: Trip[] = [];
 message: string | undefined;

constructor(
  private tripDataService: TripDataService,
  private router: Router
  ) { }

public addTrip(): void {
  console.log('Inside Trip-listing Component: #AddTrip');
  this.router.navigate(['add-trip']);
}

public getTrips(): void {
  console.log('Inside Trip-listing Component: #GetTrips');
  this.message = 'Searching for trips';
  this.tripDataService
    .getTrips()
    .then(foundTrips => {
    this.message = foundTrips.length > 0 ? '' : 'No Trips Found!';
    this.trips = foundTrips;
    });
}



  ngOnInit(): void {
    this.getTrips();
  }
}