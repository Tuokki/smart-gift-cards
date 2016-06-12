import {Users} from '../collections/users.ts';

export function loadGUsers() {
  if (Users.find().count() === 0) {

    var users = [
      {
        'username': 'tuomas.saranen@gmail.com',
        'password': 'samout',
        'location': 'Helsinki',
        'gift-cards-owned': ['xxx', 'yyy', 'ppp']
      }
    ];

    for (var i = 0; i < users.length; i++) {
      Users.insert(users[i]);
    }
  }
}
