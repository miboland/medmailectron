import React, { useEffect } from "react";
import NextLink from "next/link";
import { useColorMode, Button, Text, Flex, Box, Link } from "@chakra-ui/core";
import { useRouter } from "next/router";

const Pagination = ({ reports, slug, query }) => {
  const router = useRouter();
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  const pages = reports.map((report) => report.title);
  const index = reports.findIndex((report) => report.title === slug);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (
      (slug === [...pages].shift() && e.keyCode === 37) ||
      (slug === [...pages].pop() && e.keyCode === 39)
    ) {
      return;
    }
    if (e.keyCode === 37) {
      router.push(
        query ? `/archive/[slug]?q=${query}` : `/archive/[slug]`,
        query
          ? `/archive/${pages[index - 1]}?q=${query}`
          : `/archive/${pages[index - 1]}`
      );
    } else if (e.keyCode === 39) {
      router.push(
        query ? `/archive/[slug]?q=${query}` : `/archive/[slug]`,
        query
          ? `/archive/${pages[index + 1]}?q=${query}`
          : `/archive/${pages[index + 1]}`
      );
    }
  };

  return (
    <Box mt={4}>
      <Flex>
        {slug !== [...reports].shift().title && (
          <NextLink
            href={query ? `/archive/[slug]?q=${query}` : `/archive/[slug]`}
            as={
              query ? `${pages[index - 1]}?q=${query}` : `${pages[index - 1]}`
            }
          >
            <Link as="a">
              <Button leftIcon="arrow-back" variant="subtle">
                Previous Report
              </Button>
            </Link>
          </NextLink>
        )}
        {slug === [...reports].shift().title &&
          slug === [...reports].pop().title && (
            <Divider orientation="vertical"></Divider>
          )}
        {slug !== [...reports].pop().title && (
          <NextLink
            href={query ? `/archive/[slug]?q=${query}` : `/archive/[slug]`}
            as={
              query
                ? `/archive/${pages[index + 1]}?q=${query}`
                : `/archive/${pages[index + 1]}`
            }
            passHref
          >
            <Link as="a">
              <Button rightIcon="arrow-forward" variant="subtle">
                Next Report
              </Button>
            </Link>
          </NextLink>
        )}
      </Flex>
    </Box>
  );
};

export default Pagination;
