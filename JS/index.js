$(()=>{
	
	console.log("Index js loaded...");
	
	$(".save-button-to-main-frames").click((each)=>{
		console.log(each);
		
		localStorage.setItem("subject_line",$("#subject-line").val());
		localStorage.setItem("whatsapp_number",$("#whatsapp-number").val());
		localStorage.setItem("contact_number",$("#contact-number").val());
		localStorage.setItem("address",$("#address").val());
		localStorage.setItem("list",JSON.stringify(FormHandler.list));
		
		window.location.href="Main-Frames/main-frames.html";
		
		
	});
	
	
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
		
		
		
		// Delete
		$(document).on("click",".removeItem",(each)=>{
			each = each.target;
			console.log(each);
			let id = $(each).data("id");
			console.log("Remove Id called",id);
			FormHandler.removeItem(id);
			FormHandler.displayData();
		});
		
		// Edit
		$(document).on("click",".editItem",(each)=>{
			each=each.target;
			console.log("each",each);
			let id = $(each).data("id");
			console.log("Edit Id called",id);
			FormHandler.editItem(id);
			FormHandler.displayData();
			
		});
	});