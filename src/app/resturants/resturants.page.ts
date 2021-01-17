import { Component, OnInit } from '@angular/core';

// Import for API
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { GlobalService } from "../global.service"

@Component({
  selector: 'app-resturants',
  templateUrl: './resturants.page.html',
  styleUrls: ['./resturants.page.scss'],
})
export class ResturantsPage implements OnInit {
  loading: any;
  data: string;
  error: string;

  constructor(
    private http: HttpClient,
    public loadingController: LoadingController,
    public global: GlobalService
  ) {
    this.data = '';
    this.error = '';
  }

  ngOnInit() {
  }
  
  async ionViewWillEnter() {
    // Present a loading controller until the data is loaded
    await this.presentLoading();
    // Load the data
    this.prepareDataRequest()
      .pipe(
        finalize(async () => {
          // Hide the loading spinner on success or error
          await this.loading.dismiss();
        })
      )
      .subscribe(
        data => {
          // Set the data to display in the template
          this.data = JSON.stringify(data);
        },
        err => {
          // Set the error information to display in the template
          this.error = `An error occurred, the data could not be retrieved: Status: ${err.status}, Message: ${err.statusText}`;
        }
      );
  }
  
  async presentLoading() {
    // Prepare a loading controller
    this.loading = await this.loadingController.create({
        message: 'Loading...'
    });
    // Present the loading controller
    await this.loading.present();
  }
  
  private prepareDataRequest(): Observable<object> {
    // Define the data URL
    const dataUrl = this.global.app_host + '/resturants';
    // Prepare the request
    return this.http.get(dataUrl);
  }

}
