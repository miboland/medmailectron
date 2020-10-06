import React, { useState } from "react";
import { NextSeo } from "next-seo";
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/core";

import { useStoreState } from "easy-peasy";

import Container from "../components/Container";
import ReportCard from "../components/ReportCard";
import Tags from "../components/Tags";

const title = "Medmail";

const Dashboard = () => {
  const [searchValue, setSearchValue] = useState("");
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: "gray.700",
    dark: "gray.400",
  };

  const reports = useStoreState((state) => state.reports.data);

  const filteredReports = reports.filter((report) =>
    report.body.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <NextSeo
        title={title}
        openGraph={{
          title,
        }}
      />
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              Reports
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>
              {`Displaying ${filteredReports.length} of ${reports.length} total medical reports.`}
            </Text>
            <InputGroup my={4} mr={4} w="100%">
              <Input
                aria-label="Search reports"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search reports"
              />
              <InputRightElement>
                <Icon name="search" color="gray.300" />
              </InputRightElement>
            </InputGroup>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            mt={8}
          >
            <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
              {filteredReports.length !== reports.length &&
                `Reports Containing "${searchValue}"`}
              {filteredReports.length === reports.length && "All Reports"}
            </Heading>
            <Tags />
            <Text color={secondaryTextColor[colorMode]} mb={2}>
              {`${filteredReports.length} Results`}
            </Text>
            {!filteredReports.length && "No reports found."}
            {filteredReports.map((report) => (
              <ReportCard
                key={report.title}
                report={report}
                searchValue={searchValue}
              />
            ))}
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Dashboard;
