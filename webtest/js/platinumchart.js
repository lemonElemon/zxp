class PlatinumWindow extends React.Component{
    render(){
        return(
            <div className="platinum-window">
                <WindowHeader />
            </div>
            
        )
        
    }        
}
class WindowHeader extends React.Component{
    render(){
        return(
            <div className="window-header">
                <a className="window-header-title1">パネルの表示</a>
                <a className="window-header-title2">レイアウト</a>
                <ChartDrawSection />
                <UserSection />
                <LayoutNameSection />
                <WindowEditSection />
            </div>
        )
    }
}
class ChartDrawSection extends React.Component{
    render(){
        return(
            <ul className="chart-draw-section">
                <li><a><img src="img/draw/chart-pointer.svg"/></a></li>
                <li><a><img src="img/draw/chart-erase.svg"/></a></li>
                <li><a><img src="img/draw/chart-erase-all.svg"/></a></li>
                <li><a><img src="img/draw/chart-horizontal.svg"/></a></li>
                <li><a><img src="img/draw/chart-vertical.svg"/></a></li>
                <li><a><img src="img/draw/chart-trend.svg"/></a></li>
                <li><a><img src="img/draw/chart-channel.svg"/></a></li>
                <li><a><img src="img/draw/chart-circle.svg"/></a></li>
                <li><a><img src="img/draw/chart-angle.svg"/></a></li>
                <li><a><img src="img/draw/chart-triangle.svg"/></a></li>
                <li><a><img src="img/draw/chart-rectangle.svg"/></a></li>
                <li><a><img src="img/draw/chart-pentagon.svg"/></a></li>
                <li><a><img src="img/draw/chart-fibonacci-retracement.svg"/></a></li>
                <li><a><img src="img/draw/chart-fibonacci-fan.svg"/></a></li>
                <li><a><img src="img/draw/chart-expand.svg"/></a></li>
            </ul>
        )
    }     
}
class UserSection extends React.Component{
    render(){
        return(
            <div className="user-section">
                <a className="user-section-text1">FX Speed</a>
                <a className="user-section-text2">CFD Speed</a>
            </div>
        )
    }     
}
class WindowEditSection extends React.Component{
    render(){
        return(
            <ul className="window-edit-section">
                <li><a><img src="img/draw/chart-pointer.svg"/></a></li>
                <li><a><img src="img/draw/chart-erase.svg"/></a></li>
                <li><a><img src="img/draw/chart-erase-all.svg"/></a></li>
                <li><a><img src="img/draw/chart-horizontal.svg"/></a></li>
                <li><a><img src="img/draw/chart-vertical.svg"/></a></li>
            </ul>
        )
    }     
}
class LayoutNameSection extends React.Component{
    render(){
        return(
            <span className="layout-name">
                トレード225米ダウ1分・2h4画
            </span>
        )
    }     
}

ReactDOM.render(
    <PlatinumWindow />,
    document.getElementById('root')
);