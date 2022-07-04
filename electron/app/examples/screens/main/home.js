import { ElementTree } from "../../libs/index.js";
const cascadeProps = {
    currentScreen: "home",
};
const [cascade] = ElementTree.cascade(cascadeProps);
const homeScreenButton = (text, onClick, active = false) => {
    let className = "";
    if (active) {
        className = "active";
    }
    return [
        {
            type: "button",
            text: text,
            attrs: {
                className,
            },
            events: {
                onClick: onClick,
            },
            cascade: {
                origin: cascadeProps,
                receiver: (elm, props) => {
                    if (props.currentScreen == text) {
                        elm.className = "active";
                    }
                    else {
                        elm.className = "";
                    }
                },
            },
        },
    ];
};
export const CreateMainScreen = () => {
    return [
        {
            type: "div",
            attrs: {
                className: "main-screen",
            },
            children: [
                {
                    type: "div",
                    attrs: {
                        className: "home-screen-button",
                    },
                    children: [
                        homeScreenButton("home", () => {
                            cascadeProps.currentScreen = "home";
                            cascade();
                        }, true),
                        homeScreenButton("sfx", () => {
                            cascadeProps.currentScreen = "sfx";
                            cascade();
                        }),
                        homeScreenButton("music", () => {
                            cascadeProps.currentScreen = "music";
                            cascade();
                        }),
                    ],
                },
                {
                    type: "div",
                    attrs: {
                        className: "screen-container",
                    },
                    children: [],
                },
            ],
        },
    ];
};
