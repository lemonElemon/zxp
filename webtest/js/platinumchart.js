class PlatinumWindow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isNewLayoutExpand: false,
            isPairShowExpand: false,
            isChartDrawExtend: false,
            isSettingExtend: false,
            isWindowPrintExtend: false,
            isWindowHelpExtend: false,
            isCloseAutoSave: false,
        }
    }
    handleClick(e){
        e = e || window.event;
        let isNewLayoutExpand = false;
        let isPairShowExpand = false;
        let isChartDrawExtend = false;
        let isSettingExtend = false;
        let isWindowPrintExtend = false;
        let isWindowHelpExtend = false;
        let isCloseAutoSave = this.state.isCloseAutoSave;

        console.log(e.target);

        if(e.target.id == "layoutName"){
            isNewLayoutExpand = !this.state.isNewLayoutExpand;
            isPairShowExpand = false;   
            isChartDrawExtend = false;
            isSettingExtend = false;
            isWindowPrintExtend = false;
            isWindowHelpExtend = false;
        }else if(e.target.id == "pairShowTitle"){
            isPairShowExpand = !this.state.isPairShowExpand;
            isNewLayoutExpand = false;
            isChartDrawExtend = false;
            isSettingExtend = false;
            isWindowPrintExtend = false;
            isWindowHelpExtend = false;
        }else if(e.target.id == "chartDrawExpand"){
            isChartDrawExtend = !this.state.isChartDrawExtend;
            isNewLayoutExpand = false;
            isPairShowExpand = false;
            isSettingExtend = false;
            isWindowPrintExtend = false;
            isWindowHelpExtend = false;
        }else if(e.target.id == "windowSetting"){
            isSettingExtend = !this.state.isSettingExtend;
            isNewLayoutExpand = false;
            isPairShowExpand = false;
            isChartDrawExtend = false;
            isWindowPrintExtend = false;
            isWindowHelpExtend = false;
        }else if(e.target.id == "windowPrint"){
            isWindowPrintExtend = !this.state.isWindowPrintExtend;
            isSettingExtend = false;
            isNewLayoutExpand = false;
            isPairShowExpand = false;
            isChartDrawExtend = false;
            isWindowHelpExtend = false;
        }else if(e.target.id == "windowHelp"){
            isWindowHelpExtend = !this.state.isWindowHelpExtend;
            isSettingExtend = false;
            isNewLayoutExpand = false;
            isPairShowExpand = false;
            isChartDrawExtend = false;
            isWindowPrintExtend = false;
        }else if(e.target.id == "closeWindowAutoSave" || e.target.id == "onOffSlideBar"){
            isCloseAutoSave = !isCloseAutoSave;
            isNewLayoutExpand = true;
        }
        
        this.setState({
            isNewLayoutExpand: isNewLayoutExpand,
            isPairShowExpand: isPairShowExpand,
            isChartDrawExtend: isChartDrawExtend,
            isSettingExtend: isSettingExtend,
            isWindowPrintExtend: isWindowPrintExtend,
            isWindowHelpExtend : isWindowHelpExtend,
            isCloseAutoSave: isCloseAutoSave,
        })
        
    }
    
    render(){
        return(
            <div className="platinum-window-dark" onClick={(e) => {this.handleClick(e)}}>
                <WindowHeader 
                    isNewLayoutExpand={this.state.isNewLayoutExpand} 
                    isPairShowExpand={this.state.isPairShowExpand} 
                    isChartDrawExtend={this.state.isChartDrawExtend}
                    isSettingExtend={this.state.isSettingExtend}
                    isWindowPrintExtend={this.state.isWindowPrintExtend}
                    isWindowHelpExtend={this.state.isWindowHelpExtend}
                    isCloseAutoSave={this.state.isCloseAutoSave}
                />
                <WindowBody/>
                <WindowFooter/>
            </div>    
        )
        
    }        
}


class WindowHeader extends React.Component{
    
    render(){
        return(
            <div className="window-header-dark">
                <NewLayout isNewLayoutExpand={this.props.isNewLayoutExpand} isCloseAutoSave={this.props.isCloseAutoSave}/>
                <span>レイアウト保存</span>
                <PairShow isPairShowExpand={this.props.isPairShowExpand}/>
                <ChartDrawSection isChartDrawExtend={this.props.isChartDrawExtend}/>
                <UserSection />
                <WindowEditSection 
                    isSettingExtend={this.props.isSettingExtend}
                    isWindowPrintExtend={this.props.isWindowPrintExtend}
                    isWindowHelpExtend={this.props.isWindowHelpExtend}
                />
            </div>
        )
    }
}
class NewLayout extends React.Component{
    render(){
        return(
            <div className="save-layout-dark">
                <a id="layoutName" className={this.props.isNewLayoutExpand ? "on" : ""}>あ</ a>
                <div className={this.props.isNewLayoutExpand ? "on" : ""}>
                    <div>レイアウト</div>
                    <ul>
                        <li>　新規作成</li>
                        <li>　開く</li>
                        <li>　保存</li>
                        <li>　別名で保存</li>
                        <li id="closeWindowAutoSave">　終了時自動保存<OnOffSlideBar isCloseAutoSave={this.props.isCloseAutoSave}/></li>
                    </ul>
                    <p></p>
                    <ul>
                        <li>新規レイアウト新規レイアウト新規レイアウト</li>
                        <li>新規レイアウト</li>
                        <li>新規レイアウト</li>
                        <li>新規レイアウト</li>
                        <li>新規レイアウト</li>
                        <li>新規レイアウト</li>
                    </ul>
                </div>
            </div>
        )
    }
}
class PairShow extends React.Component{
    render(){
        return(
            <div className="pair-show-dark">
                <a id="pairShowTitle" className={this.props.isPairShowExpand ? "on" : ""}>パネルの表示</ a>
                <div className={this.props.isPairShowExpand ? "on" : ""}>
                    <ul>
                        <li>チャートの追加</li>
                        <li>比較チャートの追加</li>
                        <li>プライスボード</li>
                        <li>ニュース</li>
                        <li>経済カレンダー</li>
                    </ul>
                    <p></p>
                    <ul>
                        <li>パネルを自動整列</li>
                    </ul>
                </div>
            </div>
        )
    }
}
class ChartDrawSection extends React.Component{
    render(){
        return(
            <div className="chart-draw-section-dark">
                <ul className="chart-draw-instant-dark">
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
                    <li><a className={this.props.isChartDrawExtend ? "on" : ""}><img src="img/draw/chart-expand.svg"  id="chartDrawExpand"/></a></li>
                </ul>
                <ul className={this.props.isChartDrawExtend ? "chart-draw-extend-dark on" : "chart-draw-extend-dark"}>
                    <li>ポインター<span>A</span></li>
                    <li>フィボナッチ・チャネル</li>
                    <li>削除<span>S</span></li>
                    <li>フィボナッチ・タイムゾーン</li>
                    <li>すべて削除<span>D</span></li>
                    <li>フィボナッチ・アーク</li>
                    <li>ホリゾンタルライン<span>Q</span></li>
                    <li>フィボナッチ・エクスパンション</li>
                    <li>バーティカルライン<span>W</span></li>
                    <li>ギャン・ライン</li>
                    <li>トレンドライン<span>E</span></li>
                    <li>ギャン・ファン</li>
                    <li>チャネルライン<span>R</span></li>
                    <li>ギャン・グリッド</li>
                    <li>サークル<span>1</span></li>
                    <li>エリプス</li>
                    <li>アングル<span>2</span></li>
                    <li>片矢印</li>
                    <li>トライアングル<span>3</span></li>
                    <li>双方矢印</li>
                    <li>レクタングル<span>4</span></li>
                    <li>線形回帰チャネル</li>
                    <li>五角形チャート<span>5</span></li>
                    <li>等距離幅チャネル</li>
                    <li>フィボナッチ・リトレースメント<span>6</span></li>
                    <li>標準幅チャネル</li>
                    <li>フィボナッチ・ファン<span>7</span></li>
                    <li>コメント挿入</li>
                </ul>
            </div>
        )
    }     
}
class UserSection extends React.Component{
    render(){
        return(
            <div className="user-section-dark">
                <a className="user-section-text1-dark">FX Speed</a>
                <a className="user-section-text2-dark">CFD Speed</a>
            </div>
        )
    }     
}
class WindowEditSection extends React.Component{
    render(){
        return(
            <div className="window-edit-section-dark">
                <ul className="window-edit-icon-dark">
                    <li><a><img src="img/windowEdit/menu-duplicate-appframe.svg"/></a></li>
                    <li><a><img src="img/windowEdit/menu-appframe-maxsize.svg"/></a></li>
                    <li><a><img src="img/windowEdit/menu-alert.svg"/></a></li>
                    <li><a className={this.props.isSettingExtend ? "on" : ""}><img src="img/windowEdit/menu-setting.svg" id="windowSetting"/></a></li>
                    <li><a className={this.props.isWindowPrintExtend ? "on" : ""}><img src="img/windowEdit/menu-print.svg" id="windowPrint"/></a></li>
                    <li><a className={this.props.isWindowHelpExtend ? "on" : ""}><img src="img/windowEdit/menu-help.svg" id="windowHelp"/></a></li>
                    
                </ul>
                <ul className={this.props.isSettingExtend ? "window-settings-expand-dark on" : "window-settings-expand-dark"}>
                    <li>チャート共通設定</li>
                    <li>ダークモード / ライトモード</li>
                </ul>
                <ul className={this.props.isWindowPrintExtend ? "window-print-expand-dark on" : "window-print-expand-dark"}>
                    <li>アクティブパネル・カラー</li>
                    <li>アクティブパネル・モノクロ</li>
                    <li>すべてのパネル・カラー</li>
                    <li>すべてのパネル・モノクロ</li>
                </ul>
                <ul className={this.props.isWindowHelpExtend ? "window-help-expand-dark on" : "window-help-expand-dark"}>
                    <li>操作マニュアル</li>
                    <li>テクニカル指標の説明</li>
                    <li>Platinumチャートについて</li>
                    <li>キーボードショートカット</li>
                </ul>
            </div>
        )
    }     
}
class OnOffSlideBar extends React.Component{
    render(){
        return(
            <div className="on-off-slide-bar">
                <div className={this.props.isCloseAutoSave ? "on-off-bar-box on": "on-off-bar-box off"}>
                    <div></div>
                    <p><span></span></p>
                </div>
            </div>
        )
    }
}


class WindowBody extends React.Component{
    render(){
        return(
            <div className="window-body"></div>
        )
    }
}


class WindowFooter extends React.Component{
    render(){
        return(
            <div className="window-footer-dark">
                <WindowFooterPanelList />
                <WindowFooterExtendBtn />
            </div>
        )
    }
}
class WindowFooterPanelList extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="window-footer-panel-dark">プライスボード</div>
                <span className="line-dark"></span>
                <div className="window-footer-panel-dark">ニュース</div>
                <span className="line-dark"></span>
                <div className="window-footer-panel-dark">経済カレンダー</div>
                <span className="line-dark"></span>
                <div className="window-footer-panel-dark">
                    <div>
                        <span>3</span>
                        <div className="window-footer-text-dark">チャート</div>
                    </div>
                    <WindowFooterChartExpandBox />
                </div>
                <span className="line-dark"></span>
                <div className="window-footer-panel-dark">
                    <span>4</span>
                    <div className="window-footer-text-dark">比較チャート</div>
                </div>
            </React.Fragment>
        )
        
    }
}
class WindowFooterExtendBtn extends React.Component{
    render(){
        return(
            <div className="window-footer-extend-btn-dark">
                <a><img src="img/footer/add-chart-dark.svg"/></a>
                <a><img src="img/footer/change-thema-dark.svg"/></a>
            </div>
        )
    }
}
class WindowFooterChartExpandBox extends React.Component{
    render(){
        return(
            <div className="footer-chart-expand">
                <ul>
                    <li>USD / JPY - 1時間足<img className="footer-chart-delete" src="img/footer/delete-item.svg"></img></li>
                    <li>日本225 - 1時間足<img className="footer-chart-delete" src="img/footer/delete-item.svg"></img></li>
                    <li>パークシャー・ハサウェイパークシャー・ハサウェイ<img className="footer-chart-delete" src="img/footer/delete-item.svg"></img></li>
                    <li>EUR / JPY - 1時間足<img className="footer-chart-delete" src="img/footer/delete-item.svg"></img></li>
                </ul>
            </div>
        )
    }
}


ReactDOM.render(
    <PlatinumWindow />,
    document.getElementById('root')
);