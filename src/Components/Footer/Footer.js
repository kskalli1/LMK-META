import React from 'react';
import './Footer.css';
import countapi from 'countapi-js';

countapi.visits().then((result) => {
    console.log(result);
    document.getElementById("counter").innerHTML = result.value;
});

export default function Footer() {
    return (
        <div className='footer'>
            <div className='foot-liste'>
                <div className="foots">
                    <h6>Ne ratez rien !</h6>
                </div>
                <div className="foots">
                    <h6>Avertissement</h6>
                    <p style={{ color: "#F5CB5C" }}>Ce site est dédié uniquement au conseil<br />Faire du tradding peut comporter des risques.</p>
                </div>
                <div className="foots">
                    <h6>Nombre de visite:</h6>
                    <h6 style={{ color: "#F5CB5C" }} id="counter">0</h6>
                </div>
                <div className="foots">
                    <p>
                        Copyright &copy; 2022. Designed by
                    </p>
                    <p style={{ color: "#F5CB5C" }}>Kenza SKALLI
                    </p>

                </div>
            </div>
        </div >
    )
}