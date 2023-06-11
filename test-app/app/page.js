import Image from "next/image";
import { HiArrowNarrowRight } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { BiPlus } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";

export default function Home() {
  return (
    <div className="bg-[#151515]">
      {/* nabvar */}
      <div className="flex justify-between">
        <div className="pt-[10px]">
          <Image
            className="relative"
            src="/images/icons/menu-dot.svg"
            alt="nav dot"
            width={37}
            height={22.44}
            priority
          />
        </div>
        <h1 className="text-white ml-20 pt-[10px]">ARMIRUS</h1>
        <div className="py-[21px] px-[25px] bg-primary">
          <h1 className="text-[40px] font-bold text-white leading-[48px]">
            Get <br /> Qutoes
          </h1>
          <div className="mt-[25px]">
            <Image
              className="relative"
              src="/images/icons/right-arow.svg"
              alt="right arow"
              width={92.12}
              height={2.51}
              priority
            />
          </div>
        </div>
      </div>
      {/* banner */}
      <div>
        <h1 className="font-semibold text-[60px] text-white leading-[64px] ml-[162px] -mt-[40px]">
          Transforming Business Ideas into <br /> Stunning Digital Realities
        </h1>
        <div className=" lg:bg-[url('/images/banner-images.png')] bg-contain bg-no-repeat bg-right">
          {/* banner content */}
          <div className="ml-[162px] py-[480px] relative">
            <div className="absolute top-16">
              <div className="flex gap-3">
                <button className="font-medium border-none text-[24px] bg-white px-[30px] py-[10px] rounded-[50px] flex items-center gap-x-2">
                  All Service
                  <HiArrowNarrowRight />
                </button>
                <button className="text-white border-none font-medium text-[24px] bg-primary px-[30px] py-[10px] rounded-[50px] flex items-center gap-x-2">
                  Contact Us
                  <HiArrowNarrowRight />
                </button>
              </div>
              <div className="mt-[80px]">
                <div className="flex items-center gap-x-[15px] text-[85px] text-white font-normal">
                  <h2>4.9/5</h2>
                  <AiFillStar />
                </div>
                <p className="font-normal text-[24px] leading-[28px] text-white">
                  Satisfaction Guarantee from over 768+ <br /> Customer Review
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* brands logo */}
        <div>
          <div className="flex items-center justify-between px-4">
            <Image
              className="relative"
              src="/images/brands/index.png"
              alt="right arow"
              width={232}
              height={51}
              priority
            />
            <Image
              className="relative"
              src="/images/brands/lara.png"
              alt="right arow"
              width={190}
              height={50}
              priority
            />
            <Image
              className="relative"
              src="/images/brands/crunch.png"
              alt="right arow"
              width={53}
              height={50}
              priority
            />
            <Image
              className="relative"
              src="/images/brands/db.png"
              alt="right arow"
              width={197}
              height={46}
              priority
            />
            <Image
              className="relative"
              src="/images/brands/kebab.png"
              alt="right arow"
              width={130}
              height={43}
              priority
            />
            <Image
              className="relative"
              src="/images/brands/miya.png"
              alt="right arow"
              width={139}
              height={39}
              priority
            />
            <Image
              className="relative"
              src="/images/brands/service.png"
              alt="right arow"
              width={104}
              height={41}
              priority
            />
            <Image
              className="relative"
              src="/images/brands/pack.png"
              alt="right arow"
              width={214}
              height={29}
              priority
            />
          </div>
        </div>
        {/* brands information */}
        <div className="bg-primary my-[50px]">
          <div className="w-9/12 mx-auto flex items-center py-[60px]">
            <div className="w-3/5">
              <h1 className="font-semibold text-white text-[50px] leading-[55px]">
                {" "}
                &quot;Unlocking the Power of Visionary Design & Website for
                High-Selling, Money-Generating Business&quot;
              </h1>
              <p className="font-normal text-white mt-[60px] text-base leading-[25px]">
                Welcome to our design and web agency, where visionary design &
                website meets the art of generating revenue. Our team of
                creative visionaries understands the power of design in
                influencing consumer behavior. We craft visually striking
                websites & design that make a lasting impression, engaging
                visitors from the moment they arrive. By combining aesthetically
                pleasing layouts, captivating visuals, and intuitive user
                experiences, we ensure your website becomes a powerful sales
                tool.
              </p>
            </div>
            <div className="w-2/5 flex justify-end gap-x-[75px]">
              <div className="flex flex-col items-center gap-y-[50px]">
                <Image
                  className="relative"
                  src="/images/icons/service/service.png"
                  alt="ison"
                  width={166}
                  height={188}
                  priority
                />
                <Image
                  className="relative"
                  src="/images/icons/service/quality.png"
                  alt="ison"
                  width={112}
                  height={188}
                  priority
                />
                <Image
                  className="relative"
                  src="/images/icons/service/cost.png"
                  alt="ison"
                  width={133}
                  height={188}
                  priority
                />
              </div>
              <div className="flex flex-col items-center gap-y-[50px]">
                <Image
                  className="relative"
                  src="/images/icons/service/satisfaction.png"
                  alt="icon"
                  width={108}
                  height={188}
                  priority
                />
                <Image
                  className="relative"
                  src="/images/icons/service/team.png"
                  alt="icon"
                  width={141}
                  height={188}
                  priority
                />
                <Image
                  className="relative"
                  src="/images/icons/service/hassel.png"
                  alt="icon"
                  width={138}
                  height={188}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our services */}
      <div className="mt-[100px] w-9/12 mx-auto bg-[#292929] rounded-[70px] p-[50px]">
        <div className="flex gap-x-[45px]">
          <div>
            <h1 className="font-semibold text-[70px] text-white leading-none">
              Our Service
            </h1>
            <p className="font-normal text-base leading-[25px] text-white mt-3">
              Partner with us and unlock the power of visionary design to create
              a high-selling, money-generating website that sets you apart from
              the competition. Experience the seamless fusion of creativity and
              profitability and witness your online presence soar to new
              heights.
            </p>
          </div>
          <div className="-mt-[100px] flex-shrink-0">
            <Image
              className="relative"
              src="/images/auqtopuss.png"
              alt="auqtopuss"
              width={260}
              height={368}
              priority
            />
          </div>
          <div className="flex-shrink-0">
            <button className="text-white border-none font-medium text-[20px] bg-primary px-[30px] py-[10px] rounded-[50px] flex items-center gap-x-2">
              Contact Us
              <HiArrowNarrowRight />
            </button>
          </div>
        </div>
        <div className="border border-white mt-[35px]">
          <div className="flex items-center justify-between bg-primary border-b border-white">
            <h1 className="font-semibold text-[40px] text-white leading-[45px] pl-[28px] pb-[10px]">
              Branding & Design Service
            </h1>
            <RxDotFilled className="text-white text-5xl mr-5" />
          </div>
          <div className="flex items-center">
            <div className="pl-[40px] py-[30px] w-1/2">
              <p className="font-normal text-[16px] leading-[20px] text-white">
                At Amirus, we understand the power of a strong brand. Our
                branding and design service helps you define and showcase your
                unique identity. From crafting memorable logos to developing
                comprehensive brand guidelines, we ensure your brand stands out
                and resonates with your target audience.
              </p>
              <div className="flex items-center gap-x-[30px] mt-8">
                <button className="border-none font-medium text-[20px] bg-white px-[30px] py-[10px] rounded-[50px] flex items-center gap-x-2">
                  Order now
                  <HiArrowNarrowRight />
                </button>
                <button className="text-white border-none font-medium text-[20px] bg-primary px-[30px] py-[10px] rounded-[50px] flex items-center gap-x-2">
                  Contact Us
                  <HiArrowNarrowRight />
                </button>
              </div>
              <div className="mt-[40px] flex items-center justify-between">
                <ul className="list-disc ml-5 text-white font-normal text-[14px] leading-[25px]">
                  <li>Logo design</li>
                  <li>Brand identity development</li>
                  <li>Visual brand guidelines</li>
                  <li>Brand collateral design</li>
                  <li>Brand messaging and positioning</li>
                </ul>
                <ul className="list-disc ml-5 text-white font-normal text-[14px] leading-[25px]">
                  <li>Business card design</li>
                  <li>Company profile design</li>
                  <li>letterhead design</li>
                  <li>Presentation design</li>
                  <li>icon design</li>
                </ul>
              </div>
            </div>
            <div className="w-1/2">
              <Image
                className="relative"
                src="/images/Design-Solution-Ui.png"
                alt="design solution"
                width={729}
                height={490}
                priority
              />
            </div>
          </div>
          <div className="flex items-center justify-between bg-primary border-t border-white">
            <h1 className="font-semibold text-[40px] text-white leading-[45px] pl-[28px] pb-[10px]">
              Branding & Design Service
            </h1>
            <BiPlus className="mr-8 text-white text-3xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
