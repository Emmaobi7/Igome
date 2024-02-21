import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const AboutPageDesktopPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-lexend sm:gap-10 md:gap-10 gap-[150px] items-center justify-end mx-auto pt-[50px] w-full">
        <div className="flex flex-col items-center justify-start max-w-[1599px] mx-auto md:px-5 w-full">
          <header className="bg-gray-900_01 border border-gray-900_02 border-solid flex md:flex-col md:gap-10 items-center justify-between sm:px-5 px-[34px] py-5 rounded-[47px] w-full">
            <Img
              className="h-10 w-[155px]"
              src="images/img_logo.svg"
              alt="logo"
            />
            <ul className="flex flex-row gap-[26px] sm:hidden items-center justify-start w-auto common-row-list">
              <li>
                <a href="javascript:" className="text-lg text-white-A700">
                  <Text size="txtLexendRegular18">Home</Text>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-lg text-white-A700">
                  <Text size="txtLexendRegular18">Careers</Text>
                </a>
              </li>
              <li>
                <a href="javascript:">
                  <Button
                    className="cursor-pointer rounded-[25px] text-center text-lg"
                    color="gray_900_02"
                    size="sm"
                    variant="fill"
                  >
                    About
                  </Button>
                </a>
              </li>
              <li>
                <a href="javascript:" className="text-lg text-white-A700">
                  <Text size="txtLexendRegular18">Security</Text>
                </a>
              </li>
            </ul>
            <div className="flex flex-row gap-[30px] items-center justify-start w-auto">
              <a href="javascript:" className="text-lg text-white-A700 w-auto">
                <Text size="txtLexendRegular18">Sign Up</Text>
              </a>
              <Button
                className="cursor-pointer min-w-[109px] rounded-[27px] text-center text-lg"
                color="lime_500"
                size="md"
                variant="fill"
              >
                Login
              </Button>
            </div>
          </header>
          <div className="bg-gray-900_01 mt-[53px] p-[50px] md:px-10 sm:px-5 relative rounded-[20px] w-[1599px] md:w-full">
            <div className="h-[716px] m-auto w-[94%] md:w-full">
              <div className="absolute bg-gray-900 flex flex-col gap-[23px] items-center justify-start left-[0] max-w-[791px] p-20 md:px-10 sm:px-5 rounded-bl-[20px] rounded-br-[80px] rounded-tl-[20px] top-[0] w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-white-A700 text-xl w-full"
                    size="txtLexendRegular20"
                  >
                    Welcome to YourBank
                  </Text>
                  <Text
                    className="leading-[130.00%] max-w-[631px] md:max-w-full sm:text-[44px] md:text-[50px] text-[58px] text-white-A700"
                    size="txtLexendMedium58WhiteA700"
                  >
                    <span className="text-white-A700 font-lexend text-left font-medium">
                      Where Banking Meets{" "}
                    </span>
                    <span className="text-lime-500 font-lexend text-left font-medium">
                      Excellence!
                    </span>
                  </Text>
                </div>
                <Text
                  className="leading-[150.00%] max-w-[631px] md:max-w-full text-gray-400 text-lg"
                  size="txtLexendLight18Gray400"
                >
                  At YourBank, we believe that banking should be more than just
                  transactions. It should be an experience that empowers
                  individuals and businesses to thrive and reach their financial
                  goals. As a trusted financial institution, we are committed to
                  delivering exceptional banking services that go beyond
                  expectations. With a focus on innovation, personalized
                  solutions, and unwavering integrity, we strive to provide the
                  best banking experience for our valued customers. Join us on
                  this exciting journey and discover a new level of banking
                  excellence.
                </Text>
              </div>
              <Img
                className="absolute h-[716px] inset-y-[0] my-auto object-cover right-[0] rounded-[16px] w-full"
                src="images/img_image_1.png"
                alt="image"
              />
            </div>
            <Img
              className="absolute h-[505px] object-cover right-[6%] top-[6%] w-[480px]"
              src="images/img_abstractdesign_1.png"
              alt="abstractdesign"
            />
          </div>
          <div className="flex flex-col md:gap-10 gap-20 items-end justify-start max-w-[1596px] mt-[150px] w-full">
            <div className="flex flex-col gap-3.5 items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-lime-500 w-full"
                size="txtLexendRegular48"
              >
                Mission & Vision
              </Text>
              <Text
                className="leading-[150.00%] max-w-[1296px] md:max-w-full text-gray-400 text-lg"
                size="txtLexendLight18Gray400"
              >
                We envision being a leading force in the industry, driven by
                innovation, integrity, and inclusivity, creating a brighter
                financial future for individuals and businesses while
                maintaining a strong commitment to customer satisfaction and
                community development
              </Text>
            </div>
            <div className="flex flex-col relative w-full">
              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly mx-auto w-full">
                <div
                  className="bg-cover bg-gradient6  bg-no-repeat border border-gray-900_02 border-solid h-[621px] md:h-auto pt-[60px] md:px-10 sm:px-5 px-[60px] relative rounded-bl-[20px] rounded-br-[20px] rounded-tl-[50px] rounded-tr-[50px] w-[664px] md:w-full"
                  style={{
                    backgroundImage: "url('images/img_ctasection.png')",
                  }}
                >
                  <Img
                    className="absolute h-[621px] inset-[0] justify-center m-auto object-cover w-[602px] md:w-full"
                    src="images/img_abstractdesign_1.png"
                    alt="abstractdesign_One"
                  />
                  <Img
                    className="md:h-[561px] h-full mt-auto mx-auto object-cover relative rounded-tl-[50px] rounded-tr-[50px] w-full"
                    src="images/img_image_561x544.png"
                    alt="image_One"
                  />
                </div>
                <div className="border-l border-lime-500 border-solid flex flex-1 flex-col gap-3.5 items-start justify-start md:pl-10 sm:pl-5 pl-[50px] w-full">
                  <Text
                    className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700 w-full"
                    size="txtLexendMedium38"
                  >
                    Mission
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[882px] md:max-w-full text-gray-400 text-lg"
                    size="txtLexendLight18Gray400"
                  >
                    At YourBank, our mission is to empower our customers to
                    achieve financial success. We are dedicated to delivering
                    innovative banking solutions that cater to their unique
                    needs. Through personalized services, expert guidance, and
                    cutting-edge technology, we aim to build strong, lasting
                    relationships with our customers. Our mission is to be their
                    trusted partner, helping them navigate their financial
                    journey and realize their dreams.
                  </Text>
                </div>
              </div>
              <div className="flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-evenly mt-[-100px] mx-auto w-full z-[1]">
                <div className="border-lime-500 border-r border-solid flex flex-1 flex-col gap-3.5 items-start justify-start md:pr-10 sm:pr-5 pr-[50px] w-full">
                  <Text
                    className="md:text-4xl sm:text-[34px] text-[38px] text-white-A700 w-full"
                    size="txtLexendMedium38"
                  >
                    Vision
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[882px] md:max-w-full text-gray-400 text-lg"
                    size="txtLexendLight18Gray400"
                  >
                    Our vision at YourBank is to redefine banking by creating a
                    seamless and personalized experience for our customers. We
                    envision a future where banking is accessible, transparent,
                    and tailored to individual preferences. Through continuous
                    innovation and collaboration, we strive to be at the
                    forefront of the industry, setting new standards for
                    customer-centric banking. Our vision is to be the preferred
                    financial institution, known for our unwavering commitment
                    to excellence, trust, and customer satisfaction.
                  </Text>
                </div>
                <div
                  className="bg-cover bg-gradient6  bg-no-repeat border border-gray-900_02 border-solid h-[621px] md:h-auto pt-[60px] md:px-10 sm:px-5 px-[60px] relative rounded-bl-[20px] rounded-br-[20px] rounded-tl-[50px] rounded-tr-[50px] w-[664px] md:w-full"
                  style={{
                    backgroundImage: "url('images/img_ctasection.png')",
                  }}
                >
                  <Img
                    className="absolute h-[621px] inset-[0] justify-center m-auto object-cover w-[602px] md:w-full"
                    src="images/img_abstractdesign_1.png"
                    alt="abstractdesign_Two"
                  />
                  <Img
                    className="md:h-[561px] h-full mt-auto mx-auto object-cover relative rounded-tl-[50px] rounded-tr-[50px] w-full"
                    src="images/img_image_2.png"
                    alt="image_Two"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:gap-10 gap-20 items-start justify-start max-w-[1596px] mt-[150px] w-full">
            <div className="flex flex-col gap-3.5 items-start justify-start md:pr-10 sm:pr-5 pr-[300px] w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-lime-500 w-full"
                size="txtLexendRegular48"
              >
                Press Releases
              </Text>
              <Text
                className="text-gray-400 text-lg w-full"
                size="txtLexendRegular18Gray400"
              >
                Stay updated with the latest happenings and exciting
                developments at YourBank through our press releases.
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="md:gap-5 gap-[30px] grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="bg-gray-900_01 border border-gray-900_02 border-solid flex flex-1 flex-col gap-[51px] h-full items-center justify-start p-[30px] sm:px-5 rounded-bl-[16px] rounded-br-[16px] rounded-tl-[40px] rounded-tr-[40px] w-full">
                  <Img
                    className="h-[333px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] rounded-tl-[30px] rounded-tr-[30px] w-full"
                    src="images/img_image_333x723.png"
                    alt="image"
                  />
                  <div className="flex flex-col gap-[30px] items-center justify-start sm:px-5 px-[30px] w-full">
                    <div className="flex flex-col gap-5 items-start justify-start w-full">
                      <Text
                        className="leading-[150.00%] max-w-[663px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtLexendRegular24"
                      >
                        YourBank Launches New Rewards Program to Enhance
                        Customer Loyalty and Satisfaction
                      </Text>
                      <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                        <Button
                          className="border border-gray-900_02 border-solid cursor-pointer font-light min-w-[161px] rounded-[21px] text-center text-lg"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          Location: India
                        </Button>
                        <Button
                          className="border border-gray-900_02 border-solid cursor-pointer font-light min-w-[181px] rounded-[21px] text-center text-lg"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          Date: 06/11/2024
                        </Button>
                      </div>
                    </div>
                    <Text
                      className="leading-[150.00%] max-w-[663px] md:max-w-full text-gray-400 text-lg"
                      size="txtLexendLight18Gray400"
                    >
                      YourBank is pleased to announce the introduction of our
                      new Rewards Program, aimed at rewarding our loyal
                      customers and enhancing their banking experience. The
                      program offers exclusive benefits, discounts, and
                      personalized offers tailored to individual customer
                      preferences. With this initiative, YourBank reaffirms its
                      commitment to delivering exceptional value and building
                      lasting relationships with our valued customers.
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-900_01 border border-gray-900_02 border-solid flex flex-1 flex-col gap-[51px] items-center justify-start p-[30px] sm:px-5 rounded-bl-[16px] rounded-br-[16px] rounded-tl-[40px] rounded-tr-[40px] w-full">
                  <Img
                    className="h-[333px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] rounded-tl-[30px] rounded-tr-[30px] w-full"
                    src="images/img_image_3.png"
                    alt="image"
                  />
                  <div className="flex flex-col gap-[30px] items-center justify-start sm:px-5 px-[30px] w-full">
                    <div className="flex flex-col gap-5 items-start justify-start w-full">
                      <Text
                        className="leading-[150.00%] max-w-[663px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtLexendRegular24"
                      >
                        YourBank Expands Branch Network with Opening of New
                        Location in Chennai
                      </Text>
                      <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                        <Button
                          className="border border-gray-900_02 border-solid cursor-pointer font-light min-w-[161px] rounded-[21px] text-center text-lg"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          Location: India
                        </Button>
                        <Button
                          className="border border-gray-900_02 border-solid cursor-pointer font-light min-w-[178px] rounded-[21px] text-center text-lg"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          Date: 12/11/2024
                        </Button>
                      </div>
                    </div>
                    <Text
                      className="leading-[150.00%] max-w-[663px] md:max-w-full text-gray-400 text-lg"
                      size="txtLexendLight18Gray400"
                    >
                      YourBank is excited to announce the grand opening of our
                      newest branch in [City]. This expansion is a testament to
                      our continued commitment to serving our customers and
                      providing them with convenient access to our comprehensive
                      range of banking services. The new branch will feature
                      state-of-the-art facilities, a team of dedicated
                      professionals, and a personalized approach to banking,
                      further strengthening our presence in the local community.
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-900_01 border border-gray-900_02 border-solid flex flex-1 flex-col gap-[51px] items-center justify-start p-[30px] sm:px-5 rounded-bl-[16px] rounded-br-[16px] rounded-tl-[40px] rounded-tr-[40px] w-full">
                  <Img
                    className="h-[333px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] rounded-tl-[30px] rounded-tr-[30px] w-full"
                    src="images/img_image_4.png"
                    alt="image"
                  />
                  <div className="flex flex-col gap-[30px] items-center justify-start sm:px-5 px-[30px] w-full">
                    <div className="flex flex-col gap-5 items-start justify-start w-full">
                      <Text
                        className="leading-[150.00%] max-w-[663px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtLexendRegular24"
                      >
                        YourBank Partners with Local Nonprofit to Support
                        Financial Education Initiatives
                      </Text>
                      <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                        <Button
                          className="border border-gray-900_02 border-solid cursor-pointer font-light min-w-[161px] rounded-[21px] text-center text-lg"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          Location: India
                        </Button>
                        <Button
                          className="border border-gray-900_02 border-solid cursor-pointer font-light min-w-[182px] rounded-[21px] text-center text-lg"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          Date: 24/12/2024
                        </Button>
                      </div>
                    </div>
                    <Text
                      className="leading-[150.00%] max-w-[663px] md:max-w-full text-gray-400 text-lg"
                      size="txtLexendLight18Gray400"
                    >
                      YourBank is excited to unveil our new Sustainable Banking
                      Initiative, demonstrating our commitment to environmental
                      responsibility. This initiative includes a range of
                      sustainable banking products and services, such as green
                      loans, eco-friendly investment options, and paperless
                      banking solutions. By incorporating sustainable practices
                      into our operations, we aim to contribute to a greener
                      future while providing innovative banking solutions to our
                      customers.
                    </Text>
                  </div>
                </div>
                <div className="bg-gray-900_01 border border-gray-900_02 border-solid flex flex-1 flex-col gap-[51px] items-center justify-start p-[30px] sm:px-5 rounded-bl-[16px] rounded-br-[16px] rounded-tl-[40px] rounded-tr-[40px] w-full">
                  <Img
                    className="h-[333px] md:h-auto object-cover rounded-bl-[12px] rounded-br-[12px] rounded-tl-[30px] rounded-tr-[30px] w-full"
                    src="images/img_image_5.png"
                    alt="image"
                  />
                  <div className="flex flex-col gap-[30px] items-center justify-start sm:px-5 px-[30px] w-full">
                    <div className="flex flex-col gap-5 items-start justify-start w-full">
                      <Text
                        className="leading-[150.00%] max-w-[663px] md:max-w-full text-2xl md:text-[22px] text-white-A700 sm:text-xl"
                        size="txtLexendRegular24"
                      >
                        YourBank Launches Sustainable Banking Initiative to
                        Promote Environmental Responsibility
                      </Text>
                      <div className="flex flex-row gap-2.5 items-start justify-start w-auto">
                        <Button
                          className="border border-gray-900_02 border-solid cursor-pointer font-light min-w-[161px] rounded-[21px] text-center text-lg"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          Location: India
                        </Button>
                        <Button
                          className="border border-gray-900_02 border-solid cursor-pointer font-light min-w-[182px] rounded-[21px] text-center text-lg"
                          color="gray_900"
                          size="xs"
                          variant="fill"
                        >
                          Date: 28/12/2024
                        </Button>
                      </div>
                    </div>
                    <Text
                      className="leading-[150.00%] max-w-[663px] md:max-w-full text-gray-400 text-lg"
                      size="txtLexendLight18Gray400"
                    >
                      YourBank is excited to unveil our new Sustainable Banking
                      Initiative, demonstrating our commitment to environmental
                      responsibility. This initiative includes a range of
                      sustainable banking products and services, such as green
                      loans, eco-friendly investment options, and paperless
                      banking solutions. By incorporating sustainable practices
                      into our operations, we aim to contribute to a greener
                      future while providing innovative banking solutions to our
                      customers.
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-gray-900_01 flex gap-[50px] items-center justify-center pb-[50px] pt-[100px] md:px-5 px-[162px] w-full" />
      </div>
    </>
  );
};

export default AboutPageDesktopPage;
