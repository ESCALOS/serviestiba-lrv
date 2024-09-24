import Spiner from "@/Components/Spiner";
import { useForm } from "@inertiajs/react";
import { FormEvent } from "react";
import { FaXmark } from "react-icons/fa6";
import Swal from "sweetalert2";

interface SuggestionFormValues {
    firstName: string;
    lastName: string;
    jobArea: string;
    suggestion: string;
    acceptedPolicy: boolean;
}

type Props = {
    onClose: () => void;
};

const SuggestionForm = ({ onClose }: Props) => {
    const { data, setData, post, processing, errors, reset } =
        useForm<SuggestionFormValues>({
            firstName: "",
            lastName: "",
            jobArea: "",
            suggestion: "",
            acceptedPolicy: false,
        });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("suggestion.mail"), {
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
            <h2 className="mb-4 text-3xl font-bold text-center text-primary-900">
                Buzón de Sugerencias
            </h2>
            <div className="flex flex-col justify-center gap-4">
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
                        value={data.jobArea}
                        onChange={(e) => setData("jobArea", e.target.value)}
                        placeholder=" "
                        required
                        id="jobArea"
                        className="w-full h-12 px-4 text-gray-900 placeholder-transparent transition duration-300 bg-white border border-gray-300 peer rounded-xl focus:outline-none focus:border-primary-500 required:valid:border-primary-500 focus:ring-transparent"
                    />
                    <label
                        htmlFor="jobArea"
                        className="absolute px-1 text-gray-400 transition-all duration-300 -translate-y-1/2 bg-white left-4 top-1/2 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-primary-500 peer-focus:text-xs peer-valid:top-0 peer-valid:text-primary-500 peer-valid:text-xs"
                    >
                        Área de trabajo
                    </label>
                    {errors.jobArea && (
                        <span className="text-sm text-red-500">
                            {errors.jobArea}
                        </span>
                    )}
                </div>
                <div className="relative w-full">
                    <textarea
                        value={data.suggestion}
                        onChange={(e) => setData("suggestion", e.target.value)}
                        placeholder=" "
                        required
                        id="suggestion"
                        className="w-full h-24 px-4 py-2 text-gray-900 placeholder-transparent transition duration-300 bg-white border border-gray-300 peer rounded-xl focus:outline-none focus:border-primary-500 required:valid:border-primary-500 focus:ring-transparent"
                    />
                    <label
                        htmlFor="suggestion"
                        className="absolute px-1 text-gray-400 transition-all duration-300 -translate-y-1/2 bg-white left-4 top-6 peer-placeholder-shown:top-6 peer-placeholder-shown:text-gray-400 peer-focus:top-0 peer-focus:text-primary-500 peer-focus:text-xs peer-valid:top-0 peer-valid:text-primary-500 peer-valid:text-xs"
                    >
                        Detalle de la sugerencia
                    </label>
                    {errors.suggestion && (
                        <span className="text-sm text-red-500">
                            {errors.suggestion}
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
};

export default SuggestionForm;
