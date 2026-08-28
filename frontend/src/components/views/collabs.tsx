import banner1 from "../../imgs/banners/collabs.jpg";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function Collabs() {
  return (
    <div>
      <ClothingBanner
        title="Work with AnyHJS"
        subtitle="Create, partner and explore new ways to reach fashion audiences"
        img_src={banner1}
      />

      <GenericPageSection
        label="Collaboration"
        title="Work with AnyHJS"
        subtitle="A starting point for creators, brands, designers and sellers interested in working with us."
      >
        <div className="space-y-8">
          <p className="text-[0.98rem] leading-7 text-black/75">
            AnyHJS is being built as a place where fashion discovery, styling and commerce can sit side by
            side. That creates room for more than traditional retail: creators can shape edits, designers can
            introduce new work and brands can take part in campaigns built around complete looks. If you have
            an idea that fits that direction, we’re interested in hearing it.
          </p>

          <hr className="border-black/10" />

          <section className="space-y-4">
            <h2 className="relative pl-4 text-xl font-extrabold tracking-tight text-black/90 sm:text-2xl before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[3px] before:rounded-full before:bg-[#BDFF00] before:shadow-[0_0_0_4px_rgba(189,255,0,0.18)]">
              For Influencers &amp; Creators
            </h2>

            <p className="text-[0.98rem] leading-7 text-black/75">
              Fashion creators, stylists and content makers can use AnyHJS as a backdrop for outfit-led
              partnerships. Because the concept brings different labels into one shopping experience, a
              collaboration can focus on an entire look rather than a single product or brand. That can make
              it easier to turn inspiration into something an audience can explore for themselves.
            </p>

            <p className="text-[0.98rem] leading-7 text-black/75">
              Potential formats include sponsored content, creator edits, affiliate activity, featured
              collections and longer-term ambassador work. We’re open to established creators as well as
              smaller voices with a clear point of view, and we’d rather shape the format around a strong idea
              than force every partnership into the same template.
            </p>
          </section>

          <hr className="border-black/10" />

          <section className="space-y-4">
            <h2 className="relative pl-4 text-xl font-extrabold tracking-tight text-black/90 sm:text-2xl before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[3px] before:rounded-full before:bg-[#BDFF00] before:shadow-[0_0_0_4px_rgba(189,255,0,0.18)]">
              For Designers, Brands &amp; Fashion Students
            </h2>

            <p className="text-[0.98rem] leading-7 text-black/75">
              Independent labels, designers and fashion students often have strong work without the same
              visibility as larger names. AnyHJS is intended to create more room for that kind of discovery,
              placing emerging ideas alongside familiar brands rather than separating them into a different
              corner of the experience.
            </p>

            <p className="text-[0.98rem] leading-7 text-black/75">
              We’re interested in concepts such as capsule edits, limited releases, editorial features and
              co-branded campaigns. If you’re developing a collection, project or launch that could work well
              with the AnyHJS audience, send us the idea, the visual direction and any relevant portfolio or
              lookbook material.
            </p>
          </section>

          <hr className="border-black/10" />

          <section className="space-y-4">
            <h2 className="relative pl-4 text-xl font-extrabold tracking-tight text-black/90 sm:text-2xl before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[3px] before:rounded-full before:bg-[#BDFF00] before:shadow-[0_0_0_4px_rgba(189,255,0,0.18)]">
              Marketplace: Sell Your Clothes Through AnyHJS
            </h2>

            <p className="text-[0.98rem] leading-7 text-black/75">
              A planned future area of AnyHJS is the <strong>AnyHJS Marketplace</strong>, designed to let
              independent sellers list pre-owned fashion, custom pieces and small-run designs alongside the
              wider shopping experience. The aim is to make selling feel like part of the same fashion-first
              platform rather than a completely separate service.
            </p>

            <p className="text-[0.98rem] leading-7 text-black/75">The proposed flow is straightforward:</p>

            <ul className="list-disc space-y-2 pl-6 text-[0.98rem] leading-7 text-black/75 marker:text-[#BDFF00]">
              <li>Sellers create listings for the pieces they want to offer.</li>
              <li>The marketplace experience manages the customer order and payment flow.</li>
              <li>The seller dispatches the item, with AnyHJS taking an agreed commission from the sale.</li>
            </ul>

            <p className="text-[0.98rem] leading-7 text-black/75">
              This marketplace is a product concept and is not currently live. Seller requirements,
              commissions, fulfilment details and onboarding terms would be published before the feature is
              made available.
            </p>
          </section>

          <hr className="border-black/10" />

          <section className="space-y-4">
            <h2 className="relative pl-4 text-xl font-extrabold tracking-tight text-black/90 sm:text-2xl before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[3px] before:rounded-full before:bg-[#BDFF00] before:shadow-[0_0_0_4px_rgba(189,255,0,0.18)]">
              Collaboration Options at a Glance
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-separate border-spacing-0 overflow-hidden rounded-2xl border border-black/10 bg-white/70 text-sm shadow-[0_16px_36px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.05)]">
                <thead className="bg-black/[0.04]">
                  <tr>
                    <th className="px-4 py-3 text-left text-[0.75rem] font-extrabold uppercase tracking-[0.12em] text-black/60">Collaboration Type</th>
                    <th className="px-4 py-3 text-left text-[0.75rem] font-extrabold uppercase tracking-[0.12em] text-black/60">Who It’s For</th>
                    <th className="px-4 py-3 text-left text-[0.75rem] font-extrabold uppercase tracking-[0.12em] text-black/60">What It Can Include</th>
                  </tr>
                </thead>

                <tbody className="[&>tr:nth-child(even)]:bg-black/[0.02] [&>tr:hover]:bg-[#BDFF00]/10">
                  <tr className="transition-colors [&>td]:border-b [&>td]:border-black/10 last:[&>td]:border-b-0">
                    <td className="px-4 py-3 align-top text-black/80">Creator Partnerships</td>
                    <td className="px-4 py-3 align-top text-black/80">Social creators, stylists and fashion voices</td>
                    <td className="px-4 py-3 align-top text-black/80">Sponsored looks, affiliate activity, creator edits and campaign content.</td>
                  </tr>

                  <tr className="transition-colors [&>td]:border-b [&>td]:border-black/10 last:[&>td]:border-b-0">
                    <td className="px-4 py-3 align-top text-black/80">Designer &amp; Brand Projects</td>
                    <td className="px-4 py-3 align-top text-black/80">Brands, emerging designers and fashion students</td>
                    <td className="px-4 py-3 align-top text-black/80">Capsule edits, limited releases, joint campaigns and editorial features.</td>
                  </tr>

                  <tr className="transition-colors [&>td]:border-b [&>td]:border-black/10 last:[&>td]:border-b-0">
                    <td className="px-4 py-3 align-top text-black/80">Marketplace Selling (Planned)</td>
                    <td className="px-4 py-3 align-top text-black/80">Independent sellers, resellers and small labels</td>
                    <td className="px-4 py-3 align-top text-black/80">Product listings, customer orders and a commission-based selling model.</td>
                  </tr>

                  <tr className="transition-colors [&>td]:border-b [&>td]:border-black/10 last:[&>td]:border-b-0">
                    <td className="px-4 py-3 align-top text-black/80">Advertising &amp; Media</td>
                    <td className="px-4 py-3 align-top text-black/80">Brands, agencies and creative studios</td>
                    <td className="px-4 py-3 align-top text-black/80">Sponsored placements, integrated content and coordinated social campaigns.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <hr className="border-black/10" />

          <section className="space-y-4">
            <h2 className="relative pl-4 text-xl font-extrabold tracking-tight text-black/90 sm:text-2xl before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[3px] before:rounded-full before:bg-[#BDFF00] before:shadow-[0_0_0_4px_rgba(189,255,0,0.18)]">
              How to Get in Touch
            </h2>

            <p className="text-[0.98rem] leading-7 text-black/75">
              The easiest way to start a conversation is through the AnyHJS contact page. Tell us what you’re
              proposing and include enough context for us to understand where the idea could fit.
            </p>

            <ul className="list-disc space-y-2 pl-6 text-[0.98rem] leading-7 text-black/75 marker:text-[#BDFF00]">
              <li>Use the contact form and choose the most relevant enquiry type.</li>
              <li>Include a portfolio, media kit, lookbook or social links where they help explain the proposal.</li>
              <li>You can also reach out through the AnyHJS social channels listed elsewhere on the site.</li>
            </ul>

            <p className="text-[0.98rem] leading-7 text-black/75">A useful proposal usually covers:</p>

            <ul className="list-disc space-y-2 pl-6 text-[0.98rem] leading-7 text-black/75 marker:text-[#BDFF00]">
              <li>A short introduction to you, your brand or your project.</li>
              <li>The type of collaboration you have in mind and what you want to create.</li>
              <li>Relevant examples of previous work or channels where your audience can be seen.</li>
            </ul>

            <p className="text-[0.98rem] leading-7 text-black/75">
              We review opportunities against the direction of the platform and the audience we’re building.
              Not every idea will be the right fit, but original concepts are always easier to consider when
              the creative goal is clear from the start.
            </p>
          </section>

          <hr className="border-black/10" />

          <section className="space-y-4">
            <h2 className="relative pl-4 text-xl font-extrabold tracking-tight text-black/90 sm:text-2xl before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[3px] before:rounded-full before:bg-[#BDFF00] before:shadow-[0_0_0_4px_rgba(189,255,0,0.18)]">
              Join the AnyHJS Community
            </h2>

            <p className="text-[0.98rem] leading-7 text-black/75">
              The strongest fashion ideas rarely happen in isolation. AnyHJS is intended to give creators,
              shoppers, designers and sellers more ways to connect around the same looks and products.
            </p>

            <p className="text-[0.98rem] leading-7 text-black/75">
              Follow the project, explore the latest features and keep an eye on the roadmap as collaboration
              and marketplace ideas develop further. There will be more ways to take part as the platform grows.
            </p>
          </section>
        </div>
      </GenericPageSection>
    </div>
  );
}
