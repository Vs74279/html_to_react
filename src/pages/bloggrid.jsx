import {Link} from 'react-router-dom';
const bloggrid = () =>{
    return(
        <div>
        

	
		<div className="container">
			<div className="row justify-content-between align-items-center">
				<div className="col-lg-2 col-md-4">
					<div className="header-top-socials text-center text-lg-left text-md-left">
						<Link to="https://www.facebook.com/themefisher" target="_blank"><i className="ti-facebook"></i></Link>
						<Link to="https://twitter.com/themefisher" target="_blank"><i className="ti-twitter"></i></Link>
						<Link to="https://github.com/themefisher/" target="_blank"><i className="ti-github"></i></Link>
					</div>
				</div>
				<div className="col-lg-10 col-md-8 text-center text-lg-right text-md-right">
					<div className="header-top-info">
						<Link to="tel:+23-345-67890">Call Us : <span>+23-345-67890</span></Link>
						<Link to="mailto:support@gmail.com" ><i className="fa fa-envelope mr-2"></i><span>support@gmail.com</span></Link>
					</div>
				</div>
			</div>
		</div>
	
	<nav className="navbar navbar-expand-lg  py-4" id="navbar">
		<div className="container">
		  <Link className="navbar-brand" to="index.html">
		  	Mega<span>kit.</span>
		  </Link>

		  <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
			<span className="fa fa-bars"></span>
		  </button>
	  
		  <div className="collapse navbar-collapse text-center" id="navbarsExample09">
			<ul className="navbar-nav ml-auto">
			  <li className="nav-item active">
				<Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
			  </li>
			  <li className="nav-item dropdown">
					<Link className="nav-link dropdown-toggle" to="#" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</Link>
					<ul className="dropdown-menu" aria-labelledby="dropdown03">
						<li><Link className="dropdown-item" to="/about">Our company</Link></li>
						<li><Link className="dropdown-item" to="/pricing">Pricing</Link></li>
					</ul>
			  </li>
			   <li className="nav-item"><Link className="nav-link" to="/service">Services</Link></li>
			   <li className="nav-item"><Link className="nav-link" to="/project">Portfolio</Link></li>
			   <li className="nav-item dropdown">
					<Link className="nav-link dropdown-toggle" to="#" id="dropdown05" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog</Link>
					<ul className="dropdown-menu" aria-labelledby="dropdown05">
						<li><Link className="dropdown-item" to="/bloggrid">Blog Grid</Link></li>
						<li><Link className="dropdown-item" to="/blogsidebar">Blog with Sidebar</Link></li>

						<li><Link className="dropdown-item" to="/blogsingle">Blog Single</Link></li>
					</ul>
			  </li>
			   <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
			</ul>

			<form className="form-lg-inline my-2 my-md-0 ml-lg-4 text-center">
			  <Link to="contact.html" className="btn btn-solid-border btn-round-full">Get Link Quote</Link>
			</form>
		  </div>
		</div>
	</nav>




<div className="main-wrapper ">
<section className="page-title bg-1">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="block text-center">
          <span className="text-white">Our blog</span>
          <h1 className="text-capitalize mb-4 text-lg">Blog articles</h1>
          <ul className="list-inline">
            <li className="list-inline-item"><Link to="index.html" className="text-white">Home</Link></li>
            <li className="list-inline-item"><span className="text-white">/</span></li>
            <li className="list-inline-item"><Link to="#" className="text-white-50">Our blog</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="section blog-wrap bg-gray">
    <div className="container">
        <div className="row">
	<div className="col-lg-6 col-md-6 mb-5">
		<div className="blog-item">
			<img src="assets/images/blog/1.jpg" alt="" className="img-fluid rounded"/>

			<div className="blog-item-content bg-white p-5">
				<div className="blog-item-meta bg-gray py-1 px-2">
					<span className="text-muted text-capitalize mr-3"><i className="ti-pencil-alt mr-2"></i>Creativity</span>
					<span className="text-muted text-capitalize mr-3"><i className="ti-comment mr-2"></i>5 Comments</span>
					<span className="text-black text-capitalize mr-3"><i className="ti-time mr-1"></i> 28th January</span>
				</div> 

				<h3 className="mt-3 mb-3"><Link to="blog-single.html">Improve design with typography?</Link></h3>
				<p className="mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!</p>

				<Link to="blog-single.html" className="btn btn-small btn-main btn-round-full">Learn More</Link>
			</div>
		</div>
	</div>

	<div className="col-lg-6 col-md-6 mb-5">
		<div className="blog-item">
			<img src="assets/images/blog/2.jpg" alt="" className="img-fluid rounded"/>

			<div className="blog-item-content bg-white p-5">
				<div className="blog-item-meta bg-gray py-1 px-2">
					<span className="text-muted text-capitalize mr-3"><i className="ti-pencil-alt mr-2"></i>Design</span>
					<span className="text-muted text-capitalize mr-3"><i className="ti-comment mr-2"></i>5 Comments</span>
					<span className="text-black text-capitalize mr-3"><i className="ti-time mr-1"></i> 28th January</span>
				</div>   

				<h3 className="mt-3 mb-3"><Link to="blog-single.html">Interactivity connect consumer</Link></h3>
				<p className="mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!</p>

				<Link to="blog-single.html" className="btn btn-small btn-main btn-round-full">Learn More</Link>
			</div>
		</div>
	</div>

	<div className="col-lg-6 col-md-6 mb-5">
		<div className="blog-item">
			<img src="assets/images/blog/3.jpg" alt="" className="img-fluid rounded"/>

			<div className="blog-item-content bg-white p-5">
				<div className="blog-item-meta bg-gray py-1 px-2">
					<span className="text-muted text-capitalize mr-3"><i className="ti-pencil-alt mr-2"></i>Community</span>
					<span className="text-muted text-capitalize mr-3"><i className="ti-comment mr-2"></i>5 Comments</span>
					<span className="text-black text-capitalize mr-3"><i className="ti-time mr-1"></i> 28th January</span>
				</div>  

				<h3 className="mt-3 mb-3"><Link to="blog-single.html">Marketing Strategy to bring more affect</Link></h3>
				<p className="mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!</p>

				<Link to="blog-single.html" className="btn btn-small btn-main btn-round-full">Learn More</Link>
			</div>
		</div>
	</div>
	<div className="col-lg-6 col-md-6 mb-5">
		<div className="blog-item">
			<img src="assets/images/blog/4.jpg" alt="" className="img-fluid rounded"/>

			<div className="blog-item-content bg-white p-5">
				<div className="blog-item-meta bg-gray py-1 px-2">
					<span className="text-muted text-capitalize mr-3"><i className="ti-pencil-alt mr-2"></i>Marketing</span>
					<span className="text-muted text-capitalize mr-3"><i className="ti-comment mr-2"></i>5 Comments</span>
					<span className="text-black text-capitalize mr-3"><i className="ti-time mr-1"></i> 28th January</span>
				</div>  

				<h3 className="mt-3 mb-3"><Link to="blog-single.html">Marketing Strategy to bring more affect</Link></h3>
				<p className="mb-4">Non illo quas blanditiis repellendus laboriosam minima animi. Consectetur accusantium pariatur repudiandae!</p>

				<Link to="blog-single.html" className="btn btn-small btn-main btn-round-full">Learn More</Link>
			</div>
		</div>
	</div>
</div>

        <div className="row justify-content-center mt-5">
            <div className="col-lg-6 text-center">
            	<nav className="navigation pagination d-inline-block">
	                <div className="nav-links">
	                    <Link className="prev page-numbers" to="#">Prev</Link>
	                    <span aria-current="page" className="page-numbers current">1</span>
	                    <Link className="page-numbers" to="#">2</Link>
	                    <Link className="next page-numbers" to="#">Next</Link>
	                </div>
	            </nav>
            </div>
        </div>
    </div>
</section>



	<div className="container">
		<div className="row">
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="widget">
					<h4 className="text-capitalize mb-4">Company</h4>

					<ul className="list-unstyled footer-menu lh-35">
						<li><Link to="#">Terms & Conditions</Link></li>
						<li><Link to="#">Privacy Policy</Link></li>
						<li><Link to="#">Support</Link></li>
						<li><Link to="#">FAQ</Link></li>
					</ul>
				</div>
			</div>
			<div className="col-lg-2 col-md-6 col-sm-6">
				<div className="widget">
					<h4 className="text-capitalize mb-4">Quick Links</h4>

					<ul className="list-unstyled footer-menu lh-35">
						<li><Link to="#">About</Link></li>
						<li><Link to="#">Services</Link></li>
						<li><Link to="#">Team</Link></li>
						<li><Link to="#">Contact</Link></li>
					</ul>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-sm-6">
				<div className="widget">
					<h4 className="text-capitalize mb-4">Subscribe Us</h4>
					<p>Subscribe to get latest news article and resources  </p>

					<form action="#" className="sub-form">
						<input type="text" className="form-control mb-3" placeholder="Subscribe Now ..."/>
						<Link to="#" className="btn btn-main btn-small">subscribe</Link>
					</form>
				</div>
			</div>

			<div className="col-lg-3 ml-auto col-sm-6">
				<div className="widget">
					<div className="logo mb-4">
						<h3>Mega<span>kit.</span></h3>
					</div>
					<h6><Link to="tel:+23-345-67890" >Support@megakit.com</Link></h6>
					<Link to="mailto:support@gmail.com"><span className="text-color h4">+23-456-6588</span></Link>
				</div>
			</div>
		</div>
		
		<div className="footer-btm pt-4">
			<div className="row">
				<div className="col-lg-6">
					<div className="copyright">
						&copy; Copyright Reserved to <span className="text-color">Megakit.</span> by <Link to="https://themefisher.com/" target="_blank">Themefisher</Link>
					</div>
				</div>
				<div className="col-lg-6 text-left text-lg-right">
					
						
							<div className="row">
								<div className="col-lg-4 col-md-12 col-sm-12">
									<div className="copyright">
										&copy; Copyright Reserved to <span className="text-color">Megakit.</span> by <Link to="https://themefisher.com/" target="_blank">Themefisher</Link>
									</div>
								</div>
				
								<div className="col-lg-4 col-md-12 col-sm-12">
									<div className="copyright">
									Distributed by  <Link to="https://themewagon.com/" target="_blank">Themewagon</Link>
									</div>
								</div>
								<div className="col-lg-4 col-md-12 col-sm-12 text-left text-lg-left">
									<ul className="list-inline footer-socials">
										<li className="list-inline-item"><Link to="https://www.facebook.com/themefisher"><i className="ti-facebook mr-2"></i>Facebook</Link></li>
										<li className="list-inline-item"><Link to="https://twitter.com/themefisher"><i className="ti-twitter mr-2"></i>Twitter</Link></li>
										<li className="list-inline-item"><Link to="https://www.pinterest.com/themefisher/"><i className="ti-linkedin mr-2 "></i>Linkedin</Link></li>
									</ul>
								</div>
							</div>
						</div>nline-item"<Link to="https://www.facebook.com/themefisher"><i className="ti-facebook mr-2"></i>Facebook</Link>
						<li className="list-inline-item"><Link to="https://twitter.com/themefisher"><i className="ti-twitter mr-2"></i>Twitter</Link></li>
						<li className="list-inline-item"><Link to="https://www.pinterest.com/themefisher/"><i className="ti-linkedin mr-2 "></i>Linkedin</Link></li>
					
				</div>
			</div>
		</div>
	

   
    

        </div>
        </div>
    )
}
export default bloggrid