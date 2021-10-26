### SERVER
TODO
https://codesource.io/getting-started-with-vue-apollo-graphql/
https://www.vuemastery.com/blog/part-2-building-a-graphql-server/

### CLIENT
TODO


### 
Queries:   

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