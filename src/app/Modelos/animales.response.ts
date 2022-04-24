export interface Animales {
    id: number,
    nombre_animal: string,
    especie_id: number 
}

export interface Animal{
    nombre_animal: string
}

export interface resp1{
    data: any
    animales : Animales[]
}

export interface resp2{
    animal : Animal
}


