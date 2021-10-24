import { KeyboardEvent } from "react";

export const onEnter = (pres: any) => {
    return (e: KeyboardEvent) => {
        if (e.key === "Enter") {
            pres()
        }
    }
};

