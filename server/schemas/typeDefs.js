const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Profile {
        _id: ID
        username: String
    }
    type Player {
        bDay: String
        espnID: String
        espnName: String
        espnHeadshot: String
        teamID: String
        weight: String
        pos: String
        school: String
        cbsPlayerID: String
        jerseyNum: String
        longName: String
        height: String
        cbsPlayerIDFull: String
        cbsShortName: String
        playerID: String
        team: String
        exp: String
        age: String
        espnLink: String
        lastFetched: String
    }
    type Auth {
        token: ID
        user: Profile
    }
    type Query {
        profiles: [Profile]
        players(positions: [String]): [Player]
    }
    type Mutation {
        addProfile(username: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        updateEmail(userId: ID!, newEmail: String!): Profile
        updatePassword(userId: ID!, newPassword: String!): Boolean
    }
`;

module.exports = typeDefs;