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
  const { heading, description, stats } = {
    ...Stats50Defaults,
    ...props,
  };
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-y-5 md:mb-18 md:grid-cols-2 md:gap-x-12 lg:mb-20 lg:gap-x-20">
          <div>
            <h3 className="text-h3 font-bold">{heading}</h3>
          </div>
          <div>
            <p className="text-medium">{description}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatsCard = (card: StatsProps) => {
  return (
    <Card className="p-8 text-center">
      <p className="mb-2 text-[3.5rem] leading-[1.3] font-bold md:text-[4rem] lg:text-[5rem]">
        {card.percentage}
      </p>
      <h3 className="text-h6 font-bold">{card.heading}</h3>
    </Card>
  );
};

export const Stats50Defaults: Props = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  stats: [
    {
      percentage: "30%",
      heading: "Short heading goes here",
    },
    {
      percentage: "30%",
      heading: "Short heading goes here",
    },
    {
      percentage: "30%",
      heading: "Short heading goes here",
    },
  ],
};
