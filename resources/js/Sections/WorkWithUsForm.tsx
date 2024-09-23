import React, { useState } from "react";
import { FormEvent } from "react";
import { useForm } from "@inertiajs/react";
import Swal from "sweetalert2";

interface WorkWithUsFormValues {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    resume: File | undefined;
    message: string;
    acceptedPolicy: boolean;
}

const WorkWithUsForm: React.FC = () => {
    const { data, setData, post, processing, progress, errors, reset } =
        useForm<WorkWithUsFormValues>({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            resume: undefined,
            message: "",
            acceptedPolicy: false,
        });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("work-with-us.mail"), {
            onSuccess: () => {
                reset();
                Swal.fire("¡Mensaje Enviado!", "", "success");
            },
            onError: () => {
                Swal.fire("Error al enviar el mensaje", "", "error");
            },
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setData("resume", file);
        }
    };

    const handleClick = () => {
        const fileInput = document.getElementById("resume") as HTMLInputElement;
        fileInput?.click();
    };

    const togglePolicy = () => {
        setData("acceptedPolicy", !data.acceptedPolicy);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="relative w-full">
                    <input
                        type="text"
                        id="firstName"
                        value={data.firstName}
                        onChange={(e) => setData("firstName", e.target.value)}
                        placeholder=" "
                        required
                        autoComplete="given-name"
                        className="w-full h-12 px-4 text-gray-900 placeholder-transparent transition duration-300 bg-white border border-gray-300 peer rounded-xl focus:outline-none focus:border-primary-700 focus:ring-transparent required:valid:border-primary-700"
                    />
                    <label
                        htmlFor="firstName"
                        className="absolute px-1 text-gray-400 transition-all duration-300 -translate-y-1/2 bg-white left-4 top-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-primary-700 peer-focus:text-xs peer-valid:top-0 peer-valid:text-primary-700 peer-valid:text-xs"
                    >
                        Nombres
                    </label>
                    {errors.firstName && (
                        <span className="text-sm text-red-500">
                            {errors.firstName}
                        </span>
                    )}
                </div>
                <div className="relative w-full">
                    <input
                        type="text"
                        id="lastName"
                        value={data.lastName}
                        onChange={(e) => setData("lastName", e.target.value)}
                        placeholder=" "
                        required
                        autoComplete="family-name"
                        className="w-full h-12 px-4 text-gray-900 placeholder-transparent transition duration-300 bg-white border border-gray-300 peer rounded-xl focus:outline-none focus:border-primary-700 focus:ring-transparent required:valid:border-primary-700"
                    />
                    <label
                        htmlFor="lastName"
                        className="absolute px-1 text-gray-400 transition-all duration-300 -translate-y-1/2 bg-white left-4 top-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-primary-700 peer-focus:text-xs peer-valid:top-0 peer-valid:text-primary-700 peer-valid:text-xs"
                    >
                        Apellidos
                    </label>
                    {errors.lastName && (
                        <span className="text-sm text-red-500">
                            {errors.lastName}
                        </span>
                    )}
                </div>
                <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="relative w-full">
                        <input
                            type="text"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            placeholder=" "
                            required
                            id="email"
                            autoComplete="email"
                            className="w-full h-12 px-4 text-gray-900 placeholder-transparent transition duration-300 bg-white border border-gray-300 peer rounded-xl focus:outline-none focus:border-primary-700 required:valid:border-primary-700 focus:ring-transparent"
                        />
                        <label
                            htmlFor="email"
                            className="absolute px-1 text-gray-400 transition-all duration-300 -translate-y-1/2 bg-white left-4 top-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-primary-700 peer-focus:text-xs peer-valid:top-0 peer-valid:text-primary-700 peer-valid:text-xs"
                        >
                            Correo Electrónico
                        </label>
                        {errors.email && (
                            <span className="text-sm text-red-500">
                                {errors.email}
                            </span>
                        )}
                    </div>
                    <div className="relative w-full">
                        <input
                            type="tel"
                            value={data.phone}
                            onChange={(e) => setData("phone", e.target.value)}
                            placeholder=" "
                            required
                            id="phone"
                            autoComplete="tel"
                            className="w-full h-12 px-4 text-gray-900 placeholder-transparent transition duration-300 bg-white border border-gray-300 peer rounded-xl focus:outline-none focus:border-primary-700 required:valid:border-primary-700 focus:ring-transparent"
                        />
                        <label
                            htmlFor="phone"
                            className="absolute px-1 text-gray-400 transition-all duration-300 -translate-y-1/2 bg-white left-4 top-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-primary-700 peer-focus:text-xs peer-valid:top-0 peer-valid:text-primary-700 peer-valid:text-xs"
                        >
                            Celular
                        </label>
                        {errors.phone && (
                            <span className="text-sm text-red-500">
                                {errors.phone}
                            </span>
                        )}
                    </div>
                </div>
                <div className="relative w-full">
                    {/* Input de archivo oculto */}
                    <input
                        type="file"
                        id="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                    />

                    {/* Div personalizado para abrir el input de archivo */}
                    <div
                        onClick={handleClick}
                        className="flex items-center justify-center w-full h-12 px-4 text-white transition duration-300 cursor-pointer bg-primary-500 rounded-xl hover:bg-primary-600"
                    >
                        {data.resume
                            ? data.resume.name
                            : "Adjuntar CV (PDF o DOC)"}
                    </div>
                    {errors.resume && (
                        <span className="text-sm text-red-500">
                            {errors.resume}
                        </span>
                    )}
                </div>

                <div className="relative w-full">
                    <textarea
                        value={data.message}
                        onChange={(e) => setData("message", e.target.value)}
                        placeholder=" "
                        required
                        id="message"
                        className="w-full h-24 px-4 py-2 text-gray-900 placeholder-transparent transition duration-300 bg-white border border-gray-300 peer rounded-xl focus:outline-none focus:border-primary-700 required:valid:border-primary-700 focus:ring-transparent"
                    />
                    <label
                        htmlFor="message"
                        className="absolute px-1 text-gray-400 transition-all duration-300 -translate-y-1/2 bg-white left-4 top-6 peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-primary-700 peer-focus:text-xs peer-valid:top-0 peer-valid:text-primary-700 peer-valid:text-xs"
                    >
                        Indicar sus habilidades
                    </label>
                    {errors.message && (
                        <span className="text-sm text-red-500">
                            {errors.message}
                        </span>
                    )}
                </div>
                <div
                    className="flex items-center cursor-pointer select-none"
                    onClick={togglePolicy}
                >
                    <input
                        type="checkbox"
                        checked={data.acceptedPolicy}
                        onChange={(e) =>
                            setData("acceptedPolicy", e.target.checked)
                        }
                        className="rounded-sm text-primary-700 ring-offset-2 ring-offset-gray-100 focus:ring-2 focus:ring-transparent"
                    />
                    <span className="ml-2 text-sm">
                        He leído y acepto las{" "}
                        <a
                            href="/politicas"
                            target="_blank"
                            className="underline text-primary-700"
                        >
                            Políticas de Privacidad de Datos
                        </a>{" "}
                        de Serviestiba
                    </span>
                </div>
                {errors.acceptedPolicy && (
                    <span className="text-sm text-red-500">
                        {errors.acceptedPolicy}
                    </span>
                )}

                <div className="text-center">
                    <button
                        type="submit"
                        className="h-10 text-white w-36 rounded-3xl bg-primary-500 hover:bg-primary-600"
                    >
                        {processing ? (
                            <span className="flex items-center justify-center">
                                <svg
                                    className="w-5 h-5 mr-2 text-white animate-spin"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    ></circle>
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4h-4z"
                                    ></path>
                                </svg>
                                Procesando...
                            </span>
                        ) : (
                            "Enviar"
                        )}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default WorkWithUsForm;
