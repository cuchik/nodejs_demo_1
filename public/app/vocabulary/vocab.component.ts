import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

import { Vocab } from './vocab';
import {VocabService} from './vocab.service';

  
@Component({
  moduleId: module.id,
  selector: 'my-vocabs',
  templateUrl: 'vocab.component.html',
  styleUrls: [ 'vocab.component.css' ]
})
export class VocabComponent implements OnInit  {
	vocabs: Vocab[];
	selectedVocab: Vocab;
  private subscription: Subscription;
  en: string;
  vn: string;

  constructor(
    private vocabService: VocabService,
    private route: ActivatedRoute) { }
  getTheme(): any {
    let name = '';
    this.subscription = this.route.params.subscribe(
      (param: any) => {
        name = param['name'];
      });
    return name;
  }
  getVocabs(): void {
    this.vocabService.getVocabs(this.getTheme()).then(vocabs => this.vocabs = vocabs);
  }
  addVocab(): void {
    let body = {
      type: 'vocab',
      theme: this.getTheme(),
      en: this.en,
      vn: this.vn
    }
    this.vocabService.addVocab(body).then(vocabs => this.getVocabs() );
  }
  deleteVocab(body: Object): void {
    this.vocabService.deleteVocab(body).then(vocabs => this.getVocabs() );
  }
  ngOnInit(): void {
    this.getVocabs();
  }
}
