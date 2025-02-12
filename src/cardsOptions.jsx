import visa from "./assets/visa.png";
import mastercard from "./assets/mastercard.png";
import hipercard from "./assets/hipercard.png";
import americanExpress  from './assets/american-express.png'
import dinersClub from './assets/diners-club.png';
import celc from './assets/celc.png';
import mercadoLivre from './assets/mercado.livre.png';


export function CardsOptions() {
    return (
        <section>
            <div>
                <h2 className="text-cards-options">
                    Ofrece pagar con tarjeta a cuotas
                </h2>
            </div>
            <div className="div-cards-options">
                <div>
                    <img src={visa}/>
                    <p>hasta 12 cuotas</p>
                </div>
                <div>
                    <img src={mastercard}/>
                    <p>hasta 12 cuotas</p>
                </div>
                <div>
                    <img src={hipercard}/>
                    <p>hasta 12 cuotas</p>
                </div>
                <div>
                    <img src={americanExpress} className="american-express"/>
                    <p>hasta 15 cuotas</p>
                </div>
            </div>
            <div className="div-cards-options">
                <div>
                    <img src={dinersClub}/>
                    <p>hasta 12 cuotas</p>
                </div>
                <div>
                    <img src={celc}/>
                    <p>hasta 12 cuotas</p>
                </div>
                <div>
                    <img src={mercadoLivre}/>
                    <p>hasta 12 cuotas</p>
                </div>
            </div>
        </section>
    )
}