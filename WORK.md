How to run it
-------------

	npm install
	node app.js

open http://localhost:3000/index.html

Already done
------------

###Server side : 

* Initialization of the http server and mongo db
* Rest API for forms : CRUD

see app.js and app/ directory

###Client side :

* All the client side is in the public/ dir
* Contains BootstrapFormBuilder (https://github.com/minikomi/Bootstrap-Form-Builder)
* Also contains resources/js/rest.js : jquery functions to call the rest API
These funcitons are bound to buttons to call them and to a debug div to print the result (defined in index.html direclty)
* Modifications in /assets/js/views/my-form.js and /assets/js/collections/my-form-snippets.js
These modifications allow to build and save the model of the currently built form and make it available to rest.js.

To be done
----------

###Server side :

* Defining the DB model precisely to be able to validate forms on the server
* Automated tests for Model manipulation in the DB
* Automated tests for API calls

###Client side :

* Enabling to load a model form the server : most probably modifying the collection and calling the 'good' render method should do the trick
* Extracting new code from BootstrapFormBuilder code
* The model save is currently quite dirty (global var and method) --> change this
* Developping a decent UI for rest calls : design a real app
* Automated tests


Problems
--------

* Calling the create method of the API with the actual form model crashes the server
* The model currently used will most probably not be sufficient and will have to be enriched -> consequences ???
