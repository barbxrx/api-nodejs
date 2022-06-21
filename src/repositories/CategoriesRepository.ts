/* eslint-disable prettier/prettier */
import { Category } from '../model/Category';


// DTO = Data transfer object < conceito de criar um objeto que vai ser responsavel por fazer a transferencia dedados
// entre uma class e outra, ele pega os valores da nossa rota e a recebemos nos repositorios

interface ICreateCategoryDTO {
    name: string;
    description: string
}
class CategoriesRepository {

// criando array para armazenar as categorias criadas
 private categories: Category[] = [];

 constructor() {
    this.categories = [];
 }

 // void = nao vai ter retorno algum
 create({name, description}: ICreateCategoryDTO): void {
    const category = new Category();

    // forma de se fazer mais inteligente com object.assing que é como se estivesse atribuindo
    Object.assign(category, {
        name,
        description,
        created_at: new Date(),
    })

// forma 2 de fazer, mas menos produtiva
    // category.name = name;
    // category.description = description;
    // category.create_at = new Date();


// pegando o input do usuario e armazenando dentro da variavel criada
    this.categories.push(category);
 }

 list(): Category[] {
    return this.categories
 }


 findyByName(name: string): Category { 
    const category = this.categories.find(category => category.name === name);
    return category

 }
}

export { CategoriesRepository }