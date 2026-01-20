import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, GlobeIcon, GithubIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Golang } from "@/components/ui/svgs/golang";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Java } from "@/components/ui/svgs/java";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
    name: "Sadique",
    initials: "SH",
    url: "https://sadique.co",
    location: "India",
    locationLink: "https://www.google.com/maps/place/india",
    description:
        "Modern Web Designer with 5+ years experience. Passionate about creating visually stunning and user-friendly designs that captivate and inspire.",
    summary:
        "I'm a freelance web designer specializing in real estate, Airbnb, and homestay websites. From wireframes to real things people use — I transform ideas into beautiful, functional digital experiences. My process combines research, design, and development to create websites that not only look great but also drive conversions.",
    avatarUrl: "/Profile-Sadique.jpeg",
    skills: [
        { name: "React", icon: ReactLight },
        { name: "Next.js", icon: NextjsIconDark },
        { name: "Typescript", icon: Typescript },
        { name: "Node.js", icon: Nodejs },
        { name: "Python", icon: Python },
        { name: "Go", icon: Golang },
        { name: "Postgres", icon: Postgresql },
        { name: "Docker", icon: Docker },
        { name: "Kubernetes", icon: Kubernetes },
        { name: "Java", icon: Java },
        { name: "C++", icon: Csharp },
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" },
        { href: "/portfolio", icon: NotebookIcon, label: "Portfolio" },
    ],
    contact: {
        email: "sadique.design@icloud.com",
        tel: "+91-XXXXXXXXXX",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/sadique-xo",
                icon: Icons.github,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/sadiqueh/",
                icon: Icons.linkedin,
                navbar: true,
            },
            X: {
                name: "X",
                url: "https://x.com/notsadique",
                icon: Icons.x,
                navbar: true,
            },
            Dribbble: {
                name: "Dribbble",
                url: "https://dribbble.com/designbysadique",
                icon: Icons.dribbble,
                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "mailto:sadique.design@icloud.com",
                icon: Icons.email,
                navbar: false,
            },
        },
    },


    work: [
        {
            company: "Mentoria",
            href: "https://mentoria.com",
            badges: ["Full-time"],
            location: "Remote",
            title: "Product Manager",
            logoUrl: "/resume_logo/mentoria_3d_logo.png",
            start: "Jan 2025",
            end: "Present",
            description: "Building Arya (https://arya.mentoria.com/)",
        },
        {
            company: "Mentoria",
            href: "https://mentoria.com",
            badges: ["Full-time"],
            location: "Mumbai, Maharashtra, India",
            title: "Operations & Customer Success",
            logoUrl: "/resume_logo/mentoria_3d_logo.png",
            start: "Jun 2023",
            end: "Jan 2025",
            description: "Customer account management, CSR reports, pulse report and offline workshop and implementation of b2b projects.",
        },
        {
            company: "Freight Tiger",
            href: "https://freighttiger.com",
            badges: ["Full-time"],
            location: "Mumbai, Maharashtra, India",
            title: "Customer Success",
            logoUrl: "/logos/freight_tiger.png",
            start: "Apr 2022",
            end: "Jun 2023",
            description: "Developed strong professional relationships with CXOs and Logistics heads. Handled end-to-end customer engagement, onboarding, and retention.",
        },
        {
            company: "Freight Tiger",
            href: "https://freighttiger.com",
            badges: ["Full-time"],
            location: "Mumbai, Maharashtra, India",
            title: "Customer Operations",
            logoUrl: "/logos/freight_tiger.png",
            start: "Nov 2019",
            end: "Mar 2022",
            description: "Conducted client meetings to improve satisfaction. Served as a liaison between cross-functional teams and prepared daily MIS reports.",
        },
        {
            company: "Greenland Group",
            href: "#",
            badges: ["Full-time"],
            location: "Mumbai Metropolitan Region",
            title: "Export Executive",
            logoUrl: "/logos/greenland_group.png",
            start: "May 2019",
            end: "Nov 2019",
            description: "Managed the entire export process, including documentation, customs clearance, and logistics. Ensured timely delivery of goods.",
        },
    ],

    education: [
        {
            school: "Internet",
            href: "https://google.com",
            degree: "Everything",
            logoUrl: "/logos/internet_3d.png",
            start: "Then",
            end: "Now",

        },
        {
            school: "IIT Madras",
            href: "https://www.iitm.ac.in/",
            degree: "Computer Applications & Data Science",
            logoUrl: "/logos/iit_madras.png",
            start: "2020",
            end: "2021 (dropped)",
        },
    ],
    projects: [
        {
            title: "Chat Collect",
            href: "https://chatcollect.com",
            dates: "Jan 2024 - Feb 2024",
            active: true,
            description:
                "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Stripe",
                "Shadcn UI",
                "Magic UI",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://chatcollect.com",
                    icon: <GlobeIcon className="size-2.5" />,
                },
            ],
            image: "",
            video:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
        },
        {
            title: "Magic UI",
            href: "https://magicui.design",
            dates: "June 2023 - Present",
            active: true,
            description:
                "Designed, developed and sold animated UI components for developers.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Stripe",
                "Shadcn UI",
                "Magic UI",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://magicui.design",
                    icon: <GlobeIcon className="size-2.5" />,
                },
                {
                    type: "GitHub",
                    href: "https://github.com/magicuidesign/magicui",
                    icon: <GithubIcon className="size-2.5" />,
                },
            ],
            image: "",
            video: "https://cdn.magicui.design/bento-grid.mp4",
        },
        {
            title: "llm.report",
            href: "https://llm.report",
            dates: "April 2023 - September 2023",
            active: true,
            description:
                "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Shadcn UI",
                "Magic UI",
                "Stripe",
                "Cloudflare Workers",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://llm.report",
                    icon: <GlobeIcon className="size-2.5" />,
                },
                {
                    type: "GitHub",
                    href: "https://github.com/dillionverma/llm.report",
                    icon: <GithubIcon className="size-2.5" />,
                },
            ],
            image: "",
            video: "https://cdn.llm.report/openai-demo.mp4",
        },
        {
            title: "Automatic Chat",
            href: "https://automatic.chat",
            dates: "April 2023 - March 2024",
            active: true,
            description:
                "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
            technologies: [
                "Next.js",
                "Typescript",
                "PostgreSQL",
                "Prisma",
                "TailwindCSS",
                "Shadcn UI",
                "Magic UI",
                "Stripe",
                "Cloudflare Workers",
            ],
            links: [
                {
                    type: "Website",
                    href: "https://automatic.chat",
                    icon: <GlobeIcon className="size-2.5" />,
                },
            ],
            image: "",
            video:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
        },
    ],
    hackathons: [
        {
            title: "Hack Western 5",
            dates: "November 23rd - 25th, 2018",
            location: "London, Ontario",
            description:
                "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
            links: [],
        },
        {
            title: "Hack The North",
            dates: "September 14th - 16th, 2018",
            location: "Waterloo, Ontario",
            description:
                "Developed a mobile application which delivers university campus wide events in real time to all students.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
            links: [],
        },
        {
            title: "FirstNet Public Safety Hackathon",
            dates: "March 23rd - 24th, 2018",
            location: "San Francisco, California",
            description:
                "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
            icon: "public",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
            links: [],
        },
        {
            title: "DeveloperWeek Hackathon",
            dates: "February 3rd - 4th, 2018",
            location: "San Francisco, California",
            description:
                "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
            links: [
                {
                    title: "Github",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/cryptotrends/cryptotrends",
                },
            ],
        },
        {
            title: "HackDavis",
            dates: "January 20th - 21st, 2018",
            location: "Davis, California",
            description:
                "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
            win: "Best Data Hack",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
            links: [
                {
                    title: "Devpost",
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: "https://devpost.com/software/my6footprint",
                },
                {
                    title: "ML",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/Wallet6/my6footprint-machine-learning",
                },
                {
                    title: "iOS",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/Wallet6/CarbonWallet",
                },
                {
                    title: "Server",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/Wallet6/wallet6-server",
                },
            ],
        },
        {
            title: "ETH Waterloo",
            dates: "October 13th - 15th, 2017",
            location: "Waterloo, Ontario",
            description:
                "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
            links: [
                {
                    title: "Organization",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/ethdocnet",
                },
            ],
        },
        {
            title: "Hack The North",
            dates: "September 15th - 17th, 2017",
            location: "Waterloo, Ontario",
            description:
                "Developed a virtual reality application allowing users to see themselves in third person.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
            links: [
                {
                    title: "Streamer Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/justinmichaud/htn2017",
                },
                {
                    title: "Client Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/dillionverma/RTSPClient",
                },
            ],
        },
        {
            title: "Hack The 6ix",
            dates: "August 26th - 27th, 2017",
            location: "Toronto, Ontario",
            description:
                "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
            image:
                "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
            mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
            links: [
                {
                    title: "Source",
                    icon: <Icons.github className="h-4 w-4" />,
                    href: "https://github.com/ShareShip/ShareShip",
                },
                {
                    title: "Site",
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: "https://share-ship.herokuapp.com/",
                },
            ],
        },
    ],
} as const;
