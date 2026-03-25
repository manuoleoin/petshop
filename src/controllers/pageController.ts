import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from '../models/pet'

export const home = (req: Request, res: Response) => {
    let list = Pet.getAll()
    // res.send('home');
    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: 'Todos os animais',
            backgroud: 'allanimals.jpg'
        },
        list
    });
};

export const dogs = (req: Request, res: Response) => {
        let list = Pet.getFromType('dog')
    res.render('pages/page', {
        menu: createMenuObject('dogs'),
        banner: {
            title: 'Cachorros',
            backgroud: 'banner_dog.jpg'
        }
    })
};

export const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType('cat')
    res.render('pages/page', {
        menu: createMenuObject('cats'),
        banner: {
            title: 'Gatos',
            backgroud: 'banner_cat.jpg'
        }
    });
};

export const fishes = (req: Request, res: Response) => {
    let list = Pet.getFromType('fish')
    res.render('pages/page', {
        menu: createMenuObject('fishes'),
        banner: {
            title: 'Peixes',
            backgroud: 'banner_fish.jpg'
        }
    });
};