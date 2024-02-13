import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-router.module';
import { TripListingComponent } from '../components/trip-listing/trip-listing.component';
import { TripCardComponent } from '../components/trip-card/trip-card.component';
import { TripDataService } from './services/trip-data.service';
import { AddTripComponent } from '../components/add-trip/add-trip.component';
import { EditTripComponent } from '../components/edit-trip/edit-trip.component';
import { DeleteTripComponent } from '../components/delete-trip/delete-trip.component';


@NgModule({
  declarations: [
    AppComponent,
    TripListingComponent,
    TripCardComponent,
    AddTripComponent,
    EditTripComponent,
    DeleteTripComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    TripDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }