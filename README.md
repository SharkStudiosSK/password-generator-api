q
# Password Generation Api

This is a Node.js application using the Express framework to create a REST API endpoint that generates a random password of a specified length.


## Installation
## Clone the repository:



```bash
  git clone https://github.com/Miskoking800/password-generator-api.git

```
    
## Install dependencies

```bash
cd password-generator-api
npm install
```
## Start the server

```bash
npm start
```
Access the API endpoint at https://localhost:3000/password/:length, where :length is the desired length of the password.
## Usage


## Example usage with cURL



```javascript
curl https://localhost:3000/password/12
```
## Example response


```responce
{
  "password": "jK$iSPTvl50n"
}
```



## License

This project is licensed under the MIT License. See the LICENSE file for details.

