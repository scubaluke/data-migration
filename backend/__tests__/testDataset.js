const newRecords = [
  { id: 1, name: 'corrupted', email: 'myemail@gmail.com' },
  { id: 2, name: 'Newly added data', email: 'youremail@gmail.com' },
  { id: 3, name: 'kathy', email: 'thisemail@gmail.com' },
  {
    id: 4,
    name: 'joe',
    email: 'someemail@gmail.com',
    favorite_flavor: 'lingonberry',
  },
  { id: 12, name: 'steve', email: 'corruptEmail@gmail.com' },
];
const oldRecords = [
  { id: 1, name: 'jim', email: 'myemail@gmail.com' },
  { id: 3, name: 'kathy', email: 'thisemail@gmail.com' },
  { id: 4, name: 'joe', email: 'someemail@gmail.com' },
  { id: 12, name: 'steve', email: '2youremail@gmail.com' },
  { id: 14, name: 'Missed in migration', email: '4someemail@gmail.com' },
  // { id: 15, name: 'extra', email: 'extra@gmail.com' },
];
module.exports = { newRecords, oldRecords };
