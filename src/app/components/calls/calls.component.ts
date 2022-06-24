import { SaudiWordsData } from './../../interfaces/saudi-words-data';
import { CallsData } from './../../interfaces/calls-data';
import { Component, OnInit } from '@angular/core';
import { callsTableData , angryCustomerNotes, callsNotes, saudiAngruCustomerWords, saudiWordsTableData } from 'src/app/api/callsAPI';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.scss']
})
export class CallsComponent implements OnInit {

  callTableData:CallsData[] = [];
  callsNotesList:string[] = [];
  angryCustomerNotes:string[]=[];
  saudiAngruCustomerWords:string[]=[];
  saudiWordsTableData:SaudiWordsData[] = [];

  constructor() { }

  ngOnInit(): void {
    this.callTableData = callsTableData;
    this.callsNotesList = callsNotes;
    this.angryCustomerNotes = angryCustomerNotes;
    this.saudiAngruCustomerWords = saudiAngruCustomerWords;
    this.saudiWordsTableData = saudiWordsTableData;

  }

}
