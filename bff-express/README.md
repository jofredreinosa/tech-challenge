# BFF Express - Catálogo de Elementos

Este proyecto es un Backend For Frontend (BFF) construido con **Node.js**, **Express** y **TypeScript**.
Su objetivo primordial es actuar como una capa de orquestación para interactuar de forma
segura con aplicaciones cliente.

---

## 1. Requisitos Previos

Antes de levantar el servidor localmente, asegúrate de contar con las siguientes herramientas instaladas en tu estación de trabajo:

* **Node.js**: Versión LTS recomendada (v18.x, v20.x o superior).
* **npm**: Gestor de paquetes nativo de Node.js (incluido automáticamente con Node.js).

---

## 2. Instalación y Despliegue Local

Sigue estos pasos detallados cronológicamente para inicializar el entorno y ejecutar la aplicación desde cero:

### Paso 1: Clonar o posicionarse en el directorio del proyecto
Asegúrate de estar situado en la raíz de la carpeta del proyecto:
```bash
git clone https://github.com/jofredreinosa/tech-challenge.git
cd bff-express
```

### Paso 2: Instalación de dependencias
Instala todas las dependencias de producción y desarrollo declaradas en el manifiesto del proyecto:
```bash
npm install
```

### Paso 3: Ejecución en Entorno de Desarrollo (Hot-Reload)
Para iniciar el servidor en modo de desarrollo con transpilación en tiempo real y recarga automática ante cualquier cambio, ejecuta:
```bash
npm run dev
```
Al iniciar correctamente, observarás el siguiente mensaje en la terminal:
`Servidor escuchando exitosamente en el puerto 3000`


## 3. Estructura del Proyecto

La arquitectura está diseñada bajo el patrón de **Arquitectura en Capas (Layered Architecture)**, lo cual aísla las responsabilidades de transporte HTTP, lógica de negocio y definición de contratos de datos.

A continuación se detalla el árbol visual del directorio `bff-express/`:

```text
bff-express/
├── dist/                           # Código transpilado a JavaScript nativo (Producción)
├── node_modules/                   # Dependencias y módulos de terceros instalados
├── src/                            # Código fuente principal de la aplicación
│   ├── controllers/                # Capa de Controladores (Gestión de Ciclo Request/Response)
│   │   └── element-controller.ts
│   ├── docs/                       # Especificaciones OpenAPI / Swagger de la API
│   │   └── open-api-specification.ts
│   ├── models/                     # Interfaces y Modelos de Datos de TypeScript
│   │   └── element.ts
│   ├── routes/                     # Enrutadores modulares por recurso y versión de API
│   │   └── elements.ts
│   ├── services/                   # Capa de Servicio (Lógica de negocio y catálogos de dominio)
│   │   └── element-catalog.ts
│   └── main.ts                     # Punto de entrada de la aplicación (Inicialización y CORS)
├── package.json                    # Manifiesto del proyecto y scripts de automatización
├── package-lock.json               # Árbol de dependencias exacto e inmutable
└── tsconfig.json                   # Configuración estricta del compilador de TypeScript
```

---

## 4. Documentación de la API

La API cuenta con documentación interactiva autogenerada basada en el estándar **OpenAPI 3.0**.

* **Ruta de la Documentación Interactiva (Swagger UI):** Puedes acceder visualmente desde tu navegador web a:  
  `http://localhost:3000/api/v1/documentation`

### Endpoint Implementado

#### `GET /api/v1/elements`

* **Descripción:** Recupera la lista completa del catálogo de elementos simulados.
* **Políticas CORS integradas:** Permitido explícitamente para el origen de desarrollo de Angular (`http://localhost:4200`) utilizando los métodos seguros de lectura (`GET`).
* **Formato de Respuesta (Payload JSON):** El contrato de la API garantiza que las propiedades del objeto de retorno se encuentran estructuradas en **estricto orden alfabético** (`description` -> `id` -> `name` -> `status` -> `type`).

##### Ejemplo de Respuesta Exitosa (`200 OK`):

```json
[
  {
    "description": "Defines the primary core component of the system",
    "id": "element-001",
    "name": "Alpha Component",
    "status": "active",
    "type": "core"
  },
  {
    "description": "Defines the secondary auxiliary extension of the system",
    "id": "element-002",
    "name": "Beta Extension",
    "status": "inactive",
    "type": "extension"
  }
]
```
