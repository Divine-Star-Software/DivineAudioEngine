import { DSLogo } from "../../elements/DSLogo.js";
export const HomeScreen = (cascadeProps) => {
    return [
        {
            type: "div",
            attrs: {
                className: "screen-active",
            },
            cascade: {
                origin: cascadeProps,
                receiver: (elm, props) => {
                    if (cascadeProps.currentScreen == "home") {
                        elm.className = "screen-active";
                    }
                    else {
                        elm.className = "screen-inactive";
                    }
                },
            },
            children: [
                DSLogo("logo-container"),
                {
                    type: "h1",
                    attrs: {
                        className: "dae-logo",
                    },
                    text: "Divine Audio Engine",
                },
                {
                    type: "h2",
                    attrs: {
                        className: "dae-version",
                    },
                    text: "Alpha 0.0",
                },
                {
                    type: "p",
                    attrs: {
                        className: "dae-desc",
                    },
                    text: "Divine Audio Engine is a game audio engine for games made in JavaScript. It wraps and extends the web audio API. It can add effects to sounds, produce variations, and it can handle 3d sound spazilation for 3d games. ",
                },
                {
                    type: "p",
                    attrs: {
                        className: "dae-info-title",
                    },
                    text: "Demo Controls",
                },
                {
                    type: "p",
                    attrs: {
                        className: "dae-info",
                    },
                    text: `
            F1 : Toggles main menu. If menu is not enabled you can then interact with the 3d scene. 
            Arrow Keys : When scene is active you can move around the 3d scene with the arrow keys.
            Mouse : Click on the 3d scene and your pointer will auto lock to it. 
            `,
                },
                {
                    type: "p",
                    attrs: {
                        className: "dae-info-title",
                    },
                    text: "Credits",
                },
                {
                    type: "p",
                    attrs: {
                        className: "dae-info",
                    },
                    text: `
            Divine Audio Engine: Divine Star LLC
            A project by: Lucas D. Johnson
            Reverb Impulse Files: Aleksey Vaneev
            `,
                },
            ],
        },
    ];
};
