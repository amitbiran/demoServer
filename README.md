this is a demo server with a demo client created with node.js express.

to start the project simply create a clone of the repository. 

navigate to the project location and follow those steps:

-before we can run the project we need to create a database. 

1)in the project folder open the DB.js file using a text editor head to rows 5,6 and change the current user and password to your mysql username and password.
2)in the project folder open the createTable.js file using a text editor and change rows 15, 16 ,56,57 to your my sql user and password.
3) in the project folder open the routes folder and open index.js file using a text editor and change rows 45,46 to your mysql user and password.
4) using the commant propmpt navigate to the project folder and start the DB.js file (node DB.js)this will create a database named mydb.
5)start the createTable.js file (node createTable.js) this will create a table in your data base and will load all the information to it.
6)finally navigate to the bin folder inside the project folder and start the www file (node www).
7)open your internet explorer and type localhost:3000 it will open the site .
8) you can choose to serch for a specific name or use the filters by checking the checkboxes .
9) you can sort the table by clicking the headers.
* note if you do not wish to search for a specific name make sure the the textbox is empty.
