$(document).ready(function(){

	var cb1 = false;
	var cb2 = false;
	var cb3 = false;
	var cb4 = false;
		 
	$('form[id="forma"]').validate({
		errorPlacement: function(error, element) {
			$( element )
				.closest( "form" )
					.find( "label[for='" + element.attr( "id" ) + "']" )
						.append( error );
		},

	  rules: {
		ImeKorisnika: 'required',
		PrezimeKorisnika: 'required',
		user_email: {
		  required: true,
		  email: true,
		},
		Godine: {
		  required: true,
		  max: 30,
		},
		Komentar: {
		  required: true,
		  minlength: 10,
		},
		NacinPlacanja: 'required',
	  },
	  messages: {
		ImeKorisnika: 'obavezan unos',
		PrezimeKorisnika: 'obavezan unos',
		user_email: 'obavezan unos',
		Godine: {
		  required: 'obavezan unos',
		  number: "unesite validan broj",
		  max: 'manje od 30',
		  min: 'veće od 0',
		},
		NacinPlacanja: 'obavezan unos',
		Komentar: {
		  required: 'obavezan unos',
		  minlength: 'minimalno 10 karaktera',
		},
	  }
	});
     
   $("#Tip1").change(function() {
	  if($(this).prop('checked')) {
	  cb1=true;
	  } else {
	  cb1=false;
	  }
  });
  $("#Tip2").change(function() {
	  if($(this).prop('checked')) {
	  cb2=true;
	  } else {
	  cb2=false;
	  }
  });
  $("#Tip3").change(function() {
	  if($(this).prop('checked')) {
	  cb3=true;
	  } else {
	  cb3=false;
	  }
  });
  $("#Tip4").change(function() {
	  if($(this).prop('checked')) {
	  cb4=true;
	  } else {
	  cb4=false;
	  }
  });
  
  $("#SpisakZahteva").on('click', '.brisi_zahtev', function (){
	$(this).closest('table').remove();
		
  });
  
   $(".dodaj_red").click(function(){
  
  var form = $( "#forma" );
 // form.validate();
	if (form.valid()) {
			  var v_ImeKorisnika = $("#ImeKorisnika").val();
			  var v_PrezimeKorisnika = $("#PrezimeKorisnika").val();
			  var v_user_email = $("#user_email").val();
			  var v_Godine = $("#Godine").val();
			  var v_NacinPlacanja = $("#NacinPlacanja").val();
			  var v_BrojDana = $("input[name='BrojDana']:checked").val();
			  var v_Komentar = $("#Komentar").val();
			  var v_page = "";
			  
			  if (cb1 == true){
					v_page = v_page +  $("#Tip1").val() + '<br />' ;
			  } 
			  
			  if (cb2 == true){
					v_page = v_page +  $("#Tip2").val() + '<br />';
			  } 
			  
			  if (cb3 == true){
					v_page = v_page +  $("#Tip3").val() + '<br />';
			  } 
			  
			  if (cb4 == true){
					v_page = v_page +  $("#Tip4").val();
			  } 
			  			
							  
			  $('#SpisakZahteva > tbody:last').append(`<table class='rg-table'><thead> 
			  <tr> 
				  <th class="text">Ime i Prezime korisnika</th> 
				  <th class="text">Email</th> 
				  <th class="text">Broj godina deteta</th> 
				  <th class="text">Nacin placanja</th> 
			  </tr> 
			  </thead>
			  <tbody id="last"> 
			  <tr> 
			  <td class="text">`
			  + v_ImeKorisnika + '  ' + v_PrezimeKorisnika +
			  `</td> 
			  <td class="text">` 
			  + v_user_email +
			  `</td> 
			  <td class="text"> 
			  Broj godina: ` + v_Godine + 
			  `</td> 
			  <td class="text">`
			  + v_NacinPlacanja +
			  `</td> 
			  </tr> 
			  </tbody>
			  <thead> 
			  <tr> 
				  <th class="text">Torte</th> 
				  <th class="text">Rok realizacije</th> 
				  <th class="text">Dodatne informacije</th> 
			  </tr> 
			  </thead>
			  <tbody id="last"> 
			  <tr> 
			  <td class="text">`
			  + v_page +
			  `</td> 
			  <td class="text">`
			  + v_BrojDana +
			  `</td> 
			  <td class="text">`
			  + v_Komentar +
			  `</td> 
			  <td > 
			  <p align="right"> 
				  <button type="button" class="brisi_zahtev">Remove</button><p> 
				  </td> 
			  </tr>  
		  </tbody>
		  <thead> 
		  <tr> 
			  <th class="text" colspan="4">Vreme</th> 
		  </tr> 
		  </thead>
		  <tbody id="last"> 
		  <tr> 
		  <td class="text" colspan="4">`
		  + new Date() +
		  `</td> 
		  </tr>
		  </tbody></table>`);
			  
			  v_page = "";
			  cb1 = false;
			  cb2 = false;
			  cb3 = false;
			  cb4 = false;
			  
  
			  $('#forma').trigger("reset");
			}
				});
  });