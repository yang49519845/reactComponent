import React from "react";

import DataSource from "../../function/list";

function withSubscription(WrapperComponent, selectData) {
  class HocComponent extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        data: selectData(DataSource, props),
      };
    }

    componentDidMount() {
      DataSource.addChangeListener(this, "handleChange");
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this, "handleChange");
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props),
      });
    }
    render() {
      return <WrapperComponent data={this.state.data} {...this.props} />;
    }
  };
  return HocComponent
}

export default withSubscription;
