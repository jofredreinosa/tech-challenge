# BFF NestJS - Catálogo de Elementos

Este proyecto es un Backend For Frontend (BFF) de nivel empresarial construido con **Node.js**, **NestJS** y **TypeScript**.
A diferencia de aproximaciones tradicionales, este servidor aprovecha una arquitectura modular basada en componentes y un sistema robusto de **Inyección de Dependencias** nativo, actuando como una capa de orquestación segura y fuertemente tipada para interactuar óptimamente con aplicaciones cliente como Angular.

---

## 1. Requisitos Previos

Antes de levantar el servidor localmente, asegúrate de contar con las siguientes herramientas instaladas en tu estación de trabajo:

* **Node.js**: Versión LTS recomendada (v18.x, v20.x o superior).
* **npm**: Gestor de paquetes nativo de Node.js (incluido automáticamente con Node.js).
* **Git**: Para la gestión y control de versiones.

---

## 2. Instalación y Despliegue Local

Sigue estos pasos detallados cronológicamente para inicializar el entorno y ejecutar la aplicación desde cero:

### Paso 1: Clonar el repositorio y posicionarse en el directorio
Clona el repositorio remoto especificando el nombre del directorio local del proyecto (`bff-nestjs`) y accede a él ejecutando:
```bash
git clone https://github.com/jofredreinosa/tech-challenge.git
cd bff-nestjs
```

### Paso 2: Instalación de dependencias
Instala todas las dependencias del ecosistema de NestJS y OpenAPI declaradas en el manifiesto del proyecto:
```bash
npm install
```

### Paso 3: Ejecución en Entorno de Desarrollo (Hot-Reload)
Para iniciar el servidor en modo de desarrollo con compilación en tiempo real y recarga automática ante cualquier cambio en los módulos, ejecuta:
```bash
npm run start:dev
```
Al iniciar correctamente, observarás los logs de NestJS en la terminal mapeando las rutas y confirmando el arranque:
`[NestApplication] Nest application successfully started`

## 3. Estructura del Proyecto

La arquitectura está diseñada bajo la **Filosofía Modular de NestJS**, la cual encapsula de manera lógica las responsabilidades de transporte HTTP, lógica de negocio y definición de contratos de datos por cada dominio de negocio.

A continuación se detalla el árbol visual del directorio `bff-nestjs/`:

```text
bff-nestjs/
├── dist/                           # Código transpilado a JavaScript nativo (Producción)
├── node_modules/                   # Dependencias y módulos de terceros instalados
├── src/                            # Código fuente principal de la aplicación
│   ├── elements/                   # Módulo funcional del recurso Elements (Dominio autocontenido)
│   │   ├── models/                 # Clases y Modelos de datos (Contratos decorados para Swagger)
│   │   │   └── element.ts
│   │   ├── element-catalog.ts      # Capa de Servicio / Proveedor (Lógica de negocio y mock data)
│   │   ├── elements.controller.ts  # Capa de Controladores (Gestión de Ciclo Request/Response HTTP)
│   │   └── elements.module.ts      # Módulo encargado de encapsular y cablear el recurso
│   ├── app.module.ts               # Módulo raíz de la aplicación (Orquestador global del ecosistema)
│   └── main.ts                     # Punto de entrada de la aplicación (Inicialización, CORS y Swagger)
├── package.json                    # Manifiesto del proyecto y scripts de automatización
├── package-lock.json               # Árbol de dependencias exacto e inmutable
└── tsconfig.json                   # Configuración estricta del compilador de TypeScript
```

---

## 4. Documentación de la API

La API cuenta con documentación interactiva autogenerada e integrada directamente en el código fuente a través del módulo nativo de **OpenAPI / Swagger** de NestJS.

* **Ruta de la Documentación Interactiva (Swagger UI):** Puedes acceder visualmente desde tu navegador web a:  
  `http://localhost:3000/api/v1/documentation`

### Endpoint Implementado

#### `GET /api/v1/elements`

* **Descripción:** Recupera la lista completa del catálogo de elementos simulados a través del proveedor inyectado.
* **Políticas CORS integradas:** Permitido explícitamente para el origen de desarrollo de Angular (`http://localhost:4200`) utilizando los métodos seguros de lectura (`GET`).
* **Formato de Respuesta (Payload JSON):** El contrato de la API garantiza mediante decoradores nativos que las propiedades del objeto de retorno se encuentran estructuradas en **estricto orden alfabético** (`description` -> `id` -> `name` -> `status` -> `type`).

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
