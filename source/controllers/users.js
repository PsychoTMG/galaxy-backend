import { getUsers } from "../module/usersLogic.js"

export const allUsers = (req, res) => {
    const users = getUsers()
    let s = '<!doctype html>' +
        '<html>' +
        '<head>' +
        '<meta charset=UTF-8>' +
        '<title> Блог </title>' +
        '</head>' +
        '<body>' +
        '<h1>Блоги</h1>'
    for (let i of users) {
        s += `<h2>${i.title}</h2>` +
            `<p>${i.desc}</p>` +
            `<p>${new Date().toLocaleString()}</p>`
    }
    res.send(s)
}