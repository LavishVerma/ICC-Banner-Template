$(()=>{
  

  document.addEventListener("DOMContentLoaded", ()=>{
    console.log("I am loaded listener");
  });
  
  $(document).ready(function(){
  
    console.log(" Banner 1 Window loaded..");
    $(".subject-line").text(localStorage.getItem("subject_line"));
    $(".address").text(localStorage.getItem("address"));
    $(".whatsapp-number").text(localStorage.getItem("whatsapp_number"));
    $(".contact-number").text(localStorage.getItem("contact_number"));        
    
    
    let collect="";
    
    var list = JSON.parse(localStorage.getItem("list")); 
    console.log(localStorage.getItem("whatsapp_number"));
    list.forEach(each=>{
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
    
    
  });
  
  
  
  
});