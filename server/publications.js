Meteor.publish('devices', function() {
  return Devices.find({userId: this.userId });
});