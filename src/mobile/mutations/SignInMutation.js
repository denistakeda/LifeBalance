import Relay from 'react-relay';

export default class SignInMutation extends Relay.Mutation {
  getMutation() {
    return Relay.QL`mutation { signIn }`;
  }

  getVariables() {
    return {email: this.props.email, password: this.props.password};
  }

  getFatQuery() {
    return Relay.QL`
      fragment on Viewer {
        user {
          id
          email
          name
          imageUrl
        }
      }
    `;
  }

  getConfigs() {
    return [{
      type: 'REQUIRED_CHILDREN',
      children: [
        Relay.QL`
          fragment on SignInPayload {
            user {
              id
              email
            }
            token
          }
        `,
      ],
    }];
  }
}
