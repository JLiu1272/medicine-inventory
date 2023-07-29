"use client";
import { Link } from "@chakra-ui/next-js";
import { Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Heading>Hello World</Heading>
      <Link href="/about" color="blue.400" _hover={{ color: "blue.500" }}>
        About
      </Link>
    </>
  );
}
