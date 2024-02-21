import React from "react";

import { Img, Line, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col gap-[50px] items-center justify-center w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start w-full">
            <Img
              className="h-10 w-[155px]"
              src="images/img_logo.svg"
              alt="logo_One"
            />
            <ul className="flex flex-row gap-[26px] items-center justify-start w-auto md:w-full common-column-list">
              <li>
                <Text
                  className="text-gray-300 text-lg"
                  size="txtLexendRegular18Gray300"
                >
                  Home
                </Text>
              </li>
              <li>
                <Text
                  className="text-gray-300 text-lg"
                  size="txtLexendRegular18Gray300"
                >
                  Careers
                </Text>
              </li>
              <li>
                <Text
                  className="text-gray-300 text-lg"
                  size="txtLexendRegular18Gray300"
                >
                  About
                </Text>
              </li>
              <li>
                <Text
                  className="text-gray-300 text-lg"
                  size="txtLexendRegular18Gray300"
                >
                  Security
                </Text>
              </li>
            </ul>
          </div>
          <Line className="bg-gray-900_02 h-px w-full" />
          <div className="flex md:flex-col flex-row gap-5 items-center justify-center w-full">
            <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_icon_lime_500_24x24.svg"
                alt="icon"
              />
              <Text
                className="text-gray-300 text-lg w-auto"
                size="txtLexendRegular18Gray300"
              >
                hello@skillbirdge.com
              </Text>
            </div>
            <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_icon_24x24.svg"
                alt="icon_One"
              />
              <Text
                className="text-gray-300 text-lg w-auto"
                size="txtLexendRegular18Gray300"
              >
                +91 91813 23 2309
              </Text>
            </div>
            <div className="flex flex-row gap-1.5 items-center justify-start w-auto">
              <Img
                className="h-6 w-6"
                src="images/img_icon_2.svg"
                alt="icon_Two"
              />
              <Text
                className="text-gray-300 text-lg w-auto"
                size="txtLexendRegular18Gray300"
              >
                Somewhere in the World
              </Text>
            </div>
          </div>
          <Line className="bg-gray-900_02 h-px w-full" />
          <div className="bg-gray-900 border border-gray-900_02 border-solid flex md:flex-col flex-row md:gap-10 items-center justify-between pl-4 sm:pr-5 pr-[30px] py-4 rounded-[42px] w-full">
            <Img
              className="h-[52px] w-[184px]"
              src="images/img_buttonscontainer.svg"
              alt="buttonscontaine"
            />
            <Text
              className="text-gray-400 text-lg w-auto"
              size="txtLexendLight18Gray400"
            >
              YourBank All Rights Reserved
            </Text>
            <div className="flex flex-row gap-3 items-center justify-start w-auto">
              <Text
                className="text-gray-400 text-lg w-auto"
                size="txtLexendLight18Gray400"
              >
                Privacy Policy
              </Text>
              <Line className="bg-gray-400 h-[27px] w-px" />
              <Text
                className="text-gray-400 text-lg w-auto"
                size="txtLexendLight18Gray400"
              >
                Terms of Service
              </Text>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
