Devices = new Meteor.Collection('devices');

Devices.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return !! userId;
  },
  update: ownsDocument,
  remove: ownsDocument
});
