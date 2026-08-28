import banner1 from "../../imgs/banners/payment.png";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function PaymentMethods() {
    return (
        <div>
            <ClothingBanner
                title="Payment Methods"
                subtitle="Familiar ways to pay when you reach checkout"
                img_src={banner1}
            />

            <GenericPageSection
                label="Payments"
                title="Ways to Pay"
                subtitle="An overview of the payment options shown in the AnyHJS checkout experience."
            >
                <h1>Payment Information</h1>

                <p>
                    AnyHJS is designed around bringing products from different fashion labels into
                    one shopping journey. Rather than completing a separate checkout with each
                    brand, the intended experience keeps the basket together so you can review the
                    full order and choose a payment option in one place.
                </p>

                <p>
                    The checkout design supports a selection of familiar card and digital-payment
                    choices, giving shoppers different ways to complete an order. Available options
                    can depend on location, device and provider support. Before anything is confirmed,
                    the checkout shows the selected payment method alongside the order summary so the
                    details can be reviewed together.
                </p>

                <h2>Payment Options</h2>

                <p>
                    The table below shows the payment methods represented in the current AnyHJS
                    checkout design. Provider availability can differ by region or currency, so the
                    options displayed during checkout are the ones that apply to that order.
                </p>

                <table>
                    <thead>
                        <tr>
                            <th>Payment Method</th>
                            <th>Type</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Visa, Mastercard, American Express, Discover, JCB, UnionPay
                            </td>
                            <td>Credit &amp; Debit Cards</td>
                            <td>
                                Major card networks represented as standard one-time payment options
                                within the checkout.
                            </td>
                        </tr>
                        <tr>
                            <td>Diners Club</td>
                            <td>Credit Card</td>
                            <td>
                                Shown as an additional card option where the issuer and region support it.
                            </td>
                        </tr>
                        <tr>
                            <td>PayPal</td>
                            <td>Digital Wallet</td>
                            <td>
                                A wallet option that can use a PayPal balance or a payment method linked
                                to the shopper&apos;s PayPal account.
                            </td>
                        </tr>
                        <tr>
                            <td>Apple&nbsp;Pay &amp; Google&nbsp;Pay</td>
                            <td>Mobile Wallets</td>
                            <td>
                                Device-based wallet options intended to make supported checkouts quicker
                                using payment details already saved on the device.
                            </td>
                        </tr>
                        <tr>
                            <td>Shop&nbsp;Pay</td>
                            <td>Accelerated Checkout</td>
                            <td>
                                An accelerated checkout option designed around securely saved details on
                                compatible Shop Pay experiences.
                            </td>
                        </tr>
                        <tr>
                            <td>Klarna &amp; Clearpay</td>
                            <td>Buy Now, Pay Later</td>
                            <td>
                                Instalment-style payment options where available, subject to each provider&apos;s
                                eligibility checks and terms.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    Payment logos and available choices are shown as part of the checkout interface.
                    When a supported provider is selected, the relevant on-screen steps explain what
                    is needed to continue with that payment method.
                </p>
            </GenericPageSection>
        </div>
    );
}
