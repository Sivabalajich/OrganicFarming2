const HEADER=`
<header>
    <div class="logo">Organic Farming 🌾  </div>
    <nav>
      <ul id="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="aboutus.html">About Us</a></li>
        <li><a href="#footer">Contact Us</a></li>
      </ul>
    </nav>
  </header>
`;
const FOOTER=` 
<footer>
        <div id="footer">
            
            <div class="contact">
                <br>
                <h1>Contact Us<hr></h1><br>
                <div class="sm">
                <p><ul>
                    <li><a href="https://www.linkedin.com"><img src="linkedin.jpeg" alt=""></a></li>
                    <li><a href="https://www.instagram.com"><img src="instagram.jpg" alt=""></a></li>
                    <li><a href="https://www.x.com"><img src="twr.png" alt=""></a></li>
                    <li><a href="https://www.facebook.com"><img src="facebook.jpg" alt=""></a></li>
                </ul></p>
            </div>
                <h4>Email : sivay2050@gmail.com<br>
                    Ph No : 799xx xxx42 <br>www.OrganicFarming@gmail.com <br>Donakonda - 523305
                </h4>
            
            </div><hr>
            <div class="sm1"><h4> Copy Right©2025 Organic Farmimg. All rights reserved.</h4><br></div>

        </div>
    </footer>
`;

window.addEventListener('DOMContentLoaded',()=>{  //it waits until DOM load then it will load into html based on element id
    document.getElementById('header').innerHTML=HEADER;
    document.getElementById('footer').innerHTML=FOOTER;
});

