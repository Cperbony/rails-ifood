import React, { Fragment } from 'react';
import { Column } from "rbx";

const CreateOrder = (props) => (
    <Column.Group centered>
        <Column size="4" offset="1">
            Order Form
        </Column>
        <Column size="4" offset="1">
            Product List
        </Column>
    </Column.Group>
);

export default CreateOrder;