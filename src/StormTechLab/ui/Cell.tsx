import { Merge } from "../data/Merge";
import * as React from "react";

type IProps = {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    content: string;
}

type IState = {
    content: string;
}

export class Cell extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        console.log('cell created');
        super(props);
        this.state.content = this.props.content;
    }

    render() {
        <div onMouseEnter={this.props.onMouseEnter}>
            {this.state.content}
        </div>
    }
}