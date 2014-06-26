


Template.simulationTemplate.helpers({
    devices:  function () {
  	  
		  return Devices.find({userId: this.userId });
  },
   somme_conso : function () {
  	  var somme = 0;
     var output = 0;
		  var validation_messages =  Devices.find().fetch();
   var somme_consommation = 0.00;
   for (i=0; i<Devices.find().count();i++) {
     somme_consommation = somme_consommation + parseFloat(validation_messages[i]["prixDeviceAn"]);
     //console.log(somme_consommation.toFixed(2));
   }
     return parseFloat(somme_consommation.toFixed(2));
  },
   
   
});  
Template.simulationTemplate.events({
   
   'click .ajouter_device': function (e, template) {
    // prevent clicks on <a> from refreshing the page.
   
    
     e.preventDefault();
     var device_name = template.find(".nom_device option:selected").text;
     var device_puissance = template.find(".puissance_device").value;
     var device_duree = template.find(".duree_device").value;     
    
      var newDevice = {
        userID: Meteor.userId(),
        deviceName: device_name,
        devicePuissance: device_puissance,
			  dureeDevice : device_duree,
        dureeDeviceAn : device_duree * 365,
        prixDeviceAn : (device_duree * 365 * 0.013/1000 * device_puissance).toFixed(2)
        
      };
      newDevice._id = Devices.insert(newDevice);  
      
   },
  'click .destroy': function (e) {
    e.preventDefault();
   // alert(this.deviceName);
    Devices.remove(this._id);
  }
   
   
   
   
   
});   
   