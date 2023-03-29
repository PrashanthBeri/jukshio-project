import { Component } from '@angular/core';
import { AppCommunicationService } from '../app-communication.service';

@Component({
  selector: 'app-second',
  templateUrl: './app-second.component.html',
  styleUrls: ['./app-second.component.scss']
})
export class AppSecondComponent {
  state = false;
  constructor(private appCommunicationService: AppCommunicationService){}
  ngOnInit() {
    this.appCommunicationService.updatedState.subscribe(updatedState => (this.state = updatedState));
  }
}
