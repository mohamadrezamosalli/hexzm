import { defaultClient as apolloClient } from '../../apollo';
import router from '../../router';
import { SIGN_IN } from '../../graphql/mutations/authenticate';

export const signIn = ({ commit }, payload) => {
    apolloClient.mutate({ 
      mutation: SIGN_IN,
      variables: payload
    })
    .then(({ data }) => {
        // set access token
        localStorage.setItem('accessToken', data.signIn.token);
        // redirect to home page
        router.push('/');
    })
    .catch(err => console.error(err));
};