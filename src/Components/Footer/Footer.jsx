const Footer = () => {
  return (
    <div className="min-h-screen flex items-end">
      <footer className="footer p-10 bg-[#1A1919] text-neutral-content">
        <nav>
          <h6 className="footer-title">CareerHub</h6>
          <p className="text-[#FFFFFF] text-base font-light mt-2">There are many variations of passages of Lorem Ipsum ,<br/>but the majority have suffered alteration in some form.</p>
          <div>
            <img className="cursor-pointer" src="/src/assets/icons/social.png" alt="icons"/>
          </div>
          <p className="text-sm text-[#FFFFFF66] mt-10 mb-6">@2024 CareerHub. All Rights Reserved</p>
          <p className="text-sm text-[#FFFFFF66] mt-10 mb-12">Powered by CareerHub</p>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Prototype</a>
          <a className="link link-hover">Plans & Pricing</a>
          <a className="link link-hover">Customers</a>
          <a className="link link-hover">Integration</a>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Help Desk</a>
          <a className="link link-hover">Sales</a>
          <a className="link link-hover">Become a Partner</a>
          <a className="link link-hover">Developers</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover">524 Broadway , NYC</a>
          <a className="link link-hover">+1 777 - 978 - 5570</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;