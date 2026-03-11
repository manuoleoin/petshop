import { Request, Response } from "express";
import { title } from "node:process";

export const home = (req: Request, res: Response) => {
    // res.send('home');
    res.render('pages/page', {
        banner: {
            title: 'Todos os animais',
            backgroud: 'allanimals.jpg'
        }
    });
};

export const dogs = (req: Request, res: Response) => {
    res.send('pages/page');
};

export const cats = (req: Request, res: Response) => {
    res.send('pages/page');
};

export const fishes = (req: Request, res: Response) => {
    res.send('pages/page');
};