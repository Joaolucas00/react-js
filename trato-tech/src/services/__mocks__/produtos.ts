export const mockProdutos = [
    {
      "id": "1",
      "titulo": "Assistente virtual",
      "descricao": "Conheça nosso smart speaker de maior sucesso ainda melhor. O novo design de áudio com direcionamento frontal (1 speaker de 1,6\") garante mais graves e um som completo.",
      "foto": "/assets/itens/assistente-virtual-tela.png",
      "favorito": false,
      "preco": 285,
      "categoria": "eletronicos"
    },
    {
      "id": "2",
      "titulo": "AirPods com Estojo de Recarga",
      "descricao": "Os AirPods ligam automaticamente e estão sempre conectados e sabem quando estão nos seus ouvidos e pausam quando são tirados. Para ajustar o volume, trocar de música, fazer uma ligação.",
      "foto": "/assets/itens/airpod.png",
      "favorito": false,
      "preco": 900,
      "categoria": "eletronicos"
    },
    {
      "id": "3",
      "titulo": "Tablet Wi-Fi",
      "descricao": "Com o chip A12Z Bionic, o novo Tablet Pro garante maior fluidez em tarefas diárias, trabalhos e muito mais edite vídeos em 4K, crie objetos 3D e utilize realidade aumentada de forma natural e instantânea.",
      "foto": "/assets/itens/tablet.png",
      "favorito": false,
      "preco": 637,
      "categoria": "eletronicos"
    },
    {
      "id": "4",
      "titulo": "Assistente virtual com tela",
      "descricao": "Desenvolvido para se mover com você: com um display HD de 10,1\" que se move automaticamente, as chamadas de vídeo, as receitas e os filmes e séries estarão sempre à vista. Os alto-falantes oferecem som direcional premium e de alta qualidade.",
      "foto": "/assets/itens/assistente-virtual-tela.png",
      "favorito": false,
      "preco": 1600,
      "categoria": "eletronicos"
    },
    {
      "id": "5",
      "titulo": "Leitor de livros digitais",
      "descricao": "O Leitor de livros digitais com a maior e melhor resolução - tela Paperwhite de 7\" e 300 ppi. Leia como se fosse em papel, sem reflexo, mesmo sob a luz do sol.",
      "foto": "/assets/itens/leitor-livros.png",
      "favorito": false,
      "preco": 447,
      "categoria": "eletronicos"
    },
    {
      "id": "6",
      "titulo": "Almofada de assento",
      "descricao": "Feito de material de couro, confortável e suave. Couro ambiental natural dá uma sensação delicada. Adequado para uso durante todo o ano. Com as funções de aquecimento e ventilação do assento de carro podem ser usadas normalmente.",
      "foto": "/assets/itens/assento.png",
      "favorito": false,
      "preco": 45.9,
      "categoria": "automotivos"
    },
    {
      "id": "7",
      "titulo": "Capa de volante de couro",
      "descricao": "Esta capa de volante feita de couro sintético, antiderrapante, respirável. 100% SEM ODOR: elástico saudável e ecológico, não tóxico, durável. Melhor aderência no volante proporciona uma ótima e confortável experiência de direção.",
      "foto": "/assets/itens/capa-volante-couro.png",
      "favorito": false,
      "preco": 150,
      "categoria": "automotivos"
    },
    {
      "id": "8",
      "titulo": "Organizador lateral",
      "descricao": "Aumente mais espaço e garanta a segurança – todos os motoristas sabem que é muito perigoso que nosso telefone caia na lacuna entre o assento frontal e o lado do console durante a condução, este enchimento de lacuna de assento de carro cria armazenamento extra para você para evitar que coisas perigosas aconteçam, pode armazenar coisas como smartphone, carteira,que garante a condução segura.",
      "foto": "/assets/itens/organizador-lateral.png",
      "favorito": false,
      "preco": 149.9,
      "categoria": "automotivos"
    },
    {
      "id": "9",
      "titulo": "Capa de volante de cristais",
      "descricao": "Material da capa do volante de cristal: Couro de alta qualidade e artesanato em diamante: mais estável em comparação com outros mesmos produtos, e não machuca suas mãos. Esta capa de volante brilhante para mulheres meninas é universal para volante com diâmetro de 37-38 cm/14,5-15 pol. ",
      "foto": "/assets/itens/capa-volante-cristais.png",
      "favorito": false,
      "preco": 290,
      "categoria": "automotivos"
    },
    {
      "id": "10",
      "titulo": "Suporte Veicular",
      "descricao": "Com o Suporte Veicular Magnetico 3 em 1 i2GO PRO você posiciona seu Smartphone de qualquer tamanho e outros dispositivos onde quiser de maneira fácil e segura. Ideal para o utilização de aplicativos de GPS e controlar músicas no carro, assistir a filmes e séries em casa, além de atender chamadas de vídeo e conferir documentos e mensagens no escritório.",
      "foto": "/assets/itens/suporte-veicular.png",
      "favorito": false,
      "preco": 59.9,
      "categoria": "automotivos"
    },
]

const produtosServices = {
    get: async () => mockProdutos,
    getProduto: async () => mockProdutos.filter((produto) => produto.categoria === 'automotivos')
}

export default produtosServices