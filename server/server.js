const { ApolloServer, gql } = require('apollo-server');


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

data.posts = [
    {
        id: 'xyz-1',
        content: "First Post - Hello world",
        userId: 'abc-1',
    },
    {
        id: 'xyz-2',
        content: "Second Post - Hello again",
        userId: 'abc-1',
    },
    {
        id: 'xyz-3',
        content: "Random Post",
        userId: 'abc-2',
    }
];

data.users = [
    {
        id: 'abc-1',
        username: "andy25",
    },
    {
        id: 'abc-2',
        username: "randomUser",
    }
];


const currentUserId = 'abc-1';

var resolvers = {
    Query: {
        currentUser: (parent, args) => {
            let user = data.users.find(u => u.id === currentUserId);
            return user;
        },
        postsByUser: (parent, args) => {
            let posts = data.posts.filter(p => p.userId === args.userId);
            return posts
        },
    },

    // NEW
    User: {
        posts: (parent, args) => {
            let posts = data.posts.filter(p => p.userId === parent.id);
            return posts;
        }
    }
};


const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers,
});

server.listen(4001).then(({ url }) => {
    console.log('API server running at localhost:4001');
});