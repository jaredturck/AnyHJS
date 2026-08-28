import banner1 from "../../imgs/banners/pr.jpg";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function PR() {
    return (
        <div>
            <ClothingBanner
                title="Public Relations"
                subtitle="Press, media and interview enquiries"
                img_src={banner1}
            />

            <GenericPageSection
                label="Press"
                title="Public Relations"
                subtitle="Details for journalists, media teams and partners interested in covering AnyHJS."
            >
                <h1>Public Relations</h1>

                <p>
                    AnyHJS is a fashion technology concept built around bringing products, outfit discovery
                    and styling tools together in one place. The platform explores how shoppers could move
                    between established labels, independent names and complete outfit ideas without treating
                    every brand as a separate experience. Features in development include personalised styling,
                    wardrobe tools and virtual try-on concepts, placing AnyHJS where fashion, retail and
                    technology overlap.
                </p>

                <p>
                    Journalists and media teams can get in touch about interviews, event invitations, product
                    features or commentary relating to fashion technology, online retail and AI-assisted
                    styling. Use the <strong>Contact</strong> page and include the publication, deadline and
                    subject of the request. Where relevant, we can provide approved brand assets, background
                    information and further detail about the AnyHJS concept and product roadmap.
                </p>
            </GenericPageSection>
        </div>
    );
}
