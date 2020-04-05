# Práctica AJAX Jquery

## Abstract

Este código está preparado para compensar una práctica común de AJAX usando la librería JQuery.

## Files

* /api
    * user.json **Fake api to make HTTP Requests, contains JSON**
* /assets
    * functions.js **Functions and event binding to HTML elements**
* index.html **View to make it works**
* README.md

## Exercises

1. Crea una función _initialize()_ en functions.js que se ejecute al principio y muestre un mensaje por consola. "init"
2. Crea una función _loadData()_ que realice una petición GET y muestre por consola los datos que devuelve. Llámala desde _initialize()_
3. Añade los valores correspondientes del contenido a la vista con selectores de ID. $('#id').html('value');
4. Añade un botón al HTML. Haz que cuando se clicke, llame al _loadData()_ para que recargue los datos sin actualizar. El binding del evento tiene que realizarse con jQuery.
