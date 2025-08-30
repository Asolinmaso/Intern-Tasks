import React from 'react'
import { Card } from 'react-bootstrap';
const ContactInfo = () => {
  return (
    <Card>
        <Card.Body>
            <Card.Title as="h5" className='test-primary mb-2'>
                Contact 
            </Card.Title>
            <Card.Text className="mb-0">
          <strong>Phone:</strong> +91 XXXXXXXX
        </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default ContactInfo