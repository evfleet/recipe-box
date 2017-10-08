
export const authTypes = `
  type User {
    id: Int
    email: String
    verified: Boolean
  }

  type AuthResponse {
    email: String!,
    verified: Boolean!,
    accessToken: String!,
    refreshToken: String!
  }

  type SuccessResponse {
    success: Boolean!
  }
`;

export const authMutations = `
  authenticate(email: String!, refreshToken: String!): AuthResponse!
  login(email: String!, password: String!): AuthResponse!
  register(email: String!, password: String!): SuccessResponse!
  verification(email: String!, verificationToken: String!): SuccessResponse
  requestResetPassword(email: String!): SuccessResponse
  resetPassword(email: String!, resetToken: String!, password: String!): SuccessResponse
`;