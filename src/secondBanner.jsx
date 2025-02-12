import signoPesos from './assets/signo-pesos.png';


export function SecondBanner() {
    return (
        <section className="section-second-banner">
            <div className="div-second-banner">
                <div className='div-signo-pesos'>
                    <img src={signoPesos}/>
                </div>
                <div>
                    <h3 className='title-second-banner'>Paga solo por lo que vendas</h3>
                    <p className='text-one-second-banner'>Sin costos de contratación ni mantenimiento.</p>
                </div>
                <div>
                    <h3 className='text-two-second-banner'>6,5 %</h3>
                    <p className='text-three-second-banner'>de cada pago que recibes</p>
                </div>
                <div>
                    <h3 className='text-two-second-banner'>6,5 %</h3>
                    <p className='text-three-second-banner'>de cada pago que recibes</p>
                </div>
                <div>
                    <h3 className='text-two-second-banner'>¡Gratis!</h3>
                    <p className='text-three-second-banner'>Para tus ventas de Mercardo Libre</p>
                </div>
            </div>

        </section>
    )   
}