import Spiner from "@/Components/Spiner";
import { whistleBlowingCategories, whistleBlowingTypes } from "@/constants";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";
import { FaXmark } from "react-icons/fa6";
import Swal from "sweetalert2";

interface WhistleblowingFormValues {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    category: string;
    type: string;
    message: string;
    acceptedPolicy: boolean;
}

type Props = {
    form: number;
    onClose: () => void;
};

function WhistleblowingForm({ form, onClose }: Props) {
    const { data, setData, post, processing, errors, reset } =
        useForm<WhistleblowingFormValues>({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            category: "",
            type: "",
            message: "",
            acceptedPolicy: false,
        });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("whistleblowing.mail"), {
            onSuccess: () => {
                reset();
                Swal.fire("¡Mensaje Enviado!", "", "success");
                onClose();
            },
            onError: () => {
                Swal.fire("Error al enviar el mensaje", "", "error");
            },
        });
    };

    function togglePolicy(): void {
        setData("acceptedPolicy", !data.acceptedPolicy);
    }
    return (
        <form onSubmit={handleSubmit} className="relative p-8">
            <FaXmark
                className="absolute cursor-pointer top-4 right-4 text-primary-500 hover:text-primary-600"
                onClick={onClose}
            />
            <h2 className="mb-4 text-3xl font-bold text-center text-primary-700">
                Formulario de Denuncias
            </h2>
            <h3 className="mb-4 text-sm font-bold text-center text-primary-700">
                Completa el siguiente formulario para presentar tu denuncia.
            </h3>
            <div className="grid justify-center grid-cols-1 gap-4 md:grid-cols-2">
                <div className="relative w-full">
                    <input
                        type="text"
                        value={data.firstName}
                        onChange={(e) => setData("firstName", e.target.value)}
                        placeholder=" "
                        required
                        id="firstname"
                        autoComplete="name"
                        className="w-full h-12 px-4 text-gray-900 placeholder-transparent transition duration-300 bg-white border border-gray-300 peer rounded-xl focus:outline-none focus:border-primary-500 required:valid:border-primary-500 focus:ring-transparent"
                    />
                    <label
                        htmlFor="firstname"
                        className="absolute px-1 text-gray-400 transition-all duration-300 -translate-y-1/2 bg-white left-4 top-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-primary-500 peer-focus:text-xs peer-valid:top-0 peer-valid:text-primary-500 peer-valid:text-xs"
                    >
                        Nombre
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
                        value={data.lastName}
                        onChange={(e) => setData("lastName", e.target.value)}
                        placeholder=" "
                        required
                        id="lastname"
                        autoComplete="family-name"
                        className="w-full h-12 px-4 text-gray-900 placeholder-transparent transition duration-300 bg-white border border-gray-300 peer rounded-xl focus:outline-none focus:border-primary-500 required:valid:border-primary-500 focus:ring-transparent"
                    />
                    <label
                        htmlFor="lastname"
                        className="absolute px-1 text-gray-400 transition-all duration-300 -translate-y-1/2 bg-white left-4 top-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-primary-500 peer-focus:text-xs peer-valid:top-0 peer-valid:text-primary-500 peer-valid:text-xs"
                    >
                        Apellido
                    </label>
                    {errors.lastName && (
                        <span className="text-sm text-red-500">
                            {errors.lastName}
                        </span>
                    )}
                </div>
                <div className="relative w-full">
                    <input
                        type="text"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        placeholder=" "
                        required
                        id="email"
                        className="w-full h-12 px-4 text-gray-900 placeholder-transparent transition duration-300 bg-white border border-gray-300 peer rounded-xl focus:outline-none focus:border-primary-500 required:valid:border-primary-500 focus:ring-transparent"
                    />
                    <label
                        htmlFor="email"
                        className="absolute px-1 text-gray-400 transition-all duration-300 -translate-y-1/2 bg-white left-4 top-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-primary-500 peer-focus:text-xs peer-valid:top-0 peer-valid:text-primary-500 peer-valid:text-xs"
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
                        type="text"
                        value={data.phone}
                        onChange={(e) => setData("phone", e.target.value)}
                        placeholder=" "
                        required
                        id="phone"
                        className="w-full h-12 px-4 text-gray-900 placeholder-transparent transition duration-300 bg-white border border-gray-300 peer rounded-xl focus:outline-none focus:border-primary-500 required:valid:border-primary-500 focus:ring-transparent"
                    />
                    <label
                        htmlFor="phone"
                        className="absolute px-1 text-gray-400 transition-all duration-300 -translate-y-1/2 bg-white left-4 top-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-primary-500 peer-focus:text-xs peer-valid:top-0 peer-valid:text-primary-500 peer-valid:text-xs"
                    >
                        Teléfono/Celular
                    </label>
                    {errors.phone && (
                        <span className="text-sm text-red-500">
                            {errors.phone}
                        </span>
                    )}
                </div>
                <div className="relative w-full md:col-span-2">
                    <select
                        value={data.category}
                        onChange={(e) => setData("category", e.target.value)}
                        required
                        id="category"
                        className="w-full h-12 px-4 text-gray-900 placeholder-transparent transition duration-300 bg-white border border-gray-300 peer rounded-xl focus:outline-none focus:border-primary-500 required:valid:border-primary-500 focus:ring-transparent"
                    >
                        {whistleBlowingCategories.map((category) => (
                            <option key={category.id} value={category.name}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                    <label
                        htmlFor="category"
                        className="absolute px-1 text-gray-400 transition-all duration-300 -translate-y-1/2 bg-white left-4 top-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-primary-500 peer-focus:text-xs peer-valid:top-0 peer-valid:text-primary-500 peer-valid:text-xs"
                    >
                        Categoría
                    </label>
                    {errors.category && (
                        <span className="text-sm text-red-500">
                            {errors.category}
                        </span>
                    )}
                </div>
                <div className="relative w-full md:col-span-2">
                    <select
                        value={data.type}
                        onChange={(e) => setData("type", e.target.value)}
                        required
                        id="type"
                        className="w-full h-12 px-4 text-gray-900 placeholder-transparent transition duration-300 bg-white border border-gray-300 peer rounded-xl focus:outline-none focus:border-primary-500 required:valid:border-primary-500 focus:ring-transparent"
                    >
                        {whistleBlowingTypes
                            .filter((type) => type.form === form)
                            .map((type) => (
                                <option key={type.id} value={type.name}>
                                    {type.name}
                                </option>
                            ))}
                    </select>
                    <label
                        htmlFor="type"
                        className="absolute px-1 text-gray-400 transition-all duration-300 -translate-y-1/2 bg-white left-4 top-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-primary-500 peer-focus:text-xs peer-valid:top-0 peer-valid:text-primary-500 peer-valid:text-xs"
                    >
                        Tipo
                    </label>
                    {errors.type && (
                        <span className="text-sm text-red-500">
                            {errors.type}
                        </span>
                    )}
                </div>
                <div className="relative w-full md:col-span-2">
                    <textarea
                        value={data.message}
                        onChange={(e) => setData("message", e.target.value)}
                        placeholder=" "
                        required
                        id="message"
                        className="w-full h-24 px-4 py-2 text-gray-900 placeholder-transparent transition duration-300 bg-white border border-gray-300 peer rounded-xl focus:outline-none focus:border-primary-500 required:valid:border-primary-500 focus:ring-transparent"
                    />
                    <label
                        htmlFor="message"
                        className="absolute px-1 text-gray-400 transition-all duration-300 -translate-y-1/2 bg-white left-4 top-6 peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-primary-500 peer-focus:text-xs peer-valid:top-0 peer-valid:text-primary-500 peer-valid:text-xs"
                    >
                        Descripción de los hechos
                    </label>
                    {errors.message && (
                        <span className="text-sm text-red-500">
                            {errors.message}
                        </span>
                    )}
                </div>
                <div className="mx-auto md:col-span-2">
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
                </div>
                <div className="mx-auto text-center md:col-span-2">
                    <button
                        type="submit"
                        className="h-10 text-white w-36 rounded-3xl bg-primary-500 hover:bg-primary-600"
                    >
                        {processing ? (
                            <span className="flex items-center justify-center">
                                <Spiner />
                                Enviando ...
                            </span>
                        ) : (
                            "Enviar"
                        )}
                    </button>
                </div>
            </div>
        </form>
    );
}

export default WhistleblowingForm;
