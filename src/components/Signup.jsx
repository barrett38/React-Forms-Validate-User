import { useState } from "react";

export default function Signup() {
  const [passwordsAreNotEqual, setPasswordsAreNotEqual] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const acquisitionChannel = fd.getAll("acquisition");
    const data = Object.fromEntries(fd.entries()); // returns object
    data.acquisition = acquisitionChannel;

    if (data.password !== data["confirm-password"]) {
      setPasswordsAreNotEqual(true);
      return;
    }

    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            required
            minLength={6}
          />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            required
          />
          <div className="control-error">
            {passwordsAreNotEqual && <p>Passwords must match</p>}
          </div>
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" required />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" required />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role" required>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms-and-conditions">
          <input
            type="checkbox"
            id="terms-and-conditions"
            name="terms"
            required
          />
          I agree to the terms and conditions
        </label>
      </div>
      {/* 
      .control,
      fieldset {
        margin-bottom: 1rem;
      }

      .control.no-margin {
        margin-bottom: 0;
      }

      .control label {
        display: block;
        font-size: 0.8rem;
        margin-bottom: 0.2rem;
        color: #9bafaf;
        text-transform: uppercase;
        font-weight: bold;
      }

      .control input {
        display: block;
        width: 100%;
        max-width: 15rem;
        padding: 0.5rem;
        font-size: 1rem;
        border-radius: 4px;
        border: 1px solid #758a8a;
        background-color: #869999;
        color: #142020;
      }

      .control select {
        display: block;
        width: 100%;
        max-width: 15rem;
        padding: 0.5rem;
        font-size: 1rem;
        border-radius: 4px;
        border: 1px solid #758a8a;
        background-color: #869999;
        color: #142020;
      }

      .control:has(input[type='checkbox']) {
        display: flex;
        align-items: center;
      }

      .control:has(input[type='checkbox']) label {
        margin: 0;
      }

      .control input[type='checkbox'] {
        display: inline-block;
        width: auto;
        max-width: none;
        margin-right: 0.5rem;
        border-radius: 0;
        border: none;
        background-color: transparent;
        color: #d9e2f1;
      }

      .control-error {
        color: #ffca99;
        font-size: 0.8rem;
        height: 2rem;
        padding: 0.5rem 0;
      }

      .control-error p {
        margin: 0;
      }

      .control-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 1rem;
      }
       */}

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button type="submit" className="button">
          Sign up
        </button>
      </p>
    </form>
  );
}
