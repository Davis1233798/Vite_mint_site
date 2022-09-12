import React from "react";
import { Box, ChakraProps, OmitCommonProps, Text } from "@chakra-ui/react";

export default function Logo(props: JSX.IntrinsicAttributes & OmitCommonProps<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof ChakraProps> & ChakraProps & { as?: "div" | undefined; }) {
    return (
        <Box {...props}>
            <Text fontSize="lg" fontWeight="bold">
                Logo
            </Text>
        </Box>
    );
}
