"use client";
import "./SignupWidget.css";
import PropTypes from "prop-types";
import { useState } from "react";

const SignupWidget = ({ title, content, simulateNetworkRequestTime }) => {
  // State to manage the email input and messages
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setBusy(true);
      // Wait 2 seconds (simulating a network request)
      await new Promise((resolve) => setTimeout(resolve, simulateNetworkRequestTime));
      setMessage(`Thanks for subscribing, ${email}!`);
      setIsSubscribed(true);
    } finally {
      setBusy(false);
    }
  }

  return (
    <form
      data-testid={"signupWidget"}
      className="flex flex-col p-6 border-2 border-solid border-zinc-100 dark:border-zinc-700/40 rounded-md w-full xl:max-w-md gap-y-3"
      onSubmit={handleSubmit}
      autoComplete={"on"}
    >
      <h2 data-testid={"signupWidgetTitle"} className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>
      {isSubscribed && (
        <p data-testid={"signupWidgetMessage"} className="text-base text-zinc-600 dark:text-zinc-400">
          {message}
        </p>
      )}
      {!isSubscribed && (
        <>
          <p data-testid={"signupWidgetContent"} className="text-zinc-600 dark:text-zinc-400">
            {content}
          </p>
          <div className="flex flex-row gap-y-4 justify-start">
            <input
              placeholder="Email address"
              type="email"
              data-testid={"signupWidgetInput"}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              disabled={busy}
              className="p-2 border-2 border-solid border-zinc-100 dark:border-zinc-400/40 rounded-md flex-1 disabled:opacity-70 disabled:cursor-not-allowed dark:bg-zinc-700/20 dark:text-zinc-100 mr-4"
            />
            <button
              type="submit"
              data-testid={"signupWidgetButton"}
              disabled={busy}
              className="px-0.5 w-12 text-center rounded-md bg-zinc-800 dark:bg-zinc-700 text-zinc-100 text-sm cursor-pointer hover:bg-zinc-800/75 dark:hover:bg-zinc-700/60 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {busy ? "Joining..." : "Join"}
            </button>
          </div>
        </>
      )}
    </form>
  );
};

SignupWidget.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  simulateNetworkRequestTime: PropTypes.number,
};

SignupWidget.defaultProps = {
  simulateNetworkRequestTime: 2000,
};

export default SignupWidget;
