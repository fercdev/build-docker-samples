# Laboratorio: Diseño de Dockerfiles con Multi-Stage Build

## Objetivo

No se proporciona la solución. Cada alumno deberá investigar, justificar
sus decisiones y construir un **Dockerfile** aplicando buenas prácticas.

------------------------------------------------------------------------

# Caso 1 -- Frontend React para Producción

## Escenario

Una empresa desarrolló un frontend en React utilizando Vite. Actualmente
el equipo entrega una imagen de más de 1 GB porque ejecuta la aplicación
usando Node.js en producción.

El área de infraestructura solicita:

-   Reducir el tamaño de la imagen.
-   Separar compilación y ejecución.
-   La aplicación debe exponerse por HTTP.
-   La imagen final no debe contener herramientas de desarrollo
    innecesarias.

No se especifica qué imagen base utilizar.

------------------------------------------------------------------------

# Caso 2 -- API REST en Python

## Escenario

Existe una API REST desarrollada con Flask.

El pipeline de CI debe:

-   Instalar dependencias.
-   Ejecutar pruebas automáticas.
-   Construir únicamente una imagen lista para producción.
-   Evitar archivos temporales y cachés.
-   Reducir vulnerabilidades en la imagen final.

El equipo debe decidir si conviene utilizar una o varias imágenes base.

------------------------------------------------------------------------

# Caso 3 -- Servicio en Go

## Escenario

Un microservicio escrito en Go será desplegado cientos de veces al día.

Los objetivos son:

-   Obtener una imagen extremadamente pequeña.
-   Reducir la superficie de ataque.
-   El contenedor solo debe ejecutar el binario generado.
-   El tiempo de descarga de la imagen debe ser mínimo.

No existe una restricción sobre la imagen final; el equipo deberá
justificar su elección.

------------------------------------------------------------------------

# Preguntas de investigación

1.  ¿Qué criterios utilizaron para elegir la imagen base del builder y
    de la imagen final?
2.  ¿Por qué decidieron utilizar (o no) un Multi-Stage Build en su
    solución?
3.  ¿Qué archivos o artefactos deben copiarse entre stages y cuáles no
    deberían llegar a producción?
4.  ¿Qué buenas prácticas del Dockerfile aplicaron para mejorar
    seguridad, rendimiento y mantenibilidad?
5.  Si este proyecto fuera parte de un pipeline de CI/CD, ¿qué etapas
    adicionales (lint, pruebas, análisis de seguridad, generación de
    documentación, etc.) incorporarían antes de construir la imagen
    final? Justifiquen su respuesta.
