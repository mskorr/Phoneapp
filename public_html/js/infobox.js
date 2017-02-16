<!DOCTYPE html>
<html>
    
    <head>
        <title>jQM Complex Demo</title>
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
        <link rel="shortcut icon" href="">
         <script src="https://code.jquery.com/jquery-1.11.3.min.js"></script>
        <link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.css" />
        
        <script type="text/javascript" src="http://maps.google.com/maps/api/js?key=AIzaSyDG_DDIf1Pvg4tzbTfdtYYqXkNl4goHV6U&libraries=place&sensor=true"></script>
        <script src="http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.js"></script>

    </head>
    
    <body>
 <style>
            #content {
    padding: 0;
    position : absolute !important;
    top : 40px !important;
    right : 0;
    bottom : 40px !important;
    left : 0 !important;
/*    border: 1px solid #DDDDDD;
   width: 200px;
   height: 200px;*/
   position: relative;
}
#custom {
    width: 40px !important;
    height: 47px !important;
    border-radius: 50% !important;
    /*background:url(http://www.lawyersgunsmoneyblog.com/wp-content/uploads/2012/08/american-flag-2a.jpg) center center no-repeat;*/
}

#ui-btn span span {
    height: 100px !important;  
    line-height: 70px;
}

#window {
   float: left;
   position: absolute;
   left: 0px;
   top: 0px;
   z-index: 1000;
   background-color: #3188dc;
   padding: 5px;
   color: #FFFFFF;
/*   font-weight: bold;*/
    -moz-border-radius:    10px;
   -webkit-border-radius: 10px;
   border-radius:         10px;
}
/* General CSS Setup */
body{
  background-color: lightblue;
  font-family: "Ubuntu-Italic", "Lucida Sans", helvetica, sans;
}

/* container */
.container {
  padding: 5% 5%;
}

/* CSS talk bubble */
.talk-bubble {
	margin: 40px;
  display: inline-block;
  position: relative;
	width: 200px;
	height: auto;
	background-color: lightyellow;
}
.border{
  border: 8px solid #666;
}
.round{
  border-radius: 30px;
	-webkit-border-radius: 30px;
	-moz-border-radius: 30px;

}

/* Right triangle placed top left flush. */
.tri-right.border.left-top:before {
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
  left: -40px;
	right: auto;
  top: -8px;
	bottom: auto;
	border: 32px solid;
	border-color: #666 transparent transparent transparent;
}
.tri-right.left-top:after{
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
  left: -20px;
	right: auto;
  top: 0px;
	bottom: auto;
	border: 22px solid;
	border-color: lightyellow transparent transparent transparent;
}

/* Right triangle, left side slightly down */
.tri-right.border.left-in:before {
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
  left: -40px;
	right: auto;
  top: 30px;
	bottom: auto;
	border: 20px solid;
	border-color: #666 #666 transparent transparent;
}
.tri-right.left-in:after{
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
  left: -20px;
	right: auto;
  top: 38px;
	bottom: auto;
	border: 12px solid;
	border-color: lightyellow lightyellow transparent transparent;
}

/*Right triangle, placed bottom left side slightly in*/
.tri-right.border.btm-left:before {
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
	left: -8px;
  right: auto;
  top: auto;
	bottom: -40px;
	border: 32px solid;
	border-color: transparent transparent transparent #666;
}
.tri-right.btm-left:after{
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
	left: 0px;
  right: auto;
  top: auto;
	bottom: -20px;
	border: 22px solid;
	border-color: transparent transparent transparent lightyellow;
}

/*Right triangle, placed bottom left side slightly in*/
.tri-right.border.btm-left-in:before {
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
	left: 30px;
  right: auto;
  top: auto;
	bottom: -40px;
	border: 20px solid;
	border-color: #666 transparent transparent #666;
}
.tri-right.btm-left-in:after{
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
	left: 38px;
  right: auto;
  top: auto;
	bottom: -20px;
	border: 12px solid;
	border-color: lightyellow transparent transparent lightyellow;
}

/*Right triangle, placed bottom right side slightly in*/
/*.tri-right.border.btm-right-in:before {
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
  left: auto;
	right: 30px;
	bottom: -40px;
	border: 20px solid;
	border-color: #666 #666 transparent transparent;
}*/
.tri-right.btm-right-in:after{
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
  left: auto;
	right: 38px;
	bottom: -20px;
	border: 12px solid;
	border-color: lightyellow lightyellow transparent transparent;
}
/*
	left: -8px;
  right: auto;
  top: auto;
	bottom: -40px;
	border: 32px solid;
	border-color: transparent transparent transparent #666;
	left: 0px;
  right: auto;
  top: auto;
	bottom: -20px;
	border: 22px solid;
	border-color: transparent transparent transparent lightyellow;

/*Right triangle, placed bottom right side slightly in*/
/*.tri-right.border.btm-right:before {
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
  left: auto;
	right: -8px;
	bottom: -40px;
	border: 20px solid;
	border-color: #666 #666 transparent transparent;
}*/
.tri-right.btm-right:after{
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
  left: auto;
	right: 0px;
	bottom: -20px;
	border: 12px solid;
	border-color: lightyellow lightyellow transparent transparent;
}

/* Right triangle, right side slightly down*/
/*.tri-right.border.right-in:before {
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
  left: auto;
	right: -40px;
  top: 30px;
	bottom: auto;
	border: 20px solid;
	border-color: #666 transparent transparent #666;
}*/
/*.tri-right.right-in:after{
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
  left: auto;
	right: -20px;
  top: 38px;
	bottom: auto;
	border: 12px solid;
	border-color: lightyellow transparent transparent lightyellow;
}*/

/* Right triangle placed top right flush. */
/*.tri-right.border.right-top:before {
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
  left: auto;
	right: -40px;
  top: -8px;
	bottom: auto;
	border: 32px solid;
	border-color: #666 transparent transparent transparent;
}*/
/*.tri-right.right-top:after{
	content: ' ';
	position: absolute;
	width: 0;
	height: 0;
  left: auto;
	right: -20px;
  top: 0px;
	bottom: auto;
	border: 20px solid;
	border-color: lightyellow transparent transparent transparent;
}*/

/* talk bubble contents */
/*.talktext{
  padding: 1em;
	text-align: left;
  line-height: 1.5em;
}*/
/*.talktext{
   remove webkit p margins 
  -webkit-margin-before: 0em;
  -webkit-margin-after: 0em;
}*/
/*
#talkbubble {
   width: 120px;
   height: 80px;
   background: red;
   position: relative;
   -moz-border-radius:    10px;
   -webkit-border-radius: 10px;
   border-radius:         10px;
}*/

        </style>
        <div data-role="page" id="index">
            <div style="color: #499dff;" data-theme="b" data-role="header">
                <h3 >شركة الأسواق و المخازن المتحدة-البسطا</h3> 
                

            </div>
            <div data-role="content" id="content">
                <div id="window" class="talk-bubble tri-right btm-right">
                        لأسواقق 
</div>
                    <img src="img/map picture.PNG" alt=""/>
                    
           
            </div>
            <div data-theme="a" data-role="footer" data-position="fixed">
                 <h3>
             <a href="#pagetwo" id= "custom" class="ui-btn ui-btn-inline "></a>
             <a href="#pagetwo" id= "custom" class="ui-btn ui-btn-inline"></a>
             <a href="#pagetwo" id= "custom" class="ui-btn ui-btn-inline"></a>
              <a href="#pagetwo" id= "custom" class="ui-btn ui-btn-inline ui-icon-search "></a>
            </h3>

            </div>
        </div>
    </body>

</html>