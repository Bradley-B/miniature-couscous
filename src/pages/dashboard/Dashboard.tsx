import React, { useState } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import TimeseriesChart from "../../components/TimeseriesChart";
// import _ from "lodash";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

type Props = {

}

type Item = {
    i: string,
    x: number,
    y: number,
    w: number,
    h: number,
}

const defaultItems: Item[] = [0, 1, 2, 3, 4].map((value, index, array) => ({
    i: value.toString(),
    x: value * 2,
    y: 0,
    w: 2,
    h: 2,
}));

const createElement = (item: Item, onRemoveItem: () => void) => {
    return (
        <div key={item.i} data-grid={item}>
            { item.i === '1'
                ? <TimeseriesChart />
                : <span className="text">{item.i}</span>
            }
        </div>
    );
}

export const Dashboard = (props: Props) => {
    const [newCounter, setNewCounter] = useState(0);
    const [items, setItems] = useState<Item[]>(defaultItems);

    const onAddItem = () => { };
    const onRemoveItem = () => { };
    const onLayoutChange = () => { };
    const onBreakpointChange = () => { };

    return (
        <div>
            <button onClick={onAddItem}>Add Item</button>
            <ResponsiveReactGridLayout
                // onLayoutChange={onLayoutChange}
                // onBreakpointChange={onBreakpointChange}
            //   {...this.props}
            >
                {items.map(i => createElement(i, onRemoveItem))}
            </ResponsiveReactGridLayout>
        </div>
    );
}

/**
 * This layout demonstrates how to use a grid with a dynamic number of elements.
 */
// export default class AddRemoveLayout extends React.PureComponent {
//   static defaultProps = {
//     className: "layout",
//     cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
//     rowHeight: 100
//   };

//   constructor(props) {
//     super(props);

//     this.state = {
//       items: [0, 1, 2, 3, 4].map(function(i, key, list) {
//         return {
//           i: i.toString(),
//           x: i * 2,
//           y: 0,
//           w: 2,
//           h: 2,
//           add: i === (list.length - 1)
//         };
//       }),
//       newCounter: 0
//     };

//     this.onAddItem = this.onAddItem.bind(this);
//     this.onBreakpointChange = this.onBreakpointChange.bind(this);
//   }

//   createElement(el) {
//     const removeStyle = {
//       position: "absolute",
//       right: "2px",
//       top: 0,
//       cursor: "pointer"
//     };
//     const i = el.add ? "+" : el.i;
//     return (
//       <div key={i} data-grid={el}>
//         {el.add ? (
//           <span
//             className="add text"
//             onClick={this.onAddItem}
//             title="You can add an item by clicking here, too."
//           >
//             Add +
//           </span>
//         ) : (
//           <span className="text">{i}</span>
//         )}
//         <span
//           className="remove"
//           style={removeStyle}
//           onClick={this.onRemoveItem.bind(this, i)}
//         >
//           x
//         </span>
//       </div>
//     );
//   }

//   onAddItem() {
//     /*eslint no-console: 0*/
//     console.log("adding", "n" + this.state.newCounter);
//     this.setState({
//       // Add a new item. It must have a unique key!
//       items: this.state.items.concat({
//         i: "n" + this.state.newCounter,
//         x: (this.state.items.length * 2) % (this.state.cols || 12),
//         y: Infinity, // puts it at the bottom
//         w: 2,
//         h: 2
//       }),
//       // Increment the counter to ensure key is always unique.
//       newCounter: this.state.newCounter + 1
//     });
//   }

//   // We're using the cols coming back from this to calculate where to add new items.
//   onBreakpointChange(breakpoint, cols) {
//     this.setState({
//       breakpoint: breakpoint,
//       cols: cols
//     });
//   }

//   onLayoutChange(layout) {
//     this.props.onLayoutChange(layout);
//     this.setState({ layout: layout });
//   }

//   onRemoveItem(i) {
//     console.log("removing", i);
//     this.setState({ items: _.reject(this.state.items, { i: i }) });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.onAddItem}>Add Item</button>
//         <ResponsiveReactGridLayout
//           onLayoutChange={this.onLayoutChange}
//           onBreakpointChange={this.onBreakpointChange}
//           {...this.props}
//         >
//           {_.map(this.state.items, el => this.createElement(el))}
//         </ResponsiveReactGridLayout>
//       </div>
//     );
//   }
// }
