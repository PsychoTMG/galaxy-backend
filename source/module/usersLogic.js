import { database } from "./__loaddatabase.js";

const blogs = database.blogs

export const getUsers = () => {
    return blogs
}