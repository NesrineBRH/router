line 90
{/*<div className="filme">
<h3>{movie.Title}</h3>
<p>{movie.description}</p>
<img alt={movie.Title} src={movie.posterURL}/>
<p>Rating: {movie.Rating}</p>
</div> 
*/} 


<h2>Add Your Movie</h2>
<form onSubmit={this.handelSubmit}>
<input type="text"placeholder="Enter a Title of your Favorite Movie" value={this.state.Titlev}onChange={this.ajoutTitre}/>
<input type="text"placeholder="Enter a description" value={this.state.Descv}onChange={this.ajoutDesc}/>
<input type="text"placeholder="Enter a URL poster" value={this.state.URLv}onChange={this.ajoutURL}/>
<input type="number" max="5" placeholder="Enter a Rating of your Favorite Movie" value={this.state.Ratingv}onChange={this.ajoutRating}/>
<button>Add the Movie</button>
</form>
///
<h2>Find a Movie</h2>
<div className="Filtre">
<form >
<input type='text'  onChange={this.filtername} placeholder="Search by Title" />
<button>Find the Movie by Title</button>
{this.state.isTitle ? <p> {this.state.valuesTitle} </p> :null }
</form>
<form onSubmit={this.filterrating}>
<input type='number'  onChange={this.filterrating} placeholder="Search by Rating" />
<button>Find the Movie by Rating</button>
{this.state.isRating ? <h1> ok</h1> :null }

</form>
</div>