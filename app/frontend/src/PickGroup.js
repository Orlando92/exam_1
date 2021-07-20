import React from 'react'
import { Button, Form } from 'react-bootstrap';
import groups from './groups';


export const PickGroup = ({ setGroup, fetchData }) => {


    const onChange = (e) => {
        setGroup(groups.find(g => g.name === e.target.value));
    }

    return (
        <Form onSubmit={fetchData}>
            <Form.Group className="mb-3">
                <Form.Label>Pick a Grouping Option</Form.Label>
                <Form.Control as="select" onChange={onChange}>
                    {
                        groups.map(group =>
                            <option key={group.name} value={group.name}>
                                {group.name}
                            </option>
                        )
                    }
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3">
                <Button type="submit">Fetch</Button>
            </Form.Group>

        </Form>
    )
}
