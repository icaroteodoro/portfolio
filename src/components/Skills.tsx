import { PropsWithChildren } from "react";

export default function Skills(props: PropsWithChildren) {
  return (
    <p className="flex gap-2 rounded-md px-3 py-3 font-bold bg-stone-700 transition-all text-stone-300">
      {props.children}
    </p>
  );
}
