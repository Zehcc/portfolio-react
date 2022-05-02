export const data = {
    header: {
        title: "Tomás Sánchez Medina",
        subtitle: "FullStack Developer Junior"
    },
    home: [
        {
            title: "Sobre mí",
            image: "/assets/foto.jpeg", 
            text: "Bastante inconformista y poco resultadista. Me gusta disfrutar de todo, es importante que las cosas funcionen, y es importante la meta, pero lo más importante de todo es disfrutar de lo que estás haciendo en todo momento, y no sólo centrarte en buscar un resultado final, sin disfrutar del recorrido.",
        }, 
        {
            title: "¿Qué puedo aportar?",
            image: "/assets/aportar.png",
            text: "Tengo una gran capacidad de absorber conocimiento, soy de aprendizaje rápido. También soy muy observador, me fijo mucho en los detalles de todo lo que me rodea y soy meticuloso con todo lo que hago, y en el mundo de la programación he podido descubrir que los pequeños detalles es casi lo más importante. Me gusta trabajar en equipo, y siempre intento aportar a cualquier problema que puedan tener mis compañeros, compartiendo como lo solucionaría yo, explicándolo paso a paso para que se entienda el desarrollo, y no sólo el resultado."
        },
        {
            title: "¿Qué estoy buscando?",
            image: "/assets/buscar.png",
            text: "Mi punto fuerte es el código. Más allá de lo visual (que por supuesto es imprescindible que esté perfecto en cualquier proyecto), me encanta la lógica y pelearme con el código tanto en la parte front como en back, arreglar problemas, jugar con los datos y las variables, y buscar la manera de desarrollar cualquiera de las tareas."
        }
    ],
    projects: [
        {
            name: "Pokeapi",
            languajes: "HTML, CSS, JS",
            image: "/assets/pokeapi.png",
            description: "Primer proyecto realizado con JS. Atacando a la API REST pública de pokemon, he realizado dos páginas. La primera (pokédex), donde hay distintas funcionalidades (obtención de pokemons, filtro de los mismos por tipo o por nombre). Y la segunda (laboratorio), una todo-list.",
            links: ["http://pokeapi-project.vercel.app/","https://github.com/Zehcc/Pokeapi-project-complete"]
        },
        {
            name: "Tienda de videojuegos",
            languajes: "HTML, CSS, JS, NodeJS",
            image: "/assets/tienda.png",
            description: "Proyecto simulando una tienda de videojuegos, creando una API REST propia y atacándola. Varias funcionalidades, buscador de juegos por categoría, por nombre, por plataforma, por consola... También con detalles de cada uno de los videojuegos o consolas de manera individual.",
            links: ["http://videogames-app-zeta.vercel.app/","https://github.com/Zehcc/videogames-app", "https://github.com/Zehcc/videogames-api"]
        },
        {
            name: "Curriculum",
            languajes: "HTML, CSS, JS, React",
            image: "/assets/cv.png",
            description: "Primera toma de contacto con react, familiarizándome con el useState y el manejo de datos.",
            links: ["http://cv-react-one.vercel.app/","https://github.com/Zehcc/CV-React-first-project"]
        },
        {
            name: "Clock",
            languajes: "HTML, CSS, JS, React",
            image: "/assets/clock.png",
            description: "Pequeño proyecto realizando un reloj, un cronómetro y una cuenta atrás con react, jugando con el useState y funciones nativas de JS.",
            links: ["https://my-clock-fxk0hnycy-zehcc.vercel.app/","https://github.com/Zehcc/My-clock"]
        },
        {
            name: "Pokédex",
            languajes: "HTML, CSS, JS, React",
            image: "/assets/pokedex.png",
            description: "Pequeño proyecto realizando una pokédex, donde puedes escribir el nombre de cualquier pokemon para que te devuelva información sobre él. Practicando peticiones, useState y useEffect",
            links: ["https://pokedex-react-navy.vercel.app/","https://github.com/Zehcc/pokedex-react"]
        },
        {
            name: "Rick & Morty",
            languajes: "HTML, CSS, JS, React",
            image: "/assets/rick.png",
            description: "Proyecto con react atacando la API pública de Rick & Morty para obtener datos. Compuesto por varias páginas. Una home que es la página de inicio, una página general de personajes con paginación mostrándolos de 20 en 20, un buscador donde puedes escribir el nombre de tu personaje favorito, y además puedes añadir a tu imagen de perfil la foto del personaje que más te guste. ¡Pruébalo!.",
            links: ["https://rick-and-morty-lhlr93i95-zehcc.vercel.app", "https://github.com/Zehcc/rick-and-morty-project-"]
        },
        {
            name: "Star Wars",
            languajes: "HTML, CSS, JS, React, NodeJS",
            image: "/assets/starwars.png",
            description: "Proyecto de react con autenticación (logeando/atacando una API REST propia), que depende de si estás logeado o no te muestra cosas diferentes. También tiene página de detalle de cada uno de sus personajes, y además puedes agregar a favoritos los que más te gusten. ¡Pruébalo! Uso de paginación, useState, useEffect, useContext...",
            links: ["https://star-wars-app-react.vercel.app/home","https://github.com/Zehcc/star-wars-app-react","https://github.com/Zehcc/videogames-api"]
        },
        {
            name: "Estudio Ghibli",
            languajes: "HTML, CSS, TS, Angular",
            image: "/assets/ghibli.png",
            description: "Primer contacto con Angular, proyecto atacando a una API REST pública sobre Ghibli, tratando los datos devueltos y fixeando las páginas de localizaciones y vehículos, que vienen sin imágenes. ¡Paginación con navbar y vista detalle de cada una de las películas!",
            links: ["https://ghibli-angular-project.vercel.app/home","https://github.com/Zehcc/ghibli-angular-project"]
        }
    ]
}