import banner1 from "../../imgs/banners/exclusive_offers.png";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function ExclusiveOffers() {
    return (
        <div>
            <ClothingBanner
                title="Exclusive Offers & Rewards"
                subtitle="Extra value for returning shoppers, larger orders and community activity"
                img_src={banner1}
            />

            <GenericPageSection
                label="Offers"
                title="Offers, Rewards & Perks"
                subtitle="See how repeat shopping, bigger baskets and community participation could unlock additional AnyHJS benefits."
            >
                <p>
                    The AnyHJS rewards concept is built around recognising people who return to the platform,
                    place larger orders or actively support the community around the project. Different types
                    of offers can provide additional savings across eligible products and brands, with the
                    exact promotion depending on what is available at the time.
                </p>

                <hr />

                <h2>Ways to Access Extra Savings</h2>

                <p>The current rewards concept is organised around three main types of benefit:</p>

                <ul>
                    <li>
                        <strong>Returning Customer Rewards</strong> – benefits linked to regular shopping activity.
                    </li>
                    <li>
                        <strong>Larger Basket Offers</strong> – additional savings for qualifying higher-value orders.
                    </li>
                    <li>
                        <strong>Community &amp; Creator Rewards</strong> – selected perks connected with sharing and supporting AnyHJS online.
                    </li>
                </ul>

                <p>
                    The figures below are examples of how a future rewards programme could be structured.
                    Promotions and eligibility can change, and any active offer would be shown in the relevant
                    account or checkout experience before it is applied.
                </p>

                <hr />

                <h2>Returning Customer Rewards</h2>

                <p>
                    Regular shoppers can move through example reward levels based on eligible order activity.
                    Both the number of purchases and overall spend can be used to illustrate how increasingly
                    active customers might gain access to additional benefits.
                </p>

                <div className="overflow-x-auto">
                    <table>
                        <thead>
                            <tr>
                                <th>Loyalty Tier</th>
                                <th>Typical Criteria (Example)</th>
                                <th>Sample Benefits</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Style Insider</td>
                                <td>3+ orders or £300+ spent in the last 12 months</td>
                                <td>Up to 5% off selected orders, plus early access to chosen releases and sales.</td>
                            </tr>
                            <tr>
                                <td>Style VIP</td>
                                <td>8+ orders or £800+ spent in the last 12 months</td>
                                <td>
                                    Up to 10% off selected orders, earlier access to new collections and occasional
                                    delivery promotions.
                                </td>
                            </tr>
                            <tr>
                                <td>Style Elite</td>
                                <td>15+ orders or £1,500+ spent in the last 12 months</td>
                                <td>
                                    Up to 15% off selected orders, additional member offers and occasional
                                    birthday or anniversary rewards.
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p>
                    In a full rewards experience, eligible activity could be counted automatically rather
                    than requiring a separate sign-up for each tier. When a customer qualifies for an offer,
                    the discount or relevant code would be shown in the account or checkout flow.
                </p>

                <hr />

                <h2>Larger Basket Offers</h2>

                <p>
                    A bigger wardrobe update can also be used as the basis for an order-value promotion.
                    These example thresholds show how savings could increase as the eligible basket total rises.
                </p>

                <div className="overflow-x-auto">
                    <table>
                        <thead>
                            <tr>
                                <th>Order Value (Example)</th>
                                <th>Sample Discount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>£150+</td>
                                <td>Up to 5% off eligible items</td>
                            </tr>
                            <tr>
                                <td>£300+</td>
                                <td>Up to 10% off eligible items</td>
                            </tr>
                            <tr>
                                <td>£500+</td>
                                <td>Up to 15% off eligible items</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p>
                    This type of offer is intended for larger purchases such as seasonal updates, group
                    shopping or complete outfit refreshes, including baskets that combine products from
                    several different labels.
                </p>

                <hr />

                <h2>Community &amp; Creator Rewards</h2>

                <p>
                    AnyHJS is also designed with a social and creator community in mind. Selected campaigns
                    could recognise people who share outfits, introduce others to the platform or work with
                    the project as creators and partners.
                </p>

                <ul>
                    <li>
                        <strong>Share &amp; Save:</strong> Selected campaigns may offer a one-off code when an eligible AnyHJS
                        look is shared and tagged according to the promotion details.
                    </li>
                    <li>
                        <strong>Referral Rewards:</strong> A referral programme could give a new shopper an introductory benefit
                        while also rewarding the person who introduced them after a qualifying first order.
                    </li>
                    <li>
                        <strong>Creator Benefits:</strong> Established creators may be considered for campaign-specific discounts,
                        affiliate arrangements or wider collaboration opportunities.
                    </li>
                </ul>

                <p>
                    Creators, influencers and brands interested in a broader partnership can use the
                    <strong> Collaborations</strong> information or contact AnyHJS with details of the idea,
                    audience and type of project they would like to discuss.
                </p>

                <hr />

                <h2>Keeping Track of Current Offers</h2>

                <p>
                    Reward structures can evolve as AnyHJS adds features, brands and new campaigns. Any
                    promotion that is active at a particular time should be treated according to the details
                    shown with that offer, including eligibility, duration and any checkout conditions.
                </p>

                <p>
                    Whether a benefit is linked to repeat shopping, a larger basket or community activity,
                    the aim of the rewards concept is to make active AnyHJS customers and supporters feel
                    recognised without making the shopping experience more complicated.
                </p>
            </GenericPageSection>
        </div>
    );
}
