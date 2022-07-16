import { Component, OnInit } from '@angular/core';
import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
 
  ngOnInit(): void {

    let onPingAction = new EventSourcePolyfill(
      /*'http://localhost:9000/.well-known/mercure?topic=ping'*/'http://mercure.docker.localhost:9000/.well-known/mercure?topic=ping',
      { headers: { Authorization: "Bearer " + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXJjdXJlIjp7InB1Ymxpc2giOlsiKiJdfX0.obDjwCgqtPuIvwBlTxUEmibbBf0zypKCNzNKP7Op2UM' } }
    );

    onPingAction.onmessage = (e:any) => {
      console.log("event : ",e);
    }
  }


}
