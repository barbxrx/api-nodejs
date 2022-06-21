/* eslint-disable prettier/prettier */
import { Router } from "express";

import { CategoriesRepository } from "../repositories/CategoriesRepository";

 const categoriesRoutes = Router();
 const categoriesRepository = new CategoriesRepository();



// criando rota para receber pelo body em formato json no insomnia
 categoriesRoutes.post("/", (request, response)=>{
    const { name, description } = request.body;

    const categoryAlreadyExists = categoriesRepository.findyByName(name);

    if(categoryAlreadyExists){
        return response.status(400).json({ error: "Categoria ja existente" })
    }

    categoriesRepository.create({name, description})


    return response.status(201).send({ message: "Cadastrado com sucesso!" });
 });

 categoriesRoutes.get("/", (request, response) => {
    const all = categoriesRepository.list();

    return response.json(all);
 })

 export { categoriesRoutes };


