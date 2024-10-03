import { useState } from 'react'

function App() {

    const [response, setResponse] = useState<string>("Make request to check.")
    const makeRequest = () => {
        fetch("http://localhost:93/check")
            .then(async (response) => setResponse(await response.text()))
            .catch((error) => setResponse("Error: " + error))
    }

    return <>
        <h1>Javalin CORS Test Client</h1>
        <button onClick={makeRequest}>
            Make request
        </button>
        <p>
            Response: <code>{response}</code>
        </p>
    </>
}

export default App;
