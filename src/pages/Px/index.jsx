import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../../components";
import C1200pxFaqs from "../../components/C1200pxFaqs";
import { Accordion, AccordionItem } from "react-accessible-accordion";

export default function PxPage() {
  return (
    <>
      <Helmet>
        <title>React_New</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <header className="flex items-center justify-center bg-deep_purple-500 p-5 md:p-10">
          <div className="mx-auto flex w-full max-w-[1080px] flex-wrap md:flex-nowrap items-center justify-between gap-5 md:flex-col">
            <Img src="images/img_logo.svg" alt="logo_one" className="h-[25px] w-[22%] md:w-full" />
            <ul className="flex flex-wrap gap-7 md:gap-0">
              <li>
                <a href="#">
                  <Text as="p">SERVICES</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">ABOUT US</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">CONTACT US</Text>
                </a>
              </li>
              <li>
                <a href="#">
                  <Text as="p">CAREERS</Text>
                </a>
              </li>
            </ul>
          </div>
        </header>
        <div className="flex flex-col items-center gap-10 md:gap-20">
          <div className="flex h-auto md:h-[700px] items-end self-stretch bg-[url(/public/images/img_hero_image.png)] bg-cover bg-no-repeat p-10 md:p-5">
            <div className="ml-5 mt-[314px] flex w-[57%] flex-col items-start gap-5 bg-gradient p-6 md:ml-0 md:w-full sm:p-3">
              <Heading
                size="md"
                as="h1"
                className="ml-4 capitalize leading-[100%] tracking-[-0.96px] !text-white-A700 md:ml-0"
              >
                We crush your competitors, goals, and sales records - without the B.S.
              </Heading>
              <Button shape="round" className="mb-2 ml-4 min-w-[214px] md:ml-0">
                Get free consultation
              </Button>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-4xl flex-col gap-[79px] md:gap-[59px] md:p-5 sm:gap-[39px]">
            <div className="flex items-center gap-5 md:flex-col">
              <Img
                src="images/img_image_2.png"
                alt="imagetwo_one"
                className="h-[346px] w-[346px] object-cover md:w-full"
              />
              <div className="flex flex-1 flex-col items-start gap-4 md:self-stretch">
                <div className="flex self-center pr-[53px] md:pr-5">
                  <Heading as="h2" className="tracking-[0.40px]">
                    Web & Mobile App Development
                  </Heading>
                </div>
                <Text size="s" as="p" className="!text-black-900">
                  Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which
                  tailor content and engagement methods to respond to different intents shown by your potential
                  customers who interact with your business online.
                </Text>
                <Button shape="round" className="min-w-[129px]">
                  LEARN MORE
                </Button>
              </div>
            </div>
            <div className="flex items-center gap-5 md:flex-col">
              <div className="flex flex-1 flex-col items-start gap-[15px] md:self-stretch">
                <div className="flex">
                  <Heading as="h3" className="tracking-[0.40px]">
                    Digital Strategy Consulting
                  </Heading>
                </div>
                <Text size="s" as="p" className="!text-black-900">
                  Your digital strategy should complement the overall marketing strategy of the company. In online
                  marketing, each component will never work in isolation and every business needs a different mix. We
                  provide a clear concept and strategic overview to find the most efficient model for your business.
                </Text>
                <Button shape="round" className="min-w-[129px]">
                  LEARN MORE
                </Button>
              </div>
              <Img
                src="images/img_image_1.png"
                alt="imageone_one"
                className="h-[348px] w-[39%] object-cover md:w-full"
              />
            </div>
            <div className="flex flex-col items-center gap-[21px]">
              <Heading as="h4" className="tracking-[0.40px]">
                Frequently asked questions
              </Heading>
              <Accordion preExpanded={[0]} className="flex flex-col gap-[15px] self-stretch">
                {[...Array(3)].map((_, i) => (
                  <AccordionItem uuid={i} key={`expandablelistw${i}`}>
                    <C1200pxFaqs className="flex flex-1 flex-col gap-[11px] rounded-[7px] bg-gray-50 p-6 sm:p-3" />
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        <footer className="mt-20 flex items-center justify-center bg-deep_purple-500 p-5 md:p-10">
          <div className="mx-auto flex w-full max-w-[1080px] items-center justify-between gap-5">
            <div className="relative">
              <Img src="images/img_logo.svg" alt="logo_three" className="h-[25px] w-[55%]" />
              <Text size="s" as="p" className="!font-lato">
                Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve
                single objective - your business results.
              </Text>
            </div>
            <div>
              <Heading size="xs" as="h5" className="!text-white-A700">
                Our Technologies
              </Heading>
              <ul className="ml-3 flex flex-col items-start gap-3">
                <li>
                  <a href="#">
                    <Text as="p" className="capitalize">
                      ReactJS
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="capitalize">
                      Gatsby
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="capitalize">
                      NextJS
                    </Text>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="capitalize">
                      NodeJS
                    </Text>
                  </a>
                </li>
              </ul>
              <a href="#">
                <Text as="p" className="capitalize">
                  Terms & Conditions
                </Text>
              </a>
            </div>
            <div>
              <Heading size="xs" as="h5" className="!text-white-A700">
                Our Services
              </Heading>
              <ul className="flex flex-col items-start gap-3">
                <li>
                  <a href="#">
                    <Text as="p" className="capitalize">
                      Social media Marketing
                    </Text>
                  </a>
                </li>
                <li>
                  <Text as="p" className="capitalize">
                    Web & Mobile App Development
                  </Text>
                </li>
                <li>
                  <a href="#">
                    <Text as="p" className="capitalize">
                      Data & Analytics
                    </Text>
                  </a>
                </li>
              </ul>
              <div className="flex gap-4">
                <a href="#" className="self-end">
                  <Text as="p" className="capitalize">
                    Privacy Policy
                  </Text>
                </a>
                <div className="h-[16px] w-px self-start bg-white-A700" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
