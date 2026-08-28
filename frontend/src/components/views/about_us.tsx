import bannerAbout from "../../imgs/main_banners/ANYHJS_About_Us_Banner.png";
import about_img from "../../imgs/main_banners/About_us_Page_Image.png";

import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function AboutUs() {
  return (
    <div>
      <ClothingBanner title="About Us" subtitle="Discover the ideas behind AnyHJS and the way we want to make fashion easier to explore" img_src={bannerAbout} />

      <GenericPageSection label="About" title="Meet AnyHJS" subtitle="An online fashion platform combining multi-brand discovery with a growing range of AI-assisted tools.">
        <section className="flex flex-col gap-[clamp(2.25rem,4vw,3rem)] text-[var(--soft-black)]">
          <div className="relative grid items-center overflow-hidden rounded-[1.25rem] border border-[rgba(26,26,26,0.10)] bg-[radial-gradient(circle_at_10%_10%,rgba(189,255,0,0.10),transparent_45%),radial-gradient(circle_at_90%_20%,rgba(189,255,0,0.06),transparent_50%),linear-gradient(180deg,rgba(255,255,255,0.82),rgba(255,255,255,0.60))] p-[clamp(1.5rem,3vw,2rem)] shadow-[0_22px_60px_rgba(0,0,0,0.10),0_6px_18px_rgba(0,0,0,0.06)] [grid-template-columns:minmax(0,1.4fr)_minmax(0,0.6fr)] gap-[clamp(1.5rem,3vw,2.5rem)] after:pointer-events-none after:absolute after:inset-0 after:opacity-75 after:content-[''] after:bg-[linear-gradient(135deg,rgba(255,255,255,0.00)_0%,rgba(255,255,255,0.22)_35%,rgba(255,255,255,0.00)_70%)] max-[640px]:grid-cols-1">
            <div className="relative z-10 text-[rgba(26,26,26,0.84)] leading-[1.75] [&_p]:m-0 [&_p+_p]:mt-4">
              <p>
                AnyHJS is an online fashion platform created to bring products from a wide mix of established, independent and emerging brands into one connected experience. Rather than searching store after store, the idea is to make it easier to discover pieces, put complete outfits together and explore different labels from a single place, supported by technology built specifically around fashion.
              </p>

              <p>
                We want choosing what to wear to feel more personal and less complicated. By combining multi-brand discovery with AI-assisted styling tools, AnyHJS is being built to help with both sides of the process: finding an outfit that feels right, and finding the pieces needed to create it without spending hours searching.
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-end gap-[0.9rem] max-[640px]:items-start">
              <div className="group flex max-h-[14.5rem] w-full max-w-[22rem] items-center overflow-hidden rounded-[1.1rem] border border-[rgba(26,26,26,0.10)] bg-white/60 shadow-[0_18px_44px_rgba(0,0,0,0.12),0_6px_16px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.35)] hover:shadow-[0_26px_60px_rgba(0,0,0,0.14),0_10px_24px_rgba(0,0,0,0.07)]">
                <img src={about_img} alt="A selection of AnyHJS outfit ideas" className="block h-full w-full flex-1 object-cover transition-[transform,filter] duration-500 ease-out [filter:saturate(1.06)_contrast(1.02)] scale-[1.01] group-hover:scale-[1.06] group-hover:[filter:saturate(1.10)_contrast(1.04)]" />
              </div>

              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-[rgba(26,26,26,0.10)] bg-white/70 px-7 py-[0.35rem] text-[0.78rem] uppercase tracking-[0.10em] text-[rgba(26,26,26,0.70)]">
                Many brands. One place. More ways to put a look together.
              </p>
            </div>
          </div>

          <div className="grid gap-[clamp(0.9rem,2vw,1.4rem)] rounded-[1.15rem] border border-[rgba(26,26,26,0.10)] bg-[radial-gradient(circle_at_12%_10%,rgba(189,255,0,0.10),transparent_52%),linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.60))] px-[clamp(1rem,2.5vw,1.5rem)] py-[clamp(1rem,2.5vw,1.35rem)] shadow-[0_18px_44px_rgba(0,0,0,0.10),0_6px_16px_rgba(0,0,0,0.06)] [grid-template-columns:repeat(3,minmax(0,1fr))] max-[640px]:grid-cols-1">
            <div className="rounded-[1rem] border border-[rgba(26,26,26,0.08)] bg-white/60 px-4 py-[0.9rem] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.35)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.12),0_6px_14px_rgba(0,0,0,0.06)]">
              <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[rgba(26,26,26,0.60)]">Brand selection</span>
              <span className="mt-1 block text-[1.35rem] font-extrabold leading-[1.1] tracking-[0.02em] text-[rgba(26,26,26,0.94)]">100+</span>
              <span className="mt-1 block text-[0.88rem] text-[rgba(26,26,26,0.70)]">Independent, emerging and established labels</span>
            </div>

            <div className="rounded-[1rem] border border-[rgba(26,26,26,0.08)] bg-white/60 px-4 py-[0.9rem] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.35)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.12),0_6px_14px_rgba(0,0,0,0.06)]">
              <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[rgba(26,26,26,0.60)]">AI-assisted</span>
              <span className="mt-1 block text-[1.35rem] font-extrabold leading-[1.1] tracking-[0.02em] text-[rgba(26,26,26,0.94)]">Style Tech</span>
              <span className="mt-1 block text-[0.88rem] text-[rgba(26,26,26,0.70)]">Smarter discovery, recommendations &amp; styling</span>
            </div>

            <div className="rounded-[1rem] border border-[rgba(26,26,26,0.08)] bg-white/60 px-4 py-[0.9rem] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.35)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.12),0_6px_14px_rgba(0,0,0,0.06)]">
              <span className="block text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[rgba(26,26,26,0.60)]">What&apos;s next</span>
              <span className="mt-1 block text-[1.35rem] font-extrabold leading-[1.1] tracking-[0.02em] text-[rgba(26,26,26,0.94)]">In Development</span>
              <span className="mt-1 block text-[0.88rem] text-[rgba(26,26,26,0.70)]">AI Stylist, VR Wardrobe &amp; VR Changing Room</span>
            </div>
          </div>

          <section className="flex flex-col gap-[1.4rem]">
            <header className="max-w-[44rem] text-[rgba(26,26,26,0.70)] [&_p]:m-0 [&_p]:text-[0.98rem] [&_p]:leading-[1.65]">
              <h2>What AnyHJS Does</h2>
              <p>
                AnyHJS is being built as an online, multi-brand fashion destination focused on bringing clothing and outfit discovery from many different labels into one consistent platform.
              </p>
            </header>

            <div className="grid items-start gap-[clamp(1.25rem,3vw,2rem)] [grid-template-columns:minmax(0,1.4fr)_minmax(0,1fr)] max-[640px]:grid-cols-1">
              <div className="text-[rgba(26,26,26,0.84)] leading-[1.75] [&_p]:m-0 [&_p+_p]:mt-4">
                <p>
                  The vision is to let shoppers combine pieces from different labels, create complete looks and move through one straightforward shopping journey. AnyHJS brings the product discovery and styling experience together so the focus can stay on choosing clothes that work well as an outfit.
                </p>

                <p>
                  Being digital-first also gives us room to experiment with the tools around shopping. Alongside a broad mix of styles, we are developing personalised discovery and AI-assisted features intended to make finding and coordinating clothing quicker and more intuitive.
                </p>
              </div>

              <div className="relative overflow-hidden rounded-[1.15rem] border border-[rgba(26,26,26,0.10)] bg-[radial-gradient(circle_at_12%_10%,rgba(189,255,0,0.12),transparent_52%),linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.62))] p-[1.35rem] shadow-[0_18px_44px_rgba(0,0,0,0.10),0_6px_16px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.35)] hover:shadow-[0_26px_60px_rgba(0,0,0,0.14),0_10px_24px_rgba(0,0,0,0.07)]">
                <h3 className="m-0 mb-2 text-[1.05rem] font-extrabold tracking-[0.02em]">Different labels. One outfit.</h3>
                <p className="m-0 text-[0.95rem] leading-[1.7] text-[rgba(26,26,26,0.78)]">Bring pieces together across brands, shape a complete look and explore it through one AnyHJS experience.</p>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-[1.4rem]">
            <header className="max-w-[44rem] text-[rgba(26,26,26,0.70)] [&_p]:m-0 [&_p]:text-[0.98rem] [&_p]:leading-[1.65]">
              <h2>Building AI into the Experience</h2>
              <p>
                AI is an important part of the AnyHJS roadmap, with planned tools focused on helping people discover combinations, understand their options and make style decisions with less searching.
              </p>
            </header>

            <div className="grid gap-[clamp(1rem,2.5vw,1.5rem)] [grid-template-columns:repeat(3,minmax(0,1fr))] max-[640px]:grid-cols-1">
              <article className="relative rounded-[1.15rem] border border-[rgba(26,26,26,0.10)] bg-[radial-gradient(circle_at_10%_10%,rgba(189,255,0,0.10),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.62))] p-[1.25rem] pb-[1.35rem] text-[0.95rem] text-[rgba(26,26,26,0.82)] shadow-[0_18px_44px_rgba(0,0,0,0.10),0_6px_16px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.35)] hover:shadow-[0_26px_60px_rgba(0,0,0,0.14),0_10px_24px_rgba(0,0,0,0.07)] [&_p]:m-0 [&_p+_p]:mt-2">
                <span className="inline-flex items-center justify-center rounded-full border border-[rgba(189,255,0,0.25)] bg-[rgba(189,255,0,0.14)] px-[0.55rem] py-[0.1rem] text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[rgba(26,26,26,0.80)]">
                  Coming Soon
                </span>
                <h3 className="m-0 mt-1 mb-2 text-[1.05rem] font-black text-[rgba(26,26,26,0.94)]">AI Stylist</h3>
                <p>
                  <strong>AI Stylist</strong> is planned as a conversational styling assistant. Describe the occasion — from an office day or dinner to a festival or first date — and it will use that context to build complete outfit suggestions from products available across AnyHJS.
                </p>
                <p>
                  The aim is to respond to your preferences and current fashion context so putting together a considered look takes less trial and error.
                </p>
              </article>

              <article className="relative rounded-[1.15rem] border border-[rgba(26,26,26,0.10)] bg-[radial-gradient(circle_at_10%_10%,rgba(189,255,0,0.10),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.62))] p-[1.25rem] pb-[1.35rem] text-[0.95rem] text-[rgba(26,26,26,0.82)] shadow-[0_18px_44px_rgba(0,0,0,0.10),0_6px_16px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.35)] hover:shadow-[0_26px_60px_rgba(0,0,0,0.14),0_10px_24px_rgba(0,0,0,0.07)] [&_p]:m-0 [&_p+_p]:mt-2">
                <span className="inline-flex items-center justify-center rounded-full border border-[rgba(189,255,0,0.25)] bg-[rgba(189,255,0,0.14)] px-[0.55rem] py-[0.1rem] text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[rgba(26,26,26,0.80)]">
                  Coming Soon
                </span>
                <h3 className="m-0 mt-1 mb-2 text-[1.05rem] font-black text-[rgba(26,26,26,0.94)]">VR Wardrobe</h3>
                <p>
                  <strong>VR Wardrobe</strong> is intended to connect the clothes you already have with new discoveries on AnyHJS. Photograph an existing piece and the planned AI tools will interpret details such as colour and style before suggesting products that could complement it.
                </p>
                <p>
                  Your own wardrobe remains the starting point, with AnyHJS helping you explore fresh combinations around those pieces.
                </p>
              </article>

              <article className="relative rounded-[1.15rem] border border-[rgba(26,26,26,0.10)] bg-[radial-gradient(circle_at_10%_10%,rgba(189,255,0,0.10),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.78),rgba(255,255,255,0.62))] p-[1.25rem] pb-[1.35rem] text-[0.95rem] text-[rgba(26,26,26,0.82)] shadow-[0_18px_44px_rgba(0,0,0,0.10),0_6px_16px_rgba(0,0,0,0.06)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.35)] hover:shadow-[0_26px_60px_rgba(0,0,0,0.14),0_10px_24px_rgba(0,0,0,0.07)] [&_p]:m-0 [&_p+_p]:mt-2">
                <span className="inline-flex items-center justify-center rounded-full border border-[rgba(189,255,0,0.25)] bg-[rgba(189,255,0,0.14)] px-[0.55rem] py-[0.1rem] text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[rgba(26,26,26,0.80)]">
                  Coming Soon
                </span>
                <h3 className="m-0 mt-1 mb-2 text-[1.05rem] font-black text-[rgba(26,26,26,0.94)]">VR Changing Room</h3>
                <p>
                  <strong>VR Changing Room</strong> is a planned virtual try-on tool using a phone camera to preview clothing as part of your look. Instead of relying only on product images, the aim is to give you a live visual reference while you compare different pieces.
                </p>
                <p>
                  It is our approach to bringing some of the visual confidence of a changing room into an online shopping journey.
                </p>
              </article>
            </div>
          </section>

          <section className="flex flex-col gap-[1.4rem]">
            <header>
              <h2>Why Explore AnyHJS?</h2>
            </header>

            <div className="grid items-start gap-[clamp(1.25rem,3vw,2rem)] [grid-template-columns:minmax(0,1.4fr)_minmax(0,1fr)] max-[640px]:grid-cols-1">
              <ul className="m-0 flex list-none flex-col gap-[0.6rem] p-0 [&_li]:leading-[1.65] [&_li]:text-[rgba(26,26,26,0.82)] [&_li:before]:mr-2 [&_li:before]:text-[var(--accent-color)] [&_li:before]:content-['•']">
                <li><strong>More brands in one place:</strong> explore and combine labels without opening a long list of separate stores</li>
                <li><strong>More useful discovery:</strong> planned AI-assisted recommendations shaped around individual preferences</li>
                <li><strong>Tools built for what comes next:</strong> styling, wardrobe and virtual-preview ideas centred on real outfit decisions</li>
                <li><strong>Choice at checkout:</strong> a range of familiar payment options within the proposed shopping experience</li>
                <li><strong>A growing fashion community:</strong> creators, designers and independent voices contributing to what people discover</li>
              </ul>

              <p className="m-0 text-[rgba(26,26,26,0.84)] leading-[1.75]">
                AnyHJS is a work in progress, and the product will continue to change as new brands and features are explored. The long-term aim is straightforward: make online fashion discovery feel more connected, more useful and better suited to the way people actually put outfits together.
              </p>
            </div>
          </section>

          <section className="mt-2 flex flex-col gap-[1.4rem] border-t border-[rgba(26,26,26,0.10)] pt-7">
            <header>
              <h2>What Comes Next</h2>
            </header>

            <div className="text-[rgba(26,26,26,0.84)] leading-[1.75] [&_p]:m-0 [&_p+_p]:mt-4">
              <p>
                AnyHJS is still developing, and several of the biggest ideas shown across the site — including AI Stylist, VR Wardrobe and VR Changing Room — remain future features. As the platform grows, we plan to keep combining fashion, technology and community in ways that make discovering and building outfits feel more natural.
              </p>

              <p>
                Whether you are browsing for a new combination or simply curious about where AI-assisted fashion tools could go next, we hope AnyHJS gives you something useful to explore.
              </p>

              <p>Welcome to AnyHJS.</p>
            </div>
          </section>
        </section>
      </GenericPageSection>
    </div>
  );
}
