$(document).ready(function(){

    $("#button").click(function(){
      $("#hide").hide();
    });

    $("#button1").click(function(){
      $("#show").show();
    });

    $("#button2").click(function(){
      $("#toogle").toggle();
    });

    $("#button3").click(function(){
      $("#slideUp").slideUp("slow");
    });

    $("#button4").click(function(){
      $("#slideDown").slideDown("slow");
    });

    $("#button5").click(function(){
      $("#slideToogle").slideToggle("slow");
    });

    $("button6").click(function(){
       $("#div3").fadeOut(3000);
    });

    $("button7").click(function(){
      $("#div2").fadeIn(3000);
    });

    $("button8").click(function(){
      $("h2,h3").addClass("white");
      $("div").addClass("important");
    });

    $('input.fecha').attr("value", function(indiceArray){
      //indiceArray tiene el índice de este elemento en el objeto jQuery
      var f = new Date();
      return f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
    });
    $("#button10").click(function(){
      $("img").before("<b>Before</b>");
    });
    $("#button11").click(function(){
      $("img").after("<i>After</i>");
    });

    $("#button12").click(function(){
      alert("Text: " + $("#Text_HTML").text());
    });
    $("#button13").click(function(){
      alert("HTML: " + $("#Text_HTML").html());
    });
    $("#button14").click(function(){
      alert("Value: " + $("#test").val());
    });
    $("#click").click(function(){
      alert("Esta es la función .click de JQuery");
    });

});