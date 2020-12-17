import React from 'react';

const Mycontainer = (WrapperComponent) => {
    return class extends React.Component {
        render() {
            return <WrapperComponent {...this.props} />
        }
    }
}

export default Mycontainer;