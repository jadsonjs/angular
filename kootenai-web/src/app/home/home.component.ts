import { Component, OnInit } from '@angular/core';

import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // o array of scenarios
  scenarios = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.scenariosList();
  }

  /** Chama o servico que retorna as unidades ativas do sistema*/
  scenariosList() {
      // subscribe is a "observable" returned by the service
      // when the service return something, it will be notificated and to assign scenarios array
      this.homeService.getScenarios().subscribe(dados => this.scenarios = dados );
  }
}
