import banner1 from "../../imgs/banners/img2.png";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";
import { faqs } from "../../data/faqs";

export function SupportCentre() {
  return (
    <div>
      <ClothingBanner title="Support Centre" subtitle="Find answers and guidance for common questions" img_src={banner1} />

      <GenericPageSection label="Support" title="Help & FAQs" subtitle="Quick information about delivery, returns, sizing, tracking and payment questions.">
        <h2>Common Questions</h2>

        <div className="mt-6 space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="rounded-xl border border-[rgba(26,26,26,0.10)] bg-white/65 p-4 shadow-[0_10px_24px_rgba(0,0,0,0.06),0_2px_10px_rgba(0,0,0,0.04)] transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-[2px] hover:border-[rgba(189,255,0,0.35)] hover:shadow-[0_18px_40px_rgba(0,0,0,0.10),0_6px_14px_rgba(0,0,0,0.06)]">
              <h3 className="m-0 text-[0.98rem] font-extrabold uppercase tracking-[0.12em] text-[rgba(26,26,26,0.88)]">
                {item.question}
              </h3>
              <p className="m-0 mt-2 text-[0.98rem] leading-[1.75] text-[rgba(26,26,26,0.84)]">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </GenericPageSection>
    </div>
  );
}
