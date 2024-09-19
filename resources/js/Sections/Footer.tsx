import React from "react";

type Props = {};

function Footer({}: Props) {
    return (
        <div className="bg-primary-700">
            <div className="flex flex-wrap items-center justify-center gap-8 px-4 py-12 mx-auto max-w-7xl">
                <img
                    src="/images/logo.webp"
                    alt="Logo"
                    width={200}
                    className="brightness-[8]"
                />
                <div className="flex justify-center w-full md:w-1/2 md:justify-end">
                    <ul className="flex flex-col items-center list-none md:flex-row">
                        <li className="p-2">
                            <a
                                href="#"
                                className="text-white hover:text-secondary-500"
                            >
                                Contacto
                            </a>
                        </li>
                        <li className="p-2">
                            <a
                                href="#"
                                className="text-white hover:text-secondary-500"
                            >
                                Política de privacidad
                            </a>
                        </li>
                        <li className="p-2">
                            <a
                                href="#"
                                className="text-white hover:text-secondary-500"
                            >
                                Aviso legal
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
