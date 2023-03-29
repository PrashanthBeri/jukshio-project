import { Component } from '@angular/core';
import { AppCommunicationService } from '../app-communication.service';

@Component({
  selector: 'app-first',
  templateUrl: './app-first.component.html',
  styleUrls: ['./app-first.component.scss']
})
export class AppFirstComponent {
  state = false;
  constructor(private appCommunicationService: AppCommunicationService){}
  changeState(){
    this.state = !this.state;
    this.appCommunicationService.updateState(this.state);
  }
}
