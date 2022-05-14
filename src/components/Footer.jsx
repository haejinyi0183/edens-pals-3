function Footer() {
  const getYear = new Date().getFullYear();
  
  return (
    <div>
     

      <p className="foot h3 fixed-bottom text-center text-muted">Edens Pals &copy; {getYear}</p>
    </div>
  );
}
export default Footer;
