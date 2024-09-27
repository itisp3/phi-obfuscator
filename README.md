This is the front end code for the PHI Obfuscator application.

Instructions:
1. Use the master branch to fork and/or clone this repo locally
2. Install npm locally
3. Navigate to the top level of this repo and run the command 'npm run dev'
4. Use a browser window to navigate to http://localhost:3000

This should open the application which has a simple user interface that includes
1. A button to choose files -  this button will open a file explorer window to choose files.  Holding the ctrl button on Windows will allow for multiple files to be selected
2. An Upload File button - this button sends the files selected to the API for Obfuscation.

Results will be returned for each file in an alert window with the message received from the API
