function Footer({nome, ano}) {
  return (
    <div className="bg-dark-subtle fixed-bottom text-center p-3">
     <a href="https://www.facebook.com" target='_blank'rel="noreferrer">
      <i className="bi bi-facebook p-2"></i>
      </a>
      <a href="https://www.instagram.com" target='_blank'rel="noreferrer">
        <i className="bi bi-instagram p-2"></i>
        </a>
        <a href="https://www.whatsapp.com" target='_blank'rel="noreferrer">
          <i className="bi bi-whatsapp p-2"></i>
          </a>
      <h4>
       
      </h4>
      Desenvolvido por &copy;{nome} - {ano}
    </div>
  );
}

export default Footer;
