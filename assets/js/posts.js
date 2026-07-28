const postsData = [
  {
    slug: "bemvindoducksociety",
    title: "Bem vindo ao Duck Society",
    titleEn: "Welcome to Duck Society",
    date: "23 jun 2026",
    dateFilter: "2026-06-23",
    tag: "Intro",
    excerpt: "Duck Society é um site inspirado em blogs e portfólios que fui observando de outros desenvolvedores ao longo do tempo.",
    excerptEn: "Duck Society is a website inspired by blogs and portfolios I've come across from other developers over the years."
  },
  {
    slug: "duck-to-basics",
    title: "Duck To Basics — Uma série sobre fundamentos",
    titleEn: "Duck To Basics — A series on fundamentals",
    date: "26 jun 2026",
    dateFilter: "2026-06-26",
    tag: "Série",
    link: "duck-to-basics.html",
    excerpt: "Dos fundamentos da computação à construção de sistemas completos. Uma série pra quem quer aprender a lógica por trás do código.",
    excerptEn: "From computing fundamentals to building complete algorithms. A series for those who want to learn the logic behind code."
  },
  {
    slug: "o-que-e-um-algoritmo",
    title: "O que é um algoritmo (e por que você já usa sem saber)",
    titleEn: "What is an algorithm (and why you already use one without knowing)",
    date: "26 jun 2026",
    dateFilter: "2026-06-26",
    tag: "Duck To Basics",
    module: 1,
    excerpt: "Antes de escrever uma linha de código, você precisa entender o que é um algoritmo. Spoiler: você já usa um toda manhã.",
    excerptEn: "Before writing a single line of code, you need to understand what an algorithm is. Spoiler: you already use one every morning."
  },
  {
    slug: "variaveis-e-tipos-de-dados",
    title: "Variáveis e tipos de dados — a memória do computador",
    titleEn: "Variables and data types — the computer's memory",
    date: "26 jun 2026",
    dateFilter: "2026-06-26",
    tag: "Duck To Basics",
    module: 1,
    excerpt: "O que acontece dentro do computador quando você declara uma variável? Tipos primitivos vs referência, estática vs dinâmica.",
    excerptEn: "What happens inside the computer when you declare a variable? Primitive vs reference types, static vs dynamic typing."
  },
  {
    slug: "operadores-e-expressoes",
    title: "Operadores e expressões — a matemática do código",
    titleEn: "Operators and expressions — the math of code",
    date: "26 jun 2026",
    dateFilter: "2026-06-26",
    tag: "Duck To Basics",
    module: 1,
    excerpt: "Aritméticos, relacionais, lógicos — como o computador interpreta contas e comparações que você escreve.",
    excerptEn: "Arithmetic, relational, logical — how the computer interprets the math and comparisons you write."
  },
  {
    slug: "condicionais-if-else-switch",
    title: "Condicionais: if, else e switch — seu código tomando decisões",
    titleEn: "Conditionals: if, else and switch — your code making decisions",
    date: "26 jun 2026",
    dateFilter: "2026-06-26",
    tag: "Duck To Basics",
    module: 1,
    excerpt: "Nem tudo é linear. Às vezes seu código precisa decidir entre dois caminhos. É aí que entram if, else e switch.",
    excerptEn: "Not everything is linear. Sometimes your code needs to decide between two paths. That's where if, else and switch come in."
  },
  {
    slug: "loops-for-while-do-while",
    title: "Loops: for, while e do-while — a arte de repetir sem enlouquecer",
    titleEn: "Loops: for, while and do-while — the art of repeating without going crazy",
    date: "26 jun 2026",
    dateFilter: "2026-06-26",
    tag: "Duck To Basics",
    module: 1,
    excerpt: "Repetir a mesma operação várias vezes é uma das tarefas mais comuns da programação. Cada tipo de loop tem seu lugar.",
    excerptEn: "Repeating the same operation multiple times is one of the most common tasks in programming. Each loop type has its place."
  },
  {
    slug: "funcoes-organizar-codigo",
    title: "Funções — organizando o código para não surtar",
    titleEn: "Functions — organizing code so you don't lose your mind",
    date: "26 jun 2026",
    dateFilter: "2026-06-26",
    tag: "Duck To Basics",
    module: 1,
    excerpt: "Código bagunçado vira pesadelo rápido. Funções são o primeiro passo para organizar o caos.",
    excerptEn: "Messy code quickly becomes a nightmare. Functions are the first step to organizing the chaos."
  },
  {
    slug: "construindo-algoritmo-do-zero",
    title: "Juntando tudo: construindo um algoritmo do zero",
    titleEn: "Putting it all together: building an algorithm from scratch",
    date: "26 jun 2026",
    dateFilter: "2026-06-26",
    tag: "Duck To Basics",
    module: 1,
    excerpt: "Chegou a hora de usar tudo que vimos nos posts anteriores para construir algo concreto do início ao fim.",
    excerptEn: "Time to use everything we've seen in previous posts to build something concrete from start to finish."
  },
  {
    slug: "o-que-e-uma-estrutura-de-dados",
    title: "O que é uma estrutura de dados (e por que você já usa sem saber)",
    titleEn: "What is a data structure (and why you already use one without knowing)",
    date: "28 jul 2026",
    dateFilter: "2026-07-28",
    tag: "Duck To Basics",
    module: 2,
    excerpt: "Assim como algoritmos, você lida com estruturas de dados no dia a dia — listas, pilhas, filas e hash maps estão em tudo.",
    excerptEn: "Just like algorithms, you deal with data structures in everyday life — lists, stacks, queues and hash maps are everywhere."
  },
  {
    slug: "arrays",
    title: "Arrays: o começo de tudo",
    titleEn: "Arrays: where it all begins",
    date: "28 jul 2026",
    dateFilter: "2026-07-28",
    tag: "Duck To Basics",
    module: 2,
    excerpt: "A estrutura de dados mais fundamental: o que são, como declarar, percorrer e evitar erros de índice.",
    excerptEn: "The most fundamental data structure: what they are, how to declare, traverse and avoid index errors."
  },
  {
    slug: "strings",
    title: "Strings: mais do que texto",
    titleEn: "Strings: more than just text",
    date: "28 jul 2026",
    dateFilter: "2026-07-28",
    tag: "Duck To Basics",
    module: 2,
    excerpt: "Uma String é um array de caracteres com métodos poderosos. Imutabilidade, operações principais e StringBuilder.",
    excerptEn: "A String is an array of characters with powerful methods. Immutability, key operations and StringBuilder."
  },
  {
    slug: "linkedlist",
    title: "LinkedList: quando faz sentido usar (e quando não faz)",
    titleEn: "LinkedList: when it makes sense (and when it doesn't)",
    date: "28 jul 2026",
    dateFilter: "2026-07-28",
    tag: "Duck To Basics",
    module: 2,
    excerpt: "Diferente do array, a LinkedList não armazena tudo lado a lado na memória. Cada elemento aponta para o próximo — e isso muda tudo.",
    excerptEn: "Unlike an array, a LinkedList doesn't store everything side by side in memory. Each element points to the next — and that changes everything."
  },
  {
    slug: "stack-e-queue",
    title: "Stack e Queue: a base de muita coisa que você já usa",
    titleEn: "Stack and Queue: the foundation of many things you already use",
    date: "28 jul 2026",
    dateFilter: "2026-07-28",
    tag: "Duck To Basics",
    module: 2,
    excerpt: "Pilhas e filas são estruturas simples que aparecem em lugares que você nem imagina — do navegador ao sistema operacional.",
    excerptEn: "Stacks and queues are simple structures that show up in places you wouldn't imagine — from the browser to the operating system."
  },
  {
    slug: "hashmap",
    title: "HashMap por dentro: como funciona de verdade",
    titleEn: "HashMap under the hood: how it really works",
    date: "28 jul 2026",
    dateFilter: "2026-07-28",
    tag: "Duck To Basics",
    module: 2,
    excerpt: "A estrutura de dados mais usada do Java. Mas o que acontece quando você chama put() e get() por baixo dos panos?",
    excerptEn: "The most used data structure in Java. But what actually happens when you call put() and get() under the hood?"
  },
  {
    slug: "arvores",
    title: "Árvores: o que são e onde aparecem sem você perceber",
    titleEn: "Trees: what they are and where they show up without you noticing",
    date: "28 jul 2026",
    dateFilter: "2026-07-28",
    tag: "Duck To Basics",
    module: 2,
    excerpt: "Árvores estão em tudo: no sistema de arquivos, no DOM do navegador, em bancos de dados. Entenda a estrutura que organiza o mundo digital.",
    excerptEn: "Trees are everywhere: in the file system, in the browser DOM, in databases. Understand the structure that organizes the digital world."
  },
  {
    slug: "heap-e-filas-de-prioridade",
    title: "Heap e filas de prioridade: quando a ordem importa",
    titleEn: "Heap and priority queues: when order matters",
    date: "28 jul 2026",
    dateFilter: "2026-07-28",
    tag: "Duck To Basics",
    module: 2,
    excerpt: "Nem sempre o primeiro a chegar deve ser o primeiro a sair. Heaps resolvem problemas onde prioridade é mais importante que ordem de chegada.",
    excerptEn: "First in, first out doesn't always apply. Heaps solve problems where priority matters more than arrival order."
  },
  {
    slug: "big-o-na-pratica",
    title: "Big O na prática: como isso afeta seu código",
    titleEn: "Big O in practice: how it affects your code",
    date: "28 jul 2026",
    dateFilter: "2026-07-28",
    tag: "Duck To Basics",
    module: 2,
    excerpt: "Você já ouviu falar de O(n), O(log n) e O(n²), mas o que isso significa no dia a dia? Um guia prático de complexidade.",
    excerptEn: "You've heard of O(n), O(log n) and O(n²), but what do they mean in daily coding? A practical guide to complexity."
  }
]