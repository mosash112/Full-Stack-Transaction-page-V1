import React, { ReactNode } from "react";
import { Button } from "./ui/button";

type Props = {
  children?: ReactNode;
  title?: string;
};

const items = ["Donation", "Payment & Fees", "Personal Information", "Tribute", "comment", "source", "Custom fields", "Emails", "Transactions", "Double the Donation"]

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="flex flex-row h-screen bg-white">
    {/* <div className=""> */}
    <div className="flex-none w-52 h-fit relative top-24">
      <ul className="w-full">
        {items.map((item, index) =>
          <li className="m-1" key={index}>
            <button className="py-2 ps-5 text-start w-full rounded">{item}</button>
          </li>
        )}
        <Button>hello</Button>
      </ul>
    </div>
    <div className="flex-1">
      {children}
    </div>
  </div>
);

export default Layout;
