import { IMAGES } from "./images";

export const NAVBAR_LINKS = [
    {
        name: "Главная",
        code: "home",
        hash: "/",
        href: "/"
    },
    {
        name: "Наши Продукты",
        code: "products",
        hash: "#services",
        children: [
            {
                image: IMAGES.NAVBAR_MENU.MENUITEM1,
                name: "Авторская методика для детей",
                hash: "#services",
                code: "ac1",
            },
            {
                image: IMAGES.NAVBAR_MENU.MENUITEM2,
                name: "Авторская методика для «остальных»",
                hash: "#services",
                code: "ac2",
            },
            {
                image: IMAGES.NAVBAR_MENU.MENUITEM3,
                name: "Массаж детский",
                hash: "#services",
                code: "ac3",
            },
            {
                image: IMAGES.NAVBAR_MENU.MENUITEM4,
                name: "Авторская методика для пожилых",
                hash: "#services",
                code: "ac4",
            },
            {
                image: IMAGES.NAVBAR_MENU.MENUITEM5,
                name: "Массаж оздоровительный",
                hash: "#services",
                code: "ac5",
            },
            {
                image: IMAGES.NAVBAR_MENU.MENUITEM6,
                name: "консультация невропатолога",
                hash: "#services",
                code: "ac6",
            },
        ],
        href: "/products"
    },
    {
        name: "О нас",
        code: "about",
        hash: "#reviews",
        href: "/about"
    },
    {
        name: "Наша команда",
        code: "our-group",
        hash: "#team",
        href: "/our-group"
    }
]