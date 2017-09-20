import React from "react";
export default class News extends React.Component{
    constructor(){
        super();
        this.state = {
            dataList:[]
        }
    }
    componentDidMount(){
        fetch("https://bird.ioliu.cn/joke/rand?type=text")
        .then(res=>{
            return res.json()
        }).then(res=>{
            this.setState({
                dataList : res.data
            })
        });
    }
    render(){
        const data = this.state.dataList.length > 0?this.state.dataList.map((item,index)=>(

                <li key={index}>
                    <a href={item.hashId}>{con}</a>
                </li>
            
        )):"暂时没有内容";
        return(
            <section>
                <div className="listview">
                    <ul>
                    {data}
                    </ul>
                </div>
            </section>
        )
    }
}
