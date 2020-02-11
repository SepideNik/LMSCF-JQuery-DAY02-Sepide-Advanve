var check = 0;
var cssItems = [];
var htmlItems = [];
var jqueryItems = [];
 var obj = items.item;
$(document).ready(function() {
   
    var divParentItem = '';
    var divChildItem = '';
    $.each(obj,function(i, item){
       
       if (item.status == "parent") {
         divParentItem += '<div class="divParentItem droppable">';
         divParentItem += '<p class="itemName" category='+ item.category +'>'+ item.name +'</p></div>';
              
       }else{
          divChildItem += '<div class="divChildItem draggable" id='+ item.name +'>';
          divChildItem += '<p class="itemName" category='+ item.category +'>'+ item.name +'</p></div>';
       }       
    });
    $('#containerParent').append(divParentItem);
    $('#containerChild').append(divChildItem);
    
    var categoryChild="";
    var categoryParent="";
    var ItemName="";    

    $( ".draggable" ).draggable({
      drag: function( event, ui ) {
        categoryChild=$( this ).find( "p" ).attr("category");
        ItemName=$( this ).find( "p" ).html();
        }      
    });
       
    $( ".droppable" ).droppable({
      drop: function( event, ui ) {
        categoryParent = $( this ).find( "p" ).attr("category");
        if(categoryChild == categoryParent){
          if (categoryParent=="HTML"){ 
            if ($.inArray(ItemName, htmlItems)=='-1') {
                $('#'+ItemName).removeClass("red");         
                htmlItems.push(ItemName);
            }
          }else if (categoryParent=="jquery"){
            if ($.inArray(ItemName, jqueryItems)=='-1') {
              $('#'+ItemName).removeClass("red");
               jqueryItems.push(ItemName);
           }        

          }else if (categoryParent=="CSS"){
            if ($.inArray(ItemName, cssItems)=='-1') {
              $('#'+ItemName).removeClass("red"); 
              cssItems.push(ItemName);
            }
          }
        }
      }
    });
  
});
function showResult(){
    //console.log(htmlItems.length);
    //console.log(jqueryItems.length);
    //console.log(cssItems.length);
  if(htmlItems.length==3 && jqueryItems.length==3 && cssItems.length==3)
  {
   // alert("hi");
    $('#result').append("YOU WIN");
  }else
  {
    var CorrectArray=[];
    CorrectArray = $.merge( CorrectArray, htmlItems);
    CorrectArray = $.merge( CorrectArray, jqueryItems);    
    CorrectArray = $.merge( CorrectArray, cssItems);
    //console.log(CorrectArray);
    $.each(obj,function(i,item){
      if ($.inArray(item.name, CorrectArray) =='-1') {
        $('#'+item.name).addClass("red");      
       }
    });
    alert("Move The box again to find right place");

  } 

}
function resetGame() {
    location.reload();
    // body...
  }
