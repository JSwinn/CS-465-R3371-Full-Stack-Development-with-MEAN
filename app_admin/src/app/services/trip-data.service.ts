import { Injectable } from '@angular/core';
import { Trip } from '../models/trip';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {

  constructor(private http: HttpClient) { }

  private apiBasedUrl = 'http://localhost:3000/api';
  private tripUrl = `${this.apiBasedUrl}/trips/`;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  public addTrip(formData: Trip): Promise<Trip> {
    console.log('Inside trip-data.service #AddTrip');
    return this.http  
      .post(this.tripUrl, formData, this.httpOptions)
      .toPromise()
      .then(response => response as Trip[])
       .catch(this.handleError);
  }


  public getTrips(): Promise<Trip[]> {
    console.log('Inside TripDataService#getTrips');
    return this.http
    .get<Trip[]>(`${this.apiBasedUrl}/trips`)
    .toPromise() //***********depreciated come back and correct later...
    .catch(this.handleError);
  }

  public getTrip(tripCode: string): Promise<Trip[]> {
    console.log('Inside trip-data.service #GetTrip');
    return this.http
        .get(this.tripUrl + tripCode)
        .toPromise()
        .then(response => response as Trip[])
        .catch(this.handleError);
  }
  
  public updateTrip(formData: Trip): Promise<Trip> {
    console.log('Inside trip-data.service #UpdateTrip');
    console.log(formData);
    return this.http
    .put(this.tripUrl + formData.code, formData)
    .toPromise()
    .then(response => response as Trip[])
    .catch(this.handleError);
   }

   public deleteTrip(tripCode: string) {
    console.log('Inside trip-data.service #DeleteTrip');
    return this.http
      .delete<void>(this.tripUrl + tripCode)
      .toPromise()
      .catch(this.handleError);
   }


  private handleError(error: any): Promise<any> {
    console.error('Something has gone wrong', error);
    return Promise.reject(error.message || error);
  }
}