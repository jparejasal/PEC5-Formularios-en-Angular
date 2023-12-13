1. ¿Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?
    * ESCALABILIDAD: Los formularios reactivos se enfocan en escenarios complejos y dinámicos, son más robustos en materia de:              escalabilidad, reutilización y son comprobables; mientras que los formularios dirigidos por template no son tan escalables ni reutulizables, además, se enfocan en escenarios simples.
    * CONFIGURACIÓN DEL MODELO DEL FORMULARIO: con formularios reactivos, se define el modelo del formulario directamente en la clase componente; mientras que en los formularios dirigidos por template, el modelo del formulario es implícito, es decir, se define mediante el uso de directivas.
    * FLUJO DE DATOS: En formularios reactivos, cada elemento del formulario en la vista está directamente vinculado al modelo de formulario (funcionalidad síncrona), mientras que en los formularios basados en plantillas, cada elemento del formulario está vinculado a una directiva que gestiona el modelo de formulario internamente.
    * VALIDACIÓN DE FORMULARIOS: en formularios reactivos, la validación se realiza mediante funciones, mientras que en los formularios basados en plantillas, la validación se realiza usando directivas.


2. ¿Qué son, para qué sirven y cómo se utilizan las directivas ngModel y ngModelChange?
    * ngModel: directiva que crea una instancia de FormControl a partir de un modelo de dominio y la vincula a un elemento de control de formulario.
    * ngModelChange: es la directiva @Output de ngModel. Se dispara cuando cambia el modelo. No se puede utilizar sin la directiva ngModel.


3. ¿Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos por templates?
    Son indicadores CSS que permiten:
    * Establecer si el usuario ha sido visitado o cambiado el formulario.
    * Establecer si el formulario es válido.
    * Presentar diferentes experiencias o puntos de vista a los usuarios en varios escenarios.

    A continuación, la especificación de los estados:
    STATES      	                   CLASS IF TRUE	CLASS IF FALSE
    The control has been visited.	   ng-touched	    ng-untouched
    The control's value has changed.   ng-dirty         ng-pristine
    The control's value is valid.	   ng-valid	        ng-invalid


4. ¿Qué ventajas aportan los FormGroup en la composición de formularios?
    * Realiza un seguimiento del valor y el estado de validez de un grupo de instancias de FormControl.
    * Un FormGroup agrega los valores de cada FormControl secundario en un objeto, con cada nombre de control como clave.
    * Calcula su estado reduciendo los valores de estado de sus formularios hijos. Por ejemplo, si uno de los controles de un grupo no es válido, todo el grupo deja de ser válido.
