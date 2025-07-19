document.addEventListener('DOMContentLoaded', function() {
    // Datos de los libros (simulando la carga del CSV)
    const books = [
        {
          "id": 1,
          "title": "Los 7 hábitos de la gente altamente efectiva",
          "author": "Stephen R. Covey",
          "year": 2016,
          "category": 1,
          "type": "epub",
          "pages": 394,
          "file": "001 Los 7 habitos de la gente altamente efectiva.epub",
          "description": "Casi todo el mundo intuye que su comportamiento, tanto en el trabajo como en la vida privada, podría mejorar en muchos aspectos, pero pocos saben cómo conseguirlo. Stephen Covey, el llamado Sócrates americano, no da consejos paternalistas ni se dedica a sermonear sin ton ni son. Su método es claro, certero y eficiente: casi un cursillo dividido en siete etapas que el lector deberá asimilar y poner en práctica por su propia cuenta, adaptándola a su personalidad y aplicándolas libremente en todos los ámbitos de su vida cotidiana. Para ello, el autor se sirve de anécdotas penetrantes y significativas destinadas a hacernos reflexionar sobre cada uno de nuestros actos y sobre el modo de acceder al cambio a la verdadera paz mental. El resultado es la construcción de una autoconfianza a prueba de bomba a través del desarrollo del propio carácter, de la integridad, la honestidad y la dignidad humana necesarias para transformar nuestro universo laboral e intimo en algo auténtico, único e intransferible.",
          "image": "https://ww2.ebookelo.com/images/cover/4434.jpg"
        },
        {
          "id": 2,
          "title": "El monje que vendió su Ferrari",
          "author": "Robin Sharma",
          "year": 2001,
          "category": 1,
          "type": "epub",
          "pages": 151,
          "file": "002 El monje que vendio su Ferrari.epub",
          "description": "El monje que vendió su Ferrari es la sugerente y emotiva historia de Julian Mantle, un superabogado cuya vida estresante, desequilibrada y obsesionada con el dinero acaba provocándole un infarto. Ese desastre provoca en Julian una crisis espiritual que le lleva a enfrentarse a las grandes cuestiones de la vida. Esperando descubrir los secretos de la felicidad y el esclarecimiento, emprende un extraordinario viaje por el Himalaya para conocer una antiquísima cultura de hombres sabios. Y allí descubre un modo de vida más gozoso, así como un método que le permite liberar todo su potencial y vivir con pasión, determinación y paz.\n\nEscrito a modo de fábula, este libro contiene una serie de sencillas y eficaces lecciones para mejorar nuestra manera de vivir. Vigorosa fusión de la sabiduría espiritual de Oriente con los principios del éxito occidentales, muestra paso a paso cómo vivir con más coraje, alegría, equilibrio y satisfacción.",
          "image": "https://ww2.ebookelo.com/images/cover/16502.jpg"
        },
        {
          "id": 3,
          "title": "Hábitos atómicos",
          "author": "James Clear",
          "year": 2018,
          "category": 1,
          "type": "epub",
          "pages": 280,
          "file": "003 Habitos atomicos.epub",
          "description": "Hábitos atómicos parte de una simple pero poderosa pregunta: ¿Cómo podemos vivir mejor? Sabemos que unos buenos hábitos nos permiten mejorar significativamente nuestra vida, pero con frecuencia nos desviamos del camino: dejamos de hacer ejercicio, comemos mal, dormimos poco, despilfarramos. ¿Por qué es tan fácil caer en los malos hábitos y tan complicado seguir los buenos? \n\nJames Clear nos brinda fantásticas ideas basadas en investigaciones científicas, que le permiten revelarnos cómo podemos transformar pequeños hábitos cotidianos para cambiar nuestra vida y mejorarla. Esta guía pone al descubierto las fuerzas ocultas que moldean nuestro comportamiento —desde nuestra mentalidad, pasando por el ambiente y hasta la genética— y nos demuestra cómo aplicar cada cambio a nuestra vida y a nuestro trabajo. Después de leer este libro, tendrás un método sencillo para desarrollar un sistema eficaz que te conducirá al éxito. \n\nAprende cómo…1. Darte tiempo para desarrollar nuevos hábitos.2. Superar la falta de motivación y de fuerza de voluntad.3. Diseñar un ambiente para que el éxito sea fácil de alcanzar.4. Regresar al buen camino cuando te hayas desviado un poco.",
          "image": "https://ww2.ebookelo.com/images/cover/60775.jpg"
        },
        {
          "id": 4,
          "title": "Mindset, La actitud del éxito",
          "author": "Carol S. Dweck",
          "year": 2006,
          "category": 1,
          "type": "epub",
          "pages": 336,
          "file": "004 Mindset-la-actitud-del-exito.epub",
          "description": "La destacada psicóloga e investigadora norteamericana Carol S. Dweck ha descubierto que existen dos mentalidades básicas: la mentalidad fija y la de crecimiento. Solo la segunda conduce a un éxito verdadero en todos los órdenes de la vida. ¿Cuál de las dos es la tuya? ¿Tienes idea de cuánto influyen en tu vida cotidiana y en tu futuro las ideas que tienes acerca de ti mismo? ¿Sabes cómo cambiar de mentalidad y con ello transformar radicalmente tus posibilidades de realización personal? ¿Cómo podemos ayudar a nuestros hijos a desarrollar una mentalidad de crecimiento? Mindset responde a estas y muchas otras preguntas importantes. Es un libro que puede cambiar positivamente tu vida. Ya sea que lideres a personas, o bien que seas padre (lo cual es una forma de liderazgo) deja cualquier cosa que estés leyendo y toma este libro. Guy Kawasaki, autor de El arte de empezar Mindset es uno de los libros más influyentes de todos los tiempos acerca de la motivación. Po Bronson, autor de Educar hoy",
          "image": "https://image.cdn0.buscalibre.com/3548641.__RS360x360__.jpg"
        },
        {
          "id": 5,
          "title": "Grit, El poder de la pasión y la perseverancia",
          "author": "Angela Duckworth",
          "year": 2016,
          "category": 1,
          "type": "pdf",
          "pages": 384,
          "file": "005 Grit-el-poder-de-la-pasion-y-la-perseverancia.pdf",
          "description": "¿Cuál es el secreto del éxito? La clave del éxito no es el talento ni la suerte, como siempre hemos creído. La clave del éxito es una mezcla de pasión, perseverancia y coraje: «grit». \nLa obra de Angela Duckworth, profesora de psicología y pionera en su campo, ha revolucionado el panorama cultural y científico al demostrar, con estudios contrastados científicamente, que el éxito en la vida tiene poco que ver con la inteligencia y mucho con el autocontrol, la perseverancia y la capacidad de levantarse después de una caída. Triunfamos cuando nos dedicamos en cuerpo y alma a objetivos que nos hacen felices y nos apasionan. La buena noticia es que la determinación puede cultivarse. Padres, estudiantes, educadores, atletas y todos aquellos que quieran alcanzar la excelencia o ayudar a otros a alcanzarla encontrarán en esta obra la información, la ciencia, los ejemplos y el aliento que precisan. \n«Sin duda, el libro más transformador y revelador que he leído este año.» Sonja Lyubomirsky, profesora de la Universidad de California \n«Amena, atractiva y absolutamente convincente. Las ideas que contiene esta obra podrían transformar la educación, el liderazgo de empresas y la vida de los lectores. (…) Un tesoro nacional.» Lawreence H. Summers, presidente emérito de la Universidad de Harvard \n«Grit inspirará a todo aquel que lo lea a poner todo su empeño en aquello que le apasiona.» Sal Khan, fundador de Khan Academy",
          "image": "https://m.media-amazon.com/images/I/71qBlWoY9wL._SY466_.jpg"
        },
        {
          "id": 6,
          "title": "El poder del ahora",
          "author": "Eckhart Tolle",
          "year": 2001,
          "category": 1,
          "type": "epub",
          "pages": 162,
          "file": "006 El poder del ahora.epub",
          "description": "El poder del ahora es un libro para releer una y otra vez, y cada vez que lo haga usted logrará profundizar más y encontrar nuevos significados. Muchas personas querrán estudiarlo toda la vida, pues es una guía, un curso completo de meditación y realización. Es un libro con el poder de cambiar vidas de despertarnos para comprender plenamente quiénes somos. El mensaje de Tolle es el mismo que Cristo y Buda enseñaron: se puede alcanzar un estado de iluminación, de realización espiritual, aquí y ahora. Es posible liberarnos del sufrimiento, de la ansiedad y la neurosis de la vida diaria. Para lograrlo sólo tenemos que llegar a comprender que la causa de nuestros problemas no son los demás, ni «el mundo de allá afuera», sino nuestra propia mente, aparentemente incapaz de concentrarse en el ahora por estar siempre pensando en el pasado y preocupándose por el futuro. \n\nComo dice Marc Allen, el editor de la edición norteamericana, en el Prefacio, «sin estar alineado con ninguna religión, doctrina o gurú particular, la enseñanza de Tolle proviene del corazón. De la esencia de todas las demás tradiciones y no contradice a ninguna de ellas. (Tolle) es capaz de hacer lo que todos los grandes maestros han hecho: mostrarnos con un lenguaje simple y claro que el camino, la verdad y la luz están dentro de nosotros». Escrito en un formato de preguntas y respuestas que lo hace muy accesible, El poder del ahora es una invitación a la reflexión, que le abrirá las puertas a la plenitud espiritual y le permitirá ver la vida con nuevos ojos y empezar a disfrutar del verdadero poder del ahora.",
          "image": "https://ww2.ebookelo.com/images/cover/17989.jpg"
        },
        {
          "id": 7,
          "title": "Empieza con el porqué",
          "author": "Simon Sinek",
          "year": 2009,
          "category": 1,
          "type": "epub",
          "pages": 264,
          "file": "007 Empieza con el porqu�.epub",
          "description": "Para Sinek, lo importante no es tanto qué es lo que haces como el porqué lo haces. Lo esencial es saber por qué haces lo que haces, por qué existes. Aprender a formular las preguntas adecuadas te permitirá tener una empresa inspiradora, proyectos innovadores y gente comprometida para desarrollarlos. Sinek explica cómo crear el marco adecuado en una organización para conseguir esos propósitos.",
          "image": "https://m.media-amazon.com/images/I/41Jx8BioCdL._SY445_SX342_.jpg"
        },
        {
          "id": 8,
          "title": "Deep Work Enfócate",
          "author": "Cal Newport",
          "year": 2016,
          "category": 1,
          "type": "",
          "pages": 211,
          "file": "008 Enfocate.epub",
          "description": "Las distracciones no son malas en sí mismas. Lo negativo es que por ellas no logremos concentrarnos en una sola tarea a la vez y, por lo tanto, no culminemos ninguna con éxito o dentro del tiempo que tenemos previsto para ella. Este es un problema cada vez más frecuente en la actualidad que lleva, en muchas ocasiones, a sentimientos de frustración, ansiedad, cansancio y a altos niveles de improductividad en las organizaciones. Enfocarse en una sola actividad se ha convertido en una capacidad extraña en el mundo de hoy y, por lo tanto, según Cal Newport, en un activo cada vez más valioso en un entorno competitivo y lleno de trampas que roban nuestra atención. Trabajar a fondo permite dominar información en menos tiempo, resolver problemas de manera efectiva y obtener resultados sobresalientes, lo cual redunda en satisfacciones personales y un impacto laboral positivo. A partir de cuatro reglas prácticas, este libro demuestra el valor de desarrollar y aumentar los niveles de concentración en un mundo que incentiva la hiperconexión y la «multitarea».",
          "image": "https://ww2.ebookelo.com/images/cover/51311.jpg"
        },
        {
          "id": 9,
          "title": "El sutil arte de que ,casi todo, te importe una mierda",
          "author": "Mark Manson",
          "year": 2016,
          "category": 1,
          "type": "epub",
          "pages": 146,
          "file": "009 El sutil arte de que (casi todo) te importe una mierda.epub",
          "description": "Manson nos recuerda que los seres humanos somos falibles y limitados: «no todos podemos ser extraordinarios: hay ganadores y perdedores en la sociedad, y esto no siempre es justo o es tu culpa». Manson nos aconseja que reconozcamos nuestras limitaciones y las aceptemos. Esto es, según él, el verdadero origen del empoderamiento. Una vez que abrazamos nuestros temores, faltas e incertidumbres, una vez que dejamos de huir y evadir y empezamos a confrontar las verdades dolorosas, podemos comenzar a encontrar el valor, la perseverancia, la honestidad, la responsabilidad, la curiosidad y el perdón que buscamos. \n\nManson nos ofrece un momento de urgente sinceridad, ese cuando alguien te sujeta por los hombros y te mira a los ojos para tener una charla honesta, pero llena de historias entretenidas y de humor profano, despiadado. Este manifiesto es una refrescante bofetada en nuestra cara, para que podamos empezar a llevar vidas más satisfechas y con los pies en la tierra.",
          "image": "https://ww2.ebookelo.com/images/cover/52837.jpg"
        },
        {
          "id": 10,
          "title": "La semana laboral de 4 horas",
          "author": "Timothy Ferriss",
          "year": 2007,
          "category": 1,
          "type": "epub",
          "pages": 478,
          "file": "010 La semana laboral de 4 horas.epub",
          "description": "Olvídate del trasnochado concepto de jubilación y deja de aplazar tu vida: no hace falta esperar, existen demasiadas razones para no hacerlo. Si tu sueño es dejar de depender de un sueldo, viajar por el mundo a todo tren, ingresar más de 10.000 euros al mes o, simplemente, vivir más y trabajar menos, este libro es la brújula que necesitas.",
          "image": "https://m.media-amazon.com/images/I/71kA+YdjzwL._SL1500_.jpg"
        },
        {
          "id": 11,
          "title": "Wild, Viaje salvaje",
          "author": "Cheryl Strayed",
          "year": 2012,
          "category": 2,
          "type": "epub",
          "pages": 342,
          "file": "011 Wild Viaje Salvaje.epub",
          "description": "«Era un mundo en el que nunca había estado y que, sin embargo, como bien sabía, siempre había existido; un mundo en el que había entrado a trompicones, afligida, confusa, temerosa y esperanzada. Un mundo que, según pensé, me convertiría en la mujer que yo sabía que podía llegar a ser y, a la vez, me permitiría volver a ser la niña que había sido en otro tiempo. Un mundo cuyas dimensiones eran medio metro de ancho y 4.285 kilómetros de largo». \n\nCon veintidós años, Cheryl Strayed creía que lo había perdido todo tras tomar la decisión de separarse y acercarse demasiado al mundo de las drogas. Su familia se había dispersado tras la muerte de su madre cuatro años antes y ella se había quedado sin pilares sobre los que construir su vida. Así que toma la decisión más impulsiva que hubiera tomado jamás: recorrer el Sendero del Macizo del Pacífico, una ruta que bordea toda la Costa Oeste de los Estados Unidos, desde el desierto de Mojave en California y Oregón al estado de Washington. Y decide hacerlo completamente sola. Sin ninguna experiencia en senderismo, y ni tan solo habiendo pasado jamás una noche al aire libre, para ella se trataba de «una idea, vaga, extravagante y prometedora». Pero esa promesa se convirtió en la necesidad de volver a juntar las piezas del rompecabezas en que se había convertido su existencia. Narrada con suspense, estilo, sentido del humor y ternura, en Salvaje Strayed consigue describir un viaje que dio forma a su vida contra toda expectativa, un viaje que la volvió loca, que la fortaleció y que acabó por sanarla.",
          "image": "https://ww2.ebookelo.com/images/cover/20886.jpg"
        },
        {
          "id": 12,
          "title": "Into the Wild, Hacia rutas salvajes",
          "author": "Jon Krakauer",
          "year": 2007,
          "category": 2,
          "type": "epub",
          "pages": 235,
          "file": "012 Hacia rutas salvajes.epub",
          "description": "En abril de 1992, Chris Mc \nCandless, de 24 años, se internó solo y apenas equipado por tierras de Alaska. Había regalado todo su dinero y abandonado su coche, y soñaba con una vida en estado salvaje. Cuatro meses más tarde, unos cazadores encontraron su cuerpo sin vida. Su historia, difundida en un reportaje de Jon Krakauer, suscitó una agitada polémica. Para unos, era un intrépido idealista; para otros, un loco y un ingenuo sin el menor conocimiento de la naturaleza. Pero, ¿por qué un joven recién graduado decidió cortar todos los lazos con su familia y perderse en una región inhóspita? Antes de desaparecer, Chris Mc \nCandless escribió a un amigo: «No eches raíces, no te establezcas. Cambia a menudo de lugar, lleva una vida nómada… No necesitas tener a alguien contigo para traer una nueva luz a tu vida. Está ahí fuera, sencillamente.»Jon Krakauer, alpinista y colaborador de la revista Outside, escribió en 1993 un reportaje sobre la desaparición del joven Chris Mc \nCandless que impresionó a miles de lectores. Krakauer fue finalista del Nacional Magazine Award por su reportaje sobre Mc \nCandless y posee el Alpine Club Literary Award. Entre otros títulos es autor del libro Mal de altura: crónica de una tragedia en el Everest.",
          "image": "https://ww2.ebookelo.com/images/cover/1715.jpg"
        },
        {
          "id": 13,
          "title": "El alquimista",
          "author": "Paulo Coelho",
          "year": 2005,
          "category": 2,
          "type": "epub",
          "pages": 89,
          "file": "013 El alquimista.epub",
          "description": "Éste libro relata la historia de un joven pastor andaluz que un día dejó su rebaño de ovejas para emprender un viaje en el que aprendió a escuchar a su corazón y descifrar un lenguaje que está más allá de las palabras. \n\nNos recuerda la incapacidad que las personas tienen para escoger su propio destino. Nos habla de la leyenda personal que cada persona tiene. Vivir la leyenda personal es la razón de vivir. Y cuando quieres algo, todo el Universo conspira para que realices tu deseo, tu sueño. \n\nEl joven pastor viaja en busca de su tesoro escondido siguiendo las señales. Dios escribió en el mundo el camino que cada hombre debe seguir. Sólo hay que leer lo que Él escribió para cada uno de nosotros. \n\nEl Alquimista es comparado con otros libros conocidos como El Principito o Juan Salvador Gaviota. Con este viaje por las arenas del desierto, Paulo Coelho crea un símbolo hermoso y revelador de la vida, el hombre y sus sueños.",
          "image": "https://ww2.ebookelo.com/images/cover/5368.jpg"
        },
        {
          "id": 14,
          "title": "Shoe Dog, El fundador de Nike",
          "author": "Phil Knight",
          "year": 2016,
          "category": 2,
          "type": "pdf",
          "pages": 372,
          "file": "014 Nunca-te-pares_-Autobiografia-del-fundador-de-Nike.pdf",
          "description": "Phil Knight habla por primera vez de la auténtica historia detrás de Nike, la empresa que fundó en 1962, que hoy factura más de 30 000 millones de dólares al año, y cuyo logo ha llegado a ser un símbolo global, el icono más ubicuo y reconocido en todo el mundo.",
          "image": "https://m.media-amazon.com/images/I/71eIlDc1uAL._SL1500_.jpg"
        },
        {
          "id": 15,
          "title": "No me puedes lastimar",
          "author": "David Goggins",
          "year": 2018,
          "category": 2,
          "type": "epub",
          "pages": 294,
          "file": "015 No me puedes lastimar.epub",
          "description": "Para David Goggins, la infancia fue una pesadilla. La pobreza, los prejuicios y los malos tratos físicos colorearon sus días y atormentaron sus noches. Pero gracias a su autodisciplina, su fortaleza mental y trabajo duro, Goggins pasó de ser un joven con sobrepeso, deprimido y sin futuro, a convertirse en un icono de las Fuerzas Armadas estadounidenses y en uno de los mejores atletas de resistencia del mundo. Es el único hombre de la historia que ha completado un entrenamiento de élite como SEAL de la Marina, Ranger del Ejército y Controlador Aéreo Táctico de las Fuerzas Aéreas, y llegó a batir récords en numerosas pruebas de resistencia, lo que inspiró a la revista Outside a nombrarlo «El Hombre en Mejor Forma de Estados Unidos». \n\nEn No me puedes lastimar, comparte la asombrosa historia de su vida y revela que la mayoría de nosotros aprovechamos sólo el 40% de nuestras capacidades. Goggins llama a esto La Regla del 40%, y su historia ilumina un camino que cualquiera puede seguir para superar el dolor, vencer al miedo y alcanzar su máximo potencial.",
          "image": "https://ww2.ebookelo.com/images/cover/67394.jpg"
        },
        {
          "id": 16,
          "title": "Born to Run, Nacidos para correr",
          "author": "Christopher McDougall",
          "year": 2009,
          "category": 2,
          "type": "epub",
          "pages": 330,
          "file": "016 Nacidos para correr.epub",
          "description": "En busca de una respuesta, Christopher Mac \nDougall se encuentra con la tribu de los mejores corredores de larga distancia del mundo. Aislados por el terreno más abrupto de América del Norte, los misteriosos tarahumaras de las barrancas del cobre en México son los guardianes de un arte perdido. Durante siglos han seguido técnicas que les permiten correr cientos de kilómetros sin descanso y perseguir desde un ciervo hasta un maratoniano olímpico y disfrutar de ello. Con ingenio y sabiduría, Mac \nDougall va de los laboratorios más avanzados de Harvard a los valles soleados y los picos nevados donde cada vez más corredores empujan hasta el límite sus cuerpos. El secreto de la felicidad está a tus pies.",
          "image": "https://ww2.ebookelo.com/images/cover/2785.jpg"
        },
        {
          "id": 17,
          "title": "El hombre en busca de sentido",
          "author": "Viktor Frankl",
          "year": 2023,
          "category": 2,
          "type": "epub",
          "pages": 112,
          "file": "017 El hombre en busca de sentido.epub",
          "description": "En esta obra, Viktor Frankl explica la experiencia que le llevó al descubrimiento de la logoterapia. Prisionero durante mucho tiempo en los campos de concentración, él mismo sintió en su propio ser lo que significaba una existencia desnuda. ¿Cómo pudo él -que todo lo había perdido, que había visto destruir todo lo que valía la pena, que padeció hambre, frío, brutalidades sin fin, que tantas veces estuvo a punto del exterminio-, cómo pudo aceptar que la vida fuera digna de ser vivida? Las palabras del doctor Frankl alcanzan un temple sorprendentemente esperanzador sobre la capacidad humana de trascender sus dificultades y descubrir la verdad conveniente y orientadora.",
          "image": "https://ww2.ebookelo.com/images/cover/6272.jpg"
        },
        {
          "id": 18,
          "title": "El curioso incidente del perro a medianoche",
          "author": "Mark Haddon",
          "year": 2003,
          "category": 2,
          "type": "epub",
          "pages": 186,
          "file": "018 El curioso incidente del perro a medianoche.epub",
          "description": "A sus quince años, Christopher Boone, conoce las capitales de todos los países del mundo, puede explicar la teoría de la relatividad y recitar los números primos hasta el 7507 pero le cuesta relacionarse con otros seres humanos. Le gustan las listas, los esquemas y la verdad, pero odia el amarillo, el marrón y el contacto físico. \n\nSi bien nunca ha ido solo más allá de la tienda de la esquina, la noche que el perro de la vecina aparece atravesado por un horcón, Christopher decide iniciar la búsqueda del culpable. \n\nEmulando a su admirado Sherlock Holmes —el modelo de detective obsesionado con el análisis de los hechos—, sus pesquisas lo llevarán a cuestionar el sentido común de los adultos que lo rodean y a desvelar algunos secretos familiares que pondrán patas arriba su ordenado y seguro mundo.",
          "image": "https://ww2.ebookelo.com/images/cover/5910.jpg"
        },
        {
          "id": 19,
          "title": "El marciano",
          "author": "Andy Weir",
          "year": 2012,
          "category": 3,
          "type": "epub",
          "pages": 247,
          "file": "019 El marciano.epub",
          "description": "Seis días atrás el astronauta Mark Watney se convirtió en uno de los primeros hombres en caminar por la superficie de Marte. Ahora está seguro de que será el primer hombre en morir allí. La tripulación de la nave en que viajaba se ve obligada a evacuar el planeta a causa de una tormenta de polvo, dejando atrás a Mark tras darlo por muerto. Pero él está vivo, y atrapado a millones de kilómetros de cualquier ser humano, sin posibilidad de enviar señales a la Tierra. De todos modos, si lograra establecer conexión, moriría mucho antes de que el rescate llegara. \n\nSin embargo, Mark no se da por vencido; armado con su ingenio, sus habilidades y sus conocimientos sobre botánica, se enfrentará a obstáculos aparentemente insuperables. \n\nPor suerte, el sentido del humor resultará ser su mayor fuente de fuerza. Obstinado en seguir con vida, incubará un plan absolutamente demencial para ponerse en contacto con la NASA. \n\nCon un final sorprendente, El marciano es una novela brillantemente construida, un delirio ingenioso, con una mecánica del suspense que sorprenderá al lector una y otra vez y le hará perderse en el cosmos de la naturaleza humana y la lucha por la supervivencia. \n\nUna experiencia literaria excepcional en gravedad cero.",
          "image": "https://ww2.ebookelo.com/images/cover/18535.jpg"
        },
        {
          "id": 20,
          "title": "Fahrenheit 451",
          "author": "Ray Bradburyó",
          "year": 2023,
          "category": 3,
          "type": "epub",
          "pages": 129,
          "file": "020 Fahrenheit 451.epub",
          "description": "Fahrenheit 451: la temperatura a la que el papel se enciende y arde. Guy Montag es un bombero y el trabajo de un bombero es quemar libros, que están prohibidos porque son causa de discordia y sufrimiento. El Sabueso Mecánico del Departamento de Incendios, armado con una letal inyección hipodérmica, escoltado por helicópteros, está preparado para rastrear a los disidentes que aún conservan y leen libros. Como 1984, de George Orwell, como Un mundo feliz, de Aldous Huxley, Fahrenheit 451 describe una civilización occidental esclavizada por los medios, los tranquilizantes y el conformismo. La visión de Bradbury es asombrosamente profética: pantallas de televisión que ocupan paredes y exhiben folletines interactivos; avenidas donde los coches corren a 150 kilómetros por hora persiguiendo a peatones; una población que no escucha otra cosa que una insípida corriente de música y noticias transmitidas por unos diminutos auriculares insertados en las orejas.",
          "image": "https://ww2.ebookelo.com/images/cover/2600.jpg"
        },
        {
          "id": 21,
          "title": "El arte de no amargarse la vida",
          "author": "Rafael Santandreu",
          "year": 2011,
          "category": 3,
          "type": "epub",
          "pages": 201,
          "file": "021 El arte de no amargarse la vida.epub",
          "description": "La vida es para disfrutarla: amar, aprender, descubrir… Y eso sólo lo podremos hacer cuando hayamos superado nuestros miedos y descubramos El arte de no amargarse la vida. \n\nEn la línea de los grandes libros de psicología para el gran público, Rafael Santandreu expone en esta obra un método práctico, claro y científicamente demostrado para caminar hacia el cambio psicológico. Nuestro destino es convertirnos en personas más fuertes y felices. \n\nCon anécdotas extraídas tanto de su consulta como de su historia personal, el autor nos muestra cómo transformar nuestra forma de pensar y actuar. De deprimidos, ansiosos o «cascarrabias» podemos convertirnos en hombres y mujeres serenos, alegres y optimistas, con la ayuda de un terapeuta o ¡por nosotros mismos! \n\nEl arte de no amargarse la vida nos ofrece las últimas herramientas de la más poderosa psicología cognitiva, la escuela terapéutica más importante del mundo, con miles de estudios que avalan su eficacia.",
          "image": "https://ww2.ebookelo.com/images/cover/6012.jpg"
        },
        {
          "id": 22,
          "title": "Ubuntu",
          "author": "Mungi Ngomane",
          "year": 2019,
          "category": 3,
          "type": "epub",
          "pages": 192,
          "file": "022 Ubuntu.epub",
          "description": "El Ubuntu, palabra proveniente de la lengua Xhosa, es la actitud sudafricana ante la vida. Se basa en la creencia de un vínculo humano universal y en la importancia del respeto y la atención hacia los demás porque todos estamos conectados: «Existo porque tú existes». \n\nEste libro inspirador y positivo contiene 14 lecciones y ejercicios sencillos para vivir mejor juntos y redescubrir valores como la bondad, el perdón, la tolerancia, el poder de la escucha y la esperanza. \n\nCon un tono cercano, la autora comparte su sabiduría y nos ayuda a construir puentes en lugar de muros, a saber cuál es nuestro lugar en el mundo, a vivir una vida de conexión y a mejorar cada día nuestras relaciones con amigos, compañeros y familiares.",
          "image": "https://ww2.ebookelo.com/images/cover/68128.jpg"
        },
        {
          "id": 23,
          "title": "El milagro de mindfulness",
          "author": "Thich Nhat Hanh",
          "year": 2008,
          "category": 3,
          "type": "pdf",
          "pages": 100,
          "file": "023 El milagro de mindfulness.pdf",
          "description": "El milagro de mindfulness era al principio una larga carta. El monje budista Thich Nhat Hanh fundó, en la década de 1960, la Escuela de la Juventud para el Servicio Social —establecida en el sur del Vietnam en 1974— como un resultado del «budismo comprometido». Dicha escuela atrajo a jóvenes comprometidos que ayudaban a reconstruir los pueblos bombardeados, enseñaban a los niños, establecían centros de atención médica y organizaban cooperativas agrícolas. Sin embargo, estos métodos de reconciliación fueron malinterpretados, por lo que Thich Nhat Hanh escribió esta carta desde su exilio en Francia para recordarles la disciplina esencial consistente en seguir la respiración para sustentar y mantener un estado consciente y sereno, incluso en medio de las circunstancias más difíciles. En esta bella y lúcida obra, el maestro zen Thich Nhat Hanh nos ofrece unas emotivas anécdotas y unos ejercicios prácticos para aprender el arte de mindfulness, que nos invita a estar despiertos y plenamente atentos. Nos recuerda que cada momento —al lavar los platos, al ponernos al teléfono o al pelar una naranja— nos ofrece una oportunidad para conocernos con más profundidad y gozar de una mayor paz interior",
          "image": "https://m.media-amazon.com/images/I/81JtxXlJ5PL._SL1500_.jpg"
        },
        {
          "id": 24,
          "title": "Confía en mí, estoy mintiendo",
          "author": "Ryan Holiday",
          "year": 2014,
          "category": 3,
          "type": "epub",
          "pages": 254,
          "file": "024 Confia en mi, estoy mintiendo.epub",
          "description": "—Hoy en día: un rumor malicioso por Internet puede costarle millones a una empresa. \n\n—Un producto o una persona se convierten en celebridades de la nada. \n\n—Un político puede ver truncada su carrera por algo nimio que hizo en algún momento. \n\nEstas cosas suceden todos los días, lo que muchos no saben es quienes son los que hacen que esto suceda. Normalmente es alguien como el autor: «Soy un manipulador de los medios en un mundo en el que los blogs controlan y distorsionan las noticias. Mi trabajo es controlar los blogs, al menos tanto como una persona pueda». Esa es la premisa de Ryan Holiday. \n\nEn nuestra cultura actual:1) Algunos grandes blogs manejan la agenda de los medios.2) Los blogueros son esclavos del dinero, la tecnología y las fechas límites.3) los manipuladores aprovechan estas necesidades para modificar todo lo que lee , escuchas y ves, on y offline.",
          "image": "https://ww2.ebookelo.com/images/cover/55239.jpg"
        },
        {
          "id": 25,
          "title": "Recupera tu mente, reconquista tu vida",
          "author": "Marian Rojas Estapé",
          "year": 2024,
          "category": "3",
          "type": "epub",
          "pages": 281,
          "file": "025 Recupera tu mente, reconquista tu vida.epub",
          "description": "Vivimos en la era de la gratificación instantánea, en la cultura de la inmediatez y las recompensas y buscamos la felicidad a golpe de clic. Llevamos una vida agitada e intensa, y con el modo fast activado. Sin darnos cuenta nos hemos convertido en drogodependientes emocionales inundados de múltiples distracciones. Todo esto tiene un impacto en nuestra capacidad de prestar atención a lo importante, de profundizar y de concentrarnos. \n\nLa buena noticia es que podemos rescatar la atención perdida, volver a reconectar con nosotros mismos y con todo lo maravilloso que nos rodea para encontrar ese equilibrio emocional que tanto ansiamos. \n\nEn este libro, la doctora Marian Rojas Estapé, con su estilo divulgativo y científico, ahonda en estas y en otras cuestiones. Te presenta a la dopamina, la hormona del placer, y cómo afecta en la búsqueda de las recompensas inmediatas que están a la orden del día, en la percepción del dolor, del aburrimiento y del malestar. \n\nRecupera tu mente, reconquista tu vida te ayuda a pensar qué conductas muestras cuando te ves envuelto en emociones que no sabes gestionar y te proporciona herramientas para que te comprendas mejor, y así recuperar el control de tu vida.",
          "image": "https://ww2.ebookelo.com/images/cover/75832.jpg"
        },
        {
          "id": 26,
          "title": "Padre rico, padre pobre",
          "author": "Robert Kiyosaki",
          "year": 2000,
          "category": 4,
          "type": "epub",
          "pages": 164,
          "file": "026 Padre rico, padre pobre (nueva edicion actualizada).epub",
          "description": "Basado en el principio de que los bienes que generan ingreso siempre dan mejores resultados que los trabajos tradicionales, Robert Kiyosaki explica cómo pueden adquirirse dichos bienes para, eventualmente, olvidarse de trabajar. \n\nCon un estilo claro y ameno, este libro te pondrá en el camino directo al éxito financiero y así lograrás que el dinero trabaje para ti. \n\nPadre rico, padre pobre es el bestseller que revolucionó la forma de entender las finanzas personales. El autor y conferenciante Robert Kiyosaki desarrolló una perspectiva económica única a partir de la exposición que tuvo a dos influencias: su propio padre, altamente educado pero muy inestable y el padre multimillonario, sin educación universitaria, de su mejor amigo. \n\nLos problemas monetarios que su padre pobre experimentó toda la vida (con cheques mensuales muy respetables pero nunca suficientes) rompían con lo que le comunicaba su padre rico: que la clase pobre y la clase media trabajan por dinero pero la clase alta, hace que el dinero trabaje para ellos. Kiyosaki presenta la filosofía detrás de esta relación excepcional con el dinero. Este libro aboga de manera convincente por el tipo de conocimiento financiero que nunca se enseña en las escuelas.",
          "image": "https://ww2.ebookelo.com/images/cover/44764.jpg"
        },
        {
          "id": 27,
          "title": "El libro negro del emprendedor",
          "author": "Fernando Trías de Bes",
          "year": 2007,
          "category": 4,
          "type": "epub",
          "pages": 108,
          "file": "027 El libro negro del emprendedor.epub",
          "description": "Ser emprendedor constituye una postura vital, una forma de enfrentarse al mundo que implica disfrutar con la incertidumbre y la inseguridad de qué sucederá mañana. No existen ideas brillantes que, por sí solas, den lugar a negocios redondos: lo esencial es cómo un concepto se pone en práctica. Sin embargo el 90% de las iniciativas fracasan antes de cuatro años y sólo el 3% de los manuales de empresa se dedican a explicar por qué. De ahí la relevancia de este libro. Fernando Trías de Bes, coautor de La buena suerte, analiza los factores clave del fracaso y define los rasgos que debe reunir un verdadero emprendedor: motivación y talento para ver algo especial en una idea que puede que otros ya conozcan. Pero, por encima de todo, es necesario disponer de un espíritu luchador: no fracasan las ideas, sino son las ilusiones las que se dejan vencer por falta de cintura, imaginación y flexibilidad para afrontar imprevistos.",
          "image": "https://ww2.ebookelo.com/images/cover/10342.jpg"
        },
        {
          "id": 28,
          "title": "Los multimillonarios del bitcoin",
          "author": "Ben Mezrich",
          "year": 2019,
          "category": 4,
          "type": "epub",
          "pages": 285,
          "file": "028 Los multimillonarios del bitcoin.epub",
          "description": "Los hermanos Tyler y Cameron Winklevoss son gemelos, estudiantes de Harvard, remeros olímpicos, perfectos representantes del establishment estadounidense y archienemigos de Mark Zuckerberg, quien consideran que les robó la idea de Facebook y a quien se enfrentaron en una épica batalla legal de la que salieron vencedores. \n\nTras el juicio pensaron dedicarse al capital riesgo, ﬁnanciando y ayudando a crecer a startups, pero nadie quiso su dinero después del enfrentamiento con el creador de Facebook. Mientras pensaban en qué iban a invertir la indemnización que les había tenido que pagar Zuckerberg, viajaron a Ibiza, donde se toparon por accidente con un personaje excéntrico que les habló de las criptomonedas. Como cuenta magistralmente este libro con una narración endiablada y cargada de suspense, los Winklevoss pensaron que aquello podía ser o bien la siguiente maravilla tecnológica o bien un engaño colosal. Para solventar esa duda sólo había una opción: hacer una apuesta. \n\nBen Mezrich describe el apasionante mundo de las startups y el ambiente en ocasiones siniestro de las criptomonedas, y disecciona las venganzas, redenciones y el triunfo de estos dos personajes singulares, iluminando uno de los rincones más atractivos del nuevo mundo tecnológico y económico.",
          "image": "https://ww2.ebookelo.com/images/cover/57698.jpg"
        },
        {
          "id": 29,
          "title": "Diario Emprendedor",
          "author": "Joshua A. Aguilar",
          "year": 2014,
          "category": 4,
          "type": "epub",
          "pages": 156,
          "file": "029 Diario Emprendedor.epub",
          "description": "«Los emprendedores abren nuevos caminos, empiezan donde están, son autodidactas, asumen riesgos; mientras los demás retroceden, ellos avanzan, el miedo no los detiene, sino que los motiva a seguir adelante. Sus vidas están controladas por la ilusión de dejar una huella y hacer de este mundo un lugar mejor, ellos hacen lo que los demás desearían hacer pero no se atreven». Este libro trata acerca de cómo emprender tus más grandes sueños, acerca de los emprendedores y lo que los hace diferentes, y está dirigido tanto a quienes ya han iniciado el camino como a los que les gustaría llegar a hacerlo. Contiene treinta valiosos capítulos, uno para cada día durante un mes, con historias impresionantes, situaciones humorísticas, ejemplos de la vida real y preguntas para reflexionar que te mantendrán enganchado a la lectura. \n\nSe titula Diario emprendedor porque tendrás la oportunidad de escribir todas tus ideas y planes de acción gracias al apartado «Diario personal» que encontrarás al final de cada capítulo. Mediante la reflexión sobre cada tema sentarás las bases de tus proyectos y descubrirás un camino propio hacia tus metas. De manera que este diario no trata sobre el autor, trata sobre ti, es tu diario. Solo en ocasiones especiales se presentan libros que de pronto cambian tu vida radicalmente; ahora mismo tienes uno en tus manos. Diario emprendedor es el punto de partida para aquellos que quieren alcanzar sus sueños y metas más grandes. ¿A qué esperas para empezar a conquistar tu éxito? \n\n«Cada uno de nosotros tiene control sobre una sola cosa: nosotros mismos. Todos aquellos que tengan un sueño deberían leer este libro». \n\nRobert T. Kiyosaki, autor del best seller Padre Rico, Padre Pobre.",
          "image": "https://ww2.ebookelo.com/images/cover/13189.jpg"
        },
        {
          "id": 30,
          "title": "Piensa como un freak",
          "author": "Steven D. Levitt, Stephen J. Dubner",
          "year": 2014,
          "category": 4,
          "type": "epub",
          "pages": 193,
          "file": "030 Piensa como un freak.epub",
          "description": "Con Piensa como un freak, Steven D. Levitt y Stephen J. Dubner han escrito su libro más revolucionario hasta la fecha. Con el sello inconfundible de narración cautivadora y análisis no convencional, nos llevan al interior de su proceso reflexivo y nos enseñan a pensar de manera un poco más productiva, más creativa, más racional, es decir, a pensar como un freak. Como en sus libros anteriores, ningún tema está vedado, de los negocios a la filantropía, pasando por los deportes o la política, todo con el objetivo de reciclar tu cerebro. Algunos de los pasos para pensar como un freak: —Deja de lado tu brújula moral, porque es difícil ver un problema con claridad si ya has decidido qué hacer con él. —Piensa como un niño, porque se te ocurrirán mejores ideas y plantearás mejores preguntas. —Toma una clase magistral en incentivos, porque, para bien o para mal, los incentivos gobiernan el mundo. —Aprende a convencer a gente que no quiere ser convencida, porque ser bueno no basta para que uno se salga con la suya. —Aprende a apreciar las ventajas de abandonar, porque no puedes resolver el problema de mañana si no estás dispuesto a reconocer el fracaso de la calamidad de hoy. Está claro que Levitt y Dubner ven el mundo como nadie. Nunca antes unos pensadores tan iconoclastas han sido tan reveladores y tan divertidos de leer.",
          "image": "https://ww2.ebookelo.com/images/cover/33197.jpg"
        },
        {
          "id": 31,
          "title": "Rebelión en la granja",
          "author": "George Orwell",
          "year": 1945,
          "category": "10",
          "type": "epub",
          "pages": 118,
          "file": "031 Rebelion en la granja.epub",
          "description": "Una condena de la sociedad totalitaria, brillantemente plasmada en una ingeniosa fábula de carácter alegórico. Los animales de la granja de los Jones se sublevan contra sus dueños humanos y les vencen. Pero la rebelión fracasará al surgir entre ellos rivalidades y envidias, y al aliarse algunos con los amos que derrocaron, traicionando su propia identidad y los intereses de su clase. Aunque Rebelión en la granja fue concebida como una despiadada sátira del estalinismo, el carácter universal de su mensaje hace de este libro un extraordinario análisis de la corrupción que engendra el poder, una furibunda diatriba contra el totalitarismo de cualquier especie y un lúcido examen de las manipulaciones que sufre la verdad histórica en los momentos de transformación política.",
          "image": "https://ww2.ebookelo.com/images/cover/75120.jpg"
        },
        {
          "id": 32,
          "title": "Marina",
          "author": "Carlos Ruiz Zafón",
          "year": 2020,
          "category": "8",
          "type": "epub",
          "pages": 201,
          "file": "032 Marina.epub",
          "description": "En la Barcelona de 1980 Óscar Drai sueña despierto, deslumbrado por los palacetes modernistas cercanos al internado en el que estudia. En una de sus escapadas conoce a Marina, una chica delicada de salud que comparte con Óscar la aventura de adentrarse en un enigma doloroso del pasado de la ciudad. Un misterioso personaje de la posguerra se propuso el mayor desafío imaginable, pero su ambición lo arrastró por sendas siniestras cuyas consecuencias debe pagar alguien todavía hoy.",
          "image": "https://ww2.ebookelo.com/images/cover/1277.jpg"
        },
        {
          "id": 33,
          "title": "La Biblioteca de la Medianoche",
          "author": "Matt Haig",
          "year": 2020,
          "category": "6",
          "type": "epub",
          "pages": 282,
          "file": "033 La Biblioteca de la Medianoche.epub",
          "description": "PREMIO GOODREADS 2020 A LA MEJOR OBRA DE FICCIÓN\n«Entre la vida y la muerte hay una biblioteca. Y los estantes de esa biblioteca son infinitos. Cada libro da la oportunidad de probar otra vida que podrías haber vivido y de comprobar cómo habrían cambiado las cosas si hubieras tomado otras decisiones... ¿Habrías hecho algo de manera diferente si hubieras tenido la oportunidad?».\n\nNora Seed aparece, sin saber cómo, en la Biblioteca de la Medianoche, donde se le ofrece una nueva oportunidad para hacer las cosas bien. Hasta ese momento, su vida ha estado marcada por la infelicidad y el arrepentimiento.\n\nNora siente que ha defraudado a todos, y también a ella misma. Pero esto está a punto de cambiar.\n\nLos libros de la Biblioteca de la Medianoche permitirán a Nora vivir como si hubiera hecho las cosas de otra manera. Con la ayuda de una vieja amiga, tendrá la opción de esquivar todo aquello que se arrepiente de haber hecho (o no haber hecho), en pos de la vida perfecta. Pero las cosas no siempre serán como imaginó que serían, y pronto sus decisiones enfrentarán a la Biblioteca y a ella misma en un peligro extremo. Nora deberá responder una última pregunta antes de que el tiempo se agote: ¿cuál es la mejor manera de vivir?",
          "image": "https://ww2.ebookelo.com/images/cover/59853.jpg"
        },
        {
          "id": 34,
          "title": "Hombres sin mujeres",
          "author": "Haruki Murakami",
          "year": 2014,
          "category": "5",
          "type": "epub",
          "pages": 169,
          "file": "034 Hombres sin mujeres.epub",
          "description": "En su obra más reciente, Haruki Murakami ofrece a los lectores siete relatos en torno al aislamiento y la soledad que preceden o siguen a la relación amorosa: hombres que han perdido a una mujer, o cuya relación ha estado marcada por el desencuentro, asisten inermes al regreso de los fantasmas del pasado, viven el enamoramiento como una enfermedad letal, son incapaces de establecer una comunicación plena con la pareja, o ven extrañamente interrumpida su historia de amor. Otros experimentan atormentados amores no correspondidos o, incluso, como en el relato protagonizado por una metamorfosis kafkiana, desconocen todavía los mecanismos del afecto y del sexo. Sin embargo, las verdaderas protagonistas de estos relatos —llenos de guiños a los Beatles, el jazz, Kafka, Las mil y una noches o, en el caso del título, Hemingway—, son ellas, las mujeres, que, misteriosas, irrumpen en la vida de los hombres para desaparecer, dejando una huella imborrable en la vida de aquellos que las han amado, o de los que, al menos, intentaron amarlas.",
          "image": "https://ww2.ebookelo.com/images/cover/21905.jpg"
        },
        {
          "id": 35,
          "title": "Sobre el dragón del abismo",
          "author": "Kyōka Izumi",
          "year": 2015,
          "category": "11",
          "type": "epub",
          "pages": 127,
          "file": "035 Sobre el dragon del abismo",
          "description": "Durante una soleada tarde de verano, el joven protagonista de Sobre el dragón del abismo, desoyendo las advertencias de los mayores, se interna más allá de los límites del pueblo. Pero la travesura se tornará en pesadilla cuando la picadura de un extraño y colorido insecto le abra las puertas de un mundo sobrenatural y desconocido.\n\nIzumi Kyōka, considerado por muchos el Edgar Allan Poe de Japón, es el creador de la «novela gótica» japonesa y uno de los grandes maestros del relato breve. Por la ambientación sobrenatural y sutilmente terrorífica de sus obras, por el idealismo y la exaltación de la belleza femenina que impregnan sus páginas y por la musicalidad de su estilo literario, Kyōka encarna mejor que ningún otro autor el romanticismo nipón al tiempo que se eleva como quintaesencia de lo japonés.\n\nPresentamos cuatro relatos inéditos de uno de los escritores más fascinantes del siglo XX. Cuatro historias para adentrarse en un mundo inquietante de fantasmas y espectros; mujeres quiméricas e incautos viajeros; amor, celos y terribles secretos.\n\nPor creer fervientemente en las palabras y en los espíritus, Izumi Kyōka rivaliza con el mismo E. T. Hoffman en la pureza de su Romanticismo.\n\nYukio Mishima",
          "image": "https://ww2.ebookelo.com/images/cover/28287.jpg"
        },
        {
          "id": 36,
          "title": "El zorro ártico",
          "author": "Sjón",
          "year": 2003,
          "category": "5",
          "type": "epub",
          "pages": 94,
          "file": "036 El zorro artico",
          "description": "El zorro ártico (Skugga-Baldur), novela ganadora del prestigioso Premio de Literatura del Consejo Nórdico en 2005, es la obra más importante de la literatura islandesa actual. El libro utiliza elementos de las leyendas populares islandesas del siglo XIX. Sjón nos presenta, como en una fábula, la lucha del pastor Baldur Skuggason con un zorro al que quiere cazar. Al final la naturaleza hará justicia con el pastor, cuya personalidad vamos conociendo a través de las demás historias que componen esta obra. El estilo del libro, muy ágil y poético, ha influido de manera determinante en el éxito internacional que lo ha acompañado. Ha sido traducido a más de quince idiomas y ha recibido numerosos elogios de la crítica. Esta es, sin duda, una deliciosa novela, perfecta para adentrarse en la literatura de los países nórdicos.",
          "image": "https://ww2.ebookelo.com/images/cover/80083.jpg"
        },
        {
          "id": 37,
          "title": "Viaje al país de los blancos",
          "author": "Ousman Umar",
          "year": 2019,
          "category": "9",
          "type": "epub",
          "pages": 135,
          "file": "037  Viaje al país de los blancos",
          "description": "La odisea de un joven que arriesgó su vida por un futuro mejor. Mi nombre es Ousman Umar. Sé que nací un martes, no sé de qué mes ni de qué año porque en mi tribu eso no importa. Crecí en la sabana africana. Caminaba siete kilómetros para ir a la escuela. Mi vida era feliz y sencilla, hasta que un día, entre juegos, vi un avión volar. Desde ese momento quise ser piloto, ingeniero, todo, menos negro. La curiosidad por conocer el mundo me empujó a hacer un viaje sin retorno hacia el País de los Blancos.\n\nA los trece años crucé el Sahara a pie, el mar en patera y vi morir en el camino a la mayoría de mis compañeros de viaje, entre ellos a mi mejor amigo. Cuatro años después de comenzar esa hazaña, logré llegar a España y, tras varios meses durmiendo en la calle, me acogió una familia. La primera noche que dormí en su casa, pese a las comodidades y el confort, me puse a llorar como un niño. ¿Por qué había sufrido tanto? ¿Por qué tanta lucha? ¿Qué había hecho mal?\n\nAhora, necesito contar esta historia, hasta que no haya más historias como esta que contar.",
          "image": "https://ww2.ebookelo.com/images/cover/66871.jpg"
        },
        {
          "id": 38,
          "title": "Muerte con pingüino",
          "author": "Andréi Kurkov",
          "year": 1996,
          "category": "7",
          "type": "epub",
          "pages": 243,
          "file": "038 Muerte con pinguino.epub",
          "description": "Viktor es un escritor arruinado: está sin blanca, lo ha dejado su novia, tiene frío.\n\nImaginen si se siente solo que decide adoptar a un pingüino. No sabe que este nuevo compañero de piso, Misha, también está deprimido: suelta suspiros melancólicos cuando chapotea en la bañera de agua helada y se encierra en la habitación como un adolescente. Ahora Viktor no solo está triste, sino que debe consolar a su amigo. Y además alimentarlo.\n\nTodo se complica cuando un gran periódico le encarga escribir esquelas de personajes públicos que aún están vivos. Parece una tarea fácil. Pero no lo es: los protagonistas de sus necrológicas empiezan a fallecer en extrañas circunstancias poco después de que escriba sobre ellos. Misha y Viktor se ven atrapados en una trama absurda y violenta.\n\nUna novela oscura y luminosa, con humor blanco y negro. Como la vida. Como un pingüino.",
          "image": "https://ww2.ebookelo.com/images/cover/48627.jpg"
        },
        {
          "id": 39,
          "title": "Mis fantasmas",
          "author": "Gwendoline Riley",
          "year": 2021,
          "category": "7",
          "type": "epub",
          "pages": 136,
          "file": "039 Mis fantasmas.epub",
          "description": "Helen Grant siempre ha sido un enigma para su hija. Bridge apenas con­serva recuerdos de sus padres antes del divorcio, pero intuye que aquellos años de matrimonio fueron decisivos para moldear una personalidad que a ella se le antoja incomprensible. En la plenitud de su vida y su carrera, Bridge afronta una relación hostil con su madre, a la que apenas ve una vez al año. Aunque es consciente de que Helen siempre ha dejado mucho que desear como figura materna, Bridge pretende tirar del hilo y enten­der –o quizá simplemente hacer entender a su madre– por qué las cosas nunca terminaron de funcionar entre ellas.\n\nCon un sentido del humor y una clarividencia deslumbrantes, Mis fantasmas es un acertadísimo retrato de ese vínculo fascinante y excepcio­nal que une –y desune– a madres e hijas, y que, como en el caso de Helen y Bridge, oscila entre lo frustrado y lo frustrante, el cariño y la crueldad, la ternura y el rencor mutuo. El logro genial de Gwendoline Riley es brindar­nos una voz única e irrepetible que, no obstante, representa a infinidad de mujeres, una voz de una potencia capaz de sacudir los cimientos de la siempre compleja relación entre una madre y una hija.",
          "image": "https://ww2.ebookelo.com/images/cover/79463.jpg"
        },
        {
          "id": 40,
          "title": "La puerta entreabierta",
          "author": "Fernanda Kubbs",
          "year": 2013,
          "category": "6",
          "type": "epub",
          "pages": 142,
          "file": "040 La puerta entreabierta.epub",
          "description": "Isa es una joven y escéptica periodista a la que han encargado un reportaje sobre el mundo de la magia. Pero ante La Gran Demirovska, afamada pitonisa de paso por la ciudad, la descreída reportera acaba sufriendo una transformación inesperada que la sitúa en un lugar y una perspectiva impensables. ¿Cómo ha sucedido?, ¿dónde buscar una salida?, ¿qué hacer para dominar la angustia creciente? Isa siente que ha atravesado una puerta que, como las cataratas en las películas de aventuras, conecta la segura realidad que ella conocía con otro mundo y otras percepciones. Sólo los exóticos personajes a los que se encomienda, y las fascinantes historias que se cuentan entre sí, parecen trazar un itinerario de regreso a su entorno inicial que tal vez ya no sea el mismo.",
          "image": "https://ww2.ebookelo.com/images/cover/4642.jpg"
        }
    ];

    // Función para cargar los libros en la página
    function loadBooks() {
        const booksContainer = document.getElementById('books-container');
        
        books.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.className = 'col-md-4 col-lg-3';
            console.log(book.id);
            bookCard.innerHTML = `
                <div class="card book-card h-100">
                    <img src="${book.image}" class="card-img-top book-card-img" alt="${book.title}">
                    <div class="card-body book-card-body">
                        <h5 class="card-title book-card-title">${book.title}</h5>
                        <p class="card-text book-card-author">${book.author} (${book.year})</p>
                        <p class="card-text book-card-text">${book.description.substring(0,80)}...</p>
                    </div>
                    <div class="card-footer book-card-footer">
                        <button class="btn btn-sm btn-outline-dark w-100 view-details" data-id="${book.id}">Ver detalles</button>
                    </div>
                </div>
            `;
            
            booksContainer.appendChild(bookCard);
        });

        // Agregar event listeners a los botones
        document.querySelectorAll('.view-details').forEach(button => {
            button.addEventListener('click', function() {
                const bookId = parseInt(this.getAttribute('data-id'));
                const book = books.find(b => b.id === bookId);
                showBookDetails(book);
            });
        });
    }

    // Función para mostrar los detalles del libro en un modal
    function showBookDetails(book) {
        const modalTitle = document.getElementById('bookModalTitle');
        const modalBody = document.getElementById('bookModalBody');
        const downloadLink = document.getElementById('downloadLink');
        
        modalTitle.textContent = book.title;
        
        modalBody.innerHTML = `
            <div class="row">
                <div class="col-md-4 mb-3 mb-md-0">
                    <img src="${book.image}" class="img-fluid rounded" alt="${book.title}">
                </div>
                <div class="col-md-8">
                    <h4>${book.title}</h4>
                    <p class="text-muted">${book.author} (${book.year})</p>
                    <p><strong>Categoría:</strong> ${getCategoryName(book.category)}</p>
                    <p><strong>Formato:</strong> ${book.type.toUpperCase()}</p>
                    <p><strong>Páginas:</strong> ${book.pages}</p>
                    <hr>
                    <p>${book.description}</p>
                </div>
            </div>
        `;
        
        downloadLink.href = `libros/${book.file}`;
        
        const modal = new bootstrap.Modal(document.getElementById('bookModal'));
        modal.show();
    }

    // Función para obtener el nombre de la categoría
    function getCategoryName(categoryId) {
        const categories = {
            1: "Desarrollo Personal",
            2: "Superación",
            3: "Autoayuda",
            4: "Finanzas",
            5: "Drama",
            6: "Fantástico",
            7: "Humor",
            8: "Intriga",
            9: "Memorias",
            10: "Sátira",
            11: "Terror"
        };
        return categories[categoryId] || "General";
    }

    // Cargar los libros al iniciar
    loadBooks();

    // Filtrar libros por categoría
    document.querySelectorAll('[data-category]').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const categoryId = parseInt(this.getAttribute('data-category'));
            alert(`Mostrar libros de la categoría: ${getCategoryName(categoryId)}`);
            // En una implementación real, filtraríamos y mostraríamos solo los libros de esta categoría
        });
    });

    // Manejar el formulario de contacto
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
        this.reset();
    });
});