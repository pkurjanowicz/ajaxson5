var ajaxson5 = new Vue({
    el: '#mount-point',
    data: function () {
        return {
            tagValue: null,
            errorMessage: null,
            loading: false,
            imgSrc: null,
            validation: '',
        };
    },
    methods: {
        fetchGif: function() {
            if (this.validation === '5') {
                // get the user's input text from the DOM
            // var searchQuery = ""; // TODO should be e.g. "dance"

            // configure a few parameters to attach to our request
            let tagValue = this.tagValue
            var api_key = "dc6zaTOxFJmzC";
            var tag = "jackson 5 " + tagValue; // TODO should be e.g. "jackson 5 dance"
            console.log(tag)

            // TODO what do we want this URL to be?
            fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}`)
                .then(response => response.ok ? response.json() : Promise.reject(response))
                .then(results => {
                    // if the response comes back successfully, the code in here will execute.

                    console.log("we received a response!");
                    console.log(results);
                    this.imgSrc = results.data.image_url;
                    this.errorMessage = '';
                    this.loading = false;
                    // TODO
                    // 1. set the imgSrc value in our data to the GIF's image_url inside results
                    // 2. clear the error message and loading state (since our request just succeede)
                })
                .catch(err => {
                    // if something went wrong, the code in here will execute instead of the success function

                    this.loading = false;
                    this.errorMessage = 'Sorry, could not load GIF. Try again!';
                });
                this.loading = true;
            // TODO We've just made a request, so this is a good time 
            // set "loading = true"
            } else {
                this.errorMessage = 'Sorry, No GIFs for you';

            }
            
        },
    },
});