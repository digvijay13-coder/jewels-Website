import '../CSS/Nav.css'
import logo from '../images/logo.svg'

export default function NavBar(){
    return(
       <>
       <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
  <div class="container nav-container">
    <a class="navbar-brand" href="#">
        <img className='nav-img' src={logo} ></img>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-house"></i></a>
        </li>
        {/* <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa-solid fa-address-book"></i></a>
        </li> */}

        <li class="nav-item">
          <a class="nav-link"
  href="https://wa.me/918766958270?text=Hi!%20I%20visited%20your%20handmade%20jewellery%20website%20and%20I%20would%20love%20to%20know%20more%20about%20your%20products.%20Can%20you%20help%20me%3F"
  target="_blank"
  rel="noopener noreferrer"
>
 <i class="fa-brands fa-whatsapp"></i>
</a>
        </li>

       
      </ul>
      
    </div>
  </div>
</nav>
       </>
    )
}