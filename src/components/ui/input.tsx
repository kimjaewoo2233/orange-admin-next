import { UICommonProps, VariantStyles } from "@/@types";
import clsx from "clsx";
import { ElementType, Ref } from "react";
import { forwardRef } from "react";

type InputVariants = "home" | "secondary" | "none";

const inputVariants: VariantStyles<InputVariants> = {
    home: {
        default: "h-[38px] pr-8 pl-4 py-5 rounded-[30px] border border-solid border-[#E1E1E1]"
    },
    secondary: {
        default: ""
    },
    none: {
        default: ""
    }
}

const Input = forwardRef(
    <T extends ElementType = "input">(
        {
            as,
            className, 
            variant = "none", 
            ...props
        }: UICommonProps<T, InputVariants>,
        ref: Ref<HTMLInputElement>
    ) => {

        return (
            <input
                ref={ref}
                className={clsx(
                    "outline-none",
                    className,
                    inputVariants[variant].default
                )}
                {...props}
            />
        )
    }
) 

export default Input;

