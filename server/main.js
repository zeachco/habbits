import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo'

Meteor.startup(() => {
  // code to run on server at startup
});

// const UserAccounts = new Mongo.Collection('users');

const Users = new Mongo.Collection('Users')
try {
  Users.insert({ _id: '5' })
} catch (err) {
  // console.error(err)
}

// Meteor.loginAsAdmin = function(password, callback) {
//   // Create a login request with admin: true, so our loginHandler can handle this request
//   const loginRequest = { admin: true, password: password };

//   // Send the login request 📤
//   Accounts.callLoginMethod({
//     methodArguments: [loginRequest],
//     userCallback: callback
//   });
// };

// Meteor.loginAsAdmin("admin-password");
