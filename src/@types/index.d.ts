import { ComponentPropsWithoutRef, ReactNode } from "react";

type VariantStyles<T extends string> = {
    [key in T]: {
        default: string;
        hover?: string;
        clicked?: string;
    }
}

type UICommonProps<T extends ElementType, C> = {
    as?: T;
    chidren?: ReactNode;
    variant?: C;
} & ComponentPropsWithoutRef<T>;
