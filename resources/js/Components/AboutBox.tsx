type Props = {
    image: string;
    title: string;
    description: string;
    inverted?: boolean;
};

function AboutBox({ image, title, description, inverted = false }: Props) {
    return (
        <div className="h-[500px] relative group">
            <img
                src={image}
                alt={`Serviestiba - ${title}`}
                width={690}
                height={397}
                className="object-cover w-full h-full"
            />
            <div className="absolute top-0 w-full h-full transition-all duration-300 group-hover:bg-black group-hover:bg-opacity-50"></div>
            <div
                className={`absolute top-0 right-0 max-w-sm px-8 py-20 ${inverted ? "bg-primary-700" : "bg-primary-100"} rounded-bl-2xl`}
            >
                <h2
                    className={`mb-4 text-3xl font-bold ${inverted ? "text-primary-100" : "text-primary-700"}`}
                >
                    {title}
                </h2>
                <p
                    className={`text-sm text-justify ${inverted ? "text-primary-100" : "text-primary-700"}`}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}

export default AboutBox;
