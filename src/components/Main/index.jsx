import TemaContext from "../TemaProvider/TemaContext";
import { use } from "react";

export function Main({ children }){

    const {tema} = use(TemaContext);

    return(
        <main className={tema}>{children}</main>
    )
}