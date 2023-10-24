let movies; // List of Discover movies from TMDB

describe("Filtering", () => {
    before(() => {
        // Get movies from TMDB and store them locally.
        cy.request(
            `https://api.themoviedb.org/3/discover/movie?api_key=${Cypress.env(
                "TMDB_KEY"
            )}&language=en-US&include_adult=false&include_video=false&page=1`
        )
            .its("body")
            .then((response) => {
                movies = response.results;
            });
    });
    beforeEach(() => {
        cy.visit("/");
    });

    describe("By movie title", () => {
        // TODO
    });
    describe("By movie genre", () => {
        // TODO
    });
    describe("Combined genre and title", () => {
        // TODO
    });
});