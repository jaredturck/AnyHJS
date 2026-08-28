import banner1 from "../../imgs/banners/blog.avif";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";
import { blogPosts } from "../../data/blog_posts";

export function Blog() {
  return (
    <div>
      <ClothingBanner
        title="AnyHJS Blog"
        subtitle="Ideas, releases and stories where fashion meets technology."
        img_src={banner1}
      />

      <GenericPageSection
        label="Stories"
        title="From the AnyHJS Journal"
        subtitle="Explore style trends, collaborations and updates from around the platform."
      >
        <div className="mt-6">
          <div className="flex flex-col gap-5">
            {blogPosts.map((article, index) => (
              <article
                key={index}
                className="relative overflow-hidden rounded-[1.1rem] border border-[#262626] bg-[radial-gradient(circle_at_top_left,#181818_0,#050505_70%)] px-6 pt-[1.4rem] pb-6 text-white shadow-[0_18px_40px_rgba(0,0,0,0.8)]"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-[20%] -left-[20%] h-[22rem] w-[22rem] rounded-full bg-[radial-gradient(circle_at_0%_0%,rgba(189,255,0,0.12),transparent_55%)] opacity-70"
                />

                <header className="relative z-10">
                  <div className="mb-2 flex items-center gap-2 text-[0.72rem] uppercase tracking-[0.13em]">
                    <span className="rounded-full border border-[rgba(189,255,0,0.25)] bg-[rgba(189,255,0,0.06)] px-2 py-[0.16rem] font-medium text-[#a5c44a]">
                      {article.tag}
                    </span>
                    <span className="text-[#777]">{article.created}</span>
                  </div>

                  <h2 className="mb-[0.35rem] text-[1.28rem] font-semibold tracking-[0.01em] text-[var(--accent-color,#BDFF00)]">
                    {article.title}
                  </h2>

                  <p className="mb-[0.85rem] text-[0.95rem] text-[#c1c1c1]">
                    {article.summary}
                  </p>
                </header>

                <p className="relative z-10 m-0 text-[0.95rem] leading-[1.6] text-[#d8d8d8]">
                  {article.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </GenericPageSection>
    </div>
  );
}
