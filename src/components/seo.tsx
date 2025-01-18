import { Helmet } from "react-helmet";
import { DEFAULT_SEO } from "../lib/constants/seo";

type Props = {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
    url?: string;
    ogType?: string;
};

export default function SEO({ title, description, keywords, image, url, ogType }: Props) {

    const seo = {
        title: title ? DEFAULT_SEO.titleTemplate.replace("%s", title) : DEFAULT_SEO.title,
        description: description ?? DEFAULT_SEO.description,
        keywords: keywords ? `${keywords.join(", ")}, ${DEFAULT_SEO.keywords}` : DEFAULT_SEO.keywords,
        openGraph: {
            type: ogType ?? DEFAULT_SEO.openGraph.type,
            url: url ?? DEFAULT_SEO.openGraph.url,
            images: image ? [{ url: image, alt: title }] : DEFAULT_SEO.openGraph.images,
        },
        twitter: {
            cardType: "summary",
            site: "https://ciaran.co.za/",
            url: url ?? DEFAULT_SEO.openGraph.url,
            creator: "@parabyl",
        }
    }

    return <Helmet>
        <link rel="icon" href="/favicon.png" />
        <meta name="robots" content="index, follow" />
        <title>{seo.title}</title>

        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />

        <meta property="og:type" content={seo.openGraph.type} />
        <meta property="og:locale" content="en" />
        <meta property="og:url" content={seo.openGraph.url} />
        <meta property="og:image" content={seo.openGraph.images[0].url} />

        <meta name="twitter:card" content={seo.twitter.cardType} />
        <meta name="twitter:site" content={seo.twitter.site} />
        <meta name="twitter:creator" content={seo.twitter.creator} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
    </Helmet>
}
