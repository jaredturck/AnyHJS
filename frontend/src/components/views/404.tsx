import { Link } from "react-router-dom";
import { GenericPageSection } from "./generic_text";

export function NotFound() {
  return (
    <div className="pt-16">
      <GenericPageSection label="404" title="404 - Page Not Found" subtitle="We couldn’t find the page you were trying to open.">
        <p>
          Check the address and try again, or head back to the <Link to="/">homepage</Link>.
        </p>
      </GenericPageSection>
    </div>
  );
}
