import banner1 from "../../imgs/banners/refund.png";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function Refunds() {
    return (
        <div>
            <ClothingBanner
                title="Returns & Refunds"
                subtitle="What to know if you need to send an item back"
                img_src={banner1}
            />

            <GenericPageSection
                label="Returns & Refunds"
                title="Returns and Refund Information"
                subtitle="Check the return window, item-condition requirements and what happens after an approved return."
            >
                <p>
                    Most eligible items can be returned within 30 days of delivery for a refund
                    or store credit, provided they are still in their original condition. Clothing
                    should not have been worn or washed, and original tags and packaging should
                    remain in place. Items showing wear, makeup, fragrance or damage may not be
                    accepted. Final-sale products, items marked as non-returnable and certain
                    hygiene-sensitive goods such as underwear or swimwear can also be excluded.
                </p>

                <p>
                    To arrange a return, follow the available returns instructions or contact the
                    support team for guidance. Once the item has been received and the return is
                    approved, the eligible amount can be sent back to the original payment method
                    or provided as store credit where that option applies. Any store credit issued
                    can then be used toward other products available through AnyHJS.
                </p>
            </GenericPageSection>
        </div>
    );
}
