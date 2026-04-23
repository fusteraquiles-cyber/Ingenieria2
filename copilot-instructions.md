# Instrucciones para Copilot — Ingenieria2

Este documento contiene indicaciones específicas del repositorio para ayudar a futuras sesiones de Copilot a trabajar de forma efectiva.

## Comandos de build, test y lint
- Este repositorio es un sitio web estático (index.html + assets). No hay scripts de build, test o lint completos por defecto.
- Para previsualizar localmente: abre index.html en el navegador o usa la extensión Live Server de VS Code ("Go Live").
- Para comprobar un solo archivo: abre el archivo HTML/CSS/JS correspondiente en el editor y usa la vista previa del navegador.

## Arquitectura a alto nivel
- Sitio estático de página principal (entrada: index.html).
- Estilos a través de Bootstrap 5 CDN; si se añade CSS personalizado, suele vivir junto a los HTML.
- Recursos estáticos en la carpeta `img/`.
- Proyectos y ejercicios académicos: páginas pequeñas y autocontenidas en lugar de una aplicación modular compleja.

## Convenciones clave del repositorio
- Idioma principal: español — las sugerencias y mensajes deben respetar este contexto.
- Uso de Bootstrap vía CDN (sin gestor de paquetes por defecto). Cualquier cambio que requiera bundling o tooling exige añadir package.json y dependencias.
- Las imágenes se referencian de forma relativa desde `img/` (e.g., `img/NOMBRE.png`). Mantener rutas relativas al editar.
- Punto de entrada: `index.html` — priorizarlo para tareas de interfaz.

## Documentación existente a incorporar
- README.md ya contiene propósito del curso e instrucciones de previsualización — hacer referencia breve en lugar de duplicar contenido extenso.

## Comprobación de configuraciones para asistentes AI
- No se encontraron archivos de configuración de otros asistentes (CLAUDE.md, .cursorrules, AGENTS.md, .windsurfrules, CONVENTIONS.md, AIDER_CONVENTIONS.md, .clinerules).

---

## Playwright (scaffolding añadido)
- Se añadieron archivos de scaffolding: `package.json`, `playwright.config.js`, `example.spec.js`.
- Ejecutar tests (si se instalaron dependencias): `npm run test`.
- Ejecutar un solo test: `npx playwright test example.spec.js`.

Generado por la sesión de ayuda de Copilot.
