## Presentación del proyecto

Optihome es un proyecto académico desarrollado en el ámbito de la asignatura de aplicaciones web, orientado a la construcción de una aplicación web de carácter demostrativo centrada en el dominio de la domótica local. La propuesta se materializa como una aplicación de tipo SPA (Single Page Application) implementada íntegramente en frontend, cuyo propósito es representar de forma visual y estructural una tienda de dispositivos de automatización del hogar concebidos para funcionar sin dependencia de servicios en la nube.

La aplicación se ha desarrollado con Angular y TypeScript, adoptando una arquitectura basada en componentes y un enfoque modular. La organización del sistema prioriza la reutilización y la consistencia, apoyándose en el patrón Atomic Design como criterio de descomposición de la interfaz en unidades de complejidad incremental. En el plano de presentación, el proyecto emplea estilos con CSS, hoy en día es una opción bastante buena al no tener que compilar y CSS moderno incluye nativamente muchas funcionalidades de preprocesadores.

Optihome no integra backend, no incorpora base de datos y no dispone de mecanismos de persistencia de datos. En consecuencia, las interacciones representadas por la aplicación se limitan a la simulación visual y funcional de una tienda, sin implementar procesos reales de autenticación, pago o gestión transaccional. Este planteamiento permite concentrar el alcance en los aspectos de diseño, estructura y calidad del código del lado cliente, así como en la elaboración de documentación técnica formal.

## Contextualización y justificación

El ecosistema actual de la domótica se caracteriza, de forma predominante, por arquitecturas dependientes de infraestructuras externas, tales como servicios cloud y modelos basados en suscripción. Este enfoque, aun ofreciendo ventajas operativas, introduce consideraciones relevantes desde la perspectiva de la privacidad del usuario, la disponibilidad del servicio y la dependencia de terceros. En este contexto, la domótica local se plantea como una alternativa conceptual: un modelo en el que el control y la automatización se conciben sin requerir conectividad permanente a internet ni delegar funciones críticas en servidores externos.

Optihome se enmarca en dicha perspectiva conceptual, trasladándola al diseño de una aplicación web que representa un catálogo de dispositivos orientados a la automatización del hogar sin dependencia de la nube. La justificación del proyecto responde, principalmente, a la necesidad académica de evidenciar competencias asociadas al desarrollo frontend moderno: organización del código, estructuración modular, adopción de buenas prácticas, aplicación de patrones de diseño de interfaz y capacidad para producir documentación técnica con rigor.

La elección de Angular y TypeScript se fundamenta en la adecuación de estas tecnologías para el desarrollo de aplicaciones SPA con estructuras basadas en componentes, facilitando la separación de responsabilidades, la reutilización y la mantenibilidad. En conjunto, Optihome se configura como un ejercicio académico orientado a consolidar metodologías y criterios de calidad aplicables a proyectos web contemporáneos, dentro de un alcance deliberadamente acotado a la capa cliente.

## Objetivo general

Desarrollar una aplicación web SPA en Angular que represente de forma visual y estructural una tienda de dispositivos de domótica orientados al control local, aplicando una arquitectura basada en componentes, un enfoque modular y el patrón Atomic Design, con el fin de evidenciar la capacidad de organización, mantenibilidad y documentación técnica formal en un contexto académico.

## Objetivos específicos

1. Definir una estructura de proyecto coherente con un enfoque modular, que permita organizar componentes y recursos de forma mantenible y escalable desde el punto de vista estructural.
2. Implementar una arquitectura basada en componentes reutilizables, favoreciendo la separación de responsabilidades y la consistencia en la construcción de la interfaz.
3. Aplicar el patrón Atomic Design como criterio de descomposición y composición de la interfaz, garantizando un diseño sistemático de componentes según niveles de granularidad.
4. Desarrollar la aplicación como SPA, asegurando una navegación y experiencia de usuario propias de aplicaciones de una sola página, sin dependencia de backend.
5. Emplear TypeScript como base del desarrollo, orientando el código a claridad, tipado y organización propia de proyectos Angular.
6. Representar el concepto de domótica local y su propuesta de valor (control sin dependencia de internet, privacidad e independencia de servicios cloud) mediante el diseño y organización de la aplicación, sin incorporar funcionalidades no previstas.
7. Elaborar documentación técnica formal que describa el proyecto, su motivación, su alcance, sus limitaciones y su estructura, de acuerdo con criterios académicos.

## Alcance del proyecto

El alcance de Optihome se circunscribe al desarrollo de una aplicación frontend que simula la interfaz y la estructura funcional de una tienda de dispositivos de domótica centrados en la automatización del hogar sin dependencia de la nube. El sistema se concibe como una representación visual y estructural orientada a exponer un catálogo y una experiencia de navegación propia de un entorno de comercio electrónico, sin implementar procesos reales asociados a sistemas transaccionales.

La aplicación se implementa bajo el paradigma SPA, concentrando la interacción en el lado cliente. La arquitectura se fundamenta en componentes Angular reutilizables, organizados con un enfoque modular y guiados por Atomic Design, con el objetivo de facilitar la consistencia, la mantenibilidad y la escalabilidad estructural. El alcance incluye, además, la adopción de una organización del proyecto que refleje buenas prácticas en la construcción de interfaces web modernas.

Dentro del marco conceptual, el alcance incorpora la representación de una alternativa a modelos basados en cloud, destacando el enfoque en la privacidad del usuario y la independencia de servicios externos. Este tratamiento se limita a la dimensión conceptual y de diseño de la aplicación, sin pretender desarrollar un sistema de control domótico real ni la integración con dispositivos.

## Limitaciones

Optihome presenta limitaciones explícitas derivadas de su naturaleza y objetivos académicos, así como del alcance decidido para el desarrollo:

- No existe backend: la aplicación no dispone de capa servidor para procesamiento de negocio, integración con servicios externos o gestión de operaciones críticas.
- No existe base de datos: el sistema no persiste información en un almacenamiento estructurado, por lo que no se gestiona historial ni estado persistente.
- No hay persistencia de datos: cualquier información representada se limita al ámbito de ejecución en el cliente y a la simulación visual de contenidos.
- No existe autenticación real: no se implementan mecanismos de identificación, autorización, gestión de sesiones o control de acceso.
- No existe sistema de pago real: no se integra pasarela de pago ni procesos transaccionales, validaciones financieras o confirmaciones operativas.
- El sistema constituye una simulación visual y estructural de una tienda: las operaciones propias de un entorno comercial se representan sin efectos reales, dado que el objetivo reside en la demostración de estructura y diseño frontend.

Estas limitaciones son coherentes con el propósito del proyecto, orientado a evidenciar competencias de diseño modular, arquitectura de componentes y documentación técnica, evitando introducir elementos no contemplados en la información del proyecto.

## Estructura del documento

La documentación oficial del proyecto se organiza para proporcionar una visión progresiva y coherente de Optihome, desde su definición general hasta los aspectos técnicos y de justificación. Tras la presente introducción, el documento se orienta a detallar el contexto y los fundamentos del proyecto, describiendo su enfoque conceptual de domótica local y las razones tecnológicas que sustentan las decisiones adoptadas. Posteriormente, se aborda la descripción técnica de la solución frontend, haciendo hincapié en la arquitectura basada en componentes, el enfoque modular y la aplicación del patrón Atomic Design como eje de organización de la interfaz.

A continuación, se expone la estructura del proyecto y los criterios de reutilización, mantenimiento y consistencia aplicados, el uso de TypeScript en el marco de Angular. Finalmente, se integran los apartados orientados a consolidar la comprensión del alcance y las restricciones del sistema, manteniendo un enfoque académico centrado en buenas prácticas, claridad técnica y coherencia documental.
