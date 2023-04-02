Password Generator API
This is a Node.js application using the Express framework to create a REST API endpoint that generates a random password of a specified length.

Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/password-generator-api.git
Install dependencies:

bash
Copy code
cd password-generator-api
npm install
Start the server:

bash
Copy code
npm start
Access the API endpoint at http://localhost:3000/password/:length, where :length is the desired length of the password.

Usage
To use the API endpoint, make a GET request to http://localhost:3000/password/:length, where :length is the desired length of the password.

Example usage with cURL:

bash
Copy code
curl http://localhost:3000/password/12
Example response:

json
Copy code
{
  "password": "jK$iSPTvl50n"
}
License
This project is licensed under the MIT License. See the LICENSE file for details.
