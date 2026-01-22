import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Press | Andrew Douglas Hartzler",
  description:
    "Media coverage and press features of Andrew Hartzler's advocacy work.",
};

const pressItems = [
  {
    publication: "Uncloseted Media",
    title: "Kristen Waggoner, The Woman Who Helped Overturn Roe v. Wade, Is Coming For LGBTQ Rights",
    url: "https://www.unclosetedmedia.com/p/kristen-waggoner-the-woman-who-helped",
    logo: "/logos/unclosetedmedia.svg",
  },
  {
    publication: "Business Insider",
    title: "A TikToker says his parents hired an 'exorcist' to 'exorcise all the demons' out of his room that 'they thought were making me gay'",
    url: "https://www.insider.com/parents-hired-exorcist-to-exorcise-demons-gay-sons-room-2023-6",
    logo: "/logos/businessinsider.svg",
  },
  {
    publication: "Daily Mail",
    title: "Missouri congresswoman's gay nephew reveals his parents hired an 'EXORCIST to get all the demons out of his bedroom'",
    url: "https://www.dailymail.co.uk/femail/article-12161425/Missouri-congresswomans-gay-nephew-says-parents-hired-exorcist.html",
    logo: "/logos/dailymail.svg",
  },
  {
    publication: "New York Post",
    title: "My parents tried to exorcise the demons that were 'making me gay'",
    url: "https://nypost.com/2023/06/05/my-parents-tried-to-exorcise-the-demons-that-were-making-me-gay/",
    logo: "/logos/nypost.svg",
  },
  {
    publication: "Queerty",
    title: "Man posts video of the exorcist his parents hired to turn him straight",
    url: "https://www.queerty.com/gay-man-posts-video-of-the-exorcist-his-parents-hired-to-turn-him-straight-20230606",
    logo: "/logos/queerty.svg",
  },
  {
    publication: "Pride",
    title: "TikToker's Parents Hire Exorcist To Remove 'Demons' Making Him Gay",
    url: "https://www.pride.com/viral/gay-tiktok#rebelltitem1",
    logo: "/logos/pride.svg",
  },
  {
    publication: "Pink News",
    title: "Gay TikToker's parents hire preacher to 'exorcise demons' from his bedroom",
    url: "https://www.thepinknews.com/2023/06/13/tiktok-gay-exorcism-preacher-demons/",
    logo: "/logos/pinknews.svg",
  },
  {
    publication: "The Advocate",
    title: "Comments on Don't Say Gay Bill",
    url: "https://www.advocate.com/voices/demoralizing-destructive-delusional-desantis-has-gone-too-far",
    logo: "/logos/advocate.svg",
  },
  {
    publication: "Out",
    title: "Andrew Hartzler Invited to White House After Epic Aunt Vicky Clap Back",
    url: "https://www.out.com/politics/2022/12/21/andrew-hartzler-invited-white-house-after-epic-aunt-vicky-clap-back",
    logo: "/logos/out.svg",
  },
  {
    publication: "GLAAD",
    title: "Andrew Hartzler utilizes storytelling to end religious extremism and conversion therapy one TikTok at a time",
    url: "https://www.glaad.org/blog/andrew-hartzler-utilizes-storytelling-end-religious-extremism-and-conversion-therapy-one-tiktok",
    logo: "/logos/glaad.svg",
  },
  {
    publication: "Buzzfeed",
    title: "Biden Signed A Marriage Equality Law In Front Of Drag Queens And The Nephew Of That Republican Who Cried About It",
    url: "https://www.buzzfeednews.com/article/davidmack/biden-signs-respect-marriage-act",
    logo: "/logos/buzzfeed.svg",
  },
  {
    publication: "The Kansas City Star",
    title: "He criticized 'Aunt Vicky' Hartzler for gay marriage bill tears, now he's at White House",
    url: "https://www.kansascity.com/news/politics-government/article269943247.html",
    logo: "/logos/kcstar.svg",
  },
  {
    publication: "Business Insider",
    title: "I called out my aunt, Rep. Vicky Hartzler, after she made a homophobic speech in tears. Since surviving conversion therapy, I want people to know they don't have to accept the hateful rhetoric of those in power.",
    url: "https://www.businessinsider.com/vicky-hartzlers-nephew-congress-lgbtq-andrew-hartzler-2022-12",
    logo: "/logos/businessinsider.svg",
  },
  {
    publication: "The Guardian",
    title: "Nephew calls Republican who tearfully opposed gay marriage bill a homophobe",
    url: "https://www.theguardian.com/us-news/2022/dec/10/vicky-hartzler-nephew-same-sex-marriage-republican-tearful",
    logo: "/logos/guardian.svg",
  },
  {
    publication: "Buzzfeed",
    title: "Vicky Hartzler's Gay Nephew Andrew Speaks Out",
    url: "https://www.buzzfeednews.com/article/davidmack/vicky-hartzler-cry-marriage-equality-gay-nephew-andrew",
    logo: "/logos/buzzfeed.svg",
  },
  {
    publication: "People",
    title: "Rep. Vicky Hartzler's Gay Nephew Responds to Viral Video of Her Crying over 'Dangerous' Same-Sex Marriage Act",
    url: "https://people.com/politics/andrew-hartzler-speaks-out-aunt-vicky-same-sex-marriage-video/",
    logo: "/logos/people.svg",
  },
  {
    publication: "NBC News",
    title: "Gay man blasts his GOP lawmaker aunt who cried during gay marriage 'no' vote",
    url: "https://www.nbcnews.com/nbc-out/out-politics-and-policy/gay-man-blasts-gop-lawmaker-aunt-cried-gay-marriage-no-vote-rcna60997",
    logo: "/logos/nbcnews.svg",
  },
  {
    publication: "The Advocate",
    title: "Rep. Vicky Hartzler's Gay Nephew to His Aunt: You Have to Coexist",
    url: "https://www.advocate.com/politics/2022/12/09/rep-vicky-hartzlers-gay-nephew-his-aunt-you-have-coexist",
    logo: "/logos/advocate.svg",
  },
  {
    publication: "MSNBC",
    title: "A class-action lawsuit seeks to bar religious schools from collecting federal funds if they discriminate against LGBTQ students",
    url: "https://www.msnbc.com/ayman-mohyeldin/watch/a-class-action-lawsuit-seeks-to-bar-religious-schools-from-collecting-federals-funds-if-they-discriminate-against-lgbtq-students-142405189656",
    logo: "/logos/msnbc.svg",
  },
  {
    publication: "The Advocate",
    title: "A Gay Oral Roberts University Graduate's Painful Story",
    url: "https://www.advocate.com/commentary/2022/5/26/gay-oral-roberts-university-graduates-painful-story",
    logo: "/logos/advocate.svg",
  },
  {
    publication: "Politico",
    title: "Andrew Hartzler Wasn't Allowed To Be Gay on Campus. So He's Suing",
    url: "https://www.politico.com/news/magazine/2022/05/20/religious-universities-lgbtq-students-title-ix-lawsuit-00033373",
    logo: "/logos/politico.svg",
  },
];

export default function PressPage() {
  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold">Press</h1>
        </div>

        {/* Press Grid */}
        <div className="space-y-4">
          {pressItems.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-all hover:bg-zinc-800/50 group"
            >
              <div className="flex items-center gap-5">
                {/* Logo */}
                <div className="flex-shrink-0 w-28 h-10 flex items-center justify-center">
                  <Image
                    src={item.logo}
                    alt={item.publication}
                    width={112}
                    height={40}
                    className="object-contain max-h-10"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed line-clamp-2">
                    {item.title}
                  </p>
                </div>

                <div className="flex-shrink-0 hidden sm:block">
                  <svg
                    className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Back to Home */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
