//time and date for personal website

const date = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];
const day = days[date.getDay()];
const month = months[date.getMonth()];
const dateOfDay = date.getDate();
const year = date.getFullYear();
// const localTime = date.toLocaleTimeString();
    
const dateFormat = `${day} ${month} ${dateOfDay} ${year}`
document.getElementById("dt").innerHTML = dateFormat;  
setInterval(() => {
        //When ever the setTimeOut function recalls every 1 sec, it will get the data of date object and time string, which was obtained when the window/page was loaded so always specfiy the data inside the function to retrive it on every 1 sec. 
        const dateForTime = new Date(); 
        const localTime = dateForTime.toLocaleTimeString();
        document.getElementById("time").innerHTML = localTime;        
    }, 1000);




    //image on navbar become invisible on displaying the subtitle name and name
    // document.addEventListener("DOMContentLoaded", function () {
    //     var navbar = document.querySelector(".navbar");
    //     var brandImg = document.querySelector(".brand-img");
    //     var brandTitleSubtitle = document.querySelector(".brand-title-subtitle");
    
    //     window.addEventListener("scroll", function () {
    //       //if (window.scrollY > navbar.offsetHeight): condition window.scrollY > navbar.offsetHeight, it means that you want to perform some action or apply some styling when the user has scrolled down the page beyond the height of the navbar. This is often used for effects like making the navbar sticky at the top of the page once the user has scrolled past it or changing the appearance of elements as the user scrolls down the page.
    //       if (window.scrollY = 0) {
    //         brandImg.style.display = "none";
    //         brandTitleSubtitle.style.display = "block";
    //       } else {
    //         brandImg.style.display = "block";
    //         brandTitleSubtitle.style.display = "none";
    //       }
    //     });
    //   });



     //get the position of the navbar to  make img invisible
  // window.onscroll = function getPosition(){
  //   const navElement =  document.getElementById('navB');
  //   const navPosition = navElement.getBoundingClientRect();
  //   const navTopPosition = navPosition.top;

  //   console.log(navTopPosition)
  // }

  // console.log(navTopPosition)

  window.onscroll = function () {
    const navElement =  document.getElementById('navBar');
    const navPosition = navElement.getBoundingClientRect();
    const navTopPosition = navPosition.top;

   console.log(navTopPosition);
       var navbar = document.querySelector(".navbar");
       var brandImg = document.querySelector(".brand-img");
       var brandTitleSubtitle = document.querySelector(".brand-title-subtitle");

     if (navTopPosition == 0) {
         brandImg.style.cssText = "display: none; transition: display 2s ease;"
         //brandImg.style.display = "none";
         brandTitleSubtitle.style.display = "block";
     } else {
         brandImg.style.display = "block";
        //  brandTitleSubtitle.style.display = "none";
         brandTitleSubtitle.style.cssText = "display:none; transition: display 2s ease;"
     }
  };



    



  //   if (navElementTopPosition = 0) {
  //            brandImg.style.display = "none";
  //            brandTitleSubtitle.style.display = "block";
  //  } else {
  //            brandImg.style.display = "block";
  //            brandTitleSubtitle.style.display = "none";
  //   }


  window.onload = function () {
        const subtitleArr = [ "MERN-Stack-developer","Web-developer", "MEAN-Stack-developer" ]
        const color = ["red", "green", "blue"]
        let counter = 0

        setInterval(  ()=>{
            const title = document.getElementById('brandSubtitle')
            title.innerHTML = subtitleArr[counter];
            title.style.color = color[counter];
            counter = (counter + 1) % subtitleArr.length;
        },1000
        )
    }

    // js code for typewriter simulation
    var app = document.getElementById("autoWrite");

    var typewriter = new Typewriter(app, {
      strings: ["React", "Angular", "Express", "Node Js", "Java", "MySql", "MongoDB", "Python"],
      loop: true,
      autoStart: true,
    });


    //google sheet
    const form = document.querySelector("#form")
    const submitButton = document.querySelector("#submit")
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzSpIsZD2dX3chaenbiH45z7HetmovqOLXtVIESYEO7CikqFOKhBkgSaDlE0eRE-P0XCQ/exec'
 
    form.addEventListener('submit', e => {
      submitButton.disabled = true
      e.preventDefault()
      let requestBody = new FormData(form)
      fetch(scriptURL, { method: 'POST', body: requestBody})
        .then(response => {
           alert('Success!', response)
           submitButton.disabled = false
          })
        .catch(error => {
        alert('Error!', error.message)
          submitButton.disabled = false
 
        }
        )
    })

  








    


