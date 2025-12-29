import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top of page when the pathname changes (navigation occurred)
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [pathname]);

    return null;
}
