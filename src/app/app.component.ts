import { Component } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private appService: AppService) {}

  public postMessage: string ='';
  private webhookURL: string = '';

  public sendGoogleChat = () => {
    const requestBody = {text: this.postMessage};
    this.appService.post(this.webhookURL, requestBody).subscribe(res => {
      console.log('res:', res);
    });
  }
}
