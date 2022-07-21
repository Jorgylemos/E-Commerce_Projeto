import { Form, Button, Container } from "react-bootstrap"

const Settings = ({ user }: { user: any }) => {

    function GoogleVerified({ true_verified }: { true_verified: any }) {

        if (user.user.emails[0].verified === true) {
            return (
                <Form.Label className={true_verified} htmlFor="disabledTextInput">Email verificado!</Form.Label>
            )
        } else {
            return (
                <Form.Label htmlFor="disabledTextInput">Email não verificado!</Form.Label>
            )
        }
    }

    return (
        <>
            <Container className="settings-custom py-5" style={{ marginTop: '100px' }}>
                <Form>
                    <fieldset disabled>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="disabledTextInput">Usuário</Form.Label>
                            <Form.Control id="disabledTextInput" placeholder='Jorge Lemos' />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="disabledTextInput">Email</Form.Label>
                            <Form.Control id="disabledTextInput" placeholder={user.username} />
                            {<GoogleVerified true_verified="true-verified-label" />}
                        </Form.Group>
                    </fieldset>
                </Form>
            </Container>
        </>
    )
}

export default Settings