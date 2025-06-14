import React from 'react';


function Footer () {
    const currentDate = new Date();
    const currento = currentDate.getFullYear();
    return(
        <footer>
        <p> Copyright😒 {currento}</p>
        </footer>
    );
}

export default Footer;