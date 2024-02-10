import { PropsWithChildren } from "react";

export default function TitleBodyDark (props: PropsWithChildren) {
    return (
        <h2 className={'text-stone-900 font-extrabold text-3xl xl:text-4xl 2xl:text-5xl font-poppins'}>{props.children}</h2>
    );
}