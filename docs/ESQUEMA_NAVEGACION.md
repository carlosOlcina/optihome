# Esquema de navegacion

```
Raiz
├── /
│   └── Redireccion a /landing
├── /landing
│   ├── Seccion: Hero (propuesta de valor)
│   ├── Seccion: Beneficios (por que local)
│   ├── Seccion: Ecosistema (productos)
│   ├── Seccion: Guia (como funciona)
│   └── Seccion: Registro (lista de espera)
└── /landing/wait-list
    ├── Formulario de suscripcion
    ├── Validacion de email
    └── Notificaciones de exito o error
```

Flujo principal

1. Usuario entra en `/`.
2. Se redirige a `/landing`.
3. Navega por secciones internas de la landing.
4. Accede a la lista de espera en `/landing/wait-list`.
5. Completa formulario y recibe feedback.
