import { UICommonProps, VariantStyles } from "@/@types";
import clsx from "clsx";
import { ElementType } from "react";

type TextVariants = "normal" | "secondary" | "success" | "danger" | "none";

const textVariants: VariantStyles<TextVariants> = {
    normal: {
        default: "font-bold text-[16px] color-[#6F757E]",
        },
    secondary: {
        default: "",
        },
    success: {
        default: "",
        },
    danger: {
        default: "text-[red] text-[13px] animate-fadeIn",
        },
    none: {
        default: "",
    },
}
export default function Text<T extends ElementType = "div">({
    as,
    children,
    className,
    variant = "none",
    size,
    color,
    ...props
}: UICommonProps<T, TextVariants> & { size?: string; color?: string;}){
    const Typograph = as || "div";

    const textSize = `text-[${size}]` || "";
    const textColor = `text-[${color}]` || "";

    return (
        <Typograph
            className={clsx(
                "font-plex-sans leading-[21px]",
                textColor,
                textSize,
                className,
                textVariants[variant].default
            )}
            {...props}
        >
            {children}
        </Typograph>
    )
}