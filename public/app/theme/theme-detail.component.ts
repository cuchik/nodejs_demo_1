import 'rxjs/add/operator/switchMap';
import {Subscription } from 'rxjs';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Theme }         from './theme';
import { ThemeService }  from './theme.service';

@Component({
  moduleId: module.id,
  selector: 'my-theme-detail',
  templateUrl: 'theme-detail.component.html',
  styleUrls: [ 'theme-detail.component.css' ]
})
export class ThemeDetailComponent {
  private subscription: Subscription;
  theme: Theme;


  constructor(
    private themeService: ThemeService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (param: any) => {
        let name = param['name'];
        this.themeService.getTheme(name).then(theme => this.theme = theme[0]);
      });
  }

  goBack(): void {
    this.location.back();
  }
}