import React from 'react';
import PropTypes from 'prop-types';

const withInfiniteScroll = Component => {
  return class InfiniteScroll extends React.PureComponent {
    static propTypes = {
      data: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.symbol,
          PropTypes.node,
        ]),
      ),
      batchSize: PropTypes.number,
      containerHeight: PropTypes.number,
      rowHeight: PropTypes.number,
      hideLoader: PropTypes.bool,
    };

    static defaultProps = {
      data: [],
      containerHeight: 275,
      batchSize: 50,
      rowHeight: 40,
      hideLoader: false,
    }

    constructor(props) {
      super(props);
      this.state = {
        items: [0, this.props.batchSize],
        batchSize: this.props.batchSize,
        fixedHeight: this.props.containerHeight,
        rowHeight: this.props.rowHeight,
        loadingState: false,
      };
    }

    componentDidMount() {
      this.refs.scroll.addEventListener('scroll', () => {
        const { rowHeight, batchSize, items } = this.state;
        const scrollHeight = ((items[1] - items[0]) * rowHeight) - this.state.fixedHeight;
        const refs = this.refs.scroll.scrollTop + this.refs.scroll.clientHeight;
        const backwards = (((items[1] - items[0]) - batchSize) * rowHeight - this.state.fixedHeight);
        const pastUpperThreshold = refs <= backwards;

        if (refs >= scrollHeight && !this.state.loadingState) this.loadMoreItems();
        else if (pastUpperThreshold && !this.state.removingState) this.removeSomeItems();
      });
    }

    displayItems = () => {
      return this.props.data.slice(this.state.items[0], this.state.items[1]);
    }

    loadMoreItems = () => {
      const { items, batchSize } = this.state;
      this.setState({ loadingState: true });
      setTimeout(() => {
        this.setState({ items: [items[0] + (batchSize / 2), items[1] + batchSize], loadingState: false });
      }, 1000);
    }

    removeSomeItems = () => {
      const { items, batchSize } = this.state;
      this.setState({ items: [items[0] - (batchSize / 2), items[1] - batchSize] });
    }

    render() {
      const { containerHeight } = this.props;
      return (
        <div ref="scroll" style={{ height: containerHeight, overflow: 'auto' }}>
          <Component
            items={this.displayItems()}
            loadingState={!this.props.hideLoader ? this.state.loadingState : false}
            {...this.props}
          />
        </div>
      );
    }
  };
};

export default withInfiniteScroll;
