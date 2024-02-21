import React from "react";

import { Button, Img, Text } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <Img className="h-10 w-[155px]" src="images/img_logo.svg" alt="logo" />
        <ul className="flex flex-row gap-[26px] sm:hidden items-center justify-start w-auto common-row-list">
          <li>
            <Text className="text-lg text-white-A700" size="txtLexendRegular18">
              Home
            </Text>
          </li>
          <li>
            <Text className="text-lg text-white-A700" size="txtLexendRegular18">
              Careers
            </Text>
          </li>
          <li>
            <Text className="text-lg text-white-A700" size="txtLexendRegular18">
              About
            </Text>
          </li>
          <li>
            <Text className="text-lg text-white-A700" size="txtLexendRegular18">
              Security
            </Text>
          </li>
        </ul>
        <div className="flex flex-row gap-[30px] items-center justify-start w-auto">
          <Text
            className="text-lg text-white-A700 w-auto"
            size="txtLexendRegular18"
          >
            Sign Up
          </Text>
          <Button
            className="cursor-pointer font-lexend min-w-[109px] rounded-[27px] text-center text-lg"
            color="lime_500"
            size="md"
            variant="fill"
          >
            Login
          </Button>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
