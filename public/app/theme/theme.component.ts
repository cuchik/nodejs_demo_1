import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Theme } from './theme';
import {ThemeService} from './theme.service';

  
@Component({
  moduleId: module.id,
  selector: 'my-themes',
  templateUrl: 'theme.component.html',
  styleUrls: [ 'theme.component.css' ]
})
export class ThemeComponent implements OnInit  {
	themes: Theme[];
	selectedTheme: Theme;
  name: string;

  constructor(
    private themeService: ThemeService,
    private router: Router) { }
  getThemes(): void {
    //this.themeService.getThemesSlowly().then(themes => this.themes = themes);
    this.themeService.getThemes().then(themes => this.themes = themes);
  }
  addTheme(): void {
    let body = {
      name: this.name,
      type: 'theme'
    };
    this.themeService.addTheme(body).then(theme => this.getThemes());
  }
  deleteTheme(name: string): void {
    let body = {
      name: name,
      type: 'theme'
    };
    this.themeService.deleteTheme(body).then(theme => this.getThemes());
  }
  ngOnInit(): void {
    this.getThemes();
  }
}
