
import React from "react";
import "./About.css";


window.onclick = function(event) {
  if (!event.target.matches('.navbar-toggler')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

class About extends React.Component {
    render() {
        return (
<body>

<div className="about-section">

<nav class="navbar fixed-top navbar-expand-md navbar-light bg-light">
<div class="dropdown">

<button class="navbar-toggler" onClick={ () => document.getElementById("navbar").classList.toggle("show") } type="button" >
      <span><i class="fas fa-bars"></i></span>
      
    </button>

  <div id="navbar" class="dropdown-content">
  <a href="#">All Activities</a>
    <a href="#">Add Activity</a>
    <a href="#">Edit Actitvity</a>
    <a href="#">Add category</a>
    <a href="#">Edit category</a>
  </div>
</div>

    <h1>About Us Page</h1>

</nav>
  
</div>

    <div className="card">
      <div className="container">
        <h2>About Activity tracker</h2>
        <p>This Web app is an activity tracker. It allows you to track time that you spend on some activities
        This Web app is an activity tracker. It allows you to track time that you spend on some activities
        This Web app is an activity tracker. It allows you to track time that you spend on some activities.
        This Web app is an activity tracker. It allows you to track time that you spend on some activities
        This Web app is an activity tracker. It allows you to track time that you spend on some activities
        This Web app is an activity tracker. It allows you to track time that you spend on some activities
        This Web app is an activity tracker. It allows you to track time that you spend on some activities
        </p>
      </div>
  </div>
  </body>

);
              }
            }
            export default About;
