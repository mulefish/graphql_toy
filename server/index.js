const { ApolloServer, gql } = require("apollo-server");
const { posts, users } = require("./data.js");

const schema = gql(`
  type Query {
    currentUser: User
    postsByUser(userId: String!): [Post]
  }

  type User {
    id: ID!
    username: String!
    posts: [Post]
  }

  type Post {
    id: ID!
    content: String!
    userId: ID!
  }
`);

var data = {};
data.posts = posts;
data.users = users;
const currentUserId = "kermitt";

var resolvers = {
  Query: {
    currentUser: (parent, args) => {
      let user = data.users.find((u) => u.id === currentUserId);
      return user;
    },
    postsByUser: (parent, args) => {
      let posts = data.posts.filter((p) => p.userId === args.userId);
      return posts;
    },
  },

  // NEW
  User: {
    posts: (parent, args) => {
      let posts = data.posts.filter((p) => p.userId === parent.id);
      return posts;
    },
  },
};

const server = new ApolloServer({
  cors: {
    origin: "*", // wide open!
    credentials: true,
  },
  typeDefs: schema,
  resolvers: resolvers,
});

server.listen(4001).then(({ url }) => {
  console.log("API server running at localhost:4001");
});
