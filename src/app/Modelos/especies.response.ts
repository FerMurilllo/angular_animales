
export interface Especies {
    id: number,
    nombre_especie: string
}

export interface Especie{
    nombre_especie: string
}

export interface resp1{
    data: any
    especies : Especies[]
}

export interface resp2{
    especie : Especie
}

