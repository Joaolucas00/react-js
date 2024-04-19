import shuffle from "just-shuffle";

export function realizarSorteio(participantes: string[]) {
    const total = participantes.length
    const embaralhado = shuffle(participantes)
    const resultado = new Map<string, string>()
    for (let i = 0; i < total; i++) {
        const indiceAmigo = i === (total - 1) ? 0 : i + 1;
        resultado.set(embaralhado[i], embaralhado[indiceAmigo])
    }

    return resultado
}