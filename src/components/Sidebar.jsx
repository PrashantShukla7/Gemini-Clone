import React, { useContext, useState } from "react";
import { Context } from "../utils/Context";

const Sidebar = () => {
    const [expand, setExpand] = useState(true);
    const { prevPrompts, setRecentPrompt, onSent } = useContext(Context);

    const loadPrompt = async (prompt) =>{
        setRecentPrompt(prompt);
        await onSent(prompt);
    }

    return (
        <div
            className={`bg-[#1f2021] flex flex-col justify-between px-3 py-5 h-screen text-[#c3c7c4] text-md font-normal whitespace-nowrap ${
                expand && "w-[20%]"
            }`}
        >
            <div className="top">
                <i
                    className="ri-menu-line text-2xl cursor-pointer mx-auto"
                    onClick={() => setExpand((prev) => !prev)}
                ></i>
                <div className="bg-[#1a1a1c] px-2 py-2 rounded-full text-[#656566] text-sm font-semibold mt-10 mb-5 w-fit min-w-10 min-h-10 flex justify-center items-center">
                    <i className="ri-add-fill text-xl"></i>
                    {expand && <span className="ml-3">New Chat</span>}
                </div>
                {expand && (
                    <>
                        <h2 className="my-3 ml-2">Recent</h2>
                        {prevPrompts.map((prompt, index) => {
                            return (
                                <p onClick={() => loadPrompt(prompt)} key={index} className="hover:bg-[#27292b] px-4 py-2 rounded-full cursor-pointer">
                                    <i className="ri-chat-4-line mr-3 text-xl"></i>
                                    <span>{prompt.length > 20 ? `${prompt.slice(0, 20)}...` : prompt}</span>
                                </p>
                            );
                        })}
                    </>
                )}
            </div>
            <div className="bottom">
                <p className="hover:bg-[#27292b] px-2 py-2 rounded-full cursor-pointer">
                    <i className="ri-question-line text-xl"></i>
                    {expand && <span className="ml-3">Help</span>}
                </p>
                <p className="hover:bg-[#27292b] px-2 py-2 rounded-full cursor-pointer">
                    <i className="ri-history-fill text-xl"></i>
                    {expand && <span className="ml-3">Activty</span>}
                </p>
                <p className="hover:bg-[#27292b] px-2 py-2 rounded-full cursor-pointer">
                    <i className="ri-settings-3-line text-xl"></i>
                    {expand && <span className="ml-3">Settings</span>}
                </p>
            </div>
        </div>
    );
};

export default Sidebar;
