import { Config } from "ziggy-js";

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};

export interface ModalComponentProps {
    onClose: () => void;
}

type ModalComponent = React.FC<ModalComponentProps>;

export type Service = {
    id: number;
    image: string;
    title: string;
    description: string;
    items: string[];
};
