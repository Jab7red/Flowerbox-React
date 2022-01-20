import './Footer.css'

function Footer() {
    return (
        <div className="Footer-Container">
            <footer>
                <div className="Footer-Img">
                    <img src="https://i.imgur.com/KxfWH9J.png" alt="FlowerBox" />
                    <h3>FLOWERBOX / EST. 2022</h3>
                </div>
                <div className="Footer-Service">
                    <h3>Customer Service</h3>
                    <p>Satisfaction Commitment</p>
                    <p>Delivery Policies</p>
                    <p>Cancelations</p>
                    <p>Return Policy</p>
                </div>
                <div className="Footer-Info">
                    <h3>Flowerbox</h3>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                    <p>Career Opportunities</p>
                    <p>More Information</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;