/*----------ローディング---------------------------------------------------------------------------------*/
$(function(){
	var bar1 = $("#bar1");
	var bar2 = $("#bar2");
	var bar3 = $("#bar3");
  $("html, body").animate({scrollTop:0},function(){
    setTimeout(function(){
      $("html, body").css("overflow","hidden");
    },100);
  });
  setTimeout(function(){
    bar1.animate({"marginLeft":"50vw"},400,"easeOutQuart");
    bar1.animate({"marginTop":"20vh"},300,"easeOutQuart",function(){
      bar2.animate({"marginLeft":"25vw"},400,"easeOutQuart");
      bar2.animate({"marginTop":"10vh"},300,"easeOutQuart",function(){
        bar1.animate({"marginTop":"10vh"},300,"easeOutQuart");
        bar1.animate({"marginLeft":"25vw"},400,"easeOutQuart",function(){
          bar3.animate({"marginTop":"-20vh"},300,"easeOutQuart");
          bar3.animate({"marginLeft":"50vw"},400,"easeOutQuart");
          bar3.animate({"marginTop":"0vh"},300,"easeOutQuart",function(){
            bar1.animate({"marginLeft":"0vw"},400,"easeOutQuart");
            bar1.animate({"marginTop":"20vh"},300,"easeOutQuart",function(){
              bar2.animate({"marginTop":"0vh"},300,"easeOutQuart");
              bar2.animate({"marginLeft":"50vw"},400,"easeOutQuart",function(){
                bar1.animate({"marginTop":"0vh"},300,"easeOutQuart")
                bar1.animate({"marginLeft":"50vw"},400,"easeOutQuart",function(){
                  $("#loading").fadeOut(1000,function(){
                    $("html, body").css("overflow", "");
                  });
                });
              });
            });
          });
        });
      });
    });
  },800);
});
/*-------------------アローアイコン----------------------------------------------------------------------*/
$(function(){
	setInterval(function(){
		$("#icon span").animate({marginTop: "-=10px"},1000)
		.animate({marginTop: "+=10px"},1000);
	},2000);
})
/*------------------スクロールボタン---------------------------------------------------------------------*/
$(function(){
  var pageHeight = $("#home").height();

  $("#box1").click(function() {
    $("html,body").animate({scrollTop: 0}, 1400, "easeOutQuart");
    $("#html, #css, #js").animate({"padding-left" : "0vw"});
  });
  $("#box2").click(function(){
    $("html, body").animate({scrollTop : pageHeight},1400, "easeOutQuart");
    $("#html, #css, #js").animate({"padding-left" : "0vw"});
  });
  $("#box3").click(function(){
    $("html, body").animate({scrollTop : pageHeight*2},1400, "easeOutQuart", function(){
      $("#html").animate({"padding-left" : "25vw"}, {duration: 1500, easing: "easeOutQuart"});
      $("#css").animate({"padding-left" : "20vw"}, {duration: 1500, easing: "easeOutQuart"});
      $("#js").animate({"padding-left" : "10vw"}, {duration: 1500, easing: "easeOutQuart"});
    });
  });
  $("#box4").click(function(){
    $("html, body").animate({scrollTop : pageHeight*3}, 1400, "easeOutQuart");
    $("#html, #css, #js").animate({"padding-left" : "0vw"});
  });
})

/*------------------------position-------------------------------------------------------------------*/
$(function() {
  var headA = $("#headA");
  var headB = $("#headB");
	var profile = $("#profile");
	var home = $("#home");
	var skill = $("#skill");
	var profile = $("#profile");
  var pageHeight = home.height();
  var homeBottom = pageHeight + home.offset().top;
  var profileBottom = pageHeight*2 + profile.offset().top;

  var box1 = $("#box1");
  var box1Top = box1.offset().top;
  var box2 = $("#box2");
  var box2Top = pageHeight + box2.offset().top;
  var box3 = $("#box3");
  var box3Top = pageHeight*2 + box3.offset().top;
  var box4 = $("#box4");

	$(window).scroll(function () {
    var winTop = $(this).scrollTop();
/*--------------profile------------------------------------------------------------------------------*/
		if (winTop >= homeBottom) {
      headA.removeClass("absolute").addClass("fixedTop");
			profile.removeClass("fixedTop").addClass("relative");
      box2.removeClass("fixedBottom").addClass("absolute");
    } else {
      headA.removeClass("fixedTop").addClass("absolute");
      profile.removeClass("relative").addClass("fixedTop");
      box2.removeClass("absolute").addClass("fixedBottom");
    }
/*-----------------skill-----------------------------------------------------------------------------*/
		if (winTop >= profileBottom) {
      headA.hide();
      headB.removeClass("absolute").addClass("fixedTop");
			skill.removeClass("fixedTop").addClass("relative");
      box3.removeClass("fixedBottom").addClass("absolute");
		} else {
      headA.show();
      headB.removeClass("fixedTop").addClass("absolute");
			skill.removeClass("relative").addClass("fixedTop");
      box3.removeClass("absolute").addClass("fixedBottom");
		}
/*------------------------menu-----------------------------------------------------------------------*/
    if (winTop >= box1Top) {
			box1.removeClass("absolute").addClass("fixedTop");
      box4.removeClass("absolute").addClass("fixedTop");
      box2.appendTo("#profile");
		} else {
			box1.removeClass("fixedTop").addClass("absolute");
      box4.removeClass("fixedTop").addClass("absolute");
      box2.appendTo("#home");
		}
    if (winTop >= box2Top) {
      box2.removeClass("absolute").addClass("fixedTop");
      box3.appendTo("#skill");
    } else if (winTop <= box2Top) {
      box2.removeClass("fixedTop");
      box3.appendTo("#home");
    }
    if (winTop >= box3Top) {
      box3.removeClass("absolute").addClass("fixedTop");
    } else {
      box3.removeClass("fixedTop");
    }
	});
});
/*-------------------グラフ-----------------------------------------------------------------------------*/
$(function(){
	$("#skill").hover(function(){
		$("#html").animate({"padding-left" : "25vw"}, {duration: 1500, easing: "easeOutQuart"});
		$("#css").animate({"padding-left" : "20vw"}, {duration: 1500, easing: "easeOutQuart"});
		$("#js").animate({"padding-left" : "10vw"}, {duration: 1500, easing: "easeOutQuart"});
	}, function(){
		$("#html, #css, #js").animate({"padding-left" : "0vw"});
	});
});
