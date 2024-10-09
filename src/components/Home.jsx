import React, { useContext } from "react";
import './Home.css'
import { Context } from "../utils/Context";
import BeautifiedText from "../utils/BeautifiedText";

const Home = () => {
    const {
        input,
        setInput,
        response,
        setResponse,
        showResult,
        recentPrompt,
        prevPrompts,
        onSent,
    } = useContext(Context);

    return (
        <div className="w-full h-screen bg-[#131314] text-[#e3e3e3] overflow-hidden">
            <div className="flex justify-between p-5 items-center h-[10vh]">
                <h1 className="text-xl ">Gemini</h1>
                <div className="w-10 h-10 rounded-full overflow-hidden object-cover">
                    <img
                        src="/user.png"
                        alt="profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            {showResult ? (
                <div className="max-w-[50%] mx-auto mt-5 h-[75vh] overflow-y-auto overflow-x-hidden scroll-hide">
                    <div className="flex gap-x-5 items-center">
                        <img
                            className=" w-8 h-8 rounded-full"
                            src="/user.png"
                            alt=""
                        />
                        <p className="text-lg">{recentPrompt}</p>
                    </div>
                    <div className="my-10 flex gap-x-5">
                        <img
                            className="w-8 h-8 rounded-full"
                            src="/gemini-icon.png"
                            alt=""
                        />

                        {response ? (
                            <BeautifiedText text={response} />
                        ) : (
                            <div className="loader">
                                <hr />
                                <hr />
                                <hr />
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="max-w-[70%] mx-auto mt-5 h-[75vh]">
                    <h1 className="text-6xl greet-msg  mb-1">Hello, Dev</h1>
                    <h1 className="text-6xl text-[#454746]">
                        How can I help you today?
                    </h1>
                    <div className="flex gap-x-5 mt-20">
                        <div className="w-[17rem] h-44 bg-[#1f2021] p-5 rounded-lg hover:bg-[#343638] cursor-pointer relative">
                            <p>
                                Look up a Linux shell command for a specific
                                task
                            </p>
                            <div className="absolute bottom-[20px] right-[25px] w-10 h-10 rounded-full bg-black flex justify-center items-center text-2xl">
                                <i class="ri-code-fill"></i>
                            </div>
                        </div>
                        <div className="w-[17rem] h-44 bg-[#1f2021] p-5 rounded-lg hover:bg-[#343638] cursor-pointer relative">
                            <p>
                                Recommend new types of water sports, including
                                pros & cons{" "}
                            </p>
                            <div className="absolute bottom-[20px] right-[25px] w-10 h-10 rounded-full bg-black flex justify-center items-center text-2xl">
                                <i class="ri-compass-3-line"></i>
                            </div>
                        </div>
                        <div className="w-[17rem] h-44 bg-[#1f2021] p-5 rounded-lg hover:bg-[#343638] cursor-pointer relative">
                            <p>Give tips on how to take class notes</p>
                            <div className="absolute bottom-[20px] right-[25px] w-10 h-10 rounded-full bg-black flex justify-center items-center text-2xl">
                                <i class="ri-file-copy-line"></i>
                            </div>
                        </div>
                        <div className="w-[17rem] h-44 bg-[#1f2021] p-5 rounded-lg hover:bg-[#343638] cursor-pointer relative">
                            <p>Help explain a concept in a kid-friendly way</p>
                            <div className="absolute bottom-[20px] right-[25px] w-10 h-10 rounded-full bg-black flex justify-center items-center text-2xl">
                                <i class="ri-lightbulb-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex justify-between px-7 py-5 w-[70%] mx-auto bg-[#1f2021] rounded-full items-center">
                <input
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    type="text"
                    placeholder="Enter a prompt here"
                    className="flex-1 bg-transparent text-lg outline-none"
                />
                <i
                    onClick={() => onSent()}
                    class="ri-send-plane-2-line text-lg cursor-pointer"
                ></i>
            </div>
        </div>
    );
};

export default Home;
