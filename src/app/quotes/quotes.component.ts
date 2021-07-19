import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  quote:Quotes[] = [
    new Quotes('I am Groot', 'Guardians of the Galaxy' ,'Anonymous',new Date(2021,2,26)),
    new Quotes("If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.", 'James Cameron' ,'Sandy',new Date(2021,2,27)),
    new Quotes("You miss 100% of the shots you don't take", 'Michael Scott' ,'Bob',new Date(2021,2,28)),
  ];

  toggleDetails(index) {
    this.quote[index].showAuthor = !this.quote[index].showAuthor;
  }

  addNewQuote(quotes) {
    quotes.completeDate = new Date (quotes.completeDate)
    this.quote.push(quotes);
  }

  deleteQuote(isComplete, index) {
    if(isComplete) {
      let toDelete= confirm(`Are you sure you want to delete this quote?`)

      if(toDelete) {
        this.quote.splice(index,1);
      }
    }
  }

  upvoteQ(quote:Quotes) {
    quote.upvote+=1;
  }
  downvoteQ(quote:Quotes) {
    quote.downvote+=1;
  }
  reset(quote:Quotes) {
    quote.upvote=0;
    quote.downvote=0;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
