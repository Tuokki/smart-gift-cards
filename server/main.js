import {Meteor} from 'meteor/meteor';
import {loadGiftCards} from './load-gift-cards.ts';
import {loadUsers} from './load-users.ts';

Meteor.startup(loadGiftCards, loadUsers);
