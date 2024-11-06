
import {ButtonPrimary, ButtonOutline } from "./Button.jsx";
import Lottie from "lottie-react";
import animationData from "../assets/animation.json";


const Hero = () => {
    return (
        <section
            id="home"
            className="pt-28 lg:pt-36"
        >
            <div className="container lg:grid lg:grid-cols-2
            items-center lg:gap-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg">
                            <img
                                src="/src/assets/avatar-1.jpg"
                                width={40}
                                height={40}
                                alt="Henry clark portarti"
                                className="img-cover"
                            />
                        </figure>
                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Disponible para trabajar.
                        </div>
                    </div>
                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch]
                    lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Tu Solución Integral en Tecnología.
                    </h2>

                    <div className="flex items-center gap-3">
                        <a
                            href="../../public/cv.pdf" // Ruta al archivo dentro de la carpeta `public`
                            download="TiagoRoccatagliatacv.pdf" // Nombre del archivo cuando se descarga
                        >
                            <ButtonPrimary
                                label="Descargar CV"
                                icon="download"
                            />
                        </a>
                        <ButtonOutline
                            href="#about"
                            label="Echa un Vistazo!"
                            icon="arrow_downward"
                        />
                    </div>
                </div>

                <div className="hidden lg:block">
                    <figure
                        className="">
                        <Lottie
                            animationData={animationData}
                            loop={true}  // Para repetir la animación
                            className="w-full h-auto"
                        />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default Hero;