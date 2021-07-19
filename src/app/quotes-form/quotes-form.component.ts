import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.scss']
})
export class QuotesFormComponent implements OnInit {

  newQuote = new Quotes("","","", new Date());
  @Output() addQuote = new EventEmitter< Quotes>()

  submitQuote() {
    this.addQuote.emit(this.newQuote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
