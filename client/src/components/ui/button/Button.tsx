import React from "react";

type Props = {
    type?: 'submit';
    title?: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    isWaiting?: boolean;
    children: React.ReactNode;
}

export default function Button({ type = 'submit', children, onClick, isWaiting = false }: Props) {
    return (
        <button type={type} className={`button ${!isWaiting ? 'dectivate' : ''}`} onClick={onClick}>{children}</button>
    );
}