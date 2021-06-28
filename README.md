# basic-express-server  

### Author : Hatem Husnieh  

## install  
1. copy the link of the repo
1. clone the repo on your local machine by `git clone repo-url`
1. download independencies by `npm i`
1. create a `.env`, then cope the content of `.env.sample` file inside the `.env` file.
1. fill the variables of `.env`
1. run the app

## Deploy, Run and Test
- [test report](./src/test.png)
- [deployed link](https://hatem-basic-express-server.herokuapp.com/)
- [Pull Request](https://github.com/Hatemhusnieh/basic-express-server/pull/1)

### Setup  
#### `.env` requirement
  - `PORT` - port number  

#### Running the app  
- either:
  1. `npm start`
  1. `nodemon`
- Endpoint: `/person?name=[A name of your choice]`
  - returns Object
    ![Object](./src/result.png)  
#### Test 
- Unit test: `npm run test`
- Lint test: `npm run lint`

### UML:  
![uml](./src/uml.jpg)