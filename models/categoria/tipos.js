import { gql } from "apollo-server-express";

const tiposCategoria = gql `

    type categoria{
        descripcion:String!
    }

    type Query{
        
    }
`;