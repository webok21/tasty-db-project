import './../css/Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <img src="/img/insta.png" alt="" />
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                <img src="/img/youtube.png" alt="" />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <img src="/img/fb.png" alt="" />
            </a>
        </div>
    );
}

export default Footer;