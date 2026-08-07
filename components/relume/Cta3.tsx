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
  const { heading, description, buttons, image } = {
    ...Cta3Defaults,
    ...props,
  };
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container">
        <div className="w-full max-w-lg">
          <h2 className="mb-5 text-h2 font-bold text-white md:mb-6">{heading}</h2>
          <p className="text-medium text-white">{description}</p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            {buttons.map((button, index) => (
              <Button key={index} {...button}>
                {button.title}
              </Button>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img src={image.src} className="size-full object-cover" alt={image.alt} />
        <div className="absolute inset-0 bg-neutral-darkest/50" />
      </div>
    </section>
  );
};

export const Cta3Defaults: Props = {
  heading: "Medium length heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  buttons: [
    { title: "Button", variant: "alternate" },
    { title: "Button", variant: "secondary-alt" },
  ],
  image: {
    src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
    alt: "Relume placeholder background image",
  },
};
