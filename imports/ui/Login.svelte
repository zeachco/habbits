<script>
  import { Meteor } from "meteor/meteor";

  async function handleLogin() {
    const users = await Meteor.users.find().fetch();
    console.log("login...", users);
  }

  Meteor.loginAsAdmin = function (password, callback) {
    // Create a login request with admin: true, so our loginHandler can handle this request
    const loginRequest = { admin: true, password: password };

    // Send the login request 📤
    Accounts.callLoginMethod({
      methodArguments: [loginRequest],
      userCallback: callback,
    });
  };
  // Meteor.loginAsAdmin("admin-password");
</script>

<button on:click={handleLogin}>Login</button>
