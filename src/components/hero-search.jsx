export default function SearchHero() {
  return (
    <>
      <section>
        <div className="hero">
          <h1 className="title">Discover Recipe & Delicious Food</h1>
          <div className="search-form">
            <input type="text" name="search" id="search" placeholder="Telur Gulung" />
            <button type="button" className="btn">
              Search
            </button>
          </div>
          <div className="btn-cta">
            <button type="button" className="new">
              New
            </button>
            <button type="menu" className="popular">
              Popular
            </button>
            <button type="button" className="vegetarian">
              Vegetarian
            </button>
            <button type="button" className="breakfast">
              Breakfast
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
