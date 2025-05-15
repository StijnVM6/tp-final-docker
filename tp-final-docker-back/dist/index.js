"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.post('/users/auth', (req, res) => {
    if (req.body.login === 'admin' && req.body.password === 'toto') {
        res.send({ status: "success" });
    }
    else {
        res.send({ status: "error" });
    }
});
app.get('/books', (req, res) => {
    res.json({ books: [
            {
                id: 1,
                title: 'Harry Potter',
                description: "jeune à lunettes"
            },
            {
                id: 2,
                title: 'Harry Potter 2',
                description: "jeune à lunettes mais c'est le 2"
            },
            {
                id: 3,
                title: 'Mary Poppins',
                description: "une nounou magique"
            },
            {
                id: 4,
                title: 'Star Wars',
                description: "qui est ton père ?"
            },
        ] });
});
app.get('/users/admin/books', (req, res) => {
    res.json({ user: { login: "admin" }, books: [1, 4] });
});
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
