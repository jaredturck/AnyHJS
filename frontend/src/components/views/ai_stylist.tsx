import banner1 from "../../imgs/banners/ai_styelist.png";
import aiStylistImage from "../../imgs/banners/ai_stylist_img1.png";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function AIStylist() {
  return (
    <div>
      <ClothingBanner title="AI Stylist" subtitle="Personal styling powered by AI, whenever you need it (Coming soon)" img_src={banner1} />

      <GenericPageSection
        label="Labs"
        title="AI Stylist (Coming Soon)"
        subtitle="A planned feature for creating complete occasion-ready outfits through natural conversation and fashion-focused AI."
      >
        <h1>AI Stylist (Coming Soon)</h1>

        <p>
          Think of <strong>AI Stylist</strong> as a personal styling assistant that will be available whenever you need inspiration. The feature is being designed to sit inside
          the AnyHJS experience and respond to everyday language rather than complicated filters. Tell it where you are going, the mood you want and how you would like
          to dress, and it will put together full outfit ideas using products from brands across the platform.
        </p>

        <p>
          From a birthday dinner or an interview to a first date, weekend away or quick coffee trip, AI Stylist will use the occasion and expected dress code as part of
          its recommendations. Fashion-focused AI and language technology will help it ask useful follow-up questions, narrow down the direction of your look,
          and present outfit combinations shaped around what you have asked for.
        </p>

        <figure className="my-6">
          <img src={aiStylistImage} alt="Preview of the planned AI Stylist experience" className="w-full rounded-xl border border-[rgba(26,26,26,0.10)] bg-white/70 shadow-[0_16px_36px_rgba(0,0,0,0.08),0_2px_10px_rgba(0,0,0,0.05)]" />
        </figure>

        <h2>How AI Stylist Is Planned to Work</h2>

        <p>The idea combines fashion knowledge with the preferences you share:</p>

        <ul className="mt-3">
          <li>
            <strong>Styling for the occasion:</strong> Explain what you are dressing for and AI Stylist will build suggestions around the setting, atmosphere and
            level of formality.
          </li>
          <li>
            <strong>Current style awareness:</strong> Recommendations are intended to reflect changing fashion and social trends, helping suggested looks feel relevant.
          </li>
          <li>
            <strong>Built around your taste:</strong> Future personalisation is designed to respond to the colours, fits, labels and styles you prefer as you use the
            platform over time.
          </li>
          <li>
            <strong>Complete outfit ideas:</strong> Suggestions can cover the whole look, bringing together footwear, bottoms, tops, layers and accessories from the
            wider catalogue.
          </li>
          <li>
            <strong>Useful refinements:</strong> Narrow an outfit by budget, season, comfort or how understated or expressive you want it to feel.
          </li>
        </ul>

        <p>
          With products drawn from many different brands, AI Stylist will not be tied to one label or one type of fashion. The aim is to combine everyday staples with
          stronger statement pieces, mix labels where they work together, and offer several directions so you can choose the outfit that feels right for you.
        </p>

        <h2>Why We Are Building AI Stylist</h2>

        <p>
          Keeping track of trends is one thing; deciding what actually works for your own plans and taste is another. AI Stylist is intended to turn simple requests such
          as “smart casual for an evening out”, “warm but polished for winter” or “streetwear for a concert” into practical outfit ideas you can explore on the platform.
        </p>

        <p>
          Instead of starting with endless pages of individual products, you will be able to describe the result you want first. AI Stylist can then search across the
          available selection and bring together pieces that make sense as a complete look, ready for you to review and add to your basket.
        </p>

        <h2>Status: In Development</h2>

        <p>
          AI Stylist is still being developed as one of the main AI features planned for AnyHJS. The goal is to make the experience straightforward to talk to, genuinely
          useful for outfit decisions, and flexible enough to work with a wide range of personal styles.
        </p>

        <p>
          The feature is not available yet. This page and our social channels will be used to share future previews, development news and launch information as the
          product progresses. When it is ready, AI Stylist will offer a new way to start building a look from an idea rather than a product list.
        </p>
      </GenericPageSection>
    </div>
  );
}
