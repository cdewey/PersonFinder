import React from 'react';
import './search-bar.css';
import magnifyingGlass from '../../../assets/magnifing-glass-icon.svg';
import verticalBar from '../../../assets/vertical-bar.svg';
import xIcon from '../../../assets/x-icon.svg';

type MyProps = {
  onChange : any,
  clear : any
};
type MyState = {
  value: string; // like this
};

class SearchBar extends React.Component<MyProps,MyState> {
  constructor(props: any){
    super(props);
    this.state = {
      value : ""
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  placeholder = "Search in Air HQ"

  handleChange(event : any){
    this.setState({
      value : event.target.value
    }, () =>{
      this.props.onChange(this.state.value)
    });
  }

  handleClick(){
    this.setState({
      value : ""
    })
    this.props.clear();
  }

  render(){
    return (

      <div className="container">
        <img src={magnifyingGlass} alt="magnifing glass" className="magnifing-glass icon"/>
        <img src={verticalBar} alt="vertical bar" className="vertical-bar icon"/>
        <div className="clear-button icon" onClick={this.handleClick}>
          <img src={xIcon} alt="clear"/>      
        </div>
        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder={this.placeholder} className="search-bar"/>
      </div>
  
    );
  } 
}

export default SearchBar;