export interface AboutData {
    Why: string[];
    Why2: string[];
    paragraph: string;
}

export interface ContactData {
    address: string;
    phone: string;
    email: string;
    facebook: string;
    twitter: string;
    youtube: string;
}

export type FeaturesData = {
    icon: string;
    title: string;
    text: string;
}[];

export type GalleryData =  {
    title: string;
    largeImage: string;
    smallImage: string;
}[];

export interface HeroData {
    title: string;
    paragraph: string;
}

export interface NavigationData {
    logo: string;
    links: {
        href: string;
        label: string;
    }[];
}

export type ServicesData = {
    icon: string;
    name: string;
    text: string;
}[];

export type TeamData = {
    img: string;
    name: string;
    job: string;
}[];

export type TestimonialsData = {
    img: string;
    name: string;
    text: string;
}[];