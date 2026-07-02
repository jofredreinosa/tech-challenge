### BFF Express

Actúa como un Tech Lead Senior experto en Node.js y TypeScript. Necesito que generes un PLAN DE EJECUCIÓN detallado y paso a paso para montoar un servidor Express desde cero.
Por el momento, NO generes ningún código fuente, interfaces ni archivos de configuración. Solo quiero la hoja de ruta conceptual y los pasos técnicos que debo seguir.

El plan debe estructurarse considerando que el proyecto final deberá cumplir estrictamente con las siguientes reglas:
1. Estructura de carpetas optimizada el directorio para este proyecto se llamará `bff-express/`.
2. Naming e idioma: Todo el diseño de la arquitectura, nombres de archivos, variables y el endpoint (`GET /api/v1/elements`) se planificarán en inglés estricto bajo principios de Clean Code.
3. Formato: Se planificará el ordenamiento alfabético de las propiedades del modelo de datos (`description`, `id`, `name`, `status`, `type`).
4. Considerar la configuración de CORS para la futura integración con frameworks de frontend, específicamente Angular.
5. Planificar la estrategia de documentación requerida.

Entrégame el paso a paso detallado, en orden y en español de todo lo necesario para preparar este entorno antes de codificar.


### Ejecución del plan para el BFF en Express

Acepto el plan de ejecución conceptual. Ahora vamos a iniciar con la fase de desarrollo técnico del backend en Node.js y TypeScript.

El objetivo final de esta iteración es configurar la base del servidor Express e implementar el siguiente requerimiento:
- Crear un endpoint: GET /api/v1/elements que devuelva una lista de elementos simulados.
- Generar la documentación correspondiente para este endpoint.

Sin embargo, debes cumplir estrictamente con la siguiente metodología de trabajo:
1. Avanza siempre paso a paso. Entrega únicamente el código, configuración o archivos del PASO actual. No avances al paso siguiente ni generes más estructura hasta que yo te confirme explícitamente que el paso anterior está completado y correcto.
2. Aplica inglés estricto para todo el código (nombres de archivos, variables, funciones, clases, rutas), siguiendo las heurísticas que están más adelante.
3. Ordena siempre las propiedades de las interfaces, tipos y objetos de forma alfabética.
4. No añadas comentarios innecesarios si el nombre de clases, variables, métodos y/o funciones si ya son autoexplicativos (evita la verbosidad).
5. Escribe todos los comentarios de lógica de negocio y explicaciones técnicas en español.

Indícame cuál es el primer paso (por ejemplo, la inicialización del proyecto y sus dependencias o la configuración del tsconfig.json), muéstrame el código o comando correspondiente a ese único paso y detente ahí a la espera de mi confirmación.

Luego de la confirmación de un paso procede a dar un mensaje siguiendo las reglas de conventional commits para realizar el commit respectivo del paso confirmado como ok.

Heurísticas de Naming
1. Pronunciable (Pronounceable): Los nombres deben poder leerse en voz alta con naturalidad
2. Sin abreviaturas (No abbreviations).
3. Sin información técnica en el nombre (No technical information): Los nombres deben abstraerse de los detalles de implementación tecnica.
4. Concreto y Unívoco (Ubiquitous & Precise): Cada término debe tener un único significado claro dentro del dominio
5. Sin conflicto con palabras reservadas (No keyword conflicts)
6. Sin alias (No aliases): Se debe evitar la propagación de alias o nombres alternativos para una misma entidad a lo largo del flujo de datos
7. Contextual (Contextual): El nombre debe ser tan largo como sea necesario según su contexto. En ámbitos amplios (clases o variables globales), los nombres requieren mayor precisión. En ámbitos muy reducidos (como expresiones lambda inline o funciones con un scope de una línea), se permiten nombres más cortos sin perder legibilidad.
8. Distinción Verbo/Sustantivo (Verb/Noun Distinction): Las funciones y métodos representan acciones, por lo que su nombre debe comenzar imperativamente con un verbo conjugado seguido de un sustantivo (ej. createUser). Las variables, constantes, clases y objetos representan entidades, por lo que deben ser sustantivos o frases sustantivadas (ej. maxFruits, UserProfile).

### Documentación

Genera el archivo README.md definitivo para el BFF.
Cualquier desarrollador debe ser capaz de leer este archivo, entender el proyecto, levantar el backend
en su máquina local desde cero y conocer los endpoints disponibles.

Por favor, estructura el README.md incluyendo las siguientes secciones:
1. Título del Proyecto y Breve Descripción (en español).
2. Requisitos Previos (versión de Node.js, etc.).
3. Pasos detallados para la Instalación y Despliegue Local (comandos para instalar dependencias y scripts para ejecutar en modo desarrollo/producción).
4. Estructura del Proyecto (un árbol visual de las carpetas y archivos clave creados, usando nombres en inglés).
5. Documentación de la API: Detalla el endpoint implementado (GET /api/v1/elements), especificando su formato de respuesta (un ejemplo del JSON que devuelve con las propiedades de los objetos ordenadas alfabéticamente).

Recuerda los lineamientos del proyecto:
- Toda la explicación técnica, títulos de secciones y guías de uso deben estar en español.
- Los nombres de variables, comandos, archivos (como package.json, tsconfig.json) y bloques de código deben reflejar fielmente el desarrollo en inglés que realizamos.

Por favor, entrega el contenido completo del archivo README.md en un bloque de código Markdown listo para copiar.
