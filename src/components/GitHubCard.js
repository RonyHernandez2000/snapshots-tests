import Card from 'react-bootstrap/Card'

function GitHubCard() {
    return (
        <Card>
            <Card.Img  src="https://placebear.com/640/360" />
            <Card.Body>
                <Card.Title>Rony Hernandez</Card.Title>
                <Card.Subtitle>I was born May 1st 2000</Card.Subtitle>
                <Card.Text>
                    Hi My name is Rony
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default GitHubCard