// getData();

async function getData(){
    let d = await ajaxData();
    
    console.log(d);
}

function ajaxData(){
    return new Promise(function(resolve,reject){
        $.ajax({
            method: 'get',
            url: 'http://localhost:3001',
            success: function(data){
                resolve(data);
            },
            error: function(){
                reject("");
            }
        })
    })  
}


let datas = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];

class FilterableProductTable extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            filterText: "",
            isStock: false
        }
    }

    handleChange(e){
        var text = e.target.value;
        if(text != null && text != ""){
            this.setState({
                filterText: text
            });
        }
    }

    handleClick(e){
        this.setState({
            isStock: e.target.checked
        });
    }

    render(){
        return(
            <div>
                <ProductCategoryRow 
                    filterText={this.state.filterText} 
                    isStock={this.state.isStock} 
                    onChange={(e) => {this.handleChange(e);}} 
                    onClick={(e) => {this.handleClick(e);}}
                />
                <ProductTable  filterText={this.state.filterText} isStock={this.state.isStock} list={this.props.list}/>
            </div>
        )
    }
}

class ProductCategoryRow extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <input type="text" onChange={(e) => {this.props.onChange(e)}}/>
                <div>
                    <input type="checkbox" onClick={(e) => {this.props.onClick(e)}}/>
                    <span>Only show products in stock</span>
                </div>
            </div>
        )
    }
}

class ProductTable extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div>
                <h2>
                    <span className="name">name</span>
                    <span className="values">price</span>
                </h2>
                <NumberList list={this.props.list} isStock={this.props.isStock} filterText={this.props.filterText}/>
           </div> 
        )
    }
}

class NumberList extends React.Component {
    constructor(props){
        super(props);
        this.catagory = "";
    }

    render() {
        const listItems = this.props.list.map(function(data, index, arr){
            let element = "";
            
            if(this.props.filterText != "" && ((this.props.isStock && data.stocked) || !this.props.isStock ) && data.name.indexOf(this.props.filterText) != -1){
                if(this.category != data.category) {
                    this.category = data.category;
                    
                    element = (<React.Fragment><h4>{this.category}</h4><ProductRow rowdata={data}/></React.Fragment>);
                }else{
                    element = (<ProductRow rowdata={data}/>);
                }
            }           

            return element;
        }, this);

        return (
            <div>{listItems}</div>
        )
    }
}

function ProductRow(props) {
    let data = props.rowdata;
    return (
        <div>
            <span className="name">{data.name}</span>
            <span className="values">{data.price}</span>
        </div>
    );
};

ReactDOM.render(
    <FilterableProductTable list={datas}/>,
    document.getElementById("root")
);