import './App.css';
import React, { Component } from 'react';
import TopBar from './components/TopBar';
import AllFunctionals from './components/AllFunctionals';
import DataTable from './components/DataTable';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      mainarticle: [],
      article: [],
      sync: true,
      Heading:"All Orders",
    }
  }
  async componentDidMount() {
    let url = "https://my-json-server.typicode.com/Ved-X/assignment/orders";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ article: parsedData });
    this.setState({ mainarticle: parsedData });
  }

  SortingData(data, value) {
    if (value === "order_id") {
      const sortedData = data.state.article.sort((x, y) => x.order_id < y.order_id ? -1 : 1);
      data.setState({ article: sortedData });
      data.setState({Heading:"Sorted By Order Id"});
    }
    else if (value === "customer") {
      const sortedData = data.state.article.sort((x, y) => x.customer < y.customer ? -1 : 1);
      data.setState({ article: sortedData });
      data.setState({Heading:"Sorted By Customer"});
    }
    else if (value === "country") {
      const sortedData = data.state.article.sort((x, y) => x.country < y.country ? -1 : 1);
      data.setState({ article: sortedData });
      data.setState({Heading:"Sorted By Country"});
    }
    else if (value === "address") {
      const sortedData = data.state.article.sort((x, y) => x.address < y.address ? -1 : 1);
      data.setState({ article: sortedData });
      data.setState({Heading:"Sorted By Address"});
    }
    else if (value === "product_title") {
      const sortedData = data.state.article.sort((x, y) => x.product_title < y.product_title ? -1 : 1);
      data.setState({ article: sortedData });
      data.setState({Heading:"Sorted By Product Title"});
    }
    else if (value === "product_description") {
      const sortedData = data.state.article.sort((x, y) => x.product_description < y.product_description ? -1 : 1);
      data.setState({ article: sortedData });
      data.setState({Heading:"Sorted By Product Description"});
    }
    else if (value === "date") {
      const sortedData = data.state.article.sort((x, y) => x.date < y.date ? -1 : 1);
      data.setState({ article: sortedData });
      data.setState({Heading:"Sorted By Date"});
    }
    else if (value === "status") {
      const sortedData = data.state.article.sort((x, y) => x.status < y.status ? -1 : 1);
      data.setState({ article: sortedData });
      data.setState({Heading:"Sorted By Status"});
    }
  }
  FilterData(ref,status){
    console.log(status)
      if (status==="All") {
          ref.setState({article:ref.state.mainarticle});
      }
      else if (status==="Completed") {
          const filteredData = ref.state.mainarticle.filter((data)=>{ return data.status===status });
          ref.setState({article:filteredData})
      }
      else if (status==="Delivered") {
          const filteredData = ref.state.mainarticle.filter((data)=>{ return data.status===status });
          ref.setState({article:filteredData})
      }
      else if (status==="Prepared") {
          const filteredData = ref.state.mainarticle.filter((data)=>{ return data.status===status });
          ref.setState({article:filteredData})
      }
      else if (status==="Prepone") {
          const filteredData = ref.state.mainarticle.filter((data)=>{ return data.status===status });
          ref.setState({article:filteredData})
      }
      else{
          const filteredData = ref.state.mainarticle.filter((data)=>{ return data.customer===status });
          ref.setState({article:filteredData})
      }
  }

  render() {

    return (
      <>
        <TopBar name={this.state.Heading} value={this.state.article.length} />
        <AllFunctionals FilterData={this.FilterData} Refthis={this} />
        <DataTable data={this.state.article} SortingData={this.SortingData} outthis={this} />
      </>
    )
  }
}
