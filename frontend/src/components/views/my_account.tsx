import myAccountBanner from "../../imgs/banners/my_account.png";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";
import { Link, Navigate } from "react-router-dom";
import { AUTH_STORAGE_KEY, type AuthStatus } from "./auth";
import React, { Dispatch, SetStateAction, useState, type ChangeEvent, type FormEvent } from "react";

type MyAccountProps = { auth: AuthStatus; setAuth: Dispatch<SetStateAction<AuthStatus>> };
type ProfileData = { first_name: string; last_name: string; email: string; phone: string; title: string; gender: string };
type ProfileUpdatePayload = Omit<ProfileData, "email">;

const initialProfile: ProfileData = {
    first_name: "",
    last_name: "",
    email: "demo@anyhjs.co.uk",
    phone: "",
    title: "",
    gender: "",
};

const demoDelay = () => new Promise((resolve) => setTimeout(resolve, 500));
const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(" ");

function SurfaceDiv({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div {...props} className={cn(`relative overflow-hidden rounded-[1.25rem] border border-black/10 bg-[radial-gradient(circle_at_12%_10%,rgba(189,255,0,0.12),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,255,255,0.74))] shadow-[0_18px_50px_rgba(0,0,0,0.10),0_6px_18px_rgba(0,0,0,0.06)]`, className)}>{children}</div>;
}

function SurfaceArticle({ className, lift, children, ...props }: React.HTMLAttributes<HTMLElement> & { lift?: boolean }) {
    return <article {...props} className={cn(`relative flex flex-col overflow-hidden rounded-[1.25rem] border border-black/10 bg-[radial-gradient(circle_at_12%_10%,rgba(189,255,0,0.12),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,255,255,0.74))] shadow-[0_18px_50px_rgba(0,0,0,0.10),0_6px_18px_rgba(0,0,0,0.06)]`, lift && `transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-lime-300/60 hover:shadow-[0_26px_60px_rgba(0,0,0,0.14),0_10px_24px_rgba(0,0,0,0.07)]`, className)}>{children}</article>;
}

function SurfaceForm({ className, children, ...props }: React.FormHTMLAttributes<HTMLFormElement>) {
    return <form {...props} className={cn(`relative overflow-hidden rounded-[1.25rem] border border-black/10 bg-[radial-gradient(circle_at_12%_10%,rgba(189,255,0,0.12),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.88),rgba(255,255,255,0.74))] shadow-[0_18px_50px_rgba(0,0,0,0.10),0_6px_18px_rgba(0,0,0,0.06)]`, className)}>{children}</form>;
}

function LogoutButton({ onClick }: { onClick: () => void }) {
    return <button type="button" onClick={onClick} className="ml-auto mb-4 inline-flex items-center justify-center rounded-full border border-black/15 bg-gradient-to-b from-white/90 to-white/70 px-4 py-2 text-[0.82rem] font-extrabold uppercase tracking-[0.12em] text-zinc-900/90 shadow-[0_14px_32px_rgba(0,0,0,0.10),0_4px_12px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-lime-300/70 hover:shadow-[0_20px_44px_rgba(0,0,0,0.14),0_6px_16px_rgba(0,0,0,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-4 sm:absolute sm:right-[clamp(0.75rem,2vw,1.25rem)] sm:top-[clamp(0.75rem,2vw,1.25rem)] sm:mb-0">Sign out</button>;
}

function UnderlineNavLink({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) {
    return <Link to={to} className={cn(`relative inline-flex w-fit items-center text-[0.86rem] font-extrabold tracking-[0.08em] text-zinc-900/90 after:absolute after:left-0 after:-bottom-[0.15rem] after:h-px after:w-0 after:bg-lime-400/90 after:transition-all after:duration-200 hover:after:w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-4`, className)}>{children}</Link>;
}

function PillNavLink({ to, children, className }: { to: string; children: React.ReactNode; className?: string }) {
    return <Link to={to} className={cn(`inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-2 text-[0.85rem] font-extrabold tracking-[0.08em] text-zinc-900/90 shadow-[0_12px_26px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.05)] transition-[transform,border-color,box-shadow] duration-200 ease-out hover:-translate-y-[1px] hover:border-lime-300/70 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12),0_6px_16px_rgba(0,0,0,0.06)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-4`, className)}>{children}</Link>;
}

function TagPill({ children }: { children: React.ReactNode }) {
    return <span className="inline-flex w-fit items-center rounded-full border border-lime-400/40 bg-lime-300/20 px-2.5 py-1 text-[0.70rem] font-black uppercase tracking-[0.14em] text-zinc-900/85">{children}</span>;
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
    return <header className="mb-5"><h2 className="m-0 text-[clamp(1.15rem,2vw,1.45rem)] font-black tracking-[-0.01em]">{title}</h2><p className="mt-2 max-w-[52rem] text-[0.95rem] leading-[1.75] text-zinc-900/75">{subtitle}</p></header>;
}

function BannerMessage({ children }: { children: React.ReactNode }) {
    return <div className="mb-4 rounded-[0.9rem] border border-lime-300/50 bg-lime-200/20 px-4 py-3 text-[0.92rem] leading-snug text-zinc-900/85 shadow-[0_12px_26px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.05)]">{children}</div>;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
    return <div className="flex min-w-0 flex-col gap-2"><label className="text-[0.8rem] font-extrabold uppercase tracking-[0.12em] text-zinc-900/70">{label}</label>{children}</div>;
}

function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return <input {...props} className={cn(`w-full rounded-full border border-black/15 bg-white/80 px-4 py-3 text-[0.95rem] leading-snug text-zinc-900/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_10px_22px_rgba(0,0,0,0.06)] outline-none appearance-none transition-[border-color,box-shadow,transform,background-color] duration-200 ease-out hover:border-black/25 focus-visible:-translate-y-[1px] focus-visible:border-lime-300/80 focus-visible:bg-white/90 focus-visible:shadow-[0_0_0_3px_rgba(189,255,0,0.18),0_18px_40px_rgba(0,0,0,0.10)]`, props.className)} />;
}

function SelectInput(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
    return <select {...props} className={cn(`w-full rounded-full border border-black/15 bg-white/80 px-4 py-3 text-[0.95rem] leading-snug text-zinc-900/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_10px_22px_rgba(0,0,0,0.06)] outline-none appearance-none transition-[border-color,box-shadow,transform,background-color] duration-200 ease-out hover:border-black/25 focus-visible:-translate-y-[1px] focus-visible:border-lime-300/80 focus-visible:bg-white/90 focus-visible:shadow-[0_0_0_3px_rgba(189,255,0,0.18),0_18px_40px_rgba(0,0,0,0.10)]`, props.className)} />;
}

function PrimaryButton({ disabled, children }: { disabled?: boolean; children: React.ReactNode }) {
    return <button type="submit" disabled={disabled} className="inline-flex items-center justify-center rounded-full border border-black/10 px-6 py-3 bg-gradient-to-r from-lime-300 via-lime-200 to-lime-300 bg-[length:200%_100%] text-[0.9rem] font-extrabold uppercase tracking-[0.12em] text-black shadow-[0_14px_30px_rgba(0,0,0,0.14),0_6px_14px_rgba(0,0,0,0.08)] transition-[transform,box-shadow,background-position,opacity] duration-200 ease-out hover:-translate-y-[2px] hover:bg-right hover:shadow-[0_20px_44px_rgba(0,0,0,0.18),0_10px_20px_rgba(0,0,0,0.10)] disabled:cursor-not-allowed disabled:opacity-70 disabled:shadow-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-lime-400 focus-visible:outline-offset-4">{children}</button>;
}

function CardsAutoGrid({ min, children }: { min: number; children: React.ReactNode }) {
    return <div className={cn(`grid gap-5 [grid-template-columns:repeat(auto-fit,minmax(${min}px,1fr))]`)}>{children}</div>;
}

function InlineLinksList({ children }: { children: React.ReactNode }) {
    return <ul className="m-0 mt-1 flex list-none flex-wrap gap-x-4 gap-y-2 p-0 text-[0.9rem] text-zinc-900/80 [&>li]:flex [&>li]:items-center [&>li]:gap-2 [&>li:before]:content-[''] [&>li:before]:h-1.5 [&>li:before]:w-1.5 [&>li:before]:rounded-full [&>li:before]:bg-lime-400 [&>li:before]:shadow-[0_0_0_3px_rgba(189,255,0,0.16)]">{children}</ul>;
}

function StatCard({ label, value, note, to, cta }: { label: string; value: string; note: string; to: string; cta: string }) {
    return <SurfaceArticle lift className="gap-2 p-6"><span className="text-[0.78rem] font-extrabold uppercase tracking-[0.14em] text-zinc-900/60">{label}</span><span className="text-[1.35rem] font-black tracking-[-0.02em] text-zinc-900/90">{value}</span><span className="text-[0.93rem] leading-[1.7] text-zinc-900/75">{note}</span><PillNavLink to={to}>{cta}</PillNavLink></SurfaceArticle>;
}

function InfoCard({ title, children, to, cta, highlight }: { title: string; children: React.ReactNode; to: string; cta: string; highlight?: boolean }) {
    return <SurfaceArticle lift className={cn("gap-2 p-6", highlight && "border-lime-300/60")}><h3 className="m-0 text-[1rem] font-black tracking-[-0.01em]">{title}</h3><p className="m-0 text-[0.95rem] leading-[1.75] text-zinc-900/75">{children}</p><UnderlineNavLink to={to}>{cta}</UnderlineNavLink></SurfaceArticle>;
}

function FeatureCard({ title, children, to, cta }: { title: string; children: React.ReactNode; to: string; cta: string }) {
    return <SurfaceArticle lift className="gap-2 p-6"><TagPill>Coming Soon</TagPill><h3 className="m-0 text-[1rem] font-black tracking-[-0.01em]">{title}</h3><p className="m-0 text-[0.95rem] leading-[1.75] text-zinc-900/75">{children}</p><UnderlineNavLink to={to}>{cta}</UnderlineNavLink></SurfaceArticle>;
}

function OrdersCarousel({ children }: { children: React.ReactNode }) {
    return <div className="flex gap-4 overflow-x-auto pb-2 [scroll-snap-type:x_mandatory] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:h-0">{children}</div>;
}

function OrderCard({ title, children, to, cta }: { title: string; children: React.ReactNode; to: string; cta: string }) {
    return <SurfaceArticle lift className="mx-3 my-1 min-w-[min(520px,calc(100%-1.4rem))] scroll-ml-3 gap-2 p-6 [scroll-snap-align:start]"><p className="m-0 text-[1rem] font-black tracking-[-0.01em]">{title}</p><p className="m-0 text-[0.95rem] leading-[1.75] text-zinc-900/75">{children}</p><UnderlineNavLink to={to}>{cta}</UnderlineNavLink></SurfaceArticle>;
}

export function MyAccount({ auth, setAuth }: MyAccountProps) {
    const [profile, setProfile] = useState<ProfileData>(initialProfile);
    const [isSavingProfile, setIsSavingProfile] = useState(false);
    const [profileBanner, setProfileBanner] = useState<string | null>(null);

    const handleLogout = () => {
        localStorage.removeItem(AUTH_STORAGE_KEY);
        setAuth({ isAuthenticated: false });
    };

    const handleProfileChange =
        (field: keyof ProfileUpdatePayload) =>
        (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
            setProfile({ ...profile, [field]: event.target.value });
        };

    const handleProfileSave = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSavingProfile(true);
        setProfileBanner(null);

        await demoDelay();
        setProfileBanner("Your account details are up to date.");
        setIsSavingProfile(false);
    };

    if (!auth.isAuthenticated) return <Navigate to="/login" replace />;

    return (
        <div className="[&a]:text-inherit [&a]:no-underline text-zinc-900">
            <ClothingBanner title="My Account" subtitle="Keep your account details, order links and preferences together." img_src={myAccountBanner} />

            <div className="relative mx-auto w-full max-w-[70rem] px-[clamp(1rem,3vw,1.5rem)] py-[clamp(1.25rem,3vw,2rem)]">
                <LogoutButton onClick={handleLogout} />

                <GenericPageSection label="Account" title="Your AnyHJS Account" subtitle="A single place for settings, order information, support and upcoming styling features.">
                    <section className="mt-[clamp(1.5rem,3vw,2.25rem)]">
                        <SurfaceDiv className="p-[clamp(1.1rem,2.5vw,1.6rem)]">
                            <div className="max-w-[52rem] text-zinc-900/85">
                                <h1 className="m-0 text-[clamp(1.55rem,3.2vw,2.1rem)] font-black leading-tight tracking-[-0.02em]">Good to see you again.</h1>
                                <p className="mt-4 text-[0.98rem] leading-[1.75] text-zinc-900/80">Use this area to review your order shortcuts, adjust personal details, find support and discover the smart styling tools planned for AnyHJS.</p>
                            </div>
                        </SurfaceDiv>

                        <section className="mt-8">
                            <SectionHeader title="Account details" subtitle="Check the information shown in your profile and update the fields you want to change." />

                            <SurfaceForm onSubmit={handleProfileSave} noValidate className="max-w-[52rem] p-[clamp(1.2rem,2.5vw,1.75rem)]">
                                {profileBanner ? <BannerMessage>{profileBanner}</BannerMessage> : null}

                                <div className="grid grid-cols-1 gap-x-[clamp(1rem,3vw,2rem)] gap-y-5 sm:grid-cols-2">
                                    <Field label="Title">
                                        <SelectInput value={profile.title} onChange={handleProfileChange("title")}>
                                            <option value="">Prefer not to say</option><option value="Mr">Mr</option><option value="Mrs">Mrs</option><option value="Ms">Ms</option><option value="Mx">Mx</option><option value="Dr">Dr</option>
                                        </SelectInput>
                                    </Field>
                                    <Field label="First name"><TextInput type="text" value={profile.first_name} onChange={handleProfileChange("first_name")} /></Field>
                                    <Field label="Last name"><TextInput type="text" value={profile.last_name} onChange={handleProfileChange("last_name")} /></Field>
                                    <Field label="Email"><TextInput type="email" value={profile.email} readOnly className="cursor-default bg-white/60 text-zinc-900/70" /></Field>
                                    <Field label="Phone"><TextInput type="tel" value={profile.phone} onChange={handleProfileChange("phone")} /></Field>
                                    <Field label="Gender">
                                        <SelectInput value={profile.gender} onChange={handleProfileChange("gender")}>
                                            <option value="">Prefer not to say</option><option value="female">Female</option><option value="male">Male</option><option value="nonbinary">Non-binary</option><option value="other">Other</option>
                                        </SelectInput>
                                    </Field>
                                </div>

                                <div className="mt-6 flex justify-start"><PrimaryButton disabled={isSavingProfile}>{isSavingProfile ? "Saving changes…" : "Save changes"}</PrimaryButton></div>
                            </SurfaceForm>
                        </section>

                        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            <StatCard label="Orders" value="0" note="Open your order area to review previous purchases when they appear." to="/track-orders" cta="View orders" />
                            <StatCard label="Deliveries" value="0" note="Use tracking details to follow parcels that are currently on the way." to="/track-orders" cta="Track delivery" />
                            <StatCard label="Preferences" value="Ready" note="Review the profile and account options connected with your shopping experience." to="/account" cta="View preferences" />
                        </div>

                        <section className="mt-[clamp(2.25rem,4vw,3rem)]"><SectionHeader title="Latest Orders" subtitle="Your newest purchases would appear here with quick links to delivery, invoice and return information." /><OrdersCarousel><OrderCard title="Nothing here yet" to="/track-orders" cta="Open order tracking">Once an order has been placed, this space can show a short summary and provide a direct route to its tracking details.</OrderCard></OrdersCarousel></section>

                        <section className="mt-[clamp(2.25rem,4vw,3rem)]">
                            <SectionHeader title="Account Shortcuts" subtitle="Jump directly to the settings and details you are most likely to need." />
                            <CardsAutoGrid min={220}>
                                <InfoCard title="Profile information" to="/account" cta="Update profile details">Change the name, contact information and profile preferences shown in your account.</InfoCard>
                                <InfoCard title="Delivery addresses" to="/account" cta="Review addresses">Manage the addresses associated with future delivery and checkout screens.</InfoCard>
                                <InfoCard title="Password" to="/change-password" cta="Update password">Open the password-change form and preview the security settings for your account.</InfoCard>
                                <InfoCard title="Account email" to="/reset-email" cta="Update email">Change the email address associated with the account experience.</InfoCard>
                            </CardsAutoGrid>
                        </section>

                        <section className="mt-[clamp(2.25rem,4vw,3rem)]">
                            <SectionHeader title="Support, Delivery &amp; Returns" subtitle="Find the information you need for common questions about orders, sizing, delivery and returns." />
                            <CardsAutoGrid min={220}>
                                <SurfaceArticle lift className="gap-2 border-lime-300/60 p-6"><TagPill>Need help?</TagPill><h3 className="m-0 text-[1rem] font-black tracking-[-0.01em]">Support Centre</h3><p className="m-0 text-[0.95rem] leading-[1.75] text-zinc-900/75">Start with answers to common questions about using AnyHJS, then use the contact page if you need another route to the team.</p><UnderlineNavLink to="/support-centre">Open Support Centre</UnderlineNavLink></SurfaceArticle>
                                <SurfaceArticle lift className="gap-2 p-6"><h3 className="m-0 text-[1rem] font-black tracking-[-0.01em]">Shipping &amp; delivery</h3><p className="m-0 text-[0.95rem] leading-[1.75] text-zinc-900/75">Check expected delivery windows, shipping information and the available tracking links.</p><InlineLinksList><li><UnderlineNavLink to="/shipping">Delivery information</UnderlineNavLink></li><li><UnderlineNavLink to="/track-orders">Track a parcel</UnderlineNavLink></li></InlineLinksList></SurfaceArticle>
                                <SurfaceArticle lift className="gap-2 p-6"><h3 className="m-0 text-[1rem] font-black tracking-[-0.01em]">Returns, refunds &amp; sizing</h3><p className="m-0 text-[0.95rem] leading-[1.75] text-zinc-900/75">Review return conditions, refund information and general size guidance before choosing what works for you.</p><InlineLinksList><li><UnderlineNavLink to="/refunds">Return information</UnderlineNavLink></li><li><UnderlineNavLink to="/sizing-guide">Sizing guide</UnderlineNavLink></li></InlineLinksList></SurfaceArticle>
                                <InfoCard title="Contact AnyHJS" to="/contact" cta="Open contact form">Use the contact page for questions, feedback and general enquiries about the project.</InfoCard>
                            </CardsAutoGrid>
                        </section>

                        <section className="mt-[clamp(2.25rem,4vw,3rem)]">
                            <SectionHeader title="Explore Future Styling Features" subtitle="See the AI-assisted wardrobe and virtual-preview ideas being developed around the AnyHJS experience." />
                            <CardsAutoGrid min={240}>
                                <FeatureCard title="VR Wardrobe" to="/vr-wardrobe" cta="Explore the concept">Start from a photo of clothing you already own and discover pieces that could work around it.</FeatureCard>
                                <FeatureCard title="AI Stylist" to="/ai-stylist" cta="See how it is planned">Describe the occasion or style you want and explore how conversational AI could build complete outfit ideas.</FeatureCard>
                                <FeatureCard title="VR Changing Room" to="/vr-changing-room" cta="View the preview">Learn about the planned camera-based experience for visualising selected clothing as part of your look.</FeatureCard>
                            </CardsAutoGrid>
                        </section>

                        <section className="mt-[clamp(2.75rem,4vw,3.5rem)] border-t border-black/10 pt-7"><SectionHeader title="Legal &amp; Policies" subtitle="Read the terms and information explaining how the AnyHJS website and its data practices are presented." /><div className="flex flex-wrap items-center gap-3 text-[0.86rem] text-zinc-900/70"><UnderlineNavLink to="/terms-and-conditions">Terms &amp; Conditions</UnderlineNavLink><span className="text-zinc-900/40">•</span><UnderlineNavLink to="/privacy-policy">Privacy Policy</UnderlineNavLink><span className="text-zinc-900/40">•</span><UnderlineNavLink to="/cookie-policy">Cookie Policy</UnderlineNavLink></div></section>
                    </section>
                </GenericPageSection>
            </div>
        </div>
    );
}
