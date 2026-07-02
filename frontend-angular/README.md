# Frontend Angular - Catálogo de Elementos

Este proyecto es una aplicación web del lado del cliente construida con **Node.js**, **Angular 18** y **TypeScript**.
Su objetivo primordial es consumir de forma reactiva el catálogo de datos expuesto por nuestro Backend For Frontend (BFF) y renderizar la información mediante una arquitectura de componentes desacoplados (**Smart vs. Dumb Components**).

---

## 1. Requisitos Previos

Antes de levantar el servidor de desarrollo localmente, asegúrate de contar con las siguientes herramientas instaladas en tu estación de trabajo:

* **Node.js**: Versión LTS recomendada (v18.x, v20.x o superior).
* **Angular CLI**: Versión global 18.x.x instalada (`npm install -g @angular/cli@18`).
* **npm**: Gestor de paquetes nativo de Node.js.

---

## 2. Dependencia Crítica (Infraestructura BFF)

> ⚠️ **¡IMPORTANTE!** > Este frontend actúa como un consumidor de servicios y requiere obligatoriamente que la capa de orquestación (BFF) esté activa para poder inicializar el flujo de datos.
>
> Antes de ejecutar los comandos de Angular, asegúrate de que tu servidor **BFF NestJS** (o en su defecto, Express) esté levantado y escuchando peticiones en:  
> `http://localhost:3000`

---

## 3. Instalación y Despliegue Local

Sigue estos pasos detallados cronológicamente desde la raíz del monorepo para inicializar el entorno y ejecutar la aplicación:

### Paso 1: Posicionarse en el directorio del proyecto
Accede a la carpeta dedicada al Frontend de Angular:
```bash
cd frontend-angular
```

### Paso 2: Instalación de dependencias
Instala todas las dependencias del ecosistema de Angular declaradas en el manifiesto del proyecto:
```bash
npm install
```

### Paso 3: Ejecución en Entorno de Desarrollo (Hot-Reload)
Para arrancar el servidor de desarrollo local con compilación en tiempo real y recarga automática ante cualquier cambio en el código fuente, ejecuta:
```bash
ng serve
```
Al iniciar correctamente, observarás que la aplicación compila los módulos compilados de forma autónoma (*Standalone*) y queda disponible en tu navegador web en:  
👉 `http://localhost:4200`

---

## 4. Estructura del Proyecto

La arquitectura del código fuente se rige por la separación estricta de responsabilidades entre infraestructura central (`core`) y módulos funcionales por dominio (`elements`).

A continuación se detalla el árbol visual del directorio `frontend-angular/src/`:

```text
src/
└── app/
    ├── core/                           # Infraestructura global y agnóstica de la aplicación
    │   ├── models/                     # Contratos de datos puros de TypeScript
    │   │   └── element.ts
    │   └── services/                   # Servicios inyectables de infraestructura (Acceso a HTTP)
    │       └── element-data-access.service.ts
    ├── elements/                       # Dominio funcional del recurso Elements
    │   └── components/                 # Componentes aislados del negocio
    │       ├── element-dashboard/      # Componente Inteligente (Smart): Orquestador de estado y streams
    │       └── element-table/          # Componente de Presentación (Dumb): Renderizado de UI con OnPush
    ├── app.component.css               # Estilos del componente raíz
    ├── app.component.html              # Plantilla raíz (Cascarón del router-outlet)
    ├── app.component.ts                # Controlador del componente raíz
    ├── app.config.ts                   # Configuración global de arranque (Proveedores HTTP y Rutas)
    └── app.routes.ts                   # Matriz de enrutamiento declarativa con carga perezosa
```

---

## 5. Lineamientos de Arquitectura y Calidad

Para mantener la cohesión y mantenibilidad del software en este monorepo, toda nueva característica debe alinearse con las siguientes reglas:

1. **Estrategia OnPush:** Todos los componentes de presentación (*Dumb Components*) deben configurar explícitamente `ChangeDetectionStrategy.OnPush` para maximizar el rendimiento reduciendo los ciclos innecesarios de revisión del DOM.
2. **Programación Reactiva Eficiente:** No se permiten suscripciones manuales (`.subscribe()`) dentro de los controladores si los datos van directo a la vista. Se delega el ciclo de vida de la suscripción a la directiva **Async Pipe** (`| async`) en las plantillas HTML para mitigar fugas de memoria de forma nativa.
3. **Control de Flujo Moderno:** Para iterar colecciones, se utiliza la directiva `@for`, exigiendo siempre una declaración de seguimiento inequívoca (`track`) basada en identificadores únicos de negocio (`element.id`).
4. **Orden Alfabético Estricto:** Los bloques de importación, las propiedades dentro de modelos/interfaces y las celdas representacionales en las vistas HTML deben mantenerse ordenadas alfabéticamente para facilitar la legibilidad transversal.
