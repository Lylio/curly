import React from 'react';
import axios from 'axios';
class  App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      domains:[],
      id:0,
      name:'',
      ip:'',
      redirect:'',
      host:''
    }
  }
  componentDidMount(){
    axios.get("http://localhost:8080/api/")
    .then((res)=>{
      this.setState({
        domains:res.data,
        id:0,
        name:'',
        ip:'',
        redirect:'',
        host:''
      })
    })
  }
  submit(evenet,id){
    console.log(id)
    evenet.preventDefault();
    if(id===0){
      axios.post("http://localhost:8080/api/",{
        name:this.state.name,
        ip:this.state.ip,
        redirect:this.state.redirect,
        host:this.state.host
      }).then(()=>{
        this.componentDidMount();
      })
    }else{
      axios.put("http://localhost:8080/api/",{
        id:id,
        name:this.state.name,
        ip:this.state.ip,
        redirect:this.state.redirect,
        host:this.state.host
      }).then(()=>{
        this.componentDidMount();
      })
    }
  }
  delete(id){
    axios.delete("http://localhost:8080/api/"+id)
    .then(()=>{
      this.componentDidMount();
    })
  }
  edit(id){
    axios.get("http://localhost:8080/api/"+id)
    .then((res)=>{
      this.setState({
        id:res.data.id,
        name:res.data.name,
        ip:res.data.ip,
        redirect:res.data.redirect,
        host:res.data.host
      });
    })
  }
  render(){
    return (
      <div className="container">
         <div className="row">
         <div className="col s6">
                 <form onSubmit={(e)=>this.submit(e,this.state.id)}>
                 <div className="input-field col s12">
                    <i className="material-icons prefix">apps</i>
                    <input value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} type="text" id="autocomplete-input" className="autocomplete"  />
                    <label htmlFor="autocomplete-input">Enter Name</label>
                  </div>
                  <div className="input-field col s12">
                    <i className="material-icons prefix">cloud_queue</i>
                    <input value={this.state.ip} onChange={(e)=>this.setState({ip:e.target.value})} type="text" id="autocomplete-input" className="autocomplete"  />
                    <label htmlFor="autocomplete-input">Enter IP</label>
                  </div>
                   <div className="input-field col s12">
                     <i className="material-icons prefix">directions</i>
                     <input value={this.state.redirect} onChange={(e)=>this.setState({redirect:e.target.value})} type="text" id="autocomplete-input" className="autocomplete"  />
                     <label htmlFor="autocomplete-input">Enter Redirect URL</label>
                   </div>
                   <div className="input-field col s12">
                     <i className="material-icons prefix">signal_cellular_4_bar</i>
                     <input value={this.state.host} onChange={(e)=>this.setState({host:e.target.value})} type="text" id="autocomplete-input" className="autocomplete"  />
                     <label htmlFor="autocomplete-input">Enter Host</label>
                   </div>
                  <button className="btn waves-effect waves-light right" type="submit" name="action">Submit
                    <i className="material-icons right">send</i>
                  </button>
                 </form>
          </div>
          <div className="col s6">
          <table>
        <thead>
          <tr>
              <th>Name</th>
              <th>IP</th>
              <th>Redirect</th>
              <th>Host</th>
              <th>Edit</th>
              <th>Delete</th>
          </tr>
        </thead>

        <tbody>
            {
              this.state.domains.map(domain =>
                  <tr key={domain.id}>
                      <td>{domain.name}</td>
                      <td>{domain.ip}</td>
                      <td>{domain.redirect}</td>
                      <td>{domain.host}</td>
                      <td>
                        <button onClick={(e)=>this.edit(domain.id)} className="btn waves-effect waves-light" type="submit" name="action">
                          <i className="material-icons ">edit</i>
                        </button>
                      </td>
                      <td>
                        <button onClick={(e)=>this.delete(domain.id)} className="btn waves-effect waves-light " type="submit" name="action">
                          <i className="material-icons ">delete</i>
                        </button>
                      </td>
                  </tr>
                )
            }


        </tbody>
      </table>
          </div>
          </div>
      </div>
    );
  }
}

export default App;
