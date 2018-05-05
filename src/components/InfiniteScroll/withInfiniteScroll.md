# Bridg Infinite Scroll Higher Order Component

## Getting Started

This is a resuable higher order component that accepts a component to be rendered with an infinte scroll container around it.
To import:
```js
import { withInfiniteScroll } from 'components/BridgReusables'
```

**This HoC takes in a component to be rendered that has an immense amount of data -- either in the form of a list, table, div, etc. The wrapped component's structure is not important - the HoC will render it wrapped by a container div that observes scrolling and renders more or less items based on the scroll position.**

## ALL PROPS ARE PROVIDED DIRECTLY TO YOUR WRAPPED COMPONENT
### Please see https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e for more information on how React Higher-Order-Components work.

1) data - The most important prop actually exists in your wrapped component.
**Your wrapped component MUST receive a list of nodes to be rendered through a prop called data**. withInfiniteScroll will then take this and RETURN a prop called items that your wrapped component can into the table, list, div, etc.

2) rowHeight - If you want infinite scroll to work like you need, this must be the actual height of each list item or table row. If the number is incorrect, the math of your scrolling will not be accurate. For instance, in the examples below you can see rowHeight is "40" because this is the actual height of the rows.

3) containerHeight - Depending on the size of your containerHeight, this will offset the original scroll position of the user. For instance, in the examples below I have a containerHeight of '275' because the original scroll position is offset by 275 pixels and this number is needed to know how to properly set the original offset position for the container. The math functions involved cannot work with an inaccurate number here.

4) batchSize - This one is simple. It sets the original amount of list items/rows to display and when the user scrolls to the bottom of the active container, it will control how many more is rendered each time as well.

5) hideLoader - This is a boolean value used to declare whether or not to pass down the stateful value to the wrapped component that could be used to render a Loading message that lasts for roughly a second when the user reaches the bottom of the active container. You can find an example of this in line 42-49 of this file in the first example with "LoadingDots"


### Examples of Usage

- Declaring and using a HoC requires a few steps. First you need the table, list, div that you want to render that will be wrapped by withInfiniteScroll. Example:
```js
  import React, { Component } from 'react';
  import PropTypes from 'prop-types';
  import { withInfiniteScroll, LoadingDots } from 'components/BridgReusables';
  import './LocationsTable.scss';

  /* Component to be wrapped by withInfiniteScroll */
  const InfiniteTable = ({ items, loadingState, ...props }) => {
    return (
      <table className="reusable-table">
        <tbody>{items}</tbody>
        {loadingState &&
          <tbody>
            <tr>
              <td style={{ textAlign: 'center' }}>
                <LoadingDots text="Loading" fontSize="18px" dotSize="36px" />
              </td>
            </tr>
          </tbody>}
      </table>
    );
  };

  const WithInfiniteTable = withInfiniteScroll(InfiniteTable);
  export default WithInfiniteTable;
```

- Next, you will need to render your wrapped component with the props withInfiniteScroll needs to provide you the correct batchSize, rowHeight, and containerHeight for the functionality of your infinite scroll.
```js
  <WithInfiniteTable
    data={this.renderRows()}
    containerHeight={275}
    rowHeight={40}
    batchSize={100}
  />
```

- Now withInfiniteScroll will have access to all the props passed to WithInfiniteTable. It will utilize the data property to render the nodes in batches... based off the batchSize property provided.
- As you can see in the example above for "InfiniteTable" -- it accepts two specific properties: items & loadingState, plus its original props that it passed to withInfiniteScroll.
- **Items** is the size adjusted list that you first provided as props to your wrapped component as the property DATA, and it is returned as the property ITEMS.
- **LoadingState** is a value used by withInfiniteScroll to show a loading message when the user has scrolled to the bottom of the active list and it is creating more list items. You can choose whether or not based off UI/UX concerns or general distaste of this feature by passing the prop hideLoader with a value of TRUE when rendering your wrapped component.
