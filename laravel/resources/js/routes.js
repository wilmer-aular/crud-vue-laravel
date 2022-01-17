const Home = () => import("./components/Home.vue");
const Contact = () => {
    console.log("llego aqui");
    return import("./components/Contact.vue");
};

//importamos componentes para el blog

const Show = () => import("./components/blog/Show.vue");
const Create = () => import("./components/blog/Create.vue");
const Update = () => import("./components/blog/Update.vue");

export const routes = [
    {
        name: "home",
        path: "/",
        components: Home,
    },
    {
        name: "Contact",
        path: "/contact",
        components: Contact,
    },
    {
        name: "showBlogs",
        path: "/blogs",
        components: Show,
    },
    {
        name: "createBlogs",
        path: "/create",
        components: Create,
    },
    {
        name: "updateBlogs",
        path: "/update/:id",
        components: Update,
    },
];
