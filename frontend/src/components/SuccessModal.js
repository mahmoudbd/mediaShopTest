import React, { useState } from 'react';
import { Modal, Button, Card } from 'react-bootstrap';

export default function SuccessModal() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <>
            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="text-success">
                        Completed!
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card className="bg-dark text-white">
                        <Card.Img
                            src="https://media.giphy.com/media/lMameLIF8voLu8HxWV/giphy.gif"
                            alt="Card image"
                        />
                        <Card.ImgOverlay>
                            <h1>Now you can make a celebration!</h1>
                        </Card.ImgOverlay>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
