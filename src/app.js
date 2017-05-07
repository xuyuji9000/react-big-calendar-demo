import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { Provider } from 'react-redux'

import { store } from './conf'
import Counter from './components/Counter'
import TestSnackbar from './components/TestSnackbar'
import MyCalendar from './components/MyCalendar'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const App = function()
{
    return (
        <MyCalendar></MyCalendar>
    )
}

render(
    <App></App>,
    document.getElementById('root')
)
