import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Auth from "@aws-amplify/auth";

const initialState = {
  isAuthenticated: null as any,
  user: null as any,
  cognitoGroup: [null as any],
  loadUserStatus: "idle",
  loadUserError: null as any,
  signInStatus: "idle",
  signInError: null as any,
  signUpStatus: "idle",
  signUpError: null as any,
  checkEmailExistStatus: "idle",
  checkEmailExistError: null as any,
  emailConfirmStatus: "idle",
  emailConfirmError: null as any,
  resendConfirmationCodeStatus: "idle",
  resendConfirmationCodeError: null as any,
  forgotPasswordStatus: "idle",
  forgotPasswordError: null as any,
  forgotPassWordSubmitStatus: "idle",
  forgotPassWordSubmitError: null as any,
  changePasswordStatus: "idle",
  changePasswordError: null as any,
  signOutStatus: "idle",
  signOutError: null as any,
};

export const loadUser = createAsyncThunk("auth/loadUser", async () => {
  const response = await Auth.currentAuthenticatedUser();
  return response;
});

export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }: any) => {
    const response = await Auth.signIn(email, password);
    return response;
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ username, password, email }: any) => {
    const emailLowerCase = email && email.toLowerCase && email.toLowerCase();
    const response = await Auth.signUp({
      username,
      password,
      attributes: { email: emailLowerCase },
    });
    return response;
  }
);

export const emailConfirm = createAsyncThunk(
  "auth/emailConfirm",
  async ({ username, authenticationCode }: any) => {
    const response = await Auth.confirmSignUp(username, authenticationCode);
    return response;
  }
);

export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async ({ username }: any) => {
    const response = await Auth.forgotPassword(username);
    return response;
  }
);

export const forgotPassWordSubmit = createAsyncThunk(
  "auth/forgotPassWordSubmit",
  async ({ username, code, new_password }: any) => {
    const response = await Auth.forgotPasswordSubmit(
      username,
      code,
      new_password
    );
    return response;
  }
);

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async ({ user, old_password, new_password }: any) => {
    const response = await Auth.changePassword(
      user,
      old_password,
      new_password
    );
    return response;
  }
);

export const resendConfirmationCode = createAsyncThunk(
  "auth/resendConfirmationCode",
  async ({ username }: any) => {
    const response = await Auth.resendSignUp(username);
    return response;
  }
);

export const signOut = createAsyncThunk("auth/signOut", async () => {
  const response = await Auth.signOut();
  return response;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    //有API call 的不能放这里
  },
  extraReducers(builder) {
    builder
      // Cases for status of loadUser (pending, fulfilled, and rejected)
      .addCase(loadUser.pending, (state, action) => {
        state.loadUserStatus = "loading";
      })
      .addCase(loadUser.fulfilled, (state, action) => {
        state.loadUserStatus = "succeeded";
        state.isAuthenticated = true;
        state.user = action.payload;
        state.cognitoGroup =
          action.payload.signInUserSession.accessToken.payload[
            "cognito:groups"
          ];
      })
      .addCase(loadUser.rejected, (state, action) => {
        state.loadUserStatus = "failed";
        state.isAuthenticated = false;
        state.user = null;
        state.cognitoGroup = ["unAuthenticated"];

        state.signInError = action.error.message;
      })
      // Cases for status of signIn (pending, fulfilled, and rejected)
      .addCase(signIn.pending, (state, action) => {
        state.signInStatus = "loading";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.signInStatus = "succeeded";
        state.isAuthenticated = true;
        state.user = action.payload;
        console.log(state, action.payload, 66554433)
        state.cognitoGroup =
          action.payload.signInUserSession.accessToken.payload[
            "cognito:groups"
          ];
      })
      .addCase(signIn.rejected, (state, action) => {
        state.signInStatus = "failed";
        state.isAuthenticated = false;
        state.user = { username: "", attributes: { email: "" } };
        state.cognitoGroup = ["unAuthenticated"];
        state.signInError = action.error.message;
      })

      // Cases for status of signUp (pending, fulfilled, and rejected)
      .addCase(signUp.pending, (state, action) => {
        state.signUpStatus = "loading";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.signUpStatus = "succeeded";
        //! need to do later
      })
      .addCase(signUp.rejected, (state, action) => {
        state.signUpStatus = "failed";
        state.signUpError = action.error.message;
      })

      // Cases for status of emailConfirm (pending, fulfilled, and rejected)
      .addCase(emailConfirm.pending, (state, action) => {
        state.emailConfirmStatus = "loading";
      })
      .addCase(emailConfirm.fulfilled, (state, action) => {
        state.emailConfirmStatus = "succeeded";
      })
      .addCase(emailConfirm.rejected, (state, action) => {
        state.emailConfirmStatus = "failed";
        state.emailConfirmError = action.error.message;
      })
      // Cases for status of forgotPassword (pending, fulfilled, and rejected)
      .addCase(forgotPassword.pending, (state, action) => {
        state.forgotPasswordStatus = "loading";
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.forgotPasswordStatus = "succeeded";
        //! need to do later
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.forgotPasswordStatus = "failed";
        state.forgotPasswordError = action.error.message;
      })
      // Cases for status of resendConfirmationCode (pending, fulfilled, and rejected)
      .addCase(resendConfirmationCode.pending, (state, action) => {
        state.resendConfirmationCodeStatus = "loading";
      })
      .addCase(resendConfirmationCode.fulfilled, (state, action) => {
        state.resendConfirmationCodeStatus = "succeeded";
        //! need to do later
      })
      .addCase(resendConfirmationCode.rejected, (state, action) => {
        state.resendConfirmationCodeStatus = "failed";
        state.resendConfirmationCodeError = action.error.message;
      })
      // Cases for status of forgotPassWordSubmit (pending, fulfilled, and rejected)
      .addCase(forgotPassWordSubmit.pending, (state, action) => {
        state.forgotPassWordSubmitStatus = "loading";
      })
      .addCase(forgotPassWordSubmit.fulfilled, (state, action) => {
        state.forgotPassWordSubmitStatus = "succeeded";
        //! need to do later
      })
      .addCase(forgotPassWordSubmit.rejected, (state, action) => {
        state.forgotPassWordSubmitStatus = "failed";
        state.forgotPassWordSubmitError = action.error.message;
      })
       // Cases for status of changePassword (pending, fulfilled, and rejected)
       .addCase(changePassword.pending, (state, action) => {
        state.changePasswordStatus = "loading";
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.changePasswordStatus = "succeeded";
        //! need to do later
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.changePasswordStatus = "failed";
        state.changePasswordError = action.error.message;
      })
      // Cases for status of signOut (pending, fulfilled, and rejected)
      .addCase(signOut.pending, (state, action) => {
        state.signOutStatus = "loading";
      })
      .addCase(signOut.fulfilled, (state, action) => {
        state.signOutStatus = "succeeded";
        state.isAuthenticated = false;
        state.user = { username: "", attributes: { email: "" } };
        state.cognitoGroup = ["unAuthenticated"];
      })
      .addCase(signOut.rejected, (state, action) => {
        state.signOutStatus = "failed";
        state.isAuthenticated = false;
        state.user = { username: "", attributes: { email: "" } };
        state.cognitoGroup = ["unAuthenticated"];
      });
  },
});

export default authSlice.reducer;
