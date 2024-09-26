type Props = {
    id: number;
    title: string;
    image: string;
    paragraphs: string[];
    inverted?: boolean;
    form: number;
    onClick: ({ form }: { form: number }) => void;
};

function CardWhistleBlowing({
    title,
    image,
    paragraphs,
    inverted = false,
    form,
    onClick,
}: Props) {
    return (
        <div className="grid items-center grid-cols-1 gap-6 mb-8 lg:grid-cols-2">
            <div
                className={`flex flex-col justify-center h-full max-w-xl gap-4 mx-auto ${inverted && "order-1 lg:order-2"}`}
            >
                <h2 className="text-xl font-bold text-primary-700">{title}</h2>
                {paragraphs.map((paragraph, index) => (
                    <p
                        key={index}
                        className="text-sm text-justify text-zinc-500"
                    >
                        {paragraph}
                    </p>
                ))}
                <button
                    className="button-whistleblowing"
                    onClick={() => onClick({ form })}
                >
                    Denunciar
                </button>
            </div>
            <img
                src={image}
                alt="Canal de denuncias"
                className={`mx-auto ${inverted && "order-2 lg:order-1"}`}
            />
        </div>
    );
}

export default CardWhistleBlowing;
