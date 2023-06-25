"use client"
import { Flex, Box,FormControl,Input,Button } from "@chakra-ui/react";

export default function login() {
    const handleSubmit = async (event) => {
        alert('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee')
        // Stop the form from submitting and refreshing the page.
        event.preventDefault();

        // Get data from the form.
        const data = {
            title: event.target.username.value,
            content: event.target.password.value,
        };

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data);

        // API endpoint where we send form data.
        const endpoint = '/api/login';

        // Form the request for sending data to the server.
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
                'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,
        };

        // Send the form data to our forms API on Vercel and get a response.
        const response = await fetch(endpoint, options);

        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.json();
        alert(`Is this your full name: ${result.data}`);
    };
    return (
        <Flex align="center" justify="center" height="100vh" >
            <title>eee</title>
            <Box>
                <FormControl onSubmit={handleSubmit} margin={5}>
                    <Input variant='outline' marginBottom={5} htmlSize={50} borderRadius={10} width='auto' type="text" id="username" name="username" placeholder="Username" size='sm' required />
                    <br />
                    <Input variant='outline' marginBottom={5} borderRadius={10} htmlSize={50} width='auto' type="text" id="password" name="password" placeholder="Password" size='sm' required />
                    <br />
                    <Button type="submit" colorScheme='red'>Submit</Button>
                </FormControl>
            </Box>
        </Flex>
    )
}