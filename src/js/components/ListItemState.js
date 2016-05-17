import NeoWidget from './../lib/neo-widget';

export default class ListItemState extends NeoWidget {
  constructor(config = {}) {
    super(config);
  }

  getInitialState() {
    return {
      activated: false,
      disabled: false,
    };
  }

  template() {
    const styles = {};
    if (this.state.activated) {
      styles.backgroundColor = 'dodgerblue';
      styles.color = 'white';
    }

    if (this.state.disabled) {
      styles.opacity = '.5';
    }

    return (
      <div style={styles} className='p1 border-bottom'>
        <div className='inline-block'>{this.props.item.name}</div>
        <button ev-click={this._toggleActivate.bind(this)}>Activate/Deactivate</button>
        <button ev-click={this._toggleEnable.bind(this)}>Enable/Disable</button>
      </div>
    );
  }

  _toggleActivate() {
    this.setState({
      activated: !this.state.activated,
    });
  }

  _toggleEnable() {
    this.setState({
      disabled: !this.state.disabled,
    });
  }
}