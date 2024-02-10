import { PropsWithChildren } from "react";

export default function Title (props: PropsWithChildren) {
    return (
        <h2 className={'text-stone-300 font-extrabold  text-3xl xl:text-4xl 2xl:text-5xl font-poppins'}>{props.children}</h2>
    );
}