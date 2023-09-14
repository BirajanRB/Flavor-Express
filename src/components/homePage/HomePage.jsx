import React from "react";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <button>
        <NavLink to="/RegistrationPage"></NavLink>Sign up
      </button>
    </div>
  );
}
