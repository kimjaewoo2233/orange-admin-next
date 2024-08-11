import { useEffect, useRef } from "react";



export default function useOutsideClick<T extends HTMLElement>(onClose: () => void) {
    const componentRef = useRef<T | null>(null);

    const handleDocumentClick = (e: MouseEvent) => {
        if(componentRef.current && !componentRef.current.contains(e.target as Node)) {
            onClose();
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleDocumentClick);
        return () => {
            document.removeEventListener("mousedown", handleDocumentClick);
        }
    }, []);

    return { componentRef };
}