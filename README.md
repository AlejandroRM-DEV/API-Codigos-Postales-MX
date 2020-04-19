# API de códigos postales de México

## Rutas
```text
/api/codigos-postales
```
```text
/api/codigos-postales/:cp
```
```text
/api/codigos-postales/estados/:estado
```
```text
/api/codigos-postales/:estado/municipios/:municipio
```
```text
/api/codigos-postales/:estado/municipios/:municipio/ciudades/:ciudad
```

### Filtros
Permite seleccionar solo algunos campos, al estar presente se aplicará también un GROUP BY de los campos
```text
?filtros[campos]=nombre&filtros[campos]=nombre
```

### Ejemplos
```text
/api/codigos-postales/estados/Baja%20California%20Sur/municipios/Comondu/ciudades/Ciudad%20Constitucion
```
```json
[
    {
        "codigo_postal": "23600",
        "estado": "Baja California Sur",
        "municipio": "Comondú",
        "ciudad": "Ciudad Constitución",
        "asentamiento": "Zona Centro",
        "tipo_asentamiento": "Colonia"
    },
    ...
]
```
```text
/api/codigos-postales?filtros[campos]=estado
```
```json
[
    {
        "estado": "Aguascalientes"
    },
    {
        "estado": "Baja California"
    },
    ...
]
```
```text
/api/codigos-postales/estados/Aguascalientes?filtros[campos]=estado&filtros[campos]=municipio
```
```json
[
    {
        "estado": "Aguascalientes",
        "municipio": "Aguascalientes"
    },
    {
        "estado": "Aguascalientes",
        "municipio": "Asientos"
    },
    ...
]
```

## Base de datos
```sql
create table codigos_postales
(
    id                int auto_increment
        primary key,
    codigo_postal     varchar(5)  not null,
    estado            varchar(35) not null,
    municipio         varchar(50) not null,
    ciudad            varchar(50) not null,
    asentamiento      varchar(80) not null,
    tipo_asentamiento varchar(25) not null
);

create index codigos_codigo_index
    on codigos_postales (codigo_postal);
```