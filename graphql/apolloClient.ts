import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, from } from '@apollo/client';
// import { onError } from '@apollo/client/link/error';

const httpLink = new HttpLink({ uri: 'https://heidiservices.com/api/v1/profile/query' });

const authMiddleware = new ApolloLink((operation, forward) => {
    // add the authorization to the headers
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyMzgsImV4cCI6MTY0NzMyNDQ2NywiaXNzIjoiZ2luLWJsb2cifQ.orr0GXTR4UBk9PO5smxiiCvOPSUqFAR89x_w_dWyh1E';
    operation.setContext(({ headers = {} }) => ({
        headers: {
            ...headers,
            // Authorization: token,
            Authorization: `Bearer ${token}`,
            token, // this token should be deleted later
        },
    }));

    return forward(operation);
});

// const logoutLink = onError(({ operation }) => {
//   // raw "response" set by apollo-link-http https://github.com/apollographql/apollo-link/issues/297#issuecomment-593443710
//   const { response } = operation.getContext();
//   if (response.status === 401) {
//     authModel.logout();
//   }
// });

export const apolloClient = new ApolloClient({
    link: from([authMiddleware, httpLink]),
    cache: new InMemoryCache(),
});
