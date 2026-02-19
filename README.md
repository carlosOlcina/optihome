# Optihome

Optihome es una plataforma de domótica enfocada en la **privacidad total** y el **control local**. Este proyecto frontend demuestra una arquitectura moderna utilizando Angular 21 y Atomic Design para ofrecer una experiencia de usuario fluida y segura.

> **Nota:** Este es un proyecto académico de 2SMRA, no es un producto comercial real.

![Optihome](public/landing-screenshot.png)

## Despliegue

El proyecto está desplegado en **Vercel**, aprovechando su integración nativa con Angular para soportar **SSR** y **SSG**, lo que garantiza un rendimiento óptimo y una excelente indexación SEO.

## Instalación

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1. **Requisitos previos:**
   - [Node.js](https://nodejs.org/) (LTS recomendada)
   - [pnpm](https://pnpm.io/) (`npm i -g pnpm`)
   - [Angular CLI](https://angular.io/cli) (`npm i -g @angular/cli`)

2. **Clonar e instalar:**

   ```bash
   git clone https://github.com/tu-usuario/optihome.git
   cd optihome
   pnpm install
   pnpm prepare
   ```

3. **Iniciar el servidor:**
   ```bash
   pnpm start
   ```
   Abre [http://localhost:4200](http://localhost:4200).

## Scripts Disponibles

- `pnpm start`: Inicia la aplicación en modo desarrollo.
- `pnpm build`: Genera los archivos de producción.
- `pnpm test`: Ejecuta las pruebas unitarias con Vitest.
- `pnpm lint`: Revisa el estilo del código.
- `pnpm format`: Formatea el código con Prettier.

## Tecnologías Utilizadas

- **Angular 21**: Framework principal (Signals, Standalone Components).
- **TypeScript**: Tipado estricto.
- **Atomic Design**: Organización de componentes (Atoms, Molecules, Organisms).
- **Lucide Angular**: Set de iconos modernos.
- **CSS3**: Estilos nativos con variables.

## Documentación Técnica

Para una explicación detallada sobre la arquitectura, el diseño de componentes y las decisiones técnicas, consulta la [Documentación Completa](docs/DOCUMENTACION.md).

## Autoría

- **Autor:** Carlos Olcina Mazón
- **Curso:** 2SMRA Aplicaciones Web
- **Año:** 2026

## Licencia

Proyecto bajo licencia [Apache License 2.0](./LICENSE).
