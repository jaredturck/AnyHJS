import banner1 from "../../imgs/banners/engage_with_followers.png";
import engageImage from "../../imgs/banners/clothing_img1.png";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function EngageWithFollowers() {
    return (
        <div>
            <ClothingBanner
                title="Connect with AnyHJS"
                subtitle="Follow the project, join the conversation and stay in the loop"
                img_src={banner1}
            />

            <GenericPageSection
                label="Community"
                title="Stay Connected with AnyHJS"
                subtitle="Explore the places where we plan to share updates, outfit ideas, product news and community content."
            >
                <h1>Connect with AnyHJS</h1>

                <p>
                    AnyHJS is intended to be more than a catalogue of clothing. We want the project to have
                    an active community around style, creators and the brands people are discovering. Our
                    social channels are where we plan to share new collections, outfit inspiration, product
                    developments and the ideas shaping the platform as it grows.
                </p>

                <p>
                    By bringing products from many labels into one place, AnyHJS is designed to make it
                    easier to explore different styles and put complete looks together. Our future AI tools
                    are intended to make that discovery more personal, while the community side of AnyHJS
                    gives us a place to share ideas, hear feedback and highlight how people style their finds.
                </p>

                <figure>
                    <img
                        src={engageImage}
                        alt="AnyHJS fashion and community preview"
                        className="w-full rounded-xl"
                        loading="lazy"
                        decoding="async"
                    />
                </figure>

                <hr />

                <h2>Where to Follow AnyHJS</h2>

                <p>
                    Different channels will be used for different kinds of content, from quick outfit ideas
                    and development updates to longer styling features and community posts. Follow whichever
                    platforms suit you, share your own looks, and keep an eye out for new AnyHJS announcements.
                </p>

                <div className="overflow-x-auto">
                    <table>
                        <thead>
                            <tr>
                                <th>Platform</th>
                                <th>AnyHJS Presence</th>
                                <th>What We Plan to Share</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Instagram</td>
                                <td>AnyHJS</td>
                                <td>Outfit inspiration, collection highlights, styling reels and community posts.</td>
                            </tr>
                            <tr>
                                <td>TikTok</td>
                                <td>AnyHJS</td>
                                <td>Short styling ideas, trend commentary and quick behind-the-scenes updates.</td>
                            </tr>
                            <tr>
                                <td>YouTube</td>
                                <td>AnyHJS</td>
                                <td>Longer lookbooks, feature previews, styling guides and fashion discussions.</td>
                            </tr>
                            <tr>
                                <td>Pinterest</td>
                                <td>AnyHJS</td>
                                <td>Seasonal moodboards, outfit references and curated style collections.</td>
                            </tr>
                            <tr>
                                <td>Twitter / X</td>
                                <td>AnyHJS</td>
                                <td>Project updates, new releases, announcements and shorter community conversations.</td>
                            </tr>
                            <tr>
                                <td>Discord</td>
                                <td>AnyHJS Community</td>
                                <td>A future space for outfit sharing, feature feedback and community discussion.</td>
                            </tr>
                            <tr>
                                <td>Snapchat</td>
                                <td>AnyHJS</td>
                                <td>Quick previews, informal updates and early looks at upcoming ideas.</td>
                            </tr>
                            <tr>
                                <td>News Section</td>
                                <td>On the AnyHJS website</td>
                                <td>Official product updates, collaboration news and project announcements.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p>
                    Social channels and availability may change as the project develops. The AnyHJS website
                    will remain the main place for confirmed information about features and future releases.
                </p>

                <hr />

                <h2>Why Join the Conversation?</h2>

                <p>
                    Community feedback can help shape what AnyHJS becomes. Following the project gives you a
                    way to see new ideas early, discover brands and outfits we are featuring, and keep up with
                    future collections, experiments and product releases as they are developed.
                </p>

                <p>
                    The longer-term AnyHJS experience is centred on discovering clothing from different labels
                    without having to search each store separately. Alongside that, planned AI-assisted tools
                    will help surface outfits and pieces around style, budget and wardrobe preferences. Our
                    social content is intended to complement that experience with inspiration and conversation.
                </p>

                <hr />

                <h2>Talk to the AnyHJS Team</h2>

                <p>
                    Have feedback, a question or an idea for working together? You can use the AnyHJS
                    <strong> Contact</strong> page to send a message. Social channels can also be used for
                    general conversation and to follow public updates from the project.
                </p>

                <p>
                    For collaboration, creator or brand enquiries, include a short explanation of what you
                    have in mind and any useful links or background. That gives us enough context to understand
                    the idea and consider where it could fit with the future direction of AnyHJS.
                </p>

                <p>
                    Follow the project, share your style and help shape the community around AnyHJS.
                </p>
            </GenericPageSection>
        </div>
    );
}
