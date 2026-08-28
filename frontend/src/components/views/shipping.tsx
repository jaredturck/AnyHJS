import banner1 from "../../imgs/banners/shipping.png";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function Shipping() {
    return (
        <div>
            <ClothingBanner
                title="Shipping"
                subtitle="Delivery estimates, destinations and charges"
                img_src={banner1}
            />

            <GenericPageSection
                label="Shipping"
                title="Delivery Information"
                subtitle="See the expected delivery times for each region and how shipping charges are worked out."
            >
                <p>
                    This page gives a general guide to delivery times and shipping charges for
                    AnyHJS orders. Actual arrival dates can vary depending on your destination,
                    the items being sent and circumstances outside our control, but the aim is to
                    dispatch orders promptly and provide a clear estimate before you confirm your
                    purchase.
                </p>

                <table>
                    <thead>
                        <tr>
                            <th>Region</th>
                            <th>Estimated Delivery Time</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>United Kingdom</td>
                            <td>3–4 working days</td>
                            <td>
                                UK deliveries are generally expected within 3–4 working days
                                once the order has been dispatched.
                            </td>
                        </tr>
                        <tr>
                            <td>Europe</td>
                            <td>Approximately 5 working days</td>
                            <td>
                                Deliveries to European destinations usually take around 5 working
                                days from dispatch.
                            </td>
                        </tr>
                        <tr>
                            <td>Rest of World</td>
                            <td>Approximately 7 working days</td>
                            <td>
                                Orders travelling outside Europe are generally expected to arrive
                                in roughly 7 working days.
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    Any applicable delivery charge is shown during checkout and included in the
                    final order total. The amount can vary according to the delivery address,
                    shipping option and the products included in the basket.
                </p>
            </GenericPageSection>
        </div>
    );
}
