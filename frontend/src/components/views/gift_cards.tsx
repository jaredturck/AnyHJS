import banner1 from "../../imgs/banners/gift_card.png";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function GiftCards() {
    return (
        <div>
            <ClothingBanner
                title="Gift Cards"
                subtitle="A flexible way to give someone their own choice"
                img_src={banner1}
            />

            <GenericPageSection
                label="Gift Cards"
                title="Give them room to choose"
                subtitle="A quick guide to using and redeeming AnyHJS gift cards."
            >
                <p>
                    A gift card lets someone choose the pieces that suit them instead of making
                    you guess their size, preferred label or personal style. The idea is simple:
                    add value to the card and let them browse clothing from the range of brands
                    available through AnyHJS. Whether they prefer relaxed basics, streetwear,
                    standout pieces or something more premium, the choice stays with them.
                </p>

                <p>
                    Where gift cards are available at checkout, redeeming one is straightforward.
                    Add the items you want, select the gift-card payment option and enter the
                    relevant card details. If the card balance covers the full order, no additional
                    payment is needed; if not, the remaining amount can be paid using another
                    supported method.
                </p>

                <p>
                    Gift cards can work for birthdays, celebrations, graduations or simply as an
                    easy present when you know someone loves fashion but do not know exactly what
                    they would pick. Rather than tying the recipient to one specific label, an
                    AnyHJS gift card is designed to give them a wider selection and the freedom to
                    choose something they will genuinely want to wear.
                </p>
            </GenericPageSection>
        </div>
    );
}
