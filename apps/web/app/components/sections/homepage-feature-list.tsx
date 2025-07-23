import { CheckIcon } from "lucide-react";

import { Heading, Section } from "@cad-challenges-hub/ui";

type FeatureCardFragment = {
  _title: string;
  description: string;
  imageUrl: string;
  characteristics: {
    items: { _title: string }[];
  };
};

type FeatureCardsComponent = {
  heading: {
    subtitle: string;
    tag: string;
    title: string;
  };
  featuresCardsList: {
    items: FeatureCardFragment[];
  };
};

export default function FeaturesListHomepage({
  featuresCardsList,
  heading,
}: FeatureCardsComponent) {
  return (
    <Section container="default">
      <Heading subtitle={heading.subtitle} tag={heading.tag}>
        <h4>{heading.title}</h4>
      </Heading>
      <div className="flex flex-col gap-6">
        {featuresCardsList.items.map(({ imageUrl, ...item }) => (
          <article
            key={item._title}
            className="flex min-h-96 w-full max-w-[380px] flex-col border border-[--border] bg-neutral-100 p-px dark:border-[--dark-border] dark:bg-neutral-900 sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16"
          >
            <figure className="p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]">
              <img
                src={imageUrl}
                alt={item._title}
                className="block aspect-video h-[200px] w-full  border border-[--border] object-cover dark:border-[--dark-border] md:h-full"
                height={374}
                width={560}
              />
            </figure>

            <div className="flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10">
              <div className="flex flex-col items-start gap-2">
                <h5 className="text-2xl font-medium text-[--text-primary] dark:text-[--dark-text-primary] md:text-3xl">
                  {item._title}
                </h5>
                <p className="font-normal text-gray-500 dark:text-gray-700 md:text-lg">
                  {item.description}
                </p>
              </div>
              <ul className="flex flex-col items-start gap-3 pl-2 md:text-lg">
                {item.characteristics.items.map(({ _title }) => (
                  <li
                    key={_title}
                    className="flex items-center gap-4 font-normal text-gray-500 dark:text-gray-700"
                  >
                    <span className="flex size-6 items-center justify-center rounded-full bg-[--surface-tertiary] dark:bg-[--dark-surface-tertiary]">
                      <CheckIcon className="text-gray-500 dark:text-gray-700" />
                    </span>
                    {_title}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
