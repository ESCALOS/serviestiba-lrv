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
                className={`absolute top-0 right-0 px-8 py-20 ${inverted ? "bg-info-500" : "bg-primary-500"} w-full h-full flex flex-col items-center justify-center opacity-95`}
            >
                <div className="max-w-sm text-center">
                    <h2
                        className={`mb-4 text-3xl font-bold ${inverted ? "text-emphasis-500" : "text-emphasis-500"}`}
                    >
                        {title}
                    </h2>
                    <p
                        className={`text-sm ${inverted ? "text-emphasis-500" : "text-emphasis-500"}`}
                    >
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutBox;
