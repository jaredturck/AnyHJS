import banner1 from "../../imgs/banners/vr_changing_room.png";
import vrChangingRoomImage from "../../imgs/banners/vr_changing_room_img1.png";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function VRChangingRoom() {
    return (
        <div>
            <ClothingBanner
                title="VR Changing Room"
                subtitle="See how outfits could look on you before you choose them (Coming soon)"
                img_src={banner1}
            />

            <GenericPageSection
                label="Labs"
                title="VR Changing Room (Coming Soon)"
                subtitle="A planned virtual try-on experience that uses your camera to preview clothing on your body in real time."
            >
                <h1>VR Changing Room (Coming Soon)</h1>

                <p>
                    <strong>VR Changing Room</strong> is our planned virtual try-on feature for making online
                    shopping feel a little closer to trying something on in person. Using your phone camera,
                    the experience is intended to show selected clothing on your body in real time before
                    you decide what to buy, giving you another way to judge a look beyond product photography
                    and standard size information.
                </p>

                <p>
                    AnyHJS brings products from many different labels into one place, from established names
                    to smaller and emerging brands. VR Changing Room is designed to connect that broad online
                    selection with a more visual way of exploring an outfit, using your screen like a digital
                    mirror while you compare pieces and styles.
                </p>

                <figure>
                    <img
                        src={vrChangingRoomImage}
                        alt="Preview of the planned VR Changing Room experience"
                        style={{ width: "100%", borderRadius: "12px" }}
                    />
                </figure>

                <h2>What Is VR Changing Room?</h2>

                <p>
                    VR Changing Room is being developed as an AI-assisted fitting experience for the AnyHJS
                    website and future mobile tools. From a product page, the planned flow will let you open
                    the feature, allow camera access and use the front-facing camera as a live preview area.
                </p>

                <p>
                    Computer-vision and neural-network technology would be used to identify your position in
                    the camera feed and place a digital version of the selected garment over the image. As
                    you move or change your angle, the preview is intended to respond with you so you can
                    inspect the overall look from more than one position. The feature is being built around
                    clothing rather than as a general-purpose camera effect.
                </p>

                <h2>What the Experience Is Designed to Offer</h2>

                <ul>
                    <li>
                        <strong>Preview before choosing:</strong> Get a visual idea of how a selected item
                        could look as part of your outfit before moving to checkout.
                    </li>
                    <li>
                        <strong>Live camera view:</strong> The planned preview follows your position as you
                        move, creating a more interactive view than a static product image.
                    </li>
                    <li>
                        <strong>More styling context:</strong> Compare whether a piece feels understated,
                        formal, relaxed or bold while seeing it alongside your overall look.
                    </li>
                    <li>
                        <strong>Useful across brands:</strong> Explore clothing from different labels through
                        the same virtual fitting experience instead of switching between separate stores.
                    </li>
                    <li>
                        <strong>More informed choices:</strong> A clearer visual preview can help you narrow
                        down which pieces suit the look you are trying to create.
                    </li>
                </ul>

                <p>
                    The aim is to give online shoppers another reference point when comparing clothing from
                    a wide selection of brands. Rather than replacing normal product information, the virtual
                    preview is intended to add a more immediate way to picture an outfit before choosing it.
                </p>

                <h2>How It Will Work</h2>

                <ol>
                    <li>Browse AnyHJS and open a product you would like to preview.</li>
                    <li>Choose the <strong>“Try in VR Changing Room”</strong> option on the product page.</li>
                    <li>Give camera permission and position yourself within the front-facing camera view.</li>
                    <li>See the selected garment placed into the live preview.</li>
                    <li>Change your position or angle to inspect the look from different viewpoints.</li>
                </ol>

                <p>
                    The planned experience will also make it possible to compare available colours, sizes
                    and styles without leaving the preview, helping you explore different combinations before
                    deciding which items you want to add to your basket.
                </p>

                <h2>Status: In Development</h2>

                <p>
                    VR Changing Room is still an active development project. Building a responsive virtual
                    try-on tool involves a number of technical challenges, and the aim is to make the final
                    experience clear, reliable and practical across a useful range of supported devices.
                </p>

                <p>
                    The feature cannot be used yet and remains part of the future AnyHJS roadmap. We will
                    use this page and our social channels to share previews and launch information as work
                    progresses, including any opportunities to test the experience before a wider release.
                </p>
            </GenericPageSection>
        </div>
    );
}