Etapas de un projecto:

Local - Trabajo en mi pc.
Staging - Etapa de preparacion(Preparo todo para subir online).
Remoto - Etapa donde mi trabajo ya esta disponible en la nube.

Vocabulario de GIT:

Repositorio => Es un projecto

Commits => Modificaciones o versiones. Cada commit (O versión), recibe un comentario descriptivo indicando los cambios realizados con respecto a la version anterior.

Repositorio en local => Version de nuestro projecto en la PC local.
Repositorio remoto => Version de nuestro projecto en la nube.

Comandos de git-

{Git} {status}

Por que se arranca con git? Porque eso le indica a la consola la tool a utilizar
Algunos de los comandos que posee git son:
Git status - Indica el estado de mi archivo en el repositorio local
Git add - Comando usado para preparar los archivos indicados para que sean subidos a la net. Algo muy comun es utilizar el . para indicar todos los files del path donde me encuentro ubicado; Se debe indicar el lugar a donde subir a fin de que todos los commit sean en el mismo target path
Git commit - ; Se suele subir con el parametro -m para indicar informacion sobre el commit (y/o los cambios aplicados con la nueva version que subimos)
Git push - Comando usado para subir los files previamente logueados con add al directorio objetivo
Git log - Permite ver el historial de modificaciones del archivo

Un ejemplo que indico el profe sobre como es util el git:

En jobs donde trabajemos por etapas, y necesitemos dividir las tareas, lo mejor es usar GIT para hacer un commit de cada etapa:

a. Creacion de fichero
b. Creacion de server
c. Creacion de usuario
d. Creacion de 