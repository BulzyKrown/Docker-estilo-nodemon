# Nodemon pero si nodemon

En este repositorio muestro como logre hacer una especie de nodemon. Actualizar datos en tiempo real sin apagar el contenedor.

### Creditos:
- Codigo fuente: https://youtu.be/IBGSxuRS3Ag
- Modo desarrollador: https://www.youtube.com/watch?v=5djiwvYbR-w
- Documentacion: https://docs.docker.com/compose/production/


## Comandos:
Antes que nada, deben armar la imagen con el comando:
```docker
docker build -t nodeimage .
```

Si quieres ejecutarlo de modo que se reflejen los cambios, ocupa el siguiente comando
```docker
docker compose -f docker-compose.dev.yml -d
```

el "-d" ayudara que este como un proceso en segundo plano ejecutandose.

Si quieres que se ejecute como si fuera produccion, usa el siguiente comando:
```docker
docker compose -f docker-compose.prod.yml -d
```
