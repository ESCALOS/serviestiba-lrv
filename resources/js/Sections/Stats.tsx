import { useEffect, useRef } from "react";

const statsData = [
    { id: 1, target: 20, icon: "servicios.webp", description: "servicios." },
    { id: 2, target: 100, icon: "peru.webp", description: "clientes a nivel nacional." },
    { id: 3, target: 80, icon: "trabajador.webp", description: "colaboradores." },
    { id: 4, target: 48, icon: "geografia.webp", description: "distritos de cobertura." },
];

const Stats = () => {
    const countersRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Cuando el componente es visible
                    countersRef.current.forEach((counter) => {
                        const target = +counter.getAttribute("data-target")!;
                        const duration = 2000; // Duración de la animación en milisegundos (2 segundos)
                        const increment = target / (duration / 20); // Calcula el incremento basado en la duración deseada

                        const updateCount = () => {
                            const count = +counter.innerText.replace("+ ", ""); // Quita el "+" al convertir a número
                            if (count < target) {
                                counter.innerText = `+ ${Math.ceil(count + increment)}`; // Agrega el "+" delante del número
                                setTimeout(updateCount, 20);
                            } else {
                                counter.innerText = `+ ${target}`;
                            }
                        };

                        updateCount();
                    });
                } else {
                    // Cuando el componente no es visible
                    countersRef.current.forEach((counter) => (counter.innerText = "+0"));
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.1 });
        const elementsToObserve = countersRef.current;

        elementsToObserve.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-24 bg-emphasis-500">
            <div className="px-4 mx-auto text-center max-w-7xl">
                <h2 className="mb-8 text-2xl font-bold text-gray-800 lg:text-4xl">Somos tu Guía Experto</h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {statsData.map(({ id, icon, target, description }, index) => (
                        <div key={id}>
                            <div className="flex items-center justify-center mb-4">
                                <div className="p-4 bg-green-100 rounded-full">
                                    <img src={`/images/stats/${icon}`} alt={icon} width={64} height={64} loading="lazy" />
                                </div>
                            </div>
                            <p
                                ref={(el) => (countersRef.current[index] = el!)}
                                className="text-3xl font-bold text-green-600 counter"
                                data-target={target}
                            >
                                +0
                            </p>
                            <p className="text-sm text-gray-500">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
