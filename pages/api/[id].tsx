import { ImageResponse } from "@vercel/og";
import React from "react";
import { NextRequest } from "next/server";

// Ensure this API route runs on the Edge runtime, which supports returning a Response
export const config = {
    runtime: "edge",
};

export default function (req: NextRequest) {
    const url = new URL(req.url);
    //const id = url.pathname.split("/").pop() || "";

    const { searchParams } = url;
    let text = searchParams.get("text") || "Default text";
    const host = searchParams.get("host") || "";
    const isTypeString = typeof text === "string";
    if (!isTypeString) {
        throw new Error("Invalid text parameter");
    }

    if (text.length > 20) {
        text = text.slice(0, 20) + "...";
    }

    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#6734ff",
                    width: "100%",
                    height: "100%",
                    padding: "10px",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        color: "white",
                        borderRadius: "20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            fontSize: 100,
                            padding: "20px 10px",
                            height: "80%",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            wordBreak: "break-word",
                            borderRadius: "10px 10px 0 0",
                            backgroundImage:
                                "linear-gradient(240deg, rgba(0,0,0,0.15), rgba(0,0,32,0.85)), url(https://github.com/nk4dev/nk4dev.github.io/blob/master/public/images/og.png?raw=true)",
                        }}
                    >
                      {text}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            padding: "5px 10px",
                            fontSize: 32,
                            color: "white",
                            height: "20%",
                            borderRadius: "0 0 10px 10px",
                            position: "relative",
                            overflow: "hidden",
                            backgroundColor: "#1616c0", // fallback
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                alignItems: "flex-start",
                                padding: "0 10px",
                                textShadow: "0 2px 4px rgba(0,0,0,0.6)",
                                fontWeight: 600,
                            }}
                        >
                            Nkngith AMAMIYA |
                            <span
                                style={{
                                    marginLeft: 8,
                                    fontWeight: 400,
                                    textShadow: "0 2px 4px rgba(0,0,0,0.85), 0 0 6px rgba(0,0,0,0.6), 0 0 12px rgba(0,0,0,0.5)",
                                }}
                            >
                                X, Instagram, GitHub, Misskey, Mastdon @nk4dev
                            </span>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                padding: "0 10px",
                                fontSize: 28,
                                opacity: 0.9,
                                textShadow: "0 2px 4px rgba(0,0,0,0.6)",
                            }}
                        >
                            {host ? host : "nknighta.me"}
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}