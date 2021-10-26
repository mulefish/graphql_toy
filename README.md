### SERVER /server/index.js 
node index.js
OR
nodemon index.js  

### CLIENT /client/src/  
npm start 

### CHANGE LOG  
DONE: Define data gql  
DONE: simple query with apollo client   
DONE: complex query with apollo client  
DONE: simple query with PostMan  
DONE: complex query with PostMan  
DONE: CORS complex query from React  
TODO: MUTABLE concept ( like a Restful PUT )  
TODO: GET better dummy data  
TODO: Tests  
TODO: React side is -just- a button! A single button! 


### Example query:     
  
query Query{   
  postsByUser(userId: "mulefish") {  
  content  
    userId  
    id  
  }  
  currentUser {  
    posts {  
      id  
      content  
      userId  
    }  
  }  
}  
  
