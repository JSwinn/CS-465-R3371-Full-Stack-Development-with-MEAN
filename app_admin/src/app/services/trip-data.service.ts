import { Injectable } from '@angular/core';
import { Trip } from '../models/trip';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(private http: HttpClient) { }

  private apiBasedUrl = 'http://localhost:3000/api';

  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    return this.http
    .get<Trip[]>(`${this.apiBasedUrl}/trips`)
    .toPromise() //***********depreciated come back and correct later...
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}
