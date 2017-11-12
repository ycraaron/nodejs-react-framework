import React,{Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class MaterialUIComponent extends Component{

render(){
    return(
        <MuiThemeProvider>
        <AutoComplete
            floatingLabelText="search movie by name"
            filter={AutoComplete.fuzzyFilter}
            dataSource={this.props.movies}
            maxSearchResults={8}
        />  
        </MuiThemeProvider>
    )
}
}

export default MaterialUIComponent;