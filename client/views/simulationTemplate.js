 Template.simulationTemplate.events({
   
   'click .ajouter_device': function (e) {
    // prevent clicks on <a> from refreshing the page.
   
    
     e.preventDefault();
     $(".form1").append('<div class="col-md-5"><select class="nom_device form-control" name="nom-device"> <option value="valeur1">Ampoule</option> <option value="valeur2">Four</option> <option value="valeur3">Four à micro-onde</option> <option value="valeur3">Plaque chauffante à induction</option> <option value="valeur3">Plaque vitrocéramique</option> <option value="valeur3">Radiateur électrique</option> <option value="valeur3">Ordinateur de bureau</option> <option value="valeur3">Ordinateur mobile</option> <option value="valeur3">Télévision LCD</option> <option value="valeur3">Télévision LED</option> <option value="valeur3">Machine à laver</option><option value="valeur3">Sèche-cheveux</option></select> </div> <div class="col-md-3"><input type="email" class="form-control puissance_device" placeholder="Puissance Watts"></div> <div class="col-md-2"><input type="email" class="form-control duree_device" placeholder="Durée h/j"></div> <div class="col-md-2"><button type="button" class="btn btn-danger">-</button></div></div> ');  
        
           
    
  },
   
   
   
   
   
  });   
   