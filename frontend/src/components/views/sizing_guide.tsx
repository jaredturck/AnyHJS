import banner1 from "../../imgs/banners/sizing_guide.webp";
import { ClothingBanner } from "../clothing_banner";
import { GenericPageSection } from "./generic_text";

export function SizingGuide() {
    return (
        <div>
            <ClothingBanner
                title="Sizing Guide"
                subtitle="Use your measurements to find a better starting size"
                img_src={banner1}
            />

            <GenericPageSection
                label="Sizing"
                title="Sizing Guide"
                subtitle="These measurements are a general reference. Product and brand-specific fit notes should always take priority."
            >
                <h1>Sizing Guide</h1>

                <p>
                    Sizes can vary from one label to another, especially when you are shopping across
                    different countries and brands. Use the tables below as a general reference, then check
                    the individual product page for any notes about fit, cut or brand-specific sizing.
                </p>

                <p>
                    If your measurements fall between two sizes, think about how you want the item to fit.
                    Choosing the larger option will usually give you a little more room.
                </p>

                <hr />

                <h2>How to Measure</h2>

                <p>
                    For a more reliable result, use a soft measuring tape and keep it level without pulling
                    it too tightly. Measuring over light clothing or underwear is usually best.
                </p>

                <ul>
                    <li>
                        <strong>Bust/Chest:</strong> Measure around the fullest part of your chest while keeping
                        the tape level around your body.
                    </li>
                    <li>
                        <strong>Waist:</strong> Measure around your natural waist, normally the narrowest part
                        of your torso.
                    </li>
                    <li>
                        <strong>Hips:</strong> Stand with your feet together and measure around the fullest part
                        of your hips and seat.
                    </li>
                    <li>
                        <strong>Inside Leg:</strong> Measure from the top of your inner leg down to the ankle.
                    </li>
                </ul>

                <p>Measurements in the tables are approximate and shown in centimetres (cm).</p>

                <hr />

                <h2>Womenswear Size Guide</h2>

                <p>
                    Use your body measurements to find the closest match across common UK, EU and US sizing.
                    Where you sit between sizes, the roomier option may be more comfortable unless the product
                    is intentionally designed for a close fit.
                </p>

                <h3>Women’s Clothing – Size Conversion &amp; Body Measurements</h3>

                <table>
                    <thead>
                        <tr>
                            <th>UK Size</th>
                            <th>EU Size</th>
                            <th>US Size</th>
                            <th>Bust (cm)</th>
                            <th>Waist (cm)</th>
                            <th>Hips (cm)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>6</td>
                            <td>34</td>
                            <td>2</td>
                            <td>80</td>
                            <td>62</td>
                            <td>86</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>36</td>
                            <td>4</td>
                            <td>84</td>
                            <td>66</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>38</td>
                            <td>6</td>
                            <td>88</td>
                            <td>70</td>
                            <td>94</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>40</td>
                            <td>8</td>
                            <td>92</td>
                            <td>74</td>
                            <td>98</td>
                        </tr>
                        <tr>
                            <td>14</td>
                            <td>42</td>
                            <td>10</td>
                            <td>96</td>
                            <td>79</td>
                            <td>103</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>44</td>
                            <td>12</td>
                            <td>102</td>
                            <td>85</td>
                            <td>109</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>46</td>
                            <td>14</td>
                            <td>108</td>
                            <td>91</td>
                            <td>115</td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    These figures are a useful reference for tops, dresses, skirts and trousers, but they are
                    not a guarantee of fit. Always check the product description when a brand provides its own
                    measurements or fit guidance.
                </p>

                <hr />

                <h2>Menswear Size Guide</h2>

                <p>
                    For tops, shirts, hoodies and jackets, use your chest measurement as the main reference.
                    For trousers, shorts and jeans, your waist measurement is the better starting point.
                </p>

                <h3>Men’s Tops – General Size Guide</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Size</th>
                            <th>Chest (cm)</th>
                            <th>Approx. UK/US Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>XS</td>
                            <td>84–88</td>
                            <td>34–36</td>
                        </tr>
                        <tr>
                            <td>S</td>
                            <td>89–96</td>
                            <td>36–38</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>97–104</td>
                            <td>38–40</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>105–112</td>
                            <td>40–42</td>
                        </tr>
                        <tr>
                            <td>XL</td>
                            <td>113–120</td>
                            <td>44–46</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Men’s Bottoms – Waist Size Guide</h3>

                <table>
                    <thead>
                        <tr>
                            <th>Size</th>
                            <th>Waist (cm)</th>
                            <th>Approx. Waist (inches)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>XS</td>
                            <td>70–75</td>
                            <td>28–29"</td>
                        </tr>
                        <tr>
                            <td>S</td>
                            <td>76–81</td>
                            <td>30–32"</td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td>82–89</td>
                            <td>32–34"</td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td>90–97</td>
                            <td>36–38"</td>
                        </tr>
                        <tr>
                            <td>XL</td>
                            <td>98–105</td>
                            <td>38–40"</td>
                        </tr>
                    </tbody>
                </table>

                <p>
                    Leg length varies by cut and brand. As a rough reference, short is often around 76 cm,
                    regular around 81 cm and long around 86 cm. Use product-specific length details whenever
                    they are available.
                </p>

                <hr />

                <h2>General Notes</h2>

                <p>
                    Two items carrying the same labelled size can still fit differently. Fabric, cut, country
                    of origin and the brand’s own sizing system can all affect how a piece feels once worn.
                </p>

                <p>
                    When you are unsure, compare your measurements with the product information and review the
                    returns guidance before ordering so you know what options are available if the fit is not
                    right.
                </p>
            </GenericPageSection>
        </div>
    );
}
