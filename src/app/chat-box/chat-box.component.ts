import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

const SOCKET_ENDPOINT = 'localhost:3000';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss']
})
export class ChatBoxComponent implements OnInit {

  socket;
  constructor() { }

  ngOnInit() {
    this.setupScoketConnection();
  }

  setupScoketConnection() {
    this.socket = io(SOCKET_ENDPOINT);
  }
}
