import banner1 from "../../imgs/banners/vr_waredrobe.png";
import vrWardrobeImage from "../../imgs/banners/vr_waredrobe_img1.png";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function VRWardrobe() {
    return (
        <div>
            <ClothingBanner
                title="VR Wardrobe"
                subtitle="Build new outfit ideas around clothes you already own (Coming soon)"
                img_src={banner1}
            />

            <GenericPageSection
                label="Labs"
                title="VR Wardrobe (Coming Soon)"
                subtitle="A planned mobile feature that uses AI to suggest outfits around items already in your wardrobe."
            >
                <h1>VR Wardrobe (Coming Soon)</h1>

                <p>
                    <strong>VR Wardrobe</strong> is being designed to make the clothes you already own part
                    of the AnyHJS experience. Take a photo of an item from your wardrobe – whether that is a
                    shirt, trousers, a jacket, dress or favourite pair of trainers – and the feature will
                    analyse what it sees before suggesting new pieces that could work alongside it.
                </p>

                <p>
                    The concept uses image-recognition technology and <strong>convolutional neural networks</strong>
                    with fashion-focused models to interpret details such as garment type, colour, pattern and
                    overall style. From there, it can consider season and wider fashion trends before bringing
                    together compatible products from brands across AnyHJS. The aim is to make outfit discovery
                    feel focused from the start, rather than asking you to search through every product yourself.
                </p>

                <figure>
                    <img
                        src={vrWardrobeImage}
                        alt="Preview of the planned VR Wardrobe feature"
                        style={{ width: "100%", borderRadius: "12px" }}
                    />
                </figure>

                <h2>What You Will Be Able to Do</h2>

                <ul>
                    <li>Photograph a piece from your wardrobe and let the feature recognise the item.</li>
                    <li>See outfit suggestions chosen to work with clothing you already have.</li>
                    <li>Explore matching pieces from multiple brands without opening separate stores.</li>
                    <li>Discover recommendations that can take season and current fashion trends into account.</li>
                    <li>Keep favourite outfit combinations and explore the suggested products on AnyHJS.</li>
                </ul>

                <p>
                    Whether you are simplifying your wardrobe or getting ready for a particular occasion,
                    VR Wardrobe is intended to give the clothes you already own a useful starting point.
                    It connects those pieces with the wider selection available through AnyHJS, helping you
                    explore combinations that fit naturally with what is already in your wardrobe.
                </p>

                <h2>Status: Work in Progress</h2>

                <p>
                    VR Wardrobe is currently being developed for the future AnyHJS mobile experience. The
                    feature is not available to use yet, but it remains an important part of the longer-term
                    plan for connecting AI-assisted styling with the clothes people already own.
                </p>

                <p>
                    We will share more information here and through our social channels as development moves
                    forward. The goal is a simple experience that turns an existing wardrobe item into a
                    useful starting point for discovering new combinations and pieces.
                </p>
            </GenericPageSection>
        </div>
    );
}
