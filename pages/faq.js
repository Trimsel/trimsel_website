import { NextSeo } from "next-seo";
import Faq from "../components/Faq";

export default function FaqPage() {
  return (
    <>
      <NextSeo
        title="Frequently Asked Questions | Trimsel Softwares"
        description="Find answers to the most common questions about Trimsel’s services, engagement models, and digital transformation solutions."
        canonical="https://www.trimsel.com/faq"
      />
      <main className="bg-white">
        <div className="min-h-screen flex items-start justify-center pt-16 pb-24">
          <Faq />
        </div>
      </main>
    </>
  );
}


