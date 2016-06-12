import 'reflect-metadata';
import 'zone.js/dist/zone';
import {Component} from '@angular/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {Mongo} from 'meteor/mongo';
import {GiftCards} from '../collections/gift-cards';

@Component({
  selector: 'app',
  templateUrl: 'client/app.html'
})

class SmartGiftCards {
  cards: Mongo.Cursor<Object>;

  constructor () {
    this.cards = GiftCards.find();
  }
}
bootstrap(SmartGiftCards);
