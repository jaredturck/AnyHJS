import banner1 from "../../imgs/banners/privacy.png";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function PrivacyPolicy() {
    return (
        <div>
            <ClothingBanner
                title="Privacy Policy"
                subtitle="How AnyHJS handles and protects personal data"
                img_src={banner1}
            />

            <GenericPageSection
                label="Legal"
                title="Privacy Policy"
                subtitle="This policy explains the information connected with AnyHJS, why it may be used and the choices available to you."
            >
                <h1>Privacy Policy</h1>

                <p>
                    This Privacy Policy describes how AnyHJS ("AnyHJS", "we", "us" or "our") handles personal
                    data connected with the AnyHJS website and related online services (together, the
                    "Services"). It also explains the rights and choices that may be available to you under
                    applicable data-protection law.
                </p>

                <p>
                    We aim to handle personal information responsibly and in accordance with relevant UK
                    legislation, including the UK General Data Protection Regulation ("UK GDPR") and the Data
                    Protection Act 2018. The exact information involved depends on the features you choose to
                    use and the third-party services that support the Site.
                </p>

                <p>
                    Please read this policy alongside our Cookie Policy and any privacy information shown at
                    the point where information is requested. If you do not wish to use a feature that asks
                    for personal information, you may choose not to provide that information unless it is
                    necessary for the feature to operate.
                </p>

                <h2>1. Data Controller and Contact Details</h2>

                <p>
                    Where AnyHJS determines why and how personal data is processed, AnyHJS acts as the data
                    controller for that processing. Some third-party providers may act as separate controllers
                    for information they receive directly through their own services.
                </p>

                <p>
                    Questions about privacy or data protection can be sent through the contact details or form
                    available on our Contact page. If a dedicated privacy contact or data protection officer is
                    appointed, the relevant details will be published on the Site.
                </p>

                <h2>2. Scope of this Privacy Policy</h2>

                <p>This policy may apply to personal data relating to people who:</p>

                <ul>
                    <li>browse or interact with the AnyHJS website;</li>
                    <li>use account, saved-item or shopping features where those features are available;</li>
                    <li>choose to receive marketing or product updates;</li>
                    <li>send us a question, request, complaint or other communication; or</li>
                    <li>otherwise interact with AnyHJS in circumstances where personal data is processed.</li>
                </ul>

                <p>
                    External websites, payment providers, social platforms, delivery services and other
                    third-party organisations operate under their own privacy practices. This policy does not
                    control how an independent third party processes information once you interact directly
                    with that third party.
                </p>

                <h2>3. Personal Data We Collect</h2>

                <h3>3.1 Information you provide directly</h3>

                <p>
                    Depending on the feature being used, information supplied directly by you may include:
                </p>

                <ul>
                    <li>
                        <strong>Contact information:</strong> details such as your name, email address,
                        telephone number or delivery information where those details are required.
                    </li>
                    <li>
                        <strong>Account information:</strong> information associated with account or profile
                        features where those features are made available.
                    </li>
                    <li>
                        <strong>Shopping information:</strong> product selections, basket activity, delivery
                        choices, returns information or other details connected with a transaction.
                    </li>
                    <li>
                        <strong>Payment information:</strong> information required by a payment provider to
                        process a transaction. Full card credentials are ordinarily handled by the relevant
                        payment service rather than stored by us directly.
                    </li>
                    <li>
                        <strong>Preferences:</strong> choices relating to communications, saved products,
                        personalisation or similar optional features.
                    </li>
                    <li>
                        <strong>Messages:</strong> information included when you contact us or submit feedback,
                        enquiries or other correspondence.
                    </li>
                </ul>

                <h3>3.2 Information collected automatically</h3>

                <p>
                    When you visit the Site, technical information may be generated automatically by your
                    browser, device and the services used to operate or measure the Site. This can include:
                </p>

                <ul>
                    <li>
                        <strong>Device and browser data:</strong> information such as browser type, device type,
                        operating system, approximate location derived from network information and IP address.
                    </li>
                    <li>
                        <strong>Usage information:</strong> pages visited, interactions, referral information,
                        session timing and similar data about how the Site is used.
                    </li>
                    <li>
                        <strong>Cookie and storage information:</strong> identifiers or preferences stored by
                        cookies, local storage or related browser technologies.
                    </li>
                </ul>

                <p>
                    More information about browser storage, analytics and similar technologies is available in
                    our Cookie Policy.
                </p>

                <h3>3.3 Information from third parties</h3>

                <p>
                    We may receive information from organisations that provide services connected with the
                    Site. Depending on the services in use, those organisations may include:
                </p>

                <ul>
                    <li>payment providers involved in authorisation, fraud screening or transaction support;</li>
                    <li>delivery or logistics services involved in fulfilling an order;</li>
                    <li>social platforms where you interact with AnyHJS content or accounts; and</li>
                    <li>analytics, hosting or marketing providers that supply technical or aggregated usage information.</li>
                </ul>

                <h2>4. Purposes and Legal Bases for Processing</h2>

                <p>
                    UK data-protection law requires a lawful basis for processing personal data. The basis
                    used depends on the circumstances and may include consent, performance of a contract,
                    compliance with a legal obligation, or a legitimate interest that is not overridden by
                    your rights and freedoms.
                </p>

                <table>
                    <thead>
                        <tr>
                            <th>Purpose</th>
                            <th>Examples</th>
                            <th>Potential Legal Basis</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Providing products and services</td>
                            <td>Operating shopping features, processing eligible transactions, delivery and returns.</td>
                            <td>Contract; legitimate interests.</td>
                        </tr>
                        <tr>
                            <td>Account and preference features</td>
                            <td>Providing profile, saved-item or preference functionality where available.</td>
                            <td>Contract; legitimate interests; consent where appropriate.</td>
                        </tr>
                        <tr>
                            <td>Support and communications</td>
                            <td>Responding to messages, requests or service-related enquiries.</td>
                            <td>Contract; legitimate interests.</td>
                        </tr>
                        <tr>
                            <td>Marketing</td>
                            <td>Sending offers, news or promotional communications where permitted.</td>
                            <td>Consent; legitimate interests where the law allows.</td>
                        </tr>
                        <tr>
                            <td>Personalisation</td>
                            <td>Adapting recommendations or content using preferences and permitted usage data.</td>
                            <td>Legitimate interests; consent where required.</td>
                        </tr>
                        <tr>
                            <td>Analytics and improvement</td>
                            <td>Understanding performance, finding errors and improving the user experience.</td>
                            <td>Legitimate interests; consent where required for tracking technologies.</td>
                        </tr>
                        <tr>
                            <td>Security and fraud prevention</td>
                            <td>Protecting the Site, investigating misuse and reducing fraudulent activity.</td>
                            <td>Legitimate interests; legal obligations.</td>
                        </tr>
                        <tr>
                            <td>Legal compliance</td>
                            <td>Meeting obligations relating to records, regulators, tax or lawful requests.</td>
                            <td>Legal obligations; legitimate interests.</td>
                        </tr>
                    </tbody>
                </table>

                <h2>5. Marketing Communications</h2>

                <p>
                    Where marketing communications are offered, we may send news, product information or
                    promotional material using the channels you have chosen. Consent will be requested where
                    required by law, and other permitted communications may be based on legitimate interests
                    where the relevant rules allow that approach.
                </p>

                <p>
                    You can ask to stop receiving marketing at any time by using an unsubscribe option where
                    one is provided or by contacting us. Stopping marketing does not necessarily prevent
                    service messages that are needed for an existing request or transaction.
                </p>

                <h2>6. Cookies and Similar Technologies</h2>

                <p>
                    The Site may use cookies, local storage and similar browser technologies for functions such
                    as remembering choices, maintaining interface state, measuring traffic and understanding
                    how visitors use the Site. Some technologies are necessary for requested functionality,
                    while others may require your consent.
                </p>

                <p>
                    Our Cookie Policy provides more detail about these technologies and the options available
                    for managing them.
                </p>

                <h2>7. Sharing Your Personal Data</h2>

                <p>
                    Personal data may be shared where reasonably necessary to operate the relevant feature,
                    comply with law or protect legitimate interests. Depending on the service involved,
                    recipients may include:
                </p>

                <ul>
                    <li><strong>Brands and suppliers</strong> where information is needed to support a product or order.</li>
                    <li><strong>Payment providers</strong> where a transaction requires payment processing or fraud checks.</li>
                    <li><strong>Delivery providers</strong> where an order needs to be transported or returned.</li>
                    <li><strong>Technology providers</strong> supplying hosting, analytics, communications or infrastructure.</li>
                    <li><strong>Professional advisers</strong> where legal, accounting, audit or insurance support is required.</li>
                    <li><strong>Authorities</strong> where disclosure is required by law or a valid legal process.</li>
                    <li><strong>Business successors</strong> in connection with a genuine restructuring, acquisition or transfer.</li>
                </ul>

                <p>
                    We do not sell personal data to third parties in exchange for money.
                </p>

                <h2>8. International Transfers</h2>

                <p>
                    Some technology or service providers may process information outside the United Kingdom.
                    Where UK data-protection law requires safeguards for an international transfer, we will
                    use an appropriate lawful mechanism, such as an adequacy decision or approved contractual
                    protections.
                </p>

                <p>
                    The safeguards that apply depend on the provider, destination and type of information
                    involved. Further information may be requested through our Contact page where applicable.
                </p>

                <h2>9. Data Retention</h2>

                <p>
                    Personal data is kept only for as long as there is a reasonable need for it, taking into
                    account the purpose for which it was obtained and any legal, tax, accounting, security or
                    dispute-related requirements that may apply.
                </p>

                <p>
                    Retention periods may differ between categories of information. When information is no
                    longer required, it may be deleted, anonymised or otherwise handled in accordance with
                    applicable legal and operational requirements.
                </p>

                <h2>10. Data Security</h2>

                <p>
                    We use reasonable technical and organisational safeguards intended to reduce the risk of
                    accidental loss, misuse, unauthorised access, alteration or disclosure. The exact measures
                    used depend on the systems and services involved.
                </p>

                <p>
                    No internet service can guarantee absolute security. You should also protect your own
                    device, browser and account access and avoid sharing sensitive information through channels
                    that are not intended to receive it.
                </p>

                <h2>11. Automated Decision-Making and Profiling</h2>

                <p>
                    Personalisation tools may use preferences or permitted activity data to rank, filter or
                    suggest content and products. This type of recommendation activity would not normally be
                    expected to create legal or similarly significant effects by itself.
                </p>

                <p>
                    If AnyHJS introduces solely automated decision-making that has a legal or similarly
                    significant effect on individuals, additional information and safeguards will be provided
                    as required by applicable law.
                </p>

                <h2>12. Your Data Protection Rights</h2>

                <p>
                    Depending on the circumstances and the exemptions allowed by law, UK data-protection
                    legislation may give you rights concerning personal data held about you, including:
                </p>

                <ul>
                    <li><strong>Information:</strong> the right to understand how your personal data is used.</li>
                    <li><strong>Access:</strong> the right to request a copy of qualifying personal data.</li>
                    <li><strong>Correction:</strong> the right to ask for inaccurate or incomplete data to be corrected.</li>
                    <li><strong>Erasure:</strong> the right to request deletion in circumstances where the law provides it.</li>
                    <li><strong>Restriction:</strong> the right to request limits on certain processing.</li>
                    <li><strong>Portability:</strong> the right to receive qualifying information in a usable format in certain cases.</li>
                    <li><strong>Objection:</strong> the right to object to certain processing, including direct marketing.</li>
                    <li><strong>Automated decisions:</strong> rights that may apply to qualifying solely automated decisions.</li>
                    <li><strong>Consent:</strong> the right to withdraw consent where consent is the basis for processing.</li>
                </ul>

                <p>
                    Requests can be made using the contact information available on the Site. We may need
                    enough information to confirm identity and understand the request before acting on it.
                    Applicable statutory time limits and exemptions will continue to apply.
                </p>

                <h2>13. Children’s Privacy</h2>

                <p>
                    AnyHJS is not designed to knowingly collect personal data from children in circumstances
                    where parental consent or another legal basis would be required and has not been obtained.
                    Age requirements may vary depending on the feature and applicable law.
                </p>

                <p>
                    If we learn that personal information has been collected from a child without an
                    appropriate legal basis, we will take reasonable steps to address or remove that information.
                </p>

                <h2>14. Third-Party Websites and Services</h2>

                <p>
                    Links and integrations may take you to websites or services controlled by third parties.
                    Their privacy practices are outside our control. We recommend reviewing the privacy notice
                    of any external service before providing personal information to it.
                </p>

                <h2>15. Complaints and Contact Details</h2>

                <p>
                    If you have a concern about how AnyHJS handles personal data, please contact us first so
                    that we have an opportunity to review the issue and respond.
                </p>

                <p>
                    You may also have the right to complain to the Information Commissioner’s Office ("ICO"),
                    the UK supervisory authority for data protection. Information about the ICO and its
                    complaints process is available at{" "}
                    <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
                        https://ico.org.uk
                    </a>
                    .
                </p>

                <h2>16. Changes to this Privacy Policy</h2>

                <p>
                    We may revise this Privacy Policy when the Site, our practices or applicable law changes.
                    Material updates may be highlighted on the Site or communicated in another appropriate way
                    where notification is required.
                </p>

                <p>
                    The date below shows when this version was last revised. You may wish to check this page
                    periodically for the current version.
                </p>

                <p>
                    <em>Last updated: 28 August 2026</em>
                </p>
            </GenericPageSection>
        </div>
    );
}
