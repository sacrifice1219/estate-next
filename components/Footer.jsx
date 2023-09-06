import { Box } from "@chakra-ui/react";

const current =  new Date().getFullYear();

const Footer = () => (
    <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
        {current} Realtor, Inc.
    </Box>
)
export default Footer;