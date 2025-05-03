import { gql } from '@apollo/client';

// Query to get the logged-in user's data
export const GET_ME = gql`
  query GetMe {
    me {
      _id
      username
      email
      savedBooks {
        bookId
        title
        authors
        description
        image
        link
      }
    }
  }
`;

// Query to search for books using the Google Books API (if applicable, replace with your backend implementation if needed)
export const SEARCH_BOOKS = gql`
  query SearchBooks($query: String!) {
    searchBooks(query: $query) {
      bookId
      title
      authors
      description
      image
      link
    }
  }
`;