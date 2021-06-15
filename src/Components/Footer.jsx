import React from "react"; 

let date = new Date();
let currentYear = date.getFullYear();

function Footer () {
    return (<footer><p>copyright {currentYear}</p></footer>);
}

export default Footer;