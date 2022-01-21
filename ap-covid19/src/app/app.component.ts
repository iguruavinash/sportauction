import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
title="ap-covid19";
  apCovid19Data: Array<any> = [];

  // covidData: Array<any> = [];;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getCovidData().subscribe((response: any) => {
      console.log(response);
      if (
        response["Andhra Pradesh"] && response["Andhra Pradesh"]["districtData"]
      ) {
        const apData = response["Andhra Pradesh"]["districtData"];
        this.apCovid19Data = Object.keys(apData).map(key => ({
          name: key,
          value: apData[key]
        }));
      } else {
        this.apCovid19Data = [];
      }
      console.log(this.apCovid19Data);
    });

    // this.appService.getCovidData().subscribe((response: any) => {
    //   if (
    //     response["Andaman and Nicobar Islands"] && response["Andaman and Nicobar Islands"]["districtData"]
    //   ) {
    //     const fullData = response["Andaman and Nicobar Islands"]["districtData"];
    //     this.covidData = Object.keys(fullData).map(key => ({
    //       name: key,
    //       value: fullData[key]
    //     }));
    //   } else {
    //     this.covidData = [];
    //   }
    //   console.log(this.covidData);
    // });
  };
};
