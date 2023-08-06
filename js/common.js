//jQuery 
$(function(){

     $(".toggle").click(function(){
          $(this).toggleClass("active");
          $(".collapse").slideToggle();
     })

     $(".wrap-5 .btn").click(function(){
          $(".wrap-5 .btn").removeClass("active");
          $(this).addClass("active");
         
          if( $(this).text()=="All" ){
               $(".wrap-5 .work").fadeIn(500);
          }
          else if( $(this).text()=="Website" ){
               $(".wrap-5 .work").fadeOut(0);
               $(".wrap-5 .work:eq(0),.wrap-5 .work:eq(1),.wrap-5 .work:eq(2)").fadeIn(500);
          }
          else if( $(this).text()=="Branding" ){
               $(".wrap-5 .work").fadeOut(0);
               $(".wrap-5 .work:eq(3),.wrap-5 .work:eq(4),.wrap-5 .work:eq(5)").fadeIn(500);
          }
     });

     $(".wrap-1 nav a").click(function(e){
          e.preventDefault();
          const id=$(this).attr("href");
          const offset=$(id).offset().top;
          const height=$(".wrap-1").outerHeight();
          
          $("html,body").animate({
               scrollTop:offset-height,
          },500)

     });

    /*  $(".reviews").bxSlider({
          controls:false,
          auto:true,
          autoHover:true
     }); */

     $(".accordion ul li a").click(function(e){
          e.preventDefault();
          if( $(this).parent().hasClass("active")==false ){
               $(".accordion ul li").removeClass("active");
               $(this).parent().addClass("active");
               //$(".accordion ul li p").slideUp(500);
               //$(this).next("p").slideDown(500);
          }
     });

     $(".top").click(function(){
          $("html,body").animate({scrollTop:0},1000,"swing");
     });

});   

/* chart */
{
     const ctx = document.querySelector('.c1');

     new Chart(ctx, {
       type: 'doughnut',
       data: {
         labels: ['Red'],
         datasets: [{
           label: '# of Votes',
           data: [75, 25],
           borderWidth: 1,
           backgroundColor:["#ca3c3c","#ffff"]
         }]
       },
       options: {
         scales: {
           y: {
             beginAtZero: true
           }
         }
       }
     });
}