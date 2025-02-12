
import backgroundThirdBanner from './assets/background-third-banner.png';

export function ThirdBanner() {
    return (
        <section className="section-third-banner">
            <div>
                <h3 className='text-one-third-banner'>¿Qué necesitas para usarlo</h3>
                <p className='text-two-third-banner'>El lector de tarjetas de crédito es compatible con la mayoria de los <strong>dispositivos Android</strong> con conexión a internet, versión 4.0.3 en adelante</p>
                <p className='text-three-third-banner'>Lo conectas por Bluetooth a tu celular o tablet. ¡Y listo!</p>
                <p className='text-three-third-banner'>No te quedes en el pasado <br/> Solicita gratis tu lector de tajetas de crédito. <br/> Déjanos tu e-mail y te contactaremos</p>
            </div>
            <div>
                <img src={backgroundThirdBanner} />
            </div>
        </section>
    )
}