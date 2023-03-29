import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppCommunicationService {
  state = new BehaviorSubject(false);
  updatedState = this.state.asObservable();
  updateState(state: boolean){
    this.state.next(state);
  }
}
