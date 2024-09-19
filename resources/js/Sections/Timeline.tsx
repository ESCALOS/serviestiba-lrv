import React, { useState, useEffect, useRef } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { timelineData } from "@/constants";
import useWindowWidth from "@/hooks/useWindowWith";

const Timeline: React.FC = () => {
    const [activeYearIndex, setActiveYearIndex] = useState(timelineData.length); // Comenzamos desde la mitad del array duplicado
    const [isTransitioning, setIsTransitioning] = useState(true); // Para controlar la transición
    const width = useWindowWidth();
    const timelineRef = useRef<HTMLDivElement>(null);

    // Duplicamos los datos visualmente para crear el efecto de bucle
    const visualTimelineData = [
        ...timelineData,
        ...timelineData,
        ...timelineData,
    ]; // Lo duplicamos 3 veces para mayor margen

    // Manejo de click en un año
    const handleYearClick = (index: number) => {
        setActiveYearIndex(index);
    };

    // Mover al año anterior
    const handlePrevious = () => {
        setActiveYearIndex((prev) => prev - 1);
    };

    // Mover al siguiente año
    const handleNext = () => {
        setActiveYearIndex((prev) => prev + 1);
    };

    // Efecto para manejar el bucle infinito
    useEffect(() => {
        // Si llegamos al principio del array visual (primer set de datos duplicados)
        if (activeYearIndex === 0) {
            setTimeout(() => {
                setIsTransitioning(false); // Desactivamos la transición
                setActiveYearIndex(timelineData.length * 2 - 1); // Saltamos al segundo set de datos duplicados
            }, 300); // El tiempo de la transición actual
        }

        // Si llegamos al final del array visual (último set de datos duplicados)
        if (activeYearIndex === timelineData.length * 2) {
            setTimeout(() => {
                setIsTransitioning(false); // Desactivamos la transición
                setActiveYearIndex(timelineData.length); // Saltamos al set de datos original en el centro
            }, 300); // El tiempo de la transición actual
        }
    }, [activeYearIndex]);

    // Volver a activar la transición cuando se mueva normalmente
    useEffect(() => {
        if (!isTransitioning) {
            setTimeout(() => {
                setIsTransitioning(true); // Activamos la transición después de hacer el "salto"
            }, 50); // Pequeña espera para que el ajuste sin transición suceda primero
        }
    }, [isTransitioning]);

    return (
        <div className="w-full px-4 py-24 mx-auto max-w-7xl md:px-12">
            <div className="mb-8 text-center lg:text-left">
                <h2 className="mb-4 text-2xl font-bold md:text-4xl text-primary-900">
                    Mas de 10 años brindado soluciones a la logística
                </h2>
                <h3 className="text-lg md:text-2xl text-primary-900">
                    Conoce nuestra historia en la línea de tiempo
                </h3>
            </div>
            <div className="relative flex items-center justify-between">
                {/* Botón anterior */}
                <button
                    onClick={handlePrevious}
                    className="absolute left-0 z-10 p-1 transition-all bg-white border rounded-full hover:bg-secondary-500 border-secondary-500"
                >
                    <LuChevronLeft size={24} />
                </button>

                {/* Contenedor de la línea de tiempo */}
                <div className="flex-1 mx-12 overflow-hidden">
                    <div className="relative h-1 mb-12 bg-primary-500">
                        <div
                            ref={timelineRef}
                            className={`absolute top-0 left-0 w-full flex justify-between duration-300 ease-in-out ${!isTransitioning && "transition-none"}`}
                            style={{
                                width: `${(width / (width > 768 ? 6 : 4)) * visualTimelineData.length}px`,
                                transform: `translateX(-${activeYearIndex * (width / (width > 768 ? 6 : 4)) + 28}px)`,
                            }}
                        >
                            {/* Mapear datos visuales duplicados */}
                            {visualTimelineData.map((item, index) => (
                                <div
                                    key={`${item.year}-${index}`}
                                    className="flex flex-col items-center"
                                    style={{
                                        width: `${width / (width > 768 ? 6 : 4)}px`,
                                        marginLeft:
                                            index === timelineData.length
                                                ? `${width / (width > 768 ? 12 : 8)}px`
                                                : "0", // Ajusta el margen del primer año
                                    }}
                                >
                                    <div className="w-1 h-4 rounded-sm bg-primary-500" />
                                    <button
                                        onClick={() => handleYearClick(index)}
                                        className={`mt-2 md:text-2xl font-bold ${
                                            index === activeYearIndex
                                                ? "text-primary-500"
                                                : "text-primary-300"
                                        }`}
                                    >
                                        {item.year}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Botón siguiente */}
                <button
                    onClick={handleNext}
                    className="absolute right-0 z-10 p-1 transition-all bg-white border rounded-full hover:bg-secondary-500 border-secondary-500"
                >
                    <LuChevronRight size={24} />
                </button>
            </div>

            <div className="grid justify-center grid-cols-1 mt-16 md:grid-cols-2">
                <img
                    src={visualTimelineData[activeYearIndex].image}
                    alt={`ServiEstiba ${visualTimelineData[activeYearIndex].year}`}
                    className="object-cover w-full rounded-t-lg h-96 md:rounded-tr-none md:rounded-l-lg"
                />
                <div className="flex flex-col items-center justify-center w-full gap-2 rounded-b-lg bg-primary-700 h-96 md:rounded-bl-none md:rounded-r-lg">
                    <h1 className="text-6xl font-bold text-primary-400">
                        {visualTimelineData[activeYearIndex].year}
                    </h1>
                    <p className="text-lg text-primary-100">
                        {visualTimelineData[activeYearIndex].description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
