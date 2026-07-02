# Tech Challenge - Monorepo de Catálogo de Elementos

Este repositorio ha sido diseñado con el propósito de centralizar y resolver  el desafío técnico de orquestación y consumo de datos. El ecosistema contiene la evolución de una capa de servicios Backend For Frontend (BFF) implementada originalmente en Express y migrada hacia NestJS, junto con un cliente Frontend  que consume e interactúa con esta información.

---

## 1. Estructura del Repositorio

El monorepo se encuentra gobernado por una única instancia de control de versiones en la raíz, organizando las aplicaciones en subcarpetas de dominio autocontenidas y del mismo nivel:

```text
tech-challenge/                     # Raíz principal del Monorepo (Gobernanza global de Git)
├── bff-express/                    # Capa de orquestación (BFF) construida con Express y TypeScript
│   ├── src/
│   └── README.md                   # Documentación específica del entorno Express
├── bff-nestjs/                     # Capa de orquestación (BFF) migrada a arquitectura modular con NestJS
│   ├── src/
│   └── README.md                   # Documentación específica del entorno NestJS
└── frontend-angular/               # Aplicación cliente (UI) construida en Angular 18 con componentes Standalone
    ├── src/
    └── README.md                   # Documentación específica del entorno Angular
```

## Orden de Encendido Recomendado
Para evaluar el ecosistema completo funcionando en tiempo real, se aconseja levantar primero una de las opciones del backend (BFF) y posteriormente la aplicación frontend.

### Opción A: Levantar el BFF en Express (Puerto 3000)
```bash
cd bff-express
npm install
npm run dev
```

### Opción B: Levantar el BFF en NestJS (Puerto 3000 - Recomendado)
```bash
cd bff-nestjs
npm install
npm run start:dev
```

### Paso Final: Levantar la interfaz de Angular (Puerto 4200)
En una nueva ventana de la terminal, ejecuta de forma paralela:
```bash
cd frontend-angular
npm install
ng serve
```

Una vez ejecutados los comandos, abre tu navegador web en http://localhost:4200 para visualizar la interacción completa con el catálogo de datos.
