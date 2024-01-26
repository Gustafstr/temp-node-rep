 // GLOBALS - NO WINDOW!!
 
 // __dirname - path to current directory
 // __filename - file name
 // require - function to use modules (commonJS)
 // module  - info about current module (file)
 // process - info about env where the program is being executed

 // Modules
 // You split your code in modules so you dont need to have all in one file, but you only execute one file. 

 // CommonJS, every file is module (by default)
 // Modules - Encapsulated code (only share minimum)
 const names = require('./4-firstmodule')
 const sayHi = require('./5-secoundmodule')
 const data = require('./6-alternative-flavor')
 require('./7-mind-grenade')

 sayHi('susan')
 sayHi(names.john)
 sayHi(names.peter)

