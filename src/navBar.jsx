import  logo from "./assets/logo.png";
import  arrowdropdown from "./assets/Arrow_drop_down_big.png";
import  avatar from "./assets/Avatar.png";


export function NavBar() {
    return (
        <section className="section-navbar">
                <img className="logo"
                src={logo}
                />
            <div className="section-menu">
                    <div className="section-arrow">
                        <h3 className="text-1">Cuenta Mercado Pago</h3>
                        <img className="arrow"
                        src={arrowdropdown}
                        />
                    </div>
                    <div className="section-arrow">
                        <h3 className="text-1">Herramientas para vender</h3>
                        <img className="arrow"
                        src={arrowdropdown}
                        />
                    </div>
                <img className="avatar"
                src={avatar}
                />
                <h3 className="text-1">Ayuda</h3>
           </div>
        </section>        

    )

}