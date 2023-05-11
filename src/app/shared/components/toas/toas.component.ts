import { Component, Input, OnInit } from '@angular/core';
import { ConnectionServiceService } from 'src/app/conteo-votos/services/connection-service.service';

@Component({
  selector: 'app-toas',
  templateUrl: './toas.component.html',
  styleUrls: ['./toas.component.scss'],
})
export class ToasComponent implements OnInit {
 message: string  = '';
  constructor(private  connectionService: ConnectionServiceService) {}
  ngOnInit() {
    this.connectionService.connectionErrorMessage$.subscribe((msg) => {
      this.message = msg;
    });
  }
}
