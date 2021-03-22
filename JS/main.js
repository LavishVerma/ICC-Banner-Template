$(()=>{

	console.log("main.js laoded");


	const FormHandler = {
		list : [],
		subject_line: "",
		whatsapp_number:"",
		contact_number:"",
		address:"",

		saveFields : ()=>{
			let data = {};
			$(".form_1").each((i,each)=>{
				let key = $(each).data("key");
				data.id = parseInt(Math.random()*10000000000);
				data[key] =$(each).val();
			});

			FormHandler.list.push(data);
		},

		displayData: ()=>{
			let collect = ""
			FormHandler.list.forEach(each=>{
				
				collect +=`
        		<li class="list-group-item" data-id="${each.id}">
        		<i class="icofont-ui-edit editItem" data-id="${each.id}"></i>
                  Subject=${each.subject}, streamAndSemester=${each.streamAndSemester},date=${each.date},time=${each.time}
                  
                  <i class= "icofont-ui-delete removeItem" data-id="${each.id}"></i>
                </li>

				`;
			});

			$("#resultList").html(collect);
		},
		fillRandom : ()=>{
			$(".form_1").each((i,each)=>{ 
				let rand = Math.random().toString(36).substr(2);
				$(each).val(rand);
			});
		},
		removeItem: (removeId)=>{
			FormHandler.list = FormHandler.list.filter(each=>each.id!=removeId);
		},

		editItem: (editId)=>{
         var edit_value=FormHandler.list.find(each=>each.id === editId);
          // console.log("Edit",edit_value);
         $(".form_1").each((i,each)=>{
               let id=$(each).data("key");
               // console.log(id);
               $(each).val(edit_value[id]);
			});
           FormHandler.removeItem(edit_value.id);
           FormHandler.displayData();

         },
		 
         clearFeilds: ()=>{
         	$(".form_1").each((i,each)=>{ 
				if (i==1) {
					$(each).val("BBA 2 Sem");	
				}
				else if (i==2) {
					$(each).val("29 March,2021");	
				}
				else if (i==3) {
					$(each).val("9:00 AM - 10:00 AM");	
				}
				else{
				$(each).val("");
				}					});
         }
		
	};


	$(".form_1_submit").click(()=>{
		FormHandler.saveFields();
		FormHandler.displayData();
		FormHandler.clearFeilds();
		//FormHandler.fillRandom();
	});

	//FormHandler.fillRandom();

// Delete
$(document).on("click",".removeItem",(each)=>{
	each = each.target;
	console.log(each);
	let id = $(each).data("id");
	console.log("Remove Id called",id);
	FormHandler.removeItem(id);
	FormHandler.displayData();
});

// $(document).on("click",".second-template",(each)=>{
// 	each=each.target;
// 	console.log("each",each);
	
// 	// $(".main-template").css({"background-image":"url(\"background-blur2.jpg\")","background-size":"cover","overflow":"hidden"});
//     // $(".card-body").css({"background":"transparent"});
// 	// $(".ideal").css({"color":"#004a67"});
// 	// $(".card-header").css({"background":"transparent !important"});
// 	// $(".coaching-center").css({"color":"white"});
// 	// $(".card-").css({"background":"transparent !important"});




	
	
// });

// Edit
$(document).on("click",".editItem",(each)=>{
	each=each.target;
	console.log("each",each);
	let id = $(each).data("id");
	console.log("Edit Id called",id);
	FormHandler.editItem(id);
	FormHandler.displayData();
	
});

$(document).on("click",".save-button",()=>{
	
    FormHandler.subject_line = $("#subject-line").val();
    FormHandler.whatsapp_number = $("#whatsapp-number").val();
    FormHandler.contact_number = $("#contact-number").val();
    FormHandler.address = $("#address").val();
    console.log( FormHandler.subject_line,
    FormHandler.whatsapp_number,
    FormHandler.contact_number,    FormHandler.address,FormHandler.list );
    
    $(".subject-line").text(FormHandler.subject_line);
     $(".address").text(FormHandler.address);
      $(".whatsapp-number").text(FormHandler.whatsapp_number);
       $(".contact-number").text(FormHandler.contact_number);

       let collect="";


       FormHandler.list.forEach(each=>{
       	collect +=`

        <div class="card inner-cards">
        <div class="card-body">
          <div class="d-flex flex-column">
            <div class=" course-name"><b>${each.subject}</b></div>
            <div class="stream"><i>For: </i>${each.streamAndSemester}</div>
            <div class="batch-start-date"><i>From: </i>${each.date}</div>
            <div class="batch-start-time"><i>Time Slot: </i>${each.time}</div>
          </div>
        </div>
      </div>

       	`;

       });

       $("#array-content").html(collect);




	$(".main-template").css("display", "block");
	$(".main-form").css("display", "none");
	$(".sub-form").css("display", "none");
	
	
});





});//document ready ends