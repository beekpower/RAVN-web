/***************************/
//@Author: Adrian "yEnS" Mato Gondelle
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/
//About Page Pop Up
			var popupAboutStatus = 0;
			
			function loadPopupAbout(){
				if(popupAboutStatus==0){
					$("#popupAbout").fadeIn("slow");
					popupAboutStatus = 1;
				}
			}
			
			function disablePopupAbout(){
				if(popupAboutStatus==1){
					$("#popupAbout").fadeOut("slow");
					popupAboutStatus = 0;
				}
			}
			
			function centerPopupAbout(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupAboutHeight = $("#popupAbout").height();
				var popupAboutWidth = $("#popupAbout").width();
				$("#popupAbout").css({
					"position": "absolute",
					"top": windowHeight/2-popupAboutHeight/2,
					"left": windowWidth/2-popupAboutWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupAbout").fadeOut();
				popupAboutStatus = 0;
				$("#about").click(function(){
				$("#popupAbout").css({
					"visibility": "visible"	});
					disablePopupProjects();
					disablePopupContact();
					disablePopupBlog();
                                        disablePopupAdvantages();
                                        disablePopupHowitworks();
                                        disablePopupApplication();
					centerPopupAbout();
					loadPopupAbout();
				    $("#popupAbout").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);	
				});
				$("#popupAboutClose").click(function(){
					disablePopupAbout();
				});
				$("#bg").click(function(){
					disablePopupAbout();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupAbout();
			});
			});
//Projects Page Pop Up
			var popupProjectsStatus = 0;
			
			function loadPopupProjects(){
				if(popupProjectsStatus==0){
					$("#popupProjects").fadeIn("slow");
					popupProjectsStatus = 1;
				}
			}
			
			function disablePopupProjects(){
				if(popupProjectsStatus==1){
					$("#popupProjects").fadeOut("slow");
					popupProjectsStatus = 0;
				}
			}
			
			function centerPopupProjects(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupProjectsHeight = $("#popupProjects").height();
				var popupProjectsWidth = $("#popupProjects").width();
				$("#popupProjects").css({
					"position": "absolute",
					"top": windowHeight/2-popupProjectsHeight/2,
					"left": windowWidth/2-popupProjectsWidth/2
				});
			}
			function setPopupProjects(top, left){
				$("#popupProjects").css({
					"position": "absolute",
					"top": top,
					"left": left
				});
			}
			
			
			$(document).ready(function(){
				$("#popupProjects").fadeOut();
				popupProjectsStatus = 0;

                                $("#projects").click(function() {
					disablePopupAbout();
					disablePopupContact();
					disablePopupBlog();
                                        disablePopupAdvantages();
                                        disablePopupApplication();
                                        disablePopupHowitworks();
                                });

				$(".projects").click(function(){
				$("#popupProjects").css({
					"visibility": "visible"	});

                                        if (popupApplicationStatus == 1)
                                        {
                                         setPopupProjects($("#popupApplication").css('top'), $("#popupApplication").css('left'));
                                        }else if (popupAdvantagesStatus == 1)
                                        {
                                         setPopupProjects($("#popupAdvantages").css('top'), $("#popupAdvantages").css('left'));
                                        }else if (popupHowitworksStatus == 1)
                                        {
                                         setPopupProjects($("#popupHowitworks").css('top'), $("#popupHowitworks").css('left'));
                                        }else
                                        {
                                         centerPopupProjects();
                                        }

					disablePopupAbout();
					disablePopupContact();
					disablePopupBlog();
                                        disablePopupAdvantages();
                                        disablePopupApplication();
                                        disablePopupHowitworks();					
					loadPopupProjects();
				    $("#popupProjects").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupProjectsClose").click(function(){
					disablePopupProjects();
				});
				$("#bg").click(function(){
					disablePopupProjects();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupProjects();
			});
			});
//Contact Page Pop Up
			var popupContactStatus = 0;
			
			function loadPopupContact(){
				if(popupContactStatus==0){
					$("#popupContact").fadeIn("slow");
					popupContactStatus = 1;
				}
			}
			
			function disablePopupContact(){
				if(popupContactStatus==1){
					$("#popupContact").fadeOut("slow");
					popupContactStatus = 0;
				}
			}
			
			function centerPopupContact(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupContactHeight = $("#popupContact").height();
				var popupContactWidth = $("#popupContact").width();
				$("#popupContact").css({
					"position": "absolute",
					"top": windowHeight/2-popupContactHeight/2,
					"left": windowWidth/2-popupContactWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupContact").fadeOut();
				popupContactStatus = 0;
				$("#contact").click(function(){
				$("#popupContact").css({
					"visibility": "visible"	});
					disablePopupAbout();
					disablePopupProjects();
					disablePopupBlog();
                                        disablePopupAdvantages();
                                        disablePopupApplication();
                                        disablePopupHowitworks();					
					centerPopupContact();
					loadPopupContact();
				    $("#popupContact").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupContactClose").click(function(){
					disablePopupContact();
				});
				$("#bg").click(function(){
					disablePopupContact();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupContact();
			});
			});
//Blog Page Pop Up
			var popupBlogStatus = 0;
			
			function loadPopupBlog(){
				if(popupBlogStatus==0){
					$("#popupBlog").fadeIn("slow");
					popupBlogStatus = 1;
				}
			}
			
			function disablePopupBlog(){
				if(popupBlogStatus==1){
					$("#popupBlog").fadeOut("slow");
					popupBlogStatus = 0;
				}
			}
			
			function centerPopupBlog(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupBlogHeight = $("#popupBlog").height();
				var popupBlogWidth = $("#popupBlog").width();
				$("#popupBlog").css({
					"position": "absolute",
					"top": windowHeight/2-popupBlogHeight/2,
					"left": windowWidth/2-popupBlogWidth/2
				});
			}
			
			
			$(document).ready(function(){
				$("#popupBlog").fadeOut();
				popupBlogStatus = 0;
				$("#blog").click(function(){
				$("#popupBlog").css({
					"visibility": "visible"	});
					disablePopupAbout();
					disablePopupProjects();					
					disablePopupContact();
                                        disablePopupAdvantages();
                                        disablePopupApplication();
                                        disablePopupHowitworks();					
					centerPopupBlog();
					loadPopupBlog();
				    $("#popupBlog").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupBlogClose").click(function(){
					disablePopupBlog();
				});
				$("#bg").click(function(){
					disablePopupBlog();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupBlog();
			});
			});
//Advantages Page Pop Up
			var popupAdvantagesStatus = 0;
			
			function loadPopupAdvantages(){
				if(popupAdvantagesStatus==0){
					$("#popupAdvantages").fadeIn("slow");
					popupAdvantagesStatus = 1;
				}
			}
			
			function disablePopupAdvantages(){
				if(popupAdvantagesStatus==1){
					$("#popupAdvantages").fadeOut("slow");
					popupAdvantagesStatus = 0;
				}
			}
			
			function centerPopupAdvantages(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupAdvantagesHeight = $("#popupAdvantages").height();
				var popupAdvantagesWidth = $("#popupAdvantages").width();
				$("#popupAdvantages").css({
					"position": "absolute",
					"top": windowHeight/2-popupAdvantagesHeight/2,
					"left": windowWidth/2-popupAdvantagesWidth/2
				});
			}
			function setPopupAdvantages(top, left){
				$("#popupAdvantages").css({
					"position": "absolute",
					"top": top,
					"left": left
				});
			}
			
			
			$(document).ready(function(){
				$("#popupAdvantages").fadeOut();
				popupAdvantagesStatus = 0;
				$(".advantages").click(function(){
				$("#popupAdvantages").css({
					"visibility": "visible"	});

                                        if (popupApplicationStatus == 1)
                                        {
                                         setPopupAdvantages($("#popupApplication").css('top'), $("#popupApplication").css('left'));
                                        }else if (popupProjectsStatus == 1)
                                        {
                                         setPopupAdvantages($("#popupProjects").css('top'), $("#popupProjects").css('left'));
                                        }else if (popupHowitworksStatus == 1)
                                        {
                                         setPopupAdvantages($("#popupHowitworks").css('top'), $("#popupHowitworks").css('left'));
                                        }else
                                        {
                                         centerPopupAdvantages();
                                        }

					disablePopupAbout();
					disablePopupProjects();					
					disablePopupContact();
                                        disablePopupBlog();
                                        disablePopupHowitworks();
                                        disablePopupApplication();					
					loadPopupAdvantages();
				    $("#popupAdvantages").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupAdvantagesClose").click(function(){
					disablePopupAdvantages();
				});
				$("#bg").click(function(){
					disablePopupAdvantages();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupAdvantages();
			});
			});
//How it works Page Pop Up
			var popupHowitworksStatus = 0;
			
			function loadPopupHowitworks(){
				if(popupHowitworksStatus==0){
					$("#popupHowitworks").fadeIn("slow");
					popupHowitworksStatus = 1;
				}
			}
			
			function disablePopupHowitworks(){
				if(popupHowitworksStatus==1){
					$("#popupHowitworks").fadeOut("slow");
					popupHowitworksStatus = 0;
				}
			}
			
			function centerPopupHowitworks(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupHowitworksHeight = $("#popupHowitworks").height();
				var popupHowitworksWidth = $("#popupHowitworks").width();
				$("#popupHowitworks").css({
					"position": "absolute",
					"top": windowHeight/2-popupHowitworksHeight/2,
					"left": windowWidth/2-popupHowitworksWidth/2
				});
			}

			function setPopupHowitworks(top, left){
				$("#popupHowitworks").css({
					"position": "absolute",
					"top": top,
					"left": left
				});
			}
			
			$(document).ready(function(){
				$("#popupHowitworks").fadeOut();
				popupHowitworksStatus = 0;
				$(".howitworks").click(function(){
				$("#popupHowitworks").css({
					"visibility": "visible"	});

                                        if (popupApplicationStatus == 1)
                                        {
                                         setPopupHowitworks($("#popupApplication").css('top'), $("#popupApplication").css('left'));
                                        }else if (popupProjectsStatus == 1)
                                        {
                                         setPopupHowitworks($("#popupProjects").css('top'), $("#popupProjects").css('left'));
                                        }else if (popupAdvantagesStatus == 1)
                                        {
                                         setPopupHowitworks($("#popupAdvantages").css('top'), $("#popupAdvantages").css('left'));
                                        }else
                                        {
                                         centerPopupHowitworks();
                                        }

		                        disablePopupAdvantages();
                                        disablePopupProjects();	
                                        disablePopupApplication();			
                                        disablePopupAbout();
					disablePopupContact();
					disablePopupBlog();				
					loadPopupHowitworks();
				    $("#popupHowitworks").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupHowitworksClose").click(function(){
					disablePopupHowitworks();
				});
				$("#bg").click(function(){
					disablePopupHowitworks();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupHowitworks();
			});
			});
//Application Page Pop Up
			var popupApplicationStatus = 0;
			
			function loadPopupApplication(){
				if(popupApplicationStatus==0){
					$("#popupApplication").fadeIn("slow");
					popupApplicationStatus = 1;
				}
			}
			
			function disablePopupApplication(){
				if(popupApplicationStatus==1){
					$("#popupApplication").fadeOut("slow");
					popupApplicationStatus = 0;
				}
			}
			
			function centerPopupApplication(){
				var windowWidth = document.documentElement.clientWidth;
				var windowHeight = document.documentElement.clientHeight;
				var popupApplicationHeight = $("#popupApplication").height();
				var popupApplicationWidth = $("#popupApplication").width();
				$("#popupApplication").css({
					"position": "absolute",
					"top": windowHeight/2-popupApplicationHeight/2,
					"left": windowWidth/2-popupApplicationWidth/2
				});
			}

			function setPopupApplication(top, left){
				$("#popupApplication").css({
					"position": "absolute",
					"top": top,
					"left": left
				});
			}			

			
			$(document).ready(function(){
				$("#popupApplication").fadeOut();
				popupApplicationStatus = 0;
				$(".application").click(function(){
				$("#popupApplication").css({
					"visibility": "visible"	});

                                        if (popupHowitworksStatus == 1)
                                        {
                                         setPopupApplication($("#popupHowitworks").css('top'), $("#popupHowitworks").css('left'));
                                        }else if (popupProjectsStatus == 1)
                                        {
                                         setPopupApplication($("#popupProjects").css('top'), $("#popupProjects").css('left'));
                                        }else if (popupAdvantagesStatus == 1)
                                        {
                                         setPopupApplication($("#popupAdvantages").css('top'), $("#popupAdvantages").css('left'));
                                        }else
                                        {
                                         centerPopupApplication();
                                        }

					disablePopupAbout();
					disablePopupProjects();					
					disablePopupContact();
                                        disablePopupBlog();
                                        disablePopupHowitworks();
                                        disablePopupAdvantages();
                                        
					loadPopupApplication();
				    $("#popupApplication").mCustomScrollbar("vertical",400,"easeOutCirc",1.05,"auto","yes","yes",10);						
				});
				$("#popupApplicationClose").click(function(){
					disablePopupApplication();
				});
				$("#bg").click(function(){
					disablePopupApplication();
				});
				$(document).keyup(function(e){
				if(e.keyCode === 27)
					disablePopupApplication();
			});
			});