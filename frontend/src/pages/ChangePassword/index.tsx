import React from "react";
const ChangePassword: React.FC = () => {
  return (
    <main>
      <div className="container">
        <h1>Change Password</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" />
          <label htmlFor="password">New password:</label>
          <input type="text" name="password" />
          <label htmlFor="passwordConfirmation">Confirm password:</label>
          <input type="text" name="passwordConfirmation" />

          <button>Change Password</button>
        </form>
      </div>
    </main>
  );
};

export default ChangePassword;
