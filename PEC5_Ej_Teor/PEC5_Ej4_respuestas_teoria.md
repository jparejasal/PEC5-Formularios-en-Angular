1. ¿Qué son, para qué sirven y cómo se utilizan FormControl, FormGroup yF ormBuilder?
    * FormControl: realiza un seguimiento del valor y el estado de validación de un control de formulario individual.

    * FormGroup: realiza un seguimiento de los mismos valores y estados de una colección de controles de formulario.

    * FormBuilder: 
        a. Proporciona sintaxis que acorta la creación de instancias de FormControl, FormGroup o FormArray.
        b. Reduce la cantidad de texto repetitivo necesario para crear formas complejas.
        c. Crea un AbstractControl a partir de una configuración especificada por el usuario.

2. Busca en la página oficial de Angular (o utiliza un recurso de O’Reilly) en el que se especifiquen todos los validadores que incluye Angular para ser utilizados en los formularios reactivos. Construye una tabla de resumen de estos.
|    VALIDADOR           | DEFINICIÓN |
| :--------------------- |
| min,                   | requiere que el valor del control sea mayor o igual al número proporcionado.|
| max,                   | requiere que el valor del control sea menor o igual al número proporcionado.|
| required,              | requiere que el control tenga un valor que no esté vacío.|
| requiredTrue,          | requiere que el valor del control sea verdadero. Se usa comúnmente para las casillas de verificación obligatorias.|
| email,                 | requiere que el valor del control pase una prueba de validación por correo electrónico.|
| minLength,             | requiere que la longitud del valor del control sea mayor o igual a la longitud mínima proporcionada.|
| maxLength              | requiere que la longitud del valor del control sea menor o igual a la longitud máxima proporcionada.|
| pattern,               | requiere que el valor del control coincida con un patrón de expresión regular.|
| nullValidator,         | No realiza ninguna operación.|
| compose,               | Establece varios validadores en una única función que devuelve la unión de los mapas de error individuales para el control proporcionado |
| composeAsync,          | Establece varios validadores asíncronos en una única función que devuelve la unión de los objetos de error individuales para el control proporcionado.|



3. ¿Qué son, cuáles son y para qué sirven los estados en los formularios reactivos?
 Son indicadores CSS que permiten:
    * Establecer si el usuario ha sido visitado o cambiado el formulario.
    * Establecer si el formulario es válido.
    * Presentar diferentes experiencias o puntos de vista a los usuarios en varios escenarios.

    A continuación, la especificación de los estados:
    |              STATES              | CLASS IF TRUE | CLASS IF FALSE |
    | :------------------------------- | :------------ | :------------- |
    | The control has been visited.    | ng-touched    | ng-untouched   |
    | The control's value has changed. | ng-dirty      | ng-pristine    |
    | The control's value is valid.    | ng-valid      | ng-invalid     |
