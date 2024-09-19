import React from "react";

type Props = {
    title: string;
    children: React.ReactNode;
};

function PolicyItem({ title, children }: Props) {
    return (
        <li>
            <h3 className="font-bold">{title}</h3>
            {children}
        </li>
    );
}

export default PolicyItem;
