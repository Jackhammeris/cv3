// --------------------------headerio animacijos

$(".header-title").mouseenter(
  function() {
    $(this).stop(true).animate({
      marginLeft: '9%',
      opacity: 1
    }, 100);
  }
).mouseleave(
  function() {
    $(this).stop(true).animate({
      marginLeft: '8%',
      opacity: 0.7
    }, 100);
  }
);

animacijos();

// ----------------------window resize logika

$(window).resize(animacijos);

function animacijos() {
  if ($(window).width() < 992) {
    $(".navigacija-linkas").mouseenter(
      function() {
        $(this).stop(true).animate({
          marginRight: '1%',
          opacity: 1
        }, 100);
      }
    ).mouseleave(
      function() {
        $(this).stop(true).animate({
          marginRight: '0',
          opacity: 0.7
        }, 100);
      }
    );
  } else {
    $(".navigacija-linkas").mouseenter(
      function() {
        $(this).stop(true).animate({
          verticalAlign: '-19px',
          opacity: 1
        }, 100);
      }
    ).mouseleave(
      function() {
        $(this).stop(true).animate({
          verticalAlign: '-24px',
          opacity: 0.7
        }, 100);
      }
    );
  };
};


// if (window.innerWidth>992) {}

let box = document.querySelector('.greeting');
let greetingWidth = box.offsetWidth / 2;
let greetingHeight = box.offsetHeight;

var screenWidth = window.innerWidth;
var marginLeft = ((((screenWidth / 2) - 480) / 2) - 4);
var marginTop = ((greetingHeight - 480) / 2);
var marginTopStart = ((greetingHeight - 480) / 2) - 500;


$(window).resize(recalc);

function recalc() {

  let box = document.querySelector('.greeting');
  let greetingWidth = box.offsetWidth / 2;
  let greetingHeight = box.offsetHeight;

  var screenWidth = window.innerWidth;
  var marginLeft = ((((screenWidth / 2) - 480) / 2) - 4);
  var marginTop = ((greetingHeight - 480) / 2);

  document.querySelector(".greeting-pic").style.marginLeft = marginLeft + "px";
  document.querySelector(".greeting-pic").style.marginTop = marginTop + "px";
  console.log(greetingHeight);

  document.querySelector(".hole").style.height = greetingHeight + "px";
  document.querySelector(".hole").style.width = greetingWidth + "px";

}


//if screen size


document.querySelector(".greeting-pic").style.marginLeft = marginLeft + "px";
document.querySelector(".greeting-pic").style.marginTop = marginTopStart + "px";
console.log(greetingHeight);

document.querySelector(".hole").style.height = greetingHeight + "px";
document.querySelector(".hole").style.width = greetingWidth + "px";

//if screen size



// -----------------load animacijos greeting

$(document).ready(function() {


  $(".greeting-pic").animate({
    opacity: 1
  }, 100);

  $(".greeting-pic").animate({
    marginTop: marginTop
  }, 200);

  $(".greeting-pic").animate({
    marginTop: marginTop - 130
  }, 100);

  $(".greeting-pic").animate({
    marginTop: marginTop
  }, 100);

  $(".greeting-pic").animate({
    marginTop: marginTop - 50
  }, 80);

  $(".greeting-pic").animate({
    marginTop: marginTop
  }, 80);

  $(".greeting-hi").delay(540).animate({
    marginLeft: '0',
    opacity: 1
  }, 300);

  $(".greeting-iam").delay(1000).animate({
    marginLeft: '0',
    opacity: 1
  }, 300);

  $(".greeting-name").delay(1300).animate({
    marginLeft: '0',
    opacity: 1
  }, 300);

  $(".greeting-who").delay(1700).animate({
    marginLeft: '0',
    opacity: 1
  }, 300);

});


$(".greeting-pic").click(function() {

  $(".greeting-pic").stop(true).animate({
    marginTop: marginTop - 200
  }, 150);

  $(".greeting-pic").animate({
    marginTop: marginTop
  }, 150);

  $(".greeting-pic").animate({
    marginTop: marginTop - 130
  }, 100);

  $(".greeting-pic").animate({
    marginTop: marginTop
  }, 100);

  $(".greeting-pic").animate({
    marginTop: marginTop - 50
  }, 80);

  $(".greeting-pic").animate({
    marginTop: marginTop
  }, 80);

});

// ---------------------Load animacijos about
var waypoint1 = new Waypoint({
  element: document.getElementById('about-waypoint1'),
  handler: function(direction) {

    $(".about-heading").animate({
      marginLeft: '0',
      opacity: 1
    }, 300);
  },
  offset: 'bottom-in-view'
});

var waypoint2 = new Waypoint({
  element: document.getElementById('about-waypoint2'),
  handler: function(direction) {

    $(".div-about").animate({
      marginLeft: '0',
      opacity: 1
    }, 300);
  },
  offset: 'bottom-in-view'

});

// ---------------------Load animacijos Experience

var status = "hidden";



$("button").click(function() {

  if (status == "hidden") {

    $(".hidden").show("fast");
    status = "shown";
  } else {

    $(".hidden").hide("slow");
    status = "hidden";
  }
});




function makeCircleHoleClipPathRule(radius) {

  const inner_path = [];
  const circumference = Math.PI * radius;
  const step = Math.PI * 2 / circumference;
  // we are coming from top-left corner
  const start_step = circumference * (5 / 8);
  for (let i = start_step; i < circumference + start_step; i++) {
    const angle = step * i;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    const str = `calc( 50% + ${ x }px ) calc( 50% + ${ y }px )`;
    inner_path.push(str);
  }
  // avoid rounding issues
  inner_path.push(inner_path[0]);

  return `polygon( evenodd,
    /* outer rect */
    0 0,       /* top - left */
    100% 0,    /* top - right */
    100% 100%, /* bottom - right */
    0% 100%,   /* bottom - left */
    0 0,       /* and top - left again */
    ${ inner_path.join( "," ) }
   )`;

}

const hole_elem = document.querySelector(".hole");
// set the clip-path rule
hole_elem.style.clipPath = makeCircleHoleClipPathRule(250);



// let box = document.querySelector('.greeting');
// let greetingWidth = box.offsetWidth/2;
// let greetingHeight = box.offsetHeight;
//
// var screenWidth = window.innerWidth;
// var marginLeft = ((((screenWidth/2)-480)/2)-13);
// var marginTop = ((greetingHeight-480)/2);
//
// document.querySelector(".greeting-pic").style.marginLeft = marginLeft+"px";
// document.querySelector(".greeting-pic").style.marginTop = marginTop+"px";
// console.log(greetingHeight);
//
// document.querySelector(".hole").style.height = greetingHeight+"px";
// document.querySelector(".hole").style.width = greetingWidth+"px";










// ------------------------------up/down pavyzdys

// if (direction == "down") {
//
//     $(".main-div-dream").animate({
//       marginLeft: '0',
//       opacity: 1
//     }, 500);
//
//   } else
//    {
//   $(".main-div-dream").animate({
//     marginLeft: '-50',
//     opacity: 0
//   }, 500);}
//
//   },
//   offset: 'bottom-in-view'
// })
