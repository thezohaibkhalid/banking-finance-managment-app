import React from "react";
import "../globals.css";
import "../../components/HeaderBox";
import HeaderBox from "../../components/HeaderBox";
import Head from "next/head";
const Page: React.FC = () => {
  const loggedInUser = {firstName : "Zohaib", lastName: "Khalid"};
  return (
    <section className="home">
      <div className="home-content">
        <HeaderBox 
        type="greeting"
        title = "Welcome" 
        user={loggedInUser?.firstName || "Guest"}
        subtitle="Your banking experience starts here, Access and Manage your transactions"
        />

      </div>
    </section>
  );
};

export default Page;