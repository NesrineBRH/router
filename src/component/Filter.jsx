import React,{ Component } from "react"
class Filter extends Component{
state={
values:0,
isRating:false,
valuesTitle:"",
isTitle:false,
};
render ()
{
return(
<div>
<h2>Find a Movie</h2>
<div className="Filtre">
<form onSubmit={this.props.onfiltername}>
<input type='text' onChange={this.props.onfiltername} placeholder="Search by Title" />
<button>Find the Movie by Title</button>
</form>
<div>{this.state.isTitle ? <p>{this.state.valuesTitle}</p>:null}</div>
<form onSubmit={this.props.onfilterrating}>
<input type='number' onChange={this.props.onfilterrating} placeholder="Search by Rating" />
<button>Find the Movie by Rating</button>
</form>
</div>
</div>
)

}

}

export default Filter;