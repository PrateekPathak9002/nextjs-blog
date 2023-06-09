"use client"
import { Input, FormControl, Box, Button } from '@chakra-ui/react'

export default function PageWithJSbasedForm() {
    // Handles the submit event on form submit.
    const handleSubmit = async (event) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault();

        // Get data from the form.
        const data = {
            title: event.target.title.value,
            content: event.target.content.value,
        };

        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data);

        // API endpoint where we send form data.
        const endpoint = '/api/postBlog';

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
        <Box>
            <FormControl onSubmit={handleSubmit} margin={5}>
                <Input variant='outline' marginBottom={5} htmlSize={50} borderRadius={10} width='auto' type="text" id="title" name="title" placeholder="Title" size='sm' required />
                <br />
                <Input variant='outline' marginBottom={5} borderRadius={10} htmlSize={50} width='auto' type="text" id="content" name="content" placeholder="Content" size='sm' required />
                <br />
                <Button type="submit" colorScheme='red'>Submit</Button>
            </FormControl>
        </Box>
    );
}
