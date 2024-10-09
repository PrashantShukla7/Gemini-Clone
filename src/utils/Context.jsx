import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);

    const onSent = async (prompt) => {
        
        setShowResult(true);
        setResponse("");
        let res;
        if (prompt !== undefined) {
            setRecentPrompt(prompt);
            res = await run(prompt);
        } else {
            setRecentPrompt(input);
            res = await run(input);
            setPrevPrompts((prev) => [...prev, input]);
        }
        
        setResponse(res);
        setInput("");
    };



    const contextValue = {
        input,
        setInput,
        response,
        setResponse,
        showResult,
        recentPrompt,
        prevPrompts,
        onSent,
        setRecentPrompt
    };

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;
