import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GenericPageSection } from "./generic_text";

export const AUTH_STORAGE_KEY = "anyhjs_authenticated";

export type AuthStatus = {
  isAuthenticated: boolean;
};

export type LoginProps = {
  setAuth: (auth: AuthStatus) => void;
  auth: AuthStatus;
};

type RegisterProps = {
  setAuth: (auth: AuthStatus) => void;
};

const panelClass =
  "relative mx-auto flex max-w-[420px] flex-col gap-6 overflow-hidden rounded-[1.25rem] border border-[rgba(26,26,26,0.10)] bg-[radial-gradient(circle_at_12%_10%,rgba(189,255,0,0.10),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.86)_0%,rgba(255,255,255,0.64)_100%)] px-7 pt-8 pb-9 shadow-[0_22px_60px_rgba(0,0,0,0.10),0_6px_18px_rgba(0,0,0,0.06)] before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(135deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.25)_35%,rgba(255,255,255,0)_70%)] before:opacity-75";

const hintClass = "m-0 text-[0.85rem] text-[rgba(26,26,26,0.70)]";
const fieldClass = "relative z-10 flex flex-col gap-[0.55rem]";
const labelClass = "text-[0.85rem] font-bold uppercase tracking-[0.14em] text-[rgba(26,26,26,0.72)]";
const inputClass =
  "w-full rounded-[0.85rem] border border-[rgba(26,26,26,0.14)] bg-white/80 px-[0.9rem] py-[0.8rem] text-[0.95rem] text-[rgba(26,26,26,0.92)] shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_10px_22px_rgba(0,0,0,0.06)] outline-none transition-[border-color,box-shadow,background-color,transform] duration-200 placeholder:text-[rgba(26,26,26,0.45)] focus:-translate-y-px focus:border-[rgba(189,255,0,0.70)] focus:bg-white/90 focus:shadow-[0_0_0_3px_rgba(189,255,0,0.18),0_18px_40px_rgba(0,0,0,0.10)]";
const underlineLinkClass =
  "relative inline-flex w-fit cursor-pointer text-[0.8rem] text-[rgba(26,26,26,0.78)] transition-[color,transform] duration-200 after:absolute after:left-0 after:-bottom-[0.15rem] after:h-px after:w-0 after:bg-[rgba(189,255,0,0.85)] after:transition-[width] after:duration-200 hover:-translate-y-px hover:text-[rgba(26,26,26,0.95)] hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(189,255,0,0.9)] focus-visible:ring-offset-[3px] focus-visible:ring-offset-transparent focus-visible:rounded";
const footerLinkClass =
  "relative font-semibold text-[rgba(26,26,26,0.86)] after:absolute after:left-0 after:-bottom-[0.15rem] after:h-px after:w-0 after:bg-[rgba(189,255,0,0.85)] after:transition-[width] after:duration-200 hover:after:w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(189,255,0,0.9)] focus-visible:ring-offset-[3px] focus-visible:ring-offset-transparent focus-visible:rounded";
const submitClass =
  "relative z-10 mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full border-0 bg-[linear-gradient(135deg,#BDFF00_0%,#72ffb6_50%,#BDFF00_100%)] bg-[length:200%_100%] bg-[position:0%_0] px-4 py-[0.9rem] text-[0.95rem] font-semibold uppercase tracking-[0.12em] text-black shadow-[0_16px_40px_rgba(0,0,0,0.18)] transition-[background-position,transform,box-shadow] duration-300 hover:-translate-y-px hover:bg-[position:100%_0] hover:shadow-[0_20px_50px_rgba(0,0,0,0.22)] active:translate-y-0 active:shadow-[0_10px_24px_rgba(0,0,0,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(189,255,0,0.9)] focus-visible:ring-offset-[3px] focus-visible:ring-offset-transparent disabled:cursor-not-allowed disabled:opacity-60 animate-[auth-form-glow_4s_ease-in-out_infinite]";
const successBannerClass =
  "relative z-10 mb-2 rounded-xl border border-[rgba(22,101,52,0.25)] bg-[rgba(22,101,52,0.10)] p-3 text-[0.875rem] text-[rgba(22,101,52,0.95)] shadow-[0_12px_26px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.05)]";

const demoDelay = () => new Promise((resolve) => setTimeout(resolve, 500));

export function Login({ setAuth, auth }: LoginProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  if (auth.isAuthenticated) {
    return (
      <div className="pt-16">
        <GenericPageSection label="Account" title="You’re already logged in" subtitle="You can manage your details, orders and preferences from your account.">
          <div className={panelClass}>
            <div className="relative z-10 flex items-center justify-between gap-4">
              <p className={hintClass}>You’re currently signed in to AnyHJS.</p>
            </div>

            <Link to="/account" className={submitClass}>
              <span className="text-black">Go to my account</span>
            </Link>
          </div>
        </GenericPageSection>
      </div>
    );
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    await demoDelay();
    localStorage.setItem(AUTH_STORAGE_KEY, "true");
    setAuth({ isAuthenticated: true });
    setIsSubmitting(false);
    navigate("/account", { replace: true });
  };

  return (
    <div className="pt-16">
      <GenericPageSection label="Account" title="Login to Your Account" subtitle="Access your personalised wardrobe, saved favourites and orders.">
        <form className={panelClass} onSubmit={handleSubmit} noValidate>
          <div className="relative z-10 flex items-center justify-between gap-4">
            <p className={hintClass}>Use the email address or username you registered with AnyHJS.</p>
          </div>

          <div className={fieldClass}>
            <label htmlFor="login-email" className={labelClass}>Email or username</label>
            <input id="login-email" name="email" type="text" autoComplete="username" className={inputClass} placeholder="you@example.com or your username" />
          </div>

          <div className={fieldClass}>
            <label htmlFor="login-password" className={labelClass}>Password</label>
            <input id="login-password" name="password" type="password" autoComplete="current-password" className={inputClass} placeholder="••••••••" />

            <div className="relative z-10 mt-2 flex items-center justify-between gap-4 text-[0.8rem] text-[rgba(26,26,26,0.70)]">
              <label className="inline-flex cursor-pointer select-none items-center gap-2">
                <input
                  type="checkbox"
                  className="relative h-[14px] w-[14px] appearance-none rounded-[4px] border border-[rgba(26,26,26,0.20)] bg-white/90 transition-[border-color,background-color,box-shadow,transform] duration-150 checked:border-[rgba(189,255,0,0.85)] checked:bg-[rgba(189,255,0,0.92)] checked:shadow-[0_0_0_3px_rgba(189,255,0,0.18)] checked:after:content-[''] checked:after:absolute checked:after:inset-[2px] checked:after:rounded-[3px] checked:after:bg-[rgba(26,26,26,0.90)] focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(189,255,0,0.18),0_0_0_1px_rgba(189,255,0,0.35)]"
                />
                <span className="text-[rgba(26,26,26,0.78)]">Remember me</span>
              </label>

              <Link to="/forgot-password" className={underlineLinkClass}>Forgot password?</Link>
            </div>
          </div>

          <button type="submit" className={submitClass} disabled={isSubmitting}>
            <span>{isSubmitting ? "Logging in..." : "Log in"}</span>
          </button>

          <p className="relative z-10 mt-4 text-center text-[0.85rem] text-[rgba(26,26,26,0.70)]">
            New to AnyHJS? <Link to="/register" className={footerLinkClass}>Create an account</Link>
          </p>
        </form>
      </GenericPageSection>
    </div>
  );
}

export function Register({ setAuth }: RegisterProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    await demoDelay();
    localStorage.setItem(AUTH_STORAGE_KEY, "true");
    setAuth({ isAuthenticated: true });
    setIsSubmitting(false);
    navigate("/account", { replace: true });
  };

  return (
    <div className="pt-16">
      <GenericPageSection label="Account" title="Join AnyHJS Today" subtitle="Save your favourites, track orders and unlock personalised outfits.">
        <form className={panelClass} onSubmit={handleSubmit} noValidate>
          <div className="relative z-10 flex items-center justify-between gap-4">
            <p className={hintClass}>Fill in your details below to get started with AnyHJS.</p>
          </div>

          <div className={fieldClass}>
            <label htmlFor="register-name" className={labelClass}>Name</label>
            <input id="register-name" name="name" type="text" autoComplete="name" className={inputClass} placeholder="Your name" />
          </div>

          <div className={fieldClass}>
            <label htmlFor="register-email" className={labelClass}>Email address</label>
            <input id="register-email" name="email" type="email" autoComplete="email" className={inputClass} placeholder="you@example.com" />
          </div>

          <div className={fieldClass}>
            <label htmlFor="register-password" className={labelClass}>Password</label>
            <input id="register-password" name="password" type="password" autoComplete="new-password" className={inputClass} placeholder="Create a password" />
          </div>

          <div className={fieldClass}>
            <label htmlFor="register-password-confirm" className={labelClass}>Confirm password</label>
            <input id="register-password-confirm" name="passwordConfirm" type="password" autoComplete="new-password" className={inputClass} placeholder="Repeat your password" />
          </div>

          <div className="relative z-10 flex items-start gap-2">
            <label className="inline-flex cursor-pointer select-none items-start gap-2">
              <input
                type="checkbox"
                name="terms"
                className="relative mt-[0.2rem] h-[14px] w-[14px] appearance-none rounded-[4px] border border-[rgba(26,26,26,0.20)] bg-white/90 transition-[border-color,background-color,box-shadow,transform] duration-150 checked:border-[rgba(189,255,0,0.85)] checked:bg-[rgba(189,255,0,0.92)] checked:shadow-[0_0_0_3px_rgba(189,255,0,0.18)] checked:after:content-[''] checked:after:absolute checked:after:inset-[2px] checked:after:rounded-[3px] checked:after:bg-[rgba(26,26,26,0.90)] focus-visible:outline-none focus-visible:shadow-[0_0_0_3px_rgba(189,255,0,0.18),0_0_0_1px_rgba(189,255,0,0.35)]"
              />
              <span className="text-[0.85rem] leading-[1.55] text-[rgba(26,26,26,0.78)]">
                I agree to the <Link to="/terms-and-conditions" className={footerLinkClass}>Terms &amp; Conditions</Link> and{" "}
                <Link to="/privacy-policy" className={footerLinkClass}>Privacy Policy</Link>.
              </span>
            </label>
          </div>

          <button type="submit" className={submitClass} disabled={isSubmitting}>
            <span>{isSubmitting ? "Creating account..." : "Create account"}</span>
          </button>

          <p className="relative z-10 mt-4 text-center text-[0.85rem] text-[rgba(26,26,26,0.70)]">
            Already have an account? <Link to="/login" className={footerLinkClass}>Log in</Link>
          </p>
        </form>
      </GenericPageSection>
    </div>
  );
}

export function ForgotPassword() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatusMessage(null);
    setIsSubmitting(true);

    await demoDelay();
    form.reset();
    setStatusMessage("If an account exists for that email, a reset link has been sent.");
    setIsSubmitting(false);
  };

  return (
    <div className="pt-16">
      <GenericPageSection label="Account" title="Reset Your Password" subtitle="Enter the email linked to your AnyHJS account and we’ll send you a reset link.">
        <form className={panelClass} onSubmit={handleSubmit} noValidate>
          <div className="relative z-10 flex items-center justify-between gap-4">
            <p className={hintClass}>If there’s an AnyHJS account associated with this email, you’ll receive a message with a secure link to create a new password.</p>
          </div>

          {statusMessage && <div className={successBannerClass}>{statusMessage}</div>}

          <div className={fieldClass}>
            <label htmlFor="forgot-email" className={labelClass}>Email address</label>
            <input id="forgot-email" name="email" type="email" autoComplete="email" className={inputClass} placeholder="you@example.com" />
          </div>

          <button type="submit" className={submitClass} disabled={isSubmitting}><span>{isSubmitting ? "Sending reset link..." : "Send reset link"}</span></button>

          <p className="relative z-10 mt-4 text-center text-[0.85rem] text-[rgba(26,26,26,0.70)]">
            Remember your password? <Link to="/login" className={footerLinkClass}>Back to login</Link>
          </p>
        </form>
      </GenericPageSection>
    </div>
  );
}

export function ChangePassword() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatusMessage(null);
    setIsSubmitting(true);

    await demoDelay();
    form.reset();
    setStatusMessage("Your password has been updated.");
    setIsSubmitting(false);
  };

  return (
    <div className="pt-16">
      <GenericPageSection label="Account" title="Change Your Password" subtitle="Update your password securely using your current login details.">
        <form className={panelClass} onSubmit={handleSubmit} noValidate>
          <div className="relative z-10 flex items-center justify-between gap-4">
            <p className={hintClass}>Enter your current password and then choose a new one. We’ll verify your existing password before updating it.</p>
          </div>

          {statusMessage && <div className={successBannerClass}>{statusMessage}</div>}

          <div className={fieldClass}>
            <label htmlFor="change-current-password" className={labelClass}>Current password</label>
            <input id="change-current-password" name="currentPassword" type="password" autoComplete="current-password" className={inputClass} placeholder="Enter your current password" />
          </div>

          <div className={fieldClass}>
            <label htmlFor="change-new-password" className={labelClass}>New password</label>
            <input id="change-new-password" name="newPassword" type="password" autoComplete="new-password" className={inputClass} placeholder="Create a new password" />
          </div>

          <button type="submit" className={submitClass} disabled={isSubmitting}><span>{isSubmitting ? "Changing password..." : "Change password"}</span></button>
        </form>
      </GenericPageSection>
    </div>
  );
}

export function ResetEmail() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatusMessage(null);
    setIsSubmitting(true);

    await demoDelay();
    form.reset();
    setStatusMessage("Your email address has been updated.");
    setIsSubmitting(false);
  };

  return (
    <div className="pt-16">
      <GenericPageSection label="Account" title="Change Your Email Address" subtitle="Update the primary email linked to your AnyHJS account.">
        <form className={panelClass} onSubmit={handleSubmit} noValidate>
          <div className="relative z-10 flex items-center justify-between gap-4">
            <p className={hintClass}>Enter the email currently on your account and the new email you’d like to use. We’ll update your details once we’ve confirmed your existing email.</p>
          </div>

          {statusMessage && <div className={successBannerClass}>{statusMessage}</div>}

          <div className={fieldClass}>
            <label htmlFor="reset-email-current" className={labelClass}>Current email address</label>
            <input id="reset-email-current" name="currentEmail" type="email" autoComplete="email" className={inputClass} placeholder="current@example.com" />
          </div>

          <div className={fieldClass}>
            <label htmlFor="reset-email-new" className={labelClass}>New email address</label>
            <input id="reset-email-new" name="newEmail" type="email" autoComplete="email" className={inputClass} placeholder="new@example.com" />
          </div>

          <button type="submit" className={submitClass} disabled={isSubmitting}><span>{isSubmitting ? "Changing email..." : "Change email"}</span></button>
        </form>
      </GenericPageSection>
    </div>
  );
}
