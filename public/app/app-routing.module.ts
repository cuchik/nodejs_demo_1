import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ThemeComponent }      from './theme/theme.component';
import { ThemeDetailComponent }  from './theme/theme-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/themes', pathMatch: 'full' },
  { path: 'detail/:name', component: ThemeDetailComponent },
  { path: 'themes',     component: ThemeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/