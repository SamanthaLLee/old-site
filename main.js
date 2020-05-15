<!DOCTYPE html>
<html lang="en">
  <head>

    <title>Samantha L. Lee</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="css/bootstrap.css">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
		

    <script>
      $(document).ready(function(){
        $('a[href*="#"]:not([href="#"]):not([href="#carouselControls"])').on('click', function(event) {
          if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 600, function(){
              window.location.hash = hash;
            }); } }); });
    </script>

    <script>
    $(document).ready(function(){
      $(".nav-tabs a").click(function(){
        $(this).tab('show');
      });
      $('.nav-tabs a').on('shown.bs.tab', function(event){
        var x = $(event.target).text();         // active tab
        var y = $(event.relatedTarget).text();  // previous tab
        $(".act span").text(x);
        $(".prev span").text(y);
      });
    });
    </script>

    <script>
      $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
      });
   </script>


  </head>

  <body data-spy="scroll" data-target=".navbar" data-offset="100">
    <div class="jumbotron jumbotron-fluid text-center">
       
      <h1 class="title"><a class="title" href="#about">SAMANTHA L. LEE</h1></a>
			
			<p class="links">
				<a class="link" href="#about">about</a>
				<a class="link" href="#resumes">resumes</a>
				<a class="link" href="#research">research</a>
				<a class="link" href="#activities">activities</a>
			</p>
			
			<p class="currentTitles">
				Sophomore @ Rutgers U
				<br>App Dev Intern @ Vanguard
				<br>WiCS Hackathon Director
				<br>SASHP Tutor	
			</p>
      <p class="accounts">
        <a data-offset ="0 25" data-toggle="tooltip" data-placement="bottom" title="samantha.lin.lee@gmail.com" href="mailto:samantha.lin.lee@gmail.com"><img src="https://img.icons8.com/ios-glyphs/60/000000/email-sign.png"></a>
        <a data-offset ="0 25" data-toggle="tooltip" data-placement="bottom" title="in/SamanthaLLee" href="https://www.linkedin.com/in/samanthallee/"><img src="https://img.icons8.com/ios-glyphs/60/000000/linkedin-circled.png"></a>
        <a data-offset ="0 25" data-toggle="tooltip" data-placement="bottom" title="@SamanthaLLee" href="https://github.com/SamanthaLLee"><img src="https://img.icons8.com/ios-glyphs/60/000000/github.png"></a>
        <a data-offset ="0 25" data-toggle="tooltip" data-placement="bottom" title="Samantha Lee" href="https://rutgers.joinhandshake.com/users/13495153"><img src="img/handshake.png"></a><br>
      </p>
			<img class="landingGraphic" src="img/me.PNG"></img>
			<img class="speechGif" src="img/welcome.png"></img>
			<br><br>

    </div>

    <nav id=main-nav class="navbar navbar-expand-lg navbar-light bg-white static-top sticky-top">
      <div class="collapse navbar-collapse">
        <ul class="nav navbar-nav mx-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#about">about</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#resumes">resumes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#eduxp">research</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#more">activites</a>
          </li>
        </ul>
      </div>
    </nav>
		<p id="about"></p>
		<br><br><br>
    
    <br><br>

    <div>
			<h2><center>ABOUT</center></h2>
      <section class="p-3 p-lg-5 d-flex align-items-center" >
          <!-- carousel pics must be square!!! fix later!! -->

          <div id="carouselControls" class="carousel slide carousel-fade" data-ride="carousel" data-interval="false" >
          <div class="carousel-inner" role="listbox">
           <div class="carousel-item active">
             <img align="left" class="curve img-fluid img-profile rounded-circle mx-auto mb-2" src="img/headshot.jpg" alt="">
           </div>
           <div class="carousel-item">
             <img align="left" class="curve img-fluid img-profile rounded-circle mx-auto mb-2" src="img/coagmento_research.jpg" alt="">
           </div>
           <div class="carousel-item">
             <img align="left" class="curve img-fluid img-profile rounded-circle mx-auto mb-2" src="img/research2.JPG" alt="">
           </div>
           <div class="carousel-item">
             <img align="left" class="curve img-fluid img-profile rounded-circle mx-auto mb-2" src="img/google.png" alt="">
           </div>
           <div class="carousel-item">
             <img align="left" class="curve img-fluid img-profile rounded-circle mx-auto mb-2" src="img/ig.JPG" alt="">
           </div>
           <div class="carousel-item">
             <img align="left" class="curve img-fluid img-profile rounded-circle mx-auto mb-2" src="img/sitting.JPG" alt="">
           </div>
          </div>
          <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
           <span class="sr-only">Next</span>
          </a>
          </div>

          <br><br><h3 class="about" align="left" class="mb-0">


            Hello! I'm Sam Lee, a sophomore at Rutgers University–New Brunswick pursuing a double major
            in Computer Science and Cognitive Science.

            <br><br>I care about feminism, LGBTQ+ rights, and Asian-American representation.
						
						<br><br>In the future, I hope to attend graduate school and conduct research that helps the underprivileged.

            <p><br>I am actively seeking new research opportunities.

          </h3>
      </div>
      <p id="resumes"></p>
    </section><br><br>

      <section class="p-3 p-lg-5 d-flex align-items-center" >
        <div class="w-100">
          <h2><center>RESUMES</center></h2>
            <center><i>click to expand</i></center><br>

          <center>
          <a href="traditional_resume.pdf"><img class="resume" src="traditional_resume.jpg" width="47%" height=auto></img></a>
          <a href="creative_resume.pdf"><img class="resume" src="creative_resume.jpg" width="47%" height=auto></img></a>
					<br><i><br>For more professional information, please visit my <a href="https://www.linkedin.com/in/samanthallee/">LinkedIn<a>.</i>
				</center>

        <p id="eduxp"></p>
        </div>

      </section>



      <section class="p-3 p-lg-5 d-flex align-items-center" >
        <div class="w-100">
          <h2><center>RESEARCH</center></h2>
          <br>

					<center>
				  <a href="traditional_resume.pdf"><img class="resume" src="traditional_resume.jpg" width="47%" height=auto></img></a>
				  <a href="creative_resume.pdf"><img class="resume" src="creative_resume.jpg" width="47%" height=auto></img></a>



        <h3 class="about" align="left" class="mb-0"></h2>

          <p id="activities"></p>
        </div>
      </section>
			
			
			<section class="p-3 p-lg-5 d-flex align-items-center" >
        <div class="w-100">
          <h2><center>ACTIVITIES</center></h2>
          <br>
				
					<!--Accordion wrapper-->
	<div class="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">

	  <!-- Accordion card -->
	  <div class="card">

	    <!-- Card header -->
	    <div class="card-header" role="tab" id="headingOne1">
	      <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
	        aria-controls="collapseOne1">
	        <h5 class="mb-0">
	          Collapsible Group Item #1 <i class="fas fa-angle-down rotate-icon"></i>
	        </h5>
	      </a>
	    </div>

	    <!-- Card body -->
	    <div id="collapseOne1" class="collapse show" role="tabpanel" aria-labelledby="headingOne1"
	      data-parent="#accordionEx">
	      <div class="card-body">
	        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
	        wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
	        eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
	        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
	        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
	        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
	        labore sustainable VHS.
	      </div>
	    </div>

	  </div>
	  <!-- Accordion card -->

	  <!-- Accordion card -->
	  <div class="card">

	    <!-- Card header -->
	    <div class="card-header" role="tab" id="headingTwo2">
	      <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseTwo2"
	        aria-expanded="false" aria-controls="collapseTwo2">
	        <h5 class="mb-0">
	          Collapsible Group Item #2 <i class="fas fa-angle-down rotate-icon"></i>
	        </h5>
	      </a>
	    </div>

	    <!-- Card body -->
	    <div id="collapseTwo2" class="collapse" role="tabpanel" aria-labelledby="headingTwo2"
	      data-parent="#accordionEx">
	      <div class="card-body">
	        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
	        wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
	        eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
	        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
	        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
	        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
	        labore sustainable VHS.
	      </div>
	    </div>

	  </div>
	  <!-- Accordion card -->

	  <!-- Accordion card -->
	  <div class="card">

	    <!-- Card header -->
	    <div class="card-header" role="tab" id="headingThree3">
	      <a class="collapsed" data-toggle="collapse" data-parent="#accordionEx" href="#collapseThree3"
	        aria-expanded="false" aria-controls="collapseThree3">
	        <h5 class="mb-0">
	          Collapsible Group Item #3 <i class="fas fa-angle-down rotate-icon"></i>
	        </h5>
	      </a>
	    </div>

	    <!-- Card body -->
	    <div id="collapseThree3" class="collapse" role="tabpanel" aria-labelledby="headingThree3"
	      data-parent="#accordionEx">
	      <div class="card-body">
	        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3
	        wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum
	        eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
	        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
	        nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
	        farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus
	        labore sustainable VHS.
	      </div>
	    </div>

	  </div>
	  <!-- Accordion card -->

	</div>
	<!-- Accordion wrapper -->
				
				
        <h3 class="about" align="left" class="mb-0"></h3>

          <p id="activities"></p>
        </div>
      </section>


			<footer>
				<div style="font-size: 10px; letter-spacing: 2px; float: left; position: relative; bottom:5px; left:7px"><center>© 2020 by Samantha Lee<br></div>
  		</footer>
	</body>
</html>