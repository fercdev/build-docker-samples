# Laboratorio Docker Build - 6 Casos

## Caso 1 - Variable de compilación (ARG)

**Dockerfile**

``` dockerfile
FROM alpine:3.22
ARG MENSAJE=Hola
RUN echo $MENSAJE > /mensaje.txt
CMD ["cat","/mensaje.txt"]
```

**Construir**

``` powershell
docker build --build-arg MENSAJE="Hola Build" -t lab1 .
```

**Probar**

``` powershell
docker run --rm lab1
```

------------------------------------------------------------------------

## Caso 2 - Variable de entorno (ENV)

**Dockerfile**

``` dockerfile
FROM alpine:3.22
ENV CURSO=Docker
CMD ["sh","-c","echo Curso=$CURSO"]
```

**Construir**

``` powershell
docker build -t lab2 .
```

**Probar**

``` powershell
docker run --rm lab2
```

------------------------------------------------------------------------

## Caso 3 - Copiar un script (COPY)

Crear `inicio.sh`:

``` sh
echo "Script ejecutado correctamente"
```

**Dockerfile**

``` dockerfile
FROM alpine:3.22
COPY inicio.sh /
RUN chmod +x /inicio.sh
CMD ["/inicio.sh"]
```

**Construir**

``` powershell
docker build -t lab3 .
```

**Probar**

``` powershell
docker run --rm lab3
```

------------------------------------------------------------------------

## Caso 4 - Directorio de trabajo (WORKDIR)

**Dockerfile**

``` dockerfile
FROM alpine:3.22
WORKDIR /datos
RUN echo "archivo" > prueba.txt
CMD ["ls","-l"]
```

**Construir**

``` powershell
docker build -t lab4 .
```

**Probar**

``` powershell
docker run --rm lab4
```

------------------------------------------------------------------------

## Caso 5 - Usuario no root (USER)

**Dockerfile**

``` dockerfile
FROM alpine:3.22
RUN adduser -D demo
USER demo
CMD ["whoami"]
```

**Construir**

``` powershell
docker build -t lab5 .
```

**Probar**

``` powershell
docker run --rm lab5
```

------------------------------------------------------------------------

## Caso 6 - Servidor Python

Crear `index.html`:

``` html
<h1>Docker Build Laboratorio</h1>
```

**Dockerfile**

``` dockerfile
FROM python:3.12-alpine
WORKDIR /app
COPY index.html .
EXPOSE 8000
CMD ["python","-m","http.server","8000"]
```

**Construir**

``` powershell
docker build -t lab6 .
```

**Probar**

``` powershell
docker run -d --name web-lab -p 8000:8000 lab6
```

Abrir:

`http://localhost:8000`

Detener:

``` powershell
docker stop web-lab
docker rm web-lab
```
