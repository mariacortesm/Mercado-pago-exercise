import pagoEnTienda from './assets/1-Pago-en-tienda.png';
import comprobantesEmail from './assets/2-comprobantes-email.png';
import ventasEnElCel from './assets/3-Ventas-en-el-cel.png';
import seguridad from './assets/4-Seguridad.png';
import frameSeguridad from './assets/Frame-21.png';


export function CardsBenefits() {
    return (
        <section className='section-cars-benefits'>
            <h2>Más beneficios de nuestro lector de tarjetas</h2>
            <div className='principal-div-cards-benefits'>
                <div>
                    <p>Cobra tus ventas de Mercado Libre en tu local</p>
                    <p>Ahora tus compradores de Mercado Libre podrán pagarte con tarjeta de crédito cuando retiren el producto en tu negocio. Y para ti es 100% gratis.</p>    
                </div> 
                <img src={pagoEnTienda} />
            </div>
            <div className='principal-div-cards-benefits'>
                <img src={comprobantesEmail} />
                <div>
                    <p>Recibe comprobantes de pago por e-mail</p>
                    <p>Luego de pasar la tarjeta por el lector tu cliente firmará un recibo en pantalla y podrás enviárselo por e-mail.</p>    
                </div> 
            </div>
            <div className='principal-div-cards-benefits'>
                <div>
                    <p>Controla tus ventas desde tu celular</p>
                    <p>¡No tienes que esperar a fin de mes! <br/> Sigue día a día el resumen de tus cobros. <br/> Incluso, si fuera necesario, podrás hacer devoluciones de los pagos en un solo paso.</p>    
                </div> 
                <img src={ventasEnElCel} />
            </div>
            <div className='principal-div-cards-benefits'>
                <img src={seguridad} />
                <div>
                    <p>Máxima seguridad para ti y para tus clientes</p>
                    <p>Cumplimos con los más exigentes estándares de seguridad del mercado. Además, evitas riesgos porque ¡no necesitas trasladar dinero en efectivo de un lado a otro!</p>
                    <img src={frameSeguridad}/>    
                </div> 
            </div>
        </section>
    )
    
}