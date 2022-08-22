# ExampleBot
* A basic outline of a discord bot written in Javascript

## Commands
* npm i
  * use this command to install the dependencies from the package.json file and a package-lock.json file
* npm start
  * will run node index.js to start up the bot
* npm run dev
  * will deploy any new commands created as guild commands to the given test server then run nodemon on the index.js file
* npm deploy-commands
  * used to deploy fully developed commands as application commands that can be used on all servers
  
## Environment Variables
* TOKEN="Discord Bot secret Token for connecting the bot client"
* MONGODB_URL="url to be able to fetch and insert to a mongodb backend server"
* CLIENT_ID="The Client Id of your discord bot (User ID)"
* TESTSERVER="The server ID for deploying commands during testing to (deploys to this server as guild commands)"
* ADMIN="The User Id of a user with admin privelages (Can be used if you want to create Admin only commands)"

## Notes
* Set the environment variables either in a .env file or a server secrets setup
