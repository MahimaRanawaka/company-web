import { useParams } from "react-router-dom";
import { LegalPage } from "@/components/LegalPage";
import { privacyDoc } from "@/content/legal/privacy";
import { termsDoc } from "@/content/legal/terms";
import { cookiesDoc } from "@/content/legal/cookies";
import NotFound from "./NotFound";

const DOCS = {
  privacy: privacyDoc,
  terms: termsDoc,
  cookies: cookiesDoc,
} as const;

export default function Legal() {
  const { slug } = useParams();
  const doc = slug ? DOCS[slug as keyof typeof DOCS] : undefined;
  if (!doc) return <NotFound />;
  return <LegalPage doc={doc} />;
}
