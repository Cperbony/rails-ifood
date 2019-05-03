import React, {Component} from 'react';
import { Column } from "rbx";
import store from "../../store";

import Restaurant from "./restaurant.js";

class ListRestaurants extends Component {
    componentWillMount() {
        this.restaurants = store.getState()["restaurantsState"];
    }

    render() {
        return (
            <div className="restaurants-list">
                <h2 className="title is-size-4">Restaurantes</h2>

                <Column.Group multiline gapSize={2}>
                    {
                        this.restaurants.map(restaurant => {
                            return <Restaurant {...restaurant}/>
                        })
                    }
                </Column.Group>
            </div>
        )
    }
}

export default ListRestaurants;