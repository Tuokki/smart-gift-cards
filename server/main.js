import {Meteor} from 'meteor/meteor';
import {loadGiftCards} from './load-gift-cards.ts';

Meteor.startup(loadGiftCards);
