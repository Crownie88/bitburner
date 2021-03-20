import { Merge } from "../data/Merge";
import * as React from "react";

export class Grid extends React.Component {

	blankGrid(width: number, height: number): string[][] {
		return Array.apply(null, {length: width}).map((x: any) => 
			Array.apply(null, {length: height}).map((x: any) => "·"));
	}

	mergeASCII(s0: string, s1: string): string {
		const char = Merge[s0][s1];
		if(char) {
			return char;
		}
		return s0;
	}


	addChip(grid: string[][], x: number, y: number, width: number, height: number) {
		for(let i = x+1; i < x+width-1; i++) {
			for(let j = y+1; j < y+height-1; j++) {
				grid[i][j] = " ";
			}
		}

		for(let i = x+1; i < x+width-1; i++) {
			grid[i][y] = this.mergeASCII("│", grid[i][y]);
			grid[i][y+height-1] = this.mergeASCII("│", grid[i][y+height-1]);
		}
		for(let j = y+1; j < y+height-1; j++) {
			grid[x][j] = this.mergeASCII("─", grid[x][j]);
			grid[x+width-1][j] = this.mergeASCII("─", grid[x+width-1][j]);
		}
		grid[x][y] = this.mergeASCII("┌", grid[x][y]);
		grid[x][y+height-1] = this.mergeASCII("┐", grid[x][y+height-1]);
		grid[x+width-1][y] = this.mergeASCII("└", grid[x+width-1][y]);
		grid[x+width-1][y+height-1] = this.mergeASCII("┘", grid[x+width-1][y+height-1]);
	}


	render() {
		const grid = this.blankGrid(10, 10);
		this.addChip(grid, 3, 5, 4, 3);
		this.addChip(grid, 0, 0, 6, 6);
		return (<>
			<pre style={{fontSize: '3em', lineHeight: '0.85em'}}>{grid.map(line => line.join("")).join("\n")}</pre>
		</>)
	}
}