import { useEffect, useState } from "react";
function useTypewriter({ text, delay = 50 }: { text: string; delay?: number }) {
    const [displayedText, setDisplayedText] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

    const skipTypewriter = () => {
        if (timer) clearInterval(timer);
        setDisplayedText(text);
        setIsComplete(true);
    };

    useEffect(() => {
        let i = 0;
        setDisplayedText("");
        setIsComplete(false);

        const newTimer = setInterval(() => {
            if (i < text.length) {
                setDisplayedText(text.slice(0, i + 1));
                i++;
            } else {
                setIsComplete(true);
                clearInterval(newTimer);
            }
        }, delay);

        setTimer(newTimer);

        return () => {
            if (newTimer) clearInterval(newTimer);
        };
    }, [text, delay]);

    return { displayedText, isComplete, skipTypewriter };
}
export default useTypewriter;