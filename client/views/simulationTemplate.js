 Template.simulationTemplate.helpers({
    devices:  function () {
  	  
		return Devices.find();
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
        deviceName: device_name,
        devicePuissance: device_puissance,
			  dureeDevice : device_duree
        
      };
      newDevice._id = Devices.insert(newDevice);  
      alert("all good");
   }
   
   
   
   
   
});   
   