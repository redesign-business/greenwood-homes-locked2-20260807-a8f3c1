## components/relume/Navbar1.tsx

```tsx
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button, type ButtonProps } from "@/components/ui/button";
import { KeyboardArrowDown } from "relume-icons";
import { Card } from "@/components/ui/card";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

type Props = {
  logo: ImageProps;
  navLinks: NavLink[];
  buttons: ButtonProps[];
};

export type Navbar1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Navbar1 = (props: Navbar1Props) => {
```

## components/relume/Header30.tsx

```tsx
import { Button, type ButtonProps } from "@/components/ui/button";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header30Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Header30 = (props: Header30Props) => {
```

## components/relume/Stats50.tsx

```tsx
import { Card } from "@/components/ui/card";

type StatsProps = {
  percentage: string;
  heading: string;
};

type Props = {
  heading: string;
  description: string;
  stats: StatsProps[];
};

export type Stats50Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Stats50 = (props: Stats50Props) => {
```

## components/relume/Portfolio12.tsx

```tsx
import { Badge } from "@/components/ui/badge";
import { Button, type ButtonProps } from "@/components/ui/button";
import { ChevronRight } from "relume-icons";

type ImageProps = {
  src: string;
  alt?: string;
};

type Tag = {
  label: string;
  url: string;
};

type ProjectProps = {
  title: string;
  description: string;
  image: ImageProps;
  url: string;
  button: ButtonProps;
  tags: Tag[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  projects: ProjectProps[];
  button: ButtonProps;
};

export type Portfolio12Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Portfolio12 = (props: Portfolio12Props) => {
```

## components/relume/Testimonial1.tsx

```tsx
type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  quote: string;
  logo: ImageProps;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
};

export type Testimonial1Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Testimonial1 = (props: Testimonial1Props) => {
```

## components/relume/Cta3.tsx

```tsx
import { Button, type ButtonProps } from "@/components/ui/button";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Cta3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Cta3 = (props: Cta3Props) => {
```

## components/relume/Footer3.tsx

```tsx
import { FacebookLogo, InstagramLogo, LinkedinLogo, XLogo, YoutubeLogo } from "relume-icons";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Links = {
  title: string;
  url: string;
};

type SocialMediaLinks = {
  url: string;
  icon: React.ReactNode;
};

type ColumnLinks = {
  links: Links[];
};

type Address = {
  label: string;
  value: string;
};

type Contact = {
  label: string;
  phone: string;
  email: string;
};

type Props = {
  logo: ImageProps;
  address: Address;
  contact: Contact;
  columnLinks: ColumnLinks[];
  socialMediaLinks: SocialMediaLinks[];
  footerText?: string;
  footerLinks: Links[];
};

export type Footer3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Footer3 = (props: Footer3Props) => {
```
